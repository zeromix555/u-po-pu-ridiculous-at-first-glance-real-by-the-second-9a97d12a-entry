// Ridiculous at First Glance, Real by the Second.
// One sentence, at most 200 characters, pitching a bizarre startup idea that
// sounds like a joke yet is specific enough that a reader can see the
// customers and the money: the odd thing sold, who pays, and why it is real.
//
// The pitch: baby first names are the last unbranded surface in a family's
// life, and naming rights are already a proven market (stadiums, arenas).
// Brands pay five figures for the most personal billboard there is; parents
// get paid to do what they were going to do anyway. Absurd on first hearing,
// a real two-sided market on the second.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "We auction babies' first names to the highest-bidding brand: parents pocket a five-figure fee, and a soft-drink logo raises your child.";

if ([...ENTRY].length > 200 || ENTRY.trim().length === 0) {
  throw new Error("entry must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
