/* eslint-disable quotes */
/* eslint-disable prefer-destructuring */
const inquirer = require('inquirer');

let HP = 4;


// eslint-disable-next-line no-unused-vars
let name = '';

async function Menu() {
  const response = await inquirer.prompt({
    name: 'action',
    type: 'rawlist',
    message: 'Choose an action',
    choices: [
      'Attack',
      'Spells',
      'Items',
      'Escape',
    ],
  })
    .then((answer) => {
      switch (answer.action) {
        case 'Attack':
          console.log(`Wow you'll attack!`);
          HP = -1;
          break;
        case 'Spells':
          console.log(`let's see your spells`);
          break;
        case 'Items':
          console.log(`Let's see your items`);
          break;
        case 'Escape':
          console.log(`Run away!`);
          break;
        default:
          console.log(`Nothing happened here.`);
      }
    });
  response();
}

inquirer.prompt({
  name: 'name',
  type: 'input',
  message: 'What is your name?',
}).then((answer) => {
  name = answer.name;
  console.log(`Your name is ${name}`);
  while (HP > 0) {
    Menu();
  }
});
