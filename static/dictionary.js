function createItem(kind, value, names) {
    if (!value) {
        return "";
    }

    if (typeof value != "object") value = [value];
    const stringValue = value.map((x, i) => {
        // Include comma if not last item
        const comma = i == value.length - 1
            ? ""
            : "&#44;";

        if (typeof x == "object") {
            const grammar = Array.isArray(x.grammar)
                ? x.grammar
                : [x.grammar];

            const classNames = [];
            const grammarNames = [];
            for (const grammarRule of grammar) {
                if (grammarRule in names) {
                    const nameInfo = names[grammarRule];
                    if (nameInfo.class) {
                        classNames.push(nameInfo.class);
                    }

                    grammarNames.push(nameInfo.full);
                }
            }

            return `
                <span class="hoverable ${classNames.join(" ")}"
                      data-name="${x.name}"
                      data-tooltip="${grammar.join("&#13;&#10;")}">${x.name}</span>${comma}
            `;
        } else {
            return `<span>${x}</span>${comma}`;
        }
    }).join(" ");

    return `
        <div class="translation">
            <span class="kind ${kind}"></span>
            <span class="english">${stringValue}</span>
        </div>
    `;
}

function createList(containerElement, dictionary, names) {
    containerElement.innerHTML = "";

    for (const item of dictionary) {
        containerElement.insertAdjacentHTML("beforeend", `
            <div class="item">
                <h3 class="word">${item.word}</h3>
                ${createItem("descriptor", item.descriptor, names)}
                ${createItem("noun", item.noun, names)}
                ${createItem("verb", item.verb, names)}
                ${createItem("other", item.other, names)}
            </div>
        `);
    }
}

function updateWordCount(dictionary) {
    let derivedCount = 0;
    for (const word of dictionary) {
        for (const value of Object.values(word)) {
            const length = Array.isArray(value)
                ? value.length
                : 0;
            derivedCount += 1 + length;
        }
    }

    const wordCountElement = document.getElementById("word-count");
    wordCountElement.textContent = `${dictionary.length} base words, ${derivedCount}+ derived words`;
}

function search(containerElement, dictionary, names, text) {
    const fuse = new Fuse(dictionary, {
        keys: [
            {
                name: "word",
                weight: 5
            },
            "descriptor",
            "descriptor.name",
            "noun",
            "noun.name",
            "verb",
            "verb.name",
            "other",
            "other.name",
        ]
    });

    const result = text
        ? fuse.search(text).map(x => x.item)
        : dictionary;
    createList(containerElement, result, names);
}

const containerElement = document.getElementById("word-list");
const dictionary = await (await fetch("/dictionary.json")).json();
const names = await (await fetch("/names.json")).json();
createList(containerElement, dictionary, names);
updateWordCount(dictionary);

const searchElement = document.getElementById("search");
searchElement.addEventListener("input", e => search(containerElement, dictionary, names, e.target.value));