class Dice {
    constructor (faces) {
        this.faces = faces;
    }
 
    roll () {
        return Math.floor(Math.random() * Math.floor(this.faces));
    }
 }
 
 const dice = new Dice(6);

 let face = dice.roll();
 console.log("face: ", face);