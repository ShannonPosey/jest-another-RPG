const Potion = require("../lib/Potion");
const Character = require("./Character");

class Player extends Character {
    constructor (name = "") {
        // call parent constructor here:
        super(name);
   
    this.inventory = [new Potion("health"), new Potion()];
}

    // returns an object with various player properties
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    // returns this inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }
    
    // adds potion to player's inventory
    addPotion(potion) {
        this.inventory.push(potion);
    }

    // keeps track of potions used
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case "agility":
                this.agility += potion.value;
                break;
            case "health":
                this.health += potion.value;
                break;
            case "strength":
                this.strength += potion.value;
                break;
        }
    }

}

module.exports = Player;