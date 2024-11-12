const tabsElement = document.getElementById("tabs");
const countsElement = document.getElementById("counts");
const flashcardElement = document.getElementById("flashcard");
const inputElement = document.getElementById("translation-input");
const metricsElement = document.querySelector("#metrics > tbody");
const flashcards = await (await fetch("/flashcards.json")).json();
const packs = {};
const learnedThreshold = 0.35;
const notKnownThreshold = 0.65;
let currentPackId = window.localStorage.getItem("currentPackId") ?? 1;
let currentFlashcardId = 0;
let selectedTab = null;
preparePacks();

const metrics = loadMetrics();
prepareMetrics();

flashcardElement.style.maxWidth = flashcardElement.parentElement.getBoundingClientRect().width + "px";
inputElement.addEventListener("keydown", handleTranslationSubmitted);

loadTabs();
nextCard();
updateMetrics();

function preparePacks() {
    for (const flashcard of flashcards) {
        packs[flashcard.pack] ??= {};
        packs[flashcard.pack][flashcard.id] = flashcard;
    }
}

function prepareMetrics() {
    for (const packId in packs) {
        for (const flashcardId in packs[packId]) {
            metrics[packId] ??= {};
            metrics[packId][flashcardId] ??= undefined;
        }
    }
}

function loadTabs() {
    let previousId = null;
    for (const packId in packs) {
        const tabElement = document.createElement("a");
        tabElement.href = "#";
        tabElement.classList.add("tab");
        if (currentPackId == packId) {
            tabElement.classList.add("selected");
            selectedTab = tabElement;
        }

        const isEnabled = previousId == null || Object.values(metrics[previousId])
            .every(weight => weight <= learnedThreshold);
        if (!isEnabled) {
            tabElement.setAttribute("disabled", "");
        }

        tabElement.textContent = packId;
        tabElement.addEventListener("click", e => {
            if (e.target.hasAttribute("disabled")) {
                return;
            }

            selectedTab.classList.remove("selected");
            e.target.classList.add("selected");
            currentPackId = packId;
            selectedTab = e.target;
            window.localStorage.setItem("currentPackId", packId)

            updateMetrics();
            nextCard();
        });

        tabsElement.appendChild(tabElement);
        previousId = packId;
    }
}

function getCurrentFlashcard() {
    return packs[currentPackId][currentFlashcardId];
}

function getCurrentPackMetrics() {
    return metrics[currentPackId];
}

function showAnswer() {
    const answer = getCurrentFlashcard().answers.join(", ");;
    if (answer.length >= 36) {
        flashcardElement.classList.add("font-size-2");
    } else if (answer.length >= 28) {
        flashcardElement.classList.add("font-size-1");
    }

    flashcardElement.querySelector(".title").textContent = getCurrentFlashcard().question;
    flashcardElement.querySelector(".content").textContent = answer;
}

function revealCard(callback) {
    flashcardElement.classList.add("rotate");

    const transitionLength = 100;
    setTimeout(() => {
        callback();
        setTimeout(() => {
            flashcardElement.classList.remove("rotate");
        }, transitionLength / 2);
    }, transitionLength);
}

function correctAnswer() {
    flashcardElement.classList.add("correct");

    const packMetrics = getCurrentPackMetrics();
    packMetrics[currentFlashcardId] ??= 0.5;
    packMetrics[currentFlashcardId] = Math.max(
        0.15,
        packMetrics[currentFlashcardId] - 0.08
    );

    revealCard(showAnswer);
    updateMetrics();
}

function incorrectAnswer() {
    flashcardElement.classList.add("incorrect");

    const packMetrics = getCurrentPackMetrics();
    packMetrics[currentFlashcardId] ??= 0.5;
    packMetrics[currentFlashcardId] = Math.min(
        2,
        packMetrics[currentFlashcardId] + 0.15
    );

    revealCard(showAnswer);
    updateMetrics();
}

function getWeightedRandomItem(dict) {
    const entries = Object.entries(dict);
    entries.sort((a, b) => b[1] - a[1]);

    const cumulativeWeights = [];
    for (let i = 0; i < entries.length; i += 1) {
        let weight = entries[i][1] || 0.5;
        weight = 1.2 * weight - 0.1;
        cumulativeWeights[i] = weight + (cumulativeWeights[i - 1] || 0);
    }

    const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
    const randomNumber = maxCumulativeWeight * Math.random();
    for (let index = 0; index < entries.length; index += 1) {
        if (cumulativeWeights[index] >= randomNumber) {
            return entries[index][0];
        }
    }

    return entries[0][0];
}

function nextCard() {
    flashcardElement.classList.remove("correct");
    flashcardElement.classList.remove("incorrect");
    flashcardElement.classList.remove("font-size-1");
    flashcardElement.classList.remove("font-size-2");

    currentFlashcardId = getWeightedRandomItem(getCurrentPackMetrics())
    if (!currentFlashcardId)
    {
        const keys = Object.keys(packs[currentPackId])
        const keyIndex = Math.floor(Math.random() * keys.length);
        currentFlashcardId = keys[keyIndex];
    }

    flashcardElement.querySelector(".title").textContent = "";
    flashcardElement.querySelector(".content").textContent = getCurrentFlashcard().question;
    inputElement.focus();
}

function saveMetrics() {
    for (const packId in metrics) {
        window.localStorage.setItem(
            `metrics-${packId}`,
            JSON.stringify(metrics[packId])
    );
    }
}

function loadMetrics() {
    const byPackId = {};
    for (const packId in packs) {
        byPackId[packId] = JSON.parse(window.localStorage.getItem(`metrics-${packId}`) ?? "{}");
    }

    return byPackId;
}

function updateCounts() {
    let notKnown = 0;
    let undetermined = Object.keys(packs[currentPackId]).length;
    let learned = 0;
    for (const weight of Object.values(getCurrentPackMetrics())) {
        if (weight <= learnedThreshold) {
            learned++;
            undetermined--;
        } else if (weight > notKnownThreshold) {
            notKnown++;
            undetermined--;
        }
    }

    countsElement.querySelector(".not-known .count").textContent = notKnown;
    countsElement.querySelector(".undetermined .count").textContent = undetermined;
    countsElement.querySelector(".learned .count").textContent = learned;
}

function updateNextTab() {
    const anyNotKnown = countsElement.querySelector(".not-known .count").textContent != "0";
    const anyUndetermined = countsElement.querySelector(".undetermined .count").textContent != "0";

    if (anyNotKnown || anyUndetermined) {
        selectedTab?.nextSibling.setAttribute("disabled", "");
    } else {
        selectedTab?.nextSibling.removeAttribute("disabled");
    }
}

function updateMetrics() {
    saveMetrics();
    updateCounts();
    updateNextTab();

    metricsElement.innerHTML = "";

    const sortedMetrics = Object.entries(getCurrentPackMetrics())
        .filter(x => x[1] !== undefined)
        .sort((a, b) => b[1] - a[1]);
    for (const [flashcardId, weight] of sortedMetrics) {
        let cssClass = "undetermined";
        if (weight <= learnedThreshold) {
            cssClass = "learned";
        } else if (weight > notKnownThreshold) {
            cssClass = "not-known";
        }

        metricsElement.insertAdjacentHTML("beforeend", `
            <tr>
                <td>${packs[currentPackId][flashcardId].question}</td>
                <td class="${cssClass}">${weight.toFixed(2)}</td>
            </tr>
        `);
    }
}

function handleTranslationSubmitted(e) {
    if (e.keyCode != 13) {
        return;
    }

    if (flashcardElement.classList.contains("correct") || flashcardElement.classList.contains("incorrect")) {
        revealCard(nextCard);
        return;
    }

    const correctAnswers = getCurrentFlashcard().answers;
    const hiddenCorrectAnswers = getCurrentFlashcard().hiddenAnswers;
    const givenAnswer = e.target.value
        .trim()
        .toLowerCase()
        .replace(",", "")
        .replace(".", "");
    if (correctAnswers.includes(givenAnswer) || hiddenCorrectAnswers?.includes(givenAnswer)) {
        correctAnswer();
    } else {
        incorrectAnswer();
    }

    e.target.value = "";
}