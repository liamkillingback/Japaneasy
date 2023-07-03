import fs from "fs";
import { parse } from "csv-parse";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const getRandomxWords = async (req, res) => {
  try {
    let requested_word_count = 4;
    let from_a = getRandomInt(5990);
    let to_b = from_a + requested_word_count;
    const records = [];
    const parser = fs
      .createReadStream(`${__dirname}/6000_words_sentences.csv`)
      .pipe(
        parse({
          // CSV options if any
          from_line: from_a,
          to_line: to_b,
        })
      );
    for await (const record of parser) {
      // Work with each record
      records.push(record);
    }
    res.status(200).json({ records, message: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
