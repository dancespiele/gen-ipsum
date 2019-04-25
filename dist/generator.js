"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wordList_1 = require("./wordList");
function generate(length) {
    let loremIpsum = "";
    let wordCount = wordList_1.words.length;
    for (let i = 0; i < length; i++) {
        loremIpsum += `${wordList_1.words[Math.floor(Math.random() * wordCount)]} `;
    }
    let loremArray = loremIpsum.split('');
    loremArray.pop();
    loremIpsum = loremArray.join('');
    return loremIpsum;
}
exports.generate = generate;
//# sourceMappingURL=generator.js.map