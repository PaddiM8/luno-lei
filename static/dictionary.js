function createKind(kind, value) {
    return value
        ? `<span class="translation ${kind}"></span>`
        : "";
}

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
                <span class="hoverable ${classNames.join(" ")}" data-name="${x.name}">
                    <span class="text">${x.name}</span>${comma}
                    <span class="tooltip">${grammar.join(", ")}</span>
                </span>
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

function createList(dictionary, names) {
    const options = {
        searchColumns: [
            "word",
            "search"
        ],
        item: values => {
            return `
                <div class="item">
                    <h3 class="word">${values.word}</h3>
                    ${createItem("descriptor", values.descriptor, names)}
                    ${createItem("noun", values.noun, names)}
                    ${createItem("verb", values.verb, names)}
                    ${createItem("other", values.other, names)}
                </div>
            `;
        },
    };

    const list = new List("words", options);
    for (const values of dictionary) {
        const searchWords = Object.values(values).map(a =>
            Object.values(a).map(b =>
                typeof b == "object" ? b.name : b
            ).join(" ")
        ).join(" ");

        list.add({
            word: values.word,
            descriptor: values.descriptor,
            noun: values.noun,
            verb: values.verb,
            other: values.other,
            search: searchWords
        });
    }
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
const names = await (await fetch("/names.json")).json();
createList(dictionary, names);
updateWordCount(dictionary);