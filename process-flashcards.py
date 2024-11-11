#!/usr/bin/env python3

import json
import random

alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"

def generate_id():
    result = ""
    for _ in range(10):
        c = random.randint(0, len(alphabet) - 1)
        result += alphabet[c]

    return result

with open("static/flashcards.json") as f:
    flashcards = json.load(f)

for flashcard in flashcards:
    flashcard["id"] = generate_id()

print(flashcards)
