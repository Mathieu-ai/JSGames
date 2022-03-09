// Inquirer = questions + answers
import inquirer from 'inquirer';
// import fs
import fs from 'fs';
// import to read json (Using ES6 so require don't work)
let data = JSON.parse(fs.readFileSync('./data/school.json').toString());
// import texts
let text = JSON.parse(fs.readFileSync('./data/message.json').toString());
//import Options
import * as Option from './options/Options.js';

inquirer
    .prompt([
        {
            type: 'list',
            name: 'options',
            message: text.message,
            choices: [
                text.options.n1,
                text.options.n2,
                text.options.n3,
                text.options.n4,
            ],
        },
    ])
    .then((answers) => {
        if (answers.options === text.options.n1) {
            Option.Option1(data);
        } else if (answers.options === text.options.n2) {
            Option.Option2(data);
        } else console.info('Answer:other');
    });
