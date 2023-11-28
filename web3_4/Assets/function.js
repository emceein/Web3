function masahatMraba(side) {
    var area = side * side;
console.log('Masahat Moraba =' + area);}

masahatMraba(5);

function mohit(side) {
    var mohitMrab = side * 4;
console.log('Mohit Moraba = ' + mohitMrab);
}

mohit(5); 


function masahatMosalas(ghaede, ertefa) {
    var area = 0.5 * ghaede * ertefa;       //0.5==1/2
console.log('Masahat Mosalas = ' + area);
}

masahatMosalas(10, 20);

function mohitMosalas(side1, side2, side3) {
    var mohit =  side1 + side2 + side3 ;
console.log('Mohit Mosalas = ' + mohit);
}

mohitMosalas(10, 20, 30);


function mohitDaiere(shoaa) {
    return 2 * 3.14 * shoaa;
   }
   
   var shoaa = 5;
   console.log('Mohit Daiere = '+ mohitDaiere(shoaa));



function bmi(weight, height) {
    var bmi = weight / (height * height);    //height in meter
    console.log("BMI =  " + bmi.toFixed(2));
}

bmi(90, 1.73); 




