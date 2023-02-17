+++
title = "Grammar"
template = "base.html"
+++
## Verb conjugation

With verb conjugation, the verb form of a word
is used. For example, `noka` (foot) as a verb
becomes `to foot` or `to walk`.

Relative person can be translated to *who*, *whom*,
*whose*, *which*, *that*, etc. in English.

### Singular
| Tense/Person | 1st   | 2nd   | 3rd   | Relative |
| ------------ | ----- | ----- | ----- | -------- |
| Past         | -nu   | -su   | -pu   | -mu      |
| Present      | -n(i) | -s(i) | -pi   | -mi      |
| Future       | -naso | -saso | -paso | -maso    |

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

## Noun & Descriptor conjugation

Noun and descriptor conjugation is used when a word
should not be verbified. Instead, it expresses *state*.
For example, `ikeve` (small) conjugated in this way
results in `to be small`. With verb conjugation, it
would instead refer to "to decrease`.

### Singular
| Tense/Person | 1st   | 2nd   | 3rd   | Relative |
| ------------ | ----- | ----- | ----- | -------- |
| Past         | -noa  | -soa  | -poa  | -moa     |
| Present      | -neo  | -seo  | -peo  | -meo     |
| Future       | -nowi | -sowi | -powi | -mowi    |

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

## Possession

There are different ways to express possession.
However, normally, possession is expressed
with the word "lave` combined with the inessive
case.

#### Examples
{{ sentence(
    parts=[["lavo", "hand"], ["ti", "lative"], ["e", "in"], ["n", "1", "verb"], [], ["kotu", "house"], ["sa", "more"], ["t", "accusative"]]
    translation="I have a home"
) }}
{{ sentence(
    parts=[["kotu", "house"], ["sa", "more"], [], ["lavo"], ["ti", "lative"], ["e", "in"], ["n", "1", "verb"]]
    translation="My home (note the lack of accusative)"
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
| Accusative      | -t     | direct object             |
| Lative          | -tu    | motion towards            |
| Ablative        | -tol   | motion from               |
| Prolative       | -tat   | via, through, along       |
| Partitive       | -tia   | direct object, incomplete |
| Dative          | -da    | indirect object           |
| Locative/Essive | -li    | at (location, time)       |
| Semblative      | -kus   | similarity                |

#### Examples
{{ sentence(
    parts=[["lavo", "hand"], ["n", "1", "verb"], [], ["vilea", "plant"], ["t", "accusative"]]
    translation="I have a plant"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["n", "1", "verb"], [], ["eni", "-"], ["si", "2", "verb"], ["tu", "lative"]]
    translation="I walk to you"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["n", "1", "verb"], [], ["eni", "-"], ["si", "2", "verb"], ["tol", "ablative"]]
    translation="I walk from you"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["s", "2", "verb"], [], ["vuola", "hole/bump"], ["ve", "less"], ["tat", "prolative"]]
    translation="You walk through the hole"
) }}
{{ sentence(
    parts=[["lipo", "note"], ["sa", "more"], ["tia", "partitive"], ["n", "1", "verb"]]
    translation="I read part of a book"
) }}
{{ sentence(
    parts=[["muni", "mouth"], ["n", "1", "verb"], [], ["eni", "-"], ["si", "2", "verb"], ["da", "dative"]]
    translation="I talk to you"
) }}
{{ sentence(
    parts=[["kotu", "house"], ["sa", "more"], ["li", "locative"], ["n", "1", "verb"]]
    translation="I am at home"
) }}
{{ sentence(
    parts=[["valo", "dark/bright"], ["ve", "less"], ["pi", "3", "verb"], [], ["mea", "early/late"], ["sa", "more"], ["viko", "week"], ["ve", "less"], ["kus", "semblative"]]
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

## Nil word

The nil word (`eni`) can be used to extract the pure meaning
of grammatical features. For example, in order to say just `in`,
one could say `enilie`.

### Pronouns

Pronouns are created by applying a conjugation suffix to the
nil word.

#### Examples
{{ sentence(
    parts=[["eni", "-"], ["ni", "1", "verb"], ["t", "accusative"]]
    translation="Me"
) }}
{{ sentence(
    parts=[["eni", "-"], ["pi", "3", "verb"], [], ["eni", "-"], ["si", "2", "verb"], ["kus", "semblative"]]
    translation="It is similar to you"
) }}

## Voices

### Passive

<span class="suffix">-slu</span>

The passive voice is used as a "zero person". It can also be used
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

|                     | Suffix |
| ------------------- | ------ |
| Verbs               | -stu   |
| Nouns & Descriptors | -stoa  |

#### Examples
{{ sentence(
    parts=[["lipo", "note"], ["sa", "more"], ["stu", "imperative"]]
    translation="Read a book"
) }}
{{ sentence(
    parts=[["mou", "sa"], ["stoa", "imperative"]]
    translation="Be calm"
) }}
{{ sentence(
    parts=[["lipo", "note"], ["sa", "more"], ["stu", "imperative"], ["s", "2", "verb"]]
    translation="You should read a book"
) }}

## Morphology syntax

Suffix priority:

1. Gradiency
2. Intensifier/diminutive
3. Number
4. Mood
5. Voice
6. Conjugation
7. Case

### Compounds

Words should be compounded when appropriate (WIP).