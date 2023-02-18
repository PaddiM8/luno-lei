+++
title = "Word Building"
template = "base.html"
+++
## Gradiency

Gradiency is a way to change the meaning of a word.
Words in the dictionary are written in neutral form.
Words in the neutral form often have no English translation
and are somehwere in-between the `less` form and the `more`
form. The `more` form could for example imply a larger
size, more activity, more effort, more notable, more
beneficial to the subject, and so on, depending on
context.

| Kind       | Less | Neutral | More |
| ---------- | ---- | ------- | ---- |
| Noun       | -ste | -       | -sva |
| Descriptor | -ve  | -       | -sa  |

#### Examples
{{ sentence(
    parts=[["suto", "sour/sweet"]]
    translation="Neither sweet nor sour"
) }}
{{ sentence(
    parts=[["suto", "sour/sweet"], ["ve", "less"]]
    translation="Sour"
) }}
{{ sentence(
    parts=[["suto", "sour/sweet"], ["sa", "more"]]
    translation="Sweet"
) }}
{{ sentence(
    parts=[["lavo", "hand"]]
    translation="Hand"
) }}
{{ sentence(
    parts=[["lavo", "hand"], ["ste", "less", "noun"]]
    translation="Finger"
) }}
{{ sentence(
    parts=[["lavo", "hand"], ["sva", "more", "noun"]]
    translation="Arm"
) }}

## Intensifiers & Diminutives

Intensifiers and diminutives are used to express
either more or less intensity regarding a word. 
Unlike gradiency, this does not change the core
meaning of a word. However, in some cases, the
difference between, for example, the `more` form
and the `intensifier` form of a word may be similar.

Often, intensifiers and diminutives are stacked
on top of gradiency suffixes as a way to be more
specific. For example, applying both the "more`
form and the diminutive form to `varma` (lukewarm)
results in `slightly warm`. In this example,
gradiency is used to express warmth, while the
diminutive form tones it down.

| Kind       | Diminutive | Intensifier |
| ---------- | ---------- | ----------- |
| Noun       | -tae       | -tuo        |
| Verb       | -tue       | -teo        |
| Descriptor | -toe       | -tao        |

#### Examples
{{ sentence(
    parts=[["varma", "lukewarm"], ["sa", "more"], ["toe", "diminutive"]]
    translation="Slightly warm"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["n", "1", "verb"]]
    translation="I walk"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["sva", "more", "noun"]]
    translation="leg (without diminutive)"
) }}
{{ sentence(
    parts=[["noka", "foot"], ["teo", "intensifier"], ["n", "1", "verb"]]
    translation="I run"
) }}
{{ sentence(
    parts=[["lavo", "hand"], ["ste", "less", "noun"], ["tae", "diminutive"]]
    translation="A small finger/pinky"
) }}

## Objectification

<span class="suffix">-lo</span>

When a word have both descriptor and noun
meanings, the descriptor meaning is the default
one. In order to turn it into a noun, the
objectification suffix has to be added.
Objectification is implied when
the noun form of a gradiency suffix is
used.

#### Examples
{{ sentence(
    parts=[["ike", "moderately sized"], ["ve", "less"]]
    translation="Small"
) }}
{{ sentence(
    parts=[["ike", "moderately sized"], ["ve", "less"], ["lo", "objectification"]]
    translation="A small thing"
) }}

## Abstractification

<span class="prefix">go(t)-</span>

A noun can be made more abstract or generalised by
applying the abstractification prefix.

#### Examples
{{ sentence(
    parts=[["lawa", "head sized"]]
    translation="Head"
) }}
{{ sentence(
    parts=[["go", "abstract"], ["lawa", "head sized"]]
    translation="Mind"
) }}
{{ sentence(
    parts=[["varma", "lukewarm"]]
    translation="Lukewarm"
) }}
{{ sentence(
    parts=[["go", "abstract"], ["varma", "lukewarm"]]
    translation="Temperature"
) }}

## Colours

Colours are expressed using three words:

* dio - red
* via - green
* blu - blue

These can be combined to express different
colours. For example, combining blue and
green results in yellow, meaning yellow is
expressed as `bluvia`.

Additionally, the words for "dark" and "light"
can be used to specify brightness.

#### Examples
{{ sentence(
    parts=[["via", "green"], ["dio", "red"]]
    translation="Purple"
) }}
{{ sentence(
    parts=[["valo", "dark/white"], ["sa", "more"], ["via", "green"]]
    translation="Light green"
) }}

## Counting

Numbers are expressed in a form of scientific
notation, such as `1.23*10^3`. The `dek` particle
is used to express the `*10^` part and the dot is
implied.

Negative numbers are expressed by adding the `less`
gradiency form to a number.

### Digits

| Digit | Word  |
| ----- | ----- |
| zero  | ne    |
| one   | eya   |
| two   | tu    |
| three | loke  |
| four  | nela  |
| five  | kuuso |
| six   | seke  |
| seven | seite |
| eight | ato   |
| nine  | ile   |

#### Examples
{{ sentence(
    parts=[["eya", "one"], ["tu", "two"], ["loke", "three"], ["nela", "four"], [], ["dek", "*10^"], [], ["tu", "two"]]
    translation="123.4 (1.234*10^2)"
) }}
{{ sentence(
    parts=[["dek", "*10^"], [], ["eya", "one"]]
    translation="10 (10^1)"
) }}
{{ sentence(
    parts=[["tu", "two"], ["ve", "less"]]
    translation="-2"
) }}
{{ sentence(
    parts=[["loke", "three"], ["dek", "*10^"], ["tu", "two"], ["ve", "less"]]
    translation="0.03 (3*10^-2)"
) }}
{{ sentence(
    parts=[["tu", "two"], ["seke", "six"], [], ["dek", "*10^"], [], ["kuuso", "five"]]
    translation="26 000 (2.6*10^5)"
) }}

## Countries & Languages

Countries are expressed by combining an ISO 3166 country
code with `(e)leisa`. Language names are expressed
by combining an ISO 639-1 language code with `(e)gomuni`.

When a code can not be pronounced easily (eg. `cz`),
the letters are pronounced with an `e` sound in-between
them. Letters that do not exist in Luno Lei are pronounced
as follows:

| Letter | Pronunciation |
| ------ | ------------- |
| C      | tse           |
| J      | yie           |
| Q      | ku            |
| R      | hye           |
| X      | kse           |
| Z      | sie           |

#### Examples
{{ sentence(
    parts=[["se", "country-code"], ["lei", "place"], ["sa", "more"]]
    translation="Sweden"
) }}
{{ sentence(
    parts=[["sv", "language-code"], ["e", "e"], ["go", "abstract"], ["muni", "mouth"]]
    translation="Swedish"
) }}