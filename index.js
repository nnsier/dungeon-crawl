/* eslint-disable prefer-const */
/* eslint-disable no-await-in-loop */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const inquirer = require('inquirer');
const Character = require('./character.js');
const Weapon = require('./weapon.js');

const mainCharacter = new Character();

async function main() {
  const getName = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  });

  const name = await mainCharacter.setName(getName.name);

  const generateWeapon = await new Weapon('Iron Sword', 20, 10);

  // make this except an array of objects?
  // console.log('Before you you see spread out three items. A sword covered in rust lies on is sticking out of the grave as a makeshift headstone');

  // const getMenuSelection = await inquirer.prompt({
  //   type: 'input',
  //   name: 'sword',
  //   message: 'What would you like to grab?',
  // });

  const weapon = await inquirer.prompt({
    name: 'weapon',
    type: 'rawlist',
    message: 'Choose an action',
    choices: [
      'Sword',
      'Stave',
      'Mace',
      'Lance',
    ],
  });

  const firstWeapon = await grabFirstItem(weapon.weapon);

  const menu = await battleMenu();
}

const grabFirstItem = async (weapon) => {
  switch (weapon) {
    case 'Sword':
      mainCharacter.setWeapon(new Weapon('Iron Sword', 5, 10));
      break;
    default:
      break;
  }
}

const battleMenu = async () => {

  const enemy = new Character('Elf', 20, 3, 2, { name: 'rusted lance', durability: 1, attack: 3 });
  let isBattle = true;
  while (isBattle) {
    let response = await inquirer.prompt({
      name: 'action',
      type: 'rawlist',
      message: 'Choose an action',
      choices: [
        'Attack',
        'Spells',
        'Check',
        'Escape',
      ],
    });
    let yourChoice = response.action;

    switch (yourChoice) {
      case 'Attack':
        console.log('You chose Attack!');
        mainCharacter.attack(enemy);
        isBattle = enemy.isAlive();
        break;
      case 'Spells':
        console.log('You chose Spells!');
        break;
      case 'Escape':
        console.log('You chose Escape!');
        isBattle = false;
        break;
      case 'Check':
        console.log('You chose items!');
        break;
      default:
        console.log('what did you do you broke a thing');
        break;
    }
    if (!enemy.isAlive()) {
      console.log('Enemy is dead');
      return;
    }
    if (!mainCharacter.isAlive()) {
      console.log(`${mainCharacter.name} has passed.`);
    }
    const enemyAttack = enemy.attack(mainCharacter);
  }
};

main();
