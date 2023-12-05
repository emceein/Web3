// let stds2 = ["shayan", "amin", "amir", "ali" ];
//       let tbody = document.getElementById("tbody");

//       for (let i = 0; i < stds2.lengths; i++) {
//         tbody.innerHTML += `<tr><th>${i}</th><th>${stds2[i]}</th></tr>`;
//       }


// document.querySelector ('#demo' )

//  document.querySelector (' .span')

//  document.querySelector('.sp1')

//  document.querySelector('p')

//  document.querySelectorA11(' .spl')


//  document.getElementById('demo')

//  document.getElementsByClassName('sp1')


//  document.getElementsByTagName('span')[3]

//  document.getElementsByClassName( 'sp')



//calc with case

let result;

const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}


//factorial

function factorial(n) {
    if (n < 0) {
       return "Error";
    }
    else if (n === 0 || n === 1) {
       return 1;
    }
    else {
       return n * factorial(n - 1);
    }
   }


   
   //swaping with bracket

   let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//
function sum(num) {
    if(num > 0) {
        return num + sum(num - 1);
    }
    else {
        return num;
    }
 }

const number = Number(prompt('Enter a positive integer: '));

const result1 = sum(number);

console.log(`The sum is ${result1}`);




        let numbr = Number(prompt('plz enter a number'))
        if (numbr > 0) {
            console.log('is positive');
        }else if(numbr==0){
            console.log("zero");
        }else{
            console.log('is negative');
        }

        // let number1 = Number(prompt('plz enter a number'))
        // if (number1%2==0){
        //     console.log('even');
        // }else{
        //     console.log('odd');
        // }
        

        let num1 = Number(prompt('plz enter a number'))
        let num2 = Number(prompt('plz enter a second number'))
        let num3 = Number(prompt('plz enter a third number'))

        if (num1>num2 && num1>num3) {
            console.log(`the largest number : ${num1}`);
        }else if (num2>num1 && num2>num3) {
            console.log(`the largest number : ${num2}`);
        }else{
            console.log(`the largest number : ${num3}`);
        }


        let numb1 = Number(prompt('plz enter a number'))
if (numb1==0) {
    console.log('fact of 0 is 1');
}else if (numb1<0) {
    console.log('number is negative');
}else{
    for (let i = 1; i <= numb1 ; i++) {
        fact*=i}
}



const numb3 = parseInt(prompt('Enter a positive integer: '));

if (numb3 < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

else if (numb3 === 0) {
    console.log(`The factorial of ${numb3} is 1.`);
}

else {
    let fact = 1;
    for (let i = 1; i <= numb3; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${numb3} is ${fact}.`);
}


function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6)); 

//sum for natural number    (tabiei)
const number4 = parseInt(prompt('Enter a positive integer: '));

let sum1 = 0, i = 1;


while(i <= number4) {
    sum1 += i;
    i++;
}

console.log('The sum of natural numbers:', sum);




