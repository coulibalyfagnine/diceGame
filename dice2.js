class Dice {
    constructor (face =6) {
        this.face = face;
    }
 
    roll () {
        // cela est subjective mais je penses qu'il est préférable que les
        // faces soient comprises en 1 et le nombre de faces du dé inclu
        return Math.floor(1+ Math.random() * Math.floor(this.face));
    }

    // fonction qui retourne toujours le nombre le plus élevé possible du dé
    cheat () {       
        return this.face;
    }

    //fonction qui permet de lancer le dé plusieurs fois d’affilé
    // et qui retourne le résultat de chaque lancés sous la forme d'un tableau
    multipleRoll (nbrRoll = 3) {
        const res = [];
        let i;
        for(i = 0; i<nbrRoll; i++){
            res.push(this.roll());
        }
        return res;
    }
 }
 
 const dice = new Dice(9);

 let face = dice.roll();
 let max = dice.cheat();
 let mFaces = dice.multipleRoll(10);
 console.log("face: ", face);
 console.log("Max: ", max);
 console.log("mFace: ", mFaces);