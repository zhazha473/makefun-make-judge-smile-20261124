// makefun-make-judge-smile-20261124 — "Make the Judge Smile"
// One line about a small good thing that happened today.
//
// Construction (setup -> concrete detail -> surprise kicker):
//   Setup: woken early by rain on a zinc roof, kettle on instead of sleep.
//   Concrete detail: a neighbour's mango on the doorstep, with a handwritten
//   note ("too many, take one") — a sound (rain on zinc), a time (5 a.m.),
//   a named small thing (the mango, the note).
//   Surprise kicker: the last clause breaks the note's rule in the smallest,
//   most human way — "so I took two" — and lands on the final word.
// First person throughout, no greeting-card phrasing, no borrowed sentiment.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At 5 a.m. the rain drummed on the zinc roof until I gave up sleeping, put the kettle on, and found my neighbour's mango on the doorstep with a note saying 'too many, take one' — so I took two.";

// Gate: UTF-8 text, 1–200 characters, a single line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1–200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
