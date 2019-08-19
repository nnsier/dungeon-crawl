/* eslint-disable no-unused-vars */
function Character(name = 'noName', hp = 10, baseAttack = 1, baseDefense = 1, weapon = { name: 'fist', durability: 1, attack: 1 }) {
  this.name = name;
  this.hp = hp;
  this.baseAttack = baseAttack;
  this.baseDefense = baseDefense;
  this.offense = baseAttack;
  this.defense = baseDefense;
  this.weapon = weapon;

  this.setName = (newName) => {
    this.name = newName;
    console.log(`Hello ${this.name}`);
  };

  this.isAlive = () => {
    return this.hp > 0;
  };

  this.attack = (character) => {
    console.log(`${this.name} attacks ${character.name}`);
    this.calculateDamage(character);
  };

  this.calculateDamage = (enemy) => {
    console.log('----------------------------------');
    enemy.receiveDamage(this.offense);
    console.log(this.offense);
    console.log(`${enemy.name} now has ${enemy.hp}`);
  };

  this.receiveDamage = (offense) => {
    console.log(`the type of hp is ${typeof this.hp}`);
    console.log(`the type of defense is ${typeof this.defense}`);
    console.log(`the type of offense is ${typeof offense}`);
    this.hp = parseInt(this.hp - (offense - this.defense), 10);
  };

  this.setWeapon = (newWeapon) => {
    this.weapon = newWeapon;
    console.log(`Your old attack was ${this.offense}`);
    this.offense = this.baseAttack + this.weapon.attackValue;
    console.log(`You equipped ${this.weapon.name}.`);
    console.log(`Your new attack is ${this.offense}`);
  };
}

module.exports = Character;
