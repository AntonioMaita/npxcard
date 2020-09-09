#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.white("             Antonio Maita"),
    handle: chalk.white("Tonio"),
    work: chalk.white("Junior Web Developer at BeCode.org"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("MaitaAntonio1"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~antoniomaita"),
    github: chalk.gray("https://github.com/") + chalk.green("AntonioMaita"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("antonio-maita-84a5161a9"),
    npx: chalk.red("npx") + " " + chalk.white("Tonio"),
    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.red(
        boxen(
            [
                `${data.name} / ${data.handle}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelTwitter} ${data.twitter}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "classic",
                
            },
        ),
    ),
);