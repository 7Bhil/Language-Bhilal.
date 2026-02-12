#!/usr/bin/env node
const fs = require('fs');
const Lexer = require('./lexer');
const Parser = require('./parser');
const Evaluator = require('./evaluator');
const readline = require('readline-sync');

const evaluator = new Evaluator();

function runCode(code, name = "repl") {
    try {
        const lexer = new Lexer(code);
        const tokens = lexer.tokenize();
        const parser = new Parser(tokens);
        const ast = parser.parse();
        evaluator.evaluate(ast);
    } catch (error) {
        console.error("Erreur:", error.message);
    }
}

const filePath = process.argv[2];

if (!filePath) {
    console.log("--- Bhilal Interactive REPL ---");
    console.log("Tapez 'quitter' pour sortir.");
    while (true) {
        const input = readline.question("Bhilal> ");
        if (input.toLowerCase() === 'quitter') break;
        if (input.trim() === '') continue;
        runCode(input);
    }
    process.exit(0);
}

try {
    const code = fs.readFileSync(filePath, 'utf8');
    runCode(code, filePath);
} catch (error) {
    console.error("Erreur critique:", error.message);
}
