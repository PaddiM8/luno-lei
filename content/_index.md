+++
template = "index.html"
+++
## About

Luno Lei is a constructed language with a tiny dictionary
where grammar is used to give words a wide range of
meanings.

For example, the words for `small`, `huge`, `size`,
`measure`, `reduce`, etc. can be derived from the same root
word using simple grammatical rules.

### What it is
* The entire language could fit on a poster
* Optimised for getting by with a small vocabulary
* Has a rich and flexible grammar 
* A fun way to play around with language and finding
  creative ways of expressing oneself

### What it is not
* Not as simple as Toki Pona - being as easy as possible to learn is not a goal
* Often does not result in compact sentences
* Not meant for precise communication (sometimes it's mcuh easier to be precise than in English, but often harder)
* Not strict with word usage - if a sentence follows the
  grammatical rules and is comphrehended, it is completely valid

## Examples

Hover (tap on mobile) on different parts of the
words to see the meaning/purpose.

{{ sentence(
    parts=[["loma", "food"], ["n", "1", "verb"]],
    translation="I eat"
) }}
{{ sentence(
    parts=[["loma", "food"], ["paa", "3", "nd"]],
    translation="It is food"
) }}
{{ sentence(
    parts=[["ike", "sa"], ["pes,", "3", "nd"], [], ["ne", "not", "zero"], [], ["ikeve", "small"]],
    translation="It is big, not small"
) }}
{{ sentence(
    parts=[["mauto", "underground/ground/sky"], ["sva", "more", "noun"], ["mona", "dead being/living being"], ["sva", "more", "noun"], ["ye", "plural"], [], ["su", "person-plural"], [], ["go", "abstract"], ["vesi", "liquid"], ["vuola", "hole/bump"], ["ste", "less", "noun"], ["mi", "relative", "verb"], [], ["sita", "inside/core/outside"], ["sa", "more"], ["pi", "3", "verb"]],
    translation="The ducks (puddle birds) are outside<br>(the birds that puddle are outside)"
) }}
{{
    sentence(
        parts=[
            ["dei", "angry/-"],
            ["ve", "less"],
            [],
            ["vesi", "solid/liquid/(gas, air)"],
            ["sva", "more", "nd"],
            [],
            ["go", "abstract"],
            ["noka", "leg"],
            ["pu", "3", "verb", "past"],
            [],
            ["baume", "tree"],
            ["tat", "prolative"],
            ["wo", "inter"],
            [],
            ["baume", "tree"],
            ["sa", "more"],
            ["ti", "locative"],
            [],
            ["ay", "and"],
            [],
            ["mona", "dead being/(living being, animal)"],
            ["sva", "more", "nd"],
            ["ye", "plural"],
            [],
            ["koeta", "try"],
            ["pu", "3", "verb", "past"],
            [],
            ["mue", "dangerous/safe"],
            ["sa", "more"],
            [],
            ["kotu", "location, place of stay"],
            ["t", "accusative"],
            [],
            ["aula", "eye, see"],
            ["slu", "passive"]
        ],
        translation="The strong winds breezed through the trees in the forest and the animals tried to find a safer location"
    )
}}
{{ sentence(
    parts=[
        ["mou", "scared/secure"],
        ["ve", "less"],
        ["n", "1", "verb"],
        [],
        ["lanka", "thread"],
        ["mona", "dead thing/living thing"],
        ["sva", "more", "noun"],
        ["tae", "diminutive"],
        [],
        ["(ato", "eight"],
        ["noka", "foot"],
        ["da)", "dative"]
    ],
    translation="I am scared of spiders"
)
}}