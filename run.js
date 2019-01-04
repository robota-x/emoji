const fs = require("fs");

const subMask = {
  "🐼": "function",
  "😱": "console.log",
  "👉": "(",
  "👈": ")",
  "⏩": "{",
  "⏹": "}",
  "🤳": ";"
};

const parseName = char => /\s/.test(char) || char.codePointAt(0) < 256 ? char : `_${char.codePointAt(0)}`;

const script = [...fs.readFileSync("./main.js").toString()];
const parsedArray = [];

for (i = 0; i < script.length; i++) {
  if (script[i] === "📝") {
    parsedArray.push('"');
    i += 1;
    while (script[i] !== "📝") {
      parsedArray.push(script[i]);
      i += 1;
    }
    parsedArray.push('"');
    i += 1;
  }
  parsedArray.push(subMask[script[i]] || parseName(script[i]));
}
// console.log(parsedArray.join(""))
eval(parsedArray.join(""));
