class Dice {
    constructor (faces =6) {
        this.faces = faces;
    }
 
    roll () {
        return Math.floor(1+ Math.random() * Math.floor(this.faces));
    }

    cheat () {       
        return this.faces;
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
 
$(function(){
    $("#roll").click(function(){
        let faces = $("#faces").val();
        const dice = new Dice(faces);
        let face = dice.roll();

        $("#result").text(face);

    });


    $("#mRoll").click(function(){
        let faces = $("#faces").val();
        let lances = $("#lances").val();
        const dice = new Dice(faces);
        let faceArray = dice.multipleRoll(lances);

        $("#mResult").text(faceArray);
    });
})