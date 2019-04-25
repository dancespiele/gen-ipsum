import { words } from './wordList';

export function generate(length: number) {
    let loremIpsum: string = "";
    let wordCount = words.length;

    for (let i: number = 0; i < length; i++) {
        loremIpsum += `${words[Math.floor(Math.random() * wordCount)]} `;
    }

    let loremArray = loremIpsum.split('');
    loremArray.pop();
    loremIpsum = loremArray.join('');

    return loremIpsum;
}