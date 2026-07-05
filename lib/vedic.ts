// Vedic/Hindu cultural motifs used across the site — kept in one place so
// wording and mantras stay consistent everywhere they're quoted.

export type Mantra = {
  sanskrit: string;
  transliteration: string;
  meaning: string;
};

export const invocation: Mantra = {
  sanskrit: "ॐ श्री गणेशाय नमः",
  transliteration: "Om Shri Ganeshaya Namah",
  meaning: "Every new beginning is first offered to Lord Ganesh, remover of obstacles.",
};

export const prosperityMantra: Mantra = {
  sanskrit: "ॐ श्री महालक्ष्म्यै नमः",
  transliteration: "Om Shri Mahalakshmyai Namah",
  meaning: "Invoking Lakshmi Mata for prosperity and well-being.",
};

export const categoryMantras: Record<string, Mantra> = {
  "ganesh-idols": {
    sanskrit: "ॐ श्री गणेशाय नमः",
    transliteration: "Om Shri Ganeshaya Namah",
    meaning: "Invoked first, before any new beginning",
  },
  "pooja-murtis": {
    sanskrit: "सबका मालिक एक",
    transliteration: "Sabka Malik Ek",
    meaning: "One God, worshipped in many forms",
  },
  "home-temples": prosperityMantra,
  "custom-bulk-orders": {
    sanskrit: "शुभस्य शीघ्रम्",
    transliteration: "Shubhasya Shighram",
    meaning: "Auspicious work is best done without delay",
  },
};
