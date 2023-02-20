+++
title = "Grammar"
template = "base.html"
+++
## Word Order

The word order is generally free, but words may be placed
earlier in a sentence for emphasis. Adjectives go either
right before or after the noun they describe.

## Verb Conjugation

With verb conjugation, the verb form of a word
is used. For example, `noka` (foot) as a verb
becomes `to foot` or `to walk`.

Relative person can be translated to *who*, *whom*,
*whose*, *which*, *that*, etc. in English.

It is possible to verbify nouns with cases applied
to them. For example, `lavotin` (lative) means `I get`.

### Singular
| Tense/Person | 1st     | 2nd     | 3rd     | Relative |
| ------------ | ------- | ------- | ------- | -------- |
| Past         | -(i)nu  | -(i)su  | -(i)pu  | -(i)mu   |
| Present      | -(i)n   | -(i)s   | -(i)pi  | -(i)m    |
| Future       | -(i)nas | -(i)sas | -(i)pas | -(i)mas  |

#### Examples
{{ sentence(
    parts=[["noka", "foot"], ["n", "1", "verb"]],
    translation="I walk"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["s", "2", "verb"]],
    translation="You walk"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["nu", "1", "verb", "past"]],
    translation="I walked"
) }}

### Plural

Plural is added to a conjugation to express
a plurality in the person. This would turn `I` into
`we`, or 3rd person singular into `they`.

<span class="particle">su</span>

#### Examples
<p></p> <!-- A <p> tag was inserted for the example above but not here for some reason -->
{{ sentence(
    parts=[["su", "person-plural"], [], ["oni", "thing/act"], ["naso", "1", "future", "verb"]],
    translation="We will act"
) }}

## Noun & Descriptor Conjugation

Noun and descriptor conjugation is used when a word
should not be verbified. Instead, it expresses *state*.
For example, `ikeve` (small) conjugated in this way
results in `to be small`. With verb conjugation, it
would instead refer to "to decrease`.

### Singular
| Tense/Person | 1st     | 2nd     | 3rd     | Relative |
| ------------ | ------- | ------- | ------- | -------- |
| Past         | -(i)not | -(i)sot | -(i)pot | -(i)mot  |
| Present      | -(i)naa | -(i)saa | -(i)paa | -(i)mes  |
| Future       | -(i)now | -(i)sow | -(i)pow | -(i)mow  |

#### Examples
{{ sentence(
    parts=[["ike", "moderately sized"], ["sa", "more"], ["n", "1", "verb"]],
    translation="I am big"
) }}
{{ sentence(
    parts=[["ike", "moderately sized"], ["sa", "more"], ["s", "2", "verb"]],
    translation="You are big"
) }}
{{ sentence(
    parts=[["ike", "moderately sized"], ["sa", "more"], ["nu", "1", "verb", "past"]],
    translation="I were big"
) }}

### Plural

Plural is added to a conjugation to express
a plurality in the person. This would turn `I` into
`we`, or 3rd person singular into `they`.

<span class="particle">lu</span>

## Number

Plural in this form is used to express plurality
for words themself. For example, `object` (oni)
into `objects` (oniye). When applied to verbs,
it refers to something being done several times.

| Kind | Plural |
| ---- | ------ |
| Noun | -ye    |
| Verb | -yoa   |

#### Examples
{{ sentence(
    parts=[["lavo", "hand"], ["ye", "plural"]]
    translation="Hands"
) }}
{{ sentence(
    parts=[["lavo", "hand"], ["yoa", "verb-plural"]]
    translation="To hold several times"
) }}

## Comparison

Comparative and superlative are added to descriptors.

| Comparative | Superlative |
| ----------- | ----------- |
| -vo         | -vie        |

#### Examples
{{ sentence(
    parts=[["ike", "moderately sized"], ["sa", "more"], ["vo", "comparative"]]
    translation="Bigger"
) }}
{{ sentence(
    parts=[["ike", "moderately sized"], ["sa", "more"], ["vie", "superlative"]]
    translation="Biggest"
) }}

## Questions

<span class="particle">esa</span>

The `esa` article is used for questions. It can be placed
anywhere in a sentence, but is generally placed at the start
or end of a sentence.

## Cases

Unlike in some languages, accusative does not indicate
movement towards the direct object. Instead, lative is
used to express movement. Partitive is similar to
accusative but also expresses that something is
incomplete, for example a book only being partly read.
Semblative expressses some form of similarity between
objects or concepts.

Partitive is normally optional and is used when clarifying
completeness is relevant.

| Case            | Suffix | Uses                      |
| --------------- | ------ | ------------------------- |
| Nominative      | -      | -                         |
| Genitive        | -lao   | possession                |
| Accusative      | -t     | direct object             |
| Lative          | -tu    | motion towards, for       |
| Ablative        | -tol   | motion from               |
| Prolative       | -tat   | via, through, along       |
| Partitive       | -tia   | direct object, incomplete |
| Dative          | -da    | indirect object           |
| Locative/Essive | -li    | at (location, time)       |
| Semblative      | -kus   | similarity                |

#### Examples
{{ sentence(
    parts=[["vilea", "plant"], [], ["eni", "-"], ["n", "1", "verb"], ["lao", "genitive"]]
    translation="My plant"
) }}
{{ sentence(
    parts=[["lavo", "hand"], ["n", "1", "verb"], [], ["vilea", "plant"], ["t", "accusative"]]
    translation="I have a plant"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["n", "1", "verb"], [], ["eni", "-"], ["saa", "2", "nd"], ["tu", "lative"]]
    translation="I walk to you"
) }}
{{ sentence(
    parts=[["eni", "-"], ["paa", "3", "nd"], [], ["eni", "-"], ["saa", "2", "nd"], ["tu", "lative"]]
    translation="It is for you"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["n", "1", "verb"], [], ["eni", "-"], ["saa", "2", "nd"], ["tol", "ablative"]]
    translation="I walk from you"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["s", "2", "verb"], [], ["vuola", "hole/bump"], ["ste", "less", "noun"], ["tat", "prolative"]]
    translation="You walk through the hole"
) }}
{{ sentence(
    parts=[["lipo", "note"], ["sva", "more", "noun"], ["tia", "partitive"], ["n", "1", "verb"]]
    translation="I read part of a book"
) }}
{{ sentence(
    parts=[["muni", "mouth"], ["n", "1", "verb"], [], ["eni", "-"], ["saa", "2", "nd"], ["da", "dative"]]
    translation="I talk to you"
) }}
{{ sentence(
    parts=[["kotu", "house"], ["sa", "more"], ["li", "locative"], ["n", "1", "verb"]]
    translation="I am at home"
) }}
{{ sentence(
    parts=[["valo", "dark/bright"], ["ve", "less"], ["pi", "3", "verb"], [], ["mea", "early/late"], ["sa", "more"], ["viko", "week"], ["ste", "less", "noun"], ["kus", "semblative"]]
    translation="I am at home"
) }}

### Stacking cases

Stacking cases are added after regular cases. For example,
the `In-` case could be combined with locative to create
inessive, `-lie`.

| Case     | Suffix | Uses                |
| -------- | ------ | ------------------- |
| In-      | -e     | in, inside          |
| Super-   | -u     | over, above, on     |
| Sub-     | -os    | under               |
| Behind   | -st    | behind              |
| In front | -se    | in front            |
| Adjacent | -at    | adjacent, nearby    |
| Inter-   | -wo    | between, in-between |

#### Examples
{{ sentence(
    parts=[["kotu", "house"], ["li", "locative"], ["e", "in"], ["n", "1", "verb"]]
    translation="I am inside a house"
) }}

## Nil Word

The nil word (`eni`) can be used to extract the pure meaning
of grammatical features. For example, in order to say just `in`,
one could say `enilie`.

### Pronouns

Pronouns are created by applying a conjugation suffix to the
nil word.

#### Examples
{{ sentence(
    parts=[["eni", "-"], ["naa", "1", "nd"], ["t", "accusative"]]
    translation="Me"
) }}
{{ sentence(
    parts=[["eni", "-"], ["paa", "3", "nd"], [], ["eni", "-"], ["saa", "2", "nd"], ["kus", "semblative"]]
    translation="It is similar to you"
) }}

## Voices

### Passive

<span class="suffix">-(i)slu</span>

The passive voice is used as an unspecified person. It can also be used
to verbify a word without specifying a person (eg. leg -> to walk).

#### Examples
{{ sentence(
    parts=[["kia", "word (written)"], ["slu", "passive"]]
    translation="One reads"
) }}
{{ sentence(
    parts=[["pita", "dislike/like"], ["n", "1", "verb"], [], ["noka", "foot"], ["slu", "passive"]]
    translation="I like to walk"
) }}

## Moods

### Imperative/Optative

Expresses a demand or wish.

|                     | Suffix   |
| ------------------- | -------- |
| Verbs               | -(i)stu  |
| Nouns & Descriptors | -(i)stoa |

#### Examples
{{ sentence(
    parts=[["lipo", "note"], ["sva", "more", "noun"], ["stu", "imperative"]]
    translation="Read a book"
) }}
{{ sentence(
    parts=[["mou", "sa"], ["stoa", "imperative"]]
    translation="Be calm"
) }}
{{ sentence(
    parts=[["lipo", "note"], ["sva", "more", "noun"], ["stu", "imperative"], ["s", "2", "verb"]]
    translation="You should read a book"
) }}

## Morphology Syntax

Suffix priority:

1. Gradiency
2. Intensifier/diminutive
3. Number
3. Case
4. Mood
5. Voice
6. Conjugation