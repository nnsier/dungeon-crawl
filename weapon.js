/* eslint-disable no-unused-vars */
function Weapon(name, attackValue, durability) {
  this.name = name;
  this.durability = durability;
  this.attackValue = attackValue;
  this.inspect = () => {
    console.log(`${this.name} has ${this.durability} left and does ${this.attackValue} much damage.`);
  };
}


module.exports = Weapon;
