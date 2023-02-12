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

const dictionary = await (await fetch("/dictionary.json")).json();
new List("words", options, dictionary);

document.addEventListener("mouseover", e => {
    const target = e.target;
    if (target.classList.contains("hoverable")) {
        target.querySelector(".tooltip").classList.remove("hidden");

        target.onmouseleave = () => {
            target.querySelector(".tooltip").classList.add("hidden");
        }
    }
});