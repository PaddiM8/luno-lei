function setUpTooltips() {
    document.addEventListener("mouseover", e => {
        const target = e.target;
        if (target.classList.contains("hoverable")) {
            target.querySelector(".tooltip").classList.remove("hidden");

            target.onmouseleave = () => {
                target.querySelector(".tooltip").classList.add("hidden");
            }
        }
    });
}

function createKind(kind, value) {
    return value
        ? `<span class="translation ${kind}"></span>`
        : "";
}

function createItem(kind, value) {
    if (!value) {
        return "";
    }

    const stringValue = value.map(x => {
        if (typeof x == "object") {
            const grammar = Array.isArray(x.grammar)
                ? x.grammar.join(", ")
                : x.grammar;

            return `<span class="hoverable">${x.name}<span class="tooltip hidden">${grammar}</span></span>`;
        } else {
            return `<span>${x}</span>`;
        }
    }).join(", ");

    return `
        <div class="translation">
            <span class="kind ${kind}"></span>
            <span class="english">${stringValue}</span>
        </div>
    `;
}

function createList(dictionary) {
    const options = {
        searchColumns: ["word", "noun", "verb", "descriptor", "other"],
        item: values => {
            return `
                <div class="item">
                    <h3 class="word">${values.word}</h3>
                    ${createItem("descriptor", values.descriptor)}
                    ${createItem("noun", values.noun)}
                    ${createItem("verb", values.verb)}
                    ${createItem("other", values.other)}
                </div>
            `;
        },
    };

    new List("words", options, dictionary);
}

function updateWordCount(dictionary) {
    let derivedCount = 0;
    for (const word of dictionary) {
        for (const value of Object.values(word))
            derivedCount += 1 + value.length;
    }

    const wordCountElement = document.getElementById("word-count");
    wordCountElement.textContent = `${dictionary.length} base words, ${derivedCount}+ derived words`;
}

const dictionary = await (await fetch("/dictionary.json")).json();
createList(dictionary);
updateWordCount(dictionary);
setUpTooltips();