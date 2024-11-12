#!/usr/bin/env python3

import json
import random

alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"
pack_count = 6

def generate_id():
    result = ""
    for _ in range(10):
        c = random.randint(0, len(alphabet) - 1)
        result += alphabet[c]

    return result

with open("static/flashcards.json") as f:
    flashcards = json.load(f)

new_flashcards = []
for flashcard in flashcards:
    additions = {}
    if not ("id" in flashcard):
        additions["id"] = generate_id()

    if not ("pack" in flashcard):
        additions["pack"] = random.randint(1, pack_count)

    # new fields should be at the beginning
    flashcard = additions | flashcard
    new_flashcards.append(flashcard)

with open("static/flashcards.json", "w") as f:
    json.dump(new_flashcards, f, indent=4)
