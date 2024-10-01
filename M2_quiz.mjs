import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

let antwoord;

console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen:')
console.log('Vraag 1: Wat is de hoofdstad van Nederland?')

antwoord = await userInput.question('Jouw antwoord: ')

if (antwoord == 'Amsterdam'){
    console.log('Goed antwoord!')
}else {
    console.log('Fout antwoord. Het juiste antwoord is: Amsterdam')
}

console.log('Vraag 2: Hoeveel wijken zijn er in Brussel ?')

antwoord = await userInput.question('Jouw antwoord: ')

if (antwoord == '19'){
    console.log('Goed antwoord!')
}else {
    console.log('Fout antwoord. Het juiste antwoord is: 19')
}

console.log('Vraag 3: Wat is het langste dier ter wereld?')

antwoord = await userInput.question('Jouw antwoord: ')

if (antwoord == 'Buiskwal'){
    console.log('Goed antwoord!')
}else {
    console.log('Fout antwoord. Het juiste antwoord is: Buiskwal')
}

console.log('Vraag 4: Wie zong "Destin"?')

antwoord = await userInput.question('Jouw antwoord: ')

if (antwoord == 'Ninho'){
    console.log('Goed antwoord!')
}else {
    console.log('Fout antwoord. Het juiste antwoord is: Ninho')
}

console.log('Vraag 5: Hoeveel banden heeft een auto?')

antwoord = await userInput.question('Jouw antwoord: ')

if (antwoord == '4'){
    console.log('Goed antwoord!')
}else {
    console.log('Fout antwoord. Het juiste antwoord is: 4')
}

process.exit()