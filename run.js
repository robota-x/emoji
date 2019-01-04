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

// const parseName = char => char.codePointAt(0) < 256;

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

  parsedArray.push(subMask[script[i]] || script[i]);
}

eval(parsedArray.join(""));
