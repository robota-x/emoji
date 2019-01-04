const fs = require("fs");

const subMask = {
  "🐼": "function",
  "😱": "console.log",
  "👉": "(",
  "👈": ")",
  "⏩": "{",
  "⏹": "}"
};

const script = fs.readFileSync("./main.js").toString();

const parsed = [...script].map(char => subMask[char] || char).join('');

eval(parsed)