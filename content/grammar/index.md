+++
title = "Grammar"
template = "base.html"
+++
## Word Order

The word order is mostly free, except for with descriptors
and words with genitive.

### Descriptors
A descriptor is either an adjective or an adverb. Adjectives
go before the word they are describing, while adverbs go before
the word they are describing.

### Genitive
Words with genitive go after the noun they are in relation to.

## Verb Conjugation

With verb conjugation, the verb form of a word
is used. For example, `noka` (foot) as a verb
becomes `to foot` or `to walk`.

Relative person can be translated to `who`, `whom`,
`whose`, `which`, `that`, etc. in English.

It is possible to verbify nouns with cases applied
to them. For example, `lavotun` (lative) means `I get`.

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
{{ sentence(
    parts=[
        ["ma", "dead being", "...", "living being"],
        ["sa", "more"],
        [],
        ["noka", "foot"],
        ["mu", "rel", "verb", "past"]
    ],
    translation="The animal that walked"
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
would instead refer to `to decrease`.

### Singular
| Tense/Person | 1st     | 2nd     | 3rd     | Relative |
| ------------ | ------- | ------- | ------- | -------- |
| Past         | -(i)not | -(i)sot | -(i)pot | -(i)mot  |
| Present      | -(i)naa | -(i)saa | -(i)paa | -(i)mes  |
| Future       | -(i)now | -(i)sow | -(i)pow | -(i)mow  |

#### Examples
{{ sentence(
    parts=[["ike", "moderately sized"], ["sa", "more"], ["naa", "1", "noun"]],
    translation="I am big"
) }}
{{ sentence(
    parts=[["ike", "moderately sized"], ["sa", "more"], ["saa", "2", "noun"]],
    translation="You are big"
) }}
{{ sentence(
    parts=[["ike", "moderately sized"], ["sa", "more"], ["not", "1", "noun", "past"]],
    translation="I was big"
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

### List of Cases

| Case            | Suffix | Uses                             |
| --------------- | ------ | -------------------------------- |
| Nominative      | -      | -                                |
| Accusative      | -t     | direct object                    |
| Dative          | -da    | indirect object, together with   |
| Genitive        | -di    | possession                       |
| Lative          | -tu    | towards, turn into, for, until   |
| Ablative        | -tol   | from                             |
| Prolative       | -tat   | via, through, along, by means of |
| Partitive       | -tia   | direct object, incomplete        |
| Locative/Essive | -li    | at (location, time)              |
| Abessive        | -doy   | without                          |
| Semblative      | -dea   | similarity                       |
| Topical         | -ba    | about                            |

### Accusative

<span class="suffix">-t</span>

Accusative is used to mark a word as a
[direct object](https://en.wikipedia.org/wiki/Accusative_case).
The direct object is the part of a sentence that the verb is acted
on. Unlike in some languages, it does *not* indicate movement.
Instead, the lative case is used to express movement towards
the direct object.

#### Examples
{{ sentence(
    parts=[["lavo", "hand"], ["n", "1", "verb"], [], ["vile", "plant"], ["t", "accusative"]]
    translation="I have a plant"
) }}

### Dative

<span class="suffix">-da</span>

Dative is used to mark a word as an
[indirect object](https://en.wikipedia.org/wiki/Dative_case).
The indirect object is the recipient/beneficiary of an action.

#### Examples
{{ sentence(
    parts=[["muni", "mouth"], ["n", "1", "verb"], [], ["eni", "-"], ["saa", "2", "nd"], ["da", "dative"]]
    translation="I talk to you"
) }}

### Genitive

<span class="suffix">-di</span>

Genitive marks possession of another noun (the possession).
By default, it marks a word as a nominative. This makes it
necessary to add another case, such as accusative or dative,
in cases where the word is not the subject of a sentence.

#### Examples
{{ sentence(
    parts=[["vilea", "plant"], [], ["eni", "-"], ["n", "1", "verb"], ["di", "genitive"]]
    translation="My plant"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["n", "1", "verb"], [], ["kotu", "house"], ["da", "dative"], [], ["eni", "-"], ["pi", "3", "verb"], ["di", "genitive"], ["da", "dative"]]
    translation="I walk to his house",
    note="Since the genitive word is also an indirect object, the dative suffix is stacked on top"
) }}

### Lative, Ablative & Prolative

Lative, ablative and prolative mark a word as a direct object,
but also indicate various types of abstract or concrete movement.
The lative case indicates movement *towards* the direct object
while ablative indicates movement *from* it.  Prolative is used
to express that an action is done by means of/via/through the
direct object.

#### Examples
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
    parts=[["noka", "foot"], ["s", "2", "verb"], [], ["vola", "hole/bump"], ["ste", "less", "noun"], ["tat", "prolative"]]
    translation="You walk through the hole"
) }}

### Partitive

<span class="suffix">-tia</span>

Partitive is similar to accusative but also expresses that
something is incomplete, for example a book only being
partly read. It is normally optional and is used when
clarifying completeness is relevant.

#### Examples
{{ sentence(
    parts=[["lipo", "note"], ["sva", "more", "noun"], ["tia", "partitive"], ["n", "1", "verb"]]
    translation="I read part of a book"
) }}

### Locative/Essive

Locative indicates location of the subject of a sentence.
It is also used to mark a point in time.

<span class="suffix">-li</span>

#### Examples
{{ sentence(
    parts=[["kotu", "house"], ["sva", "more"], ["li", "locative"], ["n", "1", "verb"]]
    translation="I am at home"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["nas", "1", "verb", "future"], [], ["go", "abstract"], ["mio", "before", "now", "later"], ["li", "locative"], [], ["tu", "two"], ["li", "locative"]]
    translation="I will walk at 2 o'clock"
) }}

### Abessive

Abessive expresses an absence of something.

<span class="suffix">-doy</span>

#### Examples
{{ sentence(
    parts=[["noka", "foot"], ["n", "1", "verb"], [], ["eni", "-"], ["saa", "2", "noun"], ["doy", "abessive"]]
    translation="I walk without you"
) }}

### Semblative

<span class="suffix">-dea</span>

Semblative expressses some form of similarity between
objects or concepts.

#### Examples
{{ sentence(
    parts=[["valo", "dark/bright"], ["ve", "less"], ["pi", "3", "verb"], [], ["mea", "early/late"], ["sa", "more"], ["viko", "week"], ["ste", "less", "noun"], ["dea", "semblative"]]
    translation="It is dark like at night"
) }}

### Additional Stacking Cases

These cases can only be added after regular cases. For example,
the `In-` case could be combined with locative to create
inessive, `-lie`, meaning *inside*.

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
    parts=[["eni", "-"], ["paa", "3", "nd"], [], ["eni", "-"], ["saa", "2", "nd"], ["dea", "semblative"]]
    translation="It is similar to you"
) }}

## Voices

### Passive

| Kind            | Past | Present | Future |
| --------------- | ---- | ------- | ------ |
| Verb            | -sla | -slu    | -slei  |
| Noun/Descriptor | -sto | -sti    | -stei  |

The passive voice is used as an unspecified person. It can also be used
to verbify a word without specifying a person (eg. leg -> to walk), in which
case it turns the word into a noun.
Although slightly different, adding the passive suffix to a word can be compared to adding `-ing` to
a word in English.

#### Examples
{{ sentence(
    parts=[["kia", "word (written)"], ["slu", "passive"]]
    translation="One reads"
) }}
{{ sentence(
    parts=[["pita", "dislike/like"], ["n", "1", "verb"], [], ["noka", "foot"], ["slu", "passive"], ["t", "accusative"]]
    translation="I like to walk"
) }}
{{ sentence(
    parts=[
        ["usi", "old", "...", "new"],
        ["sa", "more"],
        ["sla", "passive", "past"]
    ]
    translation="Was built"
) }}

## Moods

### Imperative/Optative

Expresses a demand or wish.

|                     | Suffix   |
| ------------------- | -------- |
| Verbs               | -(i)stu  |
| Nouns & Descriptors | -(i)stoi |

#### Examples
{{ sentence(
    parts=[["lipo", "note"], ["sva", "more", "noun"], ["stu", "imperative"]]
    translation="Read a book"
) }}
{{ sentence(
    parts=[["mou", "stressed/.../calm"], ["sa", "more"], ["stoi", "imperative"]]
    translation="Be calm"
) }}

### Conditional

Expresses a proposal dependent on some condition.

| Suffix  |
| ------- |
| -(i)ksi |

{{ sentence(
    parts=[["noka", "foot"], ["ksi", "conditional"], ["n", "1", "noun"], ["...", "..."]]
    translation="I would walk..."
) }}
{{ sentence(
    parts=[["mou", "stressed/.../calm"], ["sa", "more"], ["ksi", "conditional"], ["naa", "1", "noun"], ["...", "..."]]
    translation="I would be calm..."
) }}

## Subordinate Clause

The word `eta` can be used at the start of a subordinate
clause similar to the word `that` in English.

#### Examples
{{ sentence(
    parts=[
        ["pita", "dislike", "...", "like"],
        ["sa", "more"],
        ["n", "1", "verb"],
        [],
        ["eta", "that"],
        [],
        ["kotu", "house"],
        [],
        ["dio", "red"],
        ["paa", "3", "nd"]
    ]
    translation="I like that the house is red"
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
