var fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('This is an apple');
    break;
  case 'banana':
    console.log('This is a banana');
    break;
  case 'orange':
    console.log('This is an orange');
    break;
  default:
    console.log('Unknown fruit');
}
 

let days = 'Shanbe';
switch (days) {
  case 'Shanbe':
  case 'yekShanbe':
  case 'doShanbe':
  case 'seShanbe':
  case 'chaharShanbe':
    console.log('It is a weekday');
    break;
  case 'panjShanbe':
  case 'jomeh':
    console.log('It is a weekend');
    break;
  default:
    console.log('Invalid day');
    
}

var score = 'B';
switch (score) {
  case 'A':
    console.log('Excellent!');
    break;
  case 'B':
    console.log('Good job!');
    break;
  case 'C':
    console.log('Pass');
    break;
  default:
    console.log('Fail');
}

var temp = 25;
switch (temp)  {
  case temp < 0:
    console.log('It is freezing');
    break;
  case temp >= 0 && temp < 10:
    console.log('It is cold');
    break;
  case temp >= 10 && temp < 20:
    console.log('It is cool');
    break;
  case temp >= 20 && temp < 30:
    console.log('It is warm');
    break;
  default:
    console.log('It is hot');
}

var numb2 = 3;
switch(numb2) {
  case 1:
    console.log('One');
    break;
  case 2: 
    console.log('Two');
    break;  
  case 3:
    console.log('Three');
    break;
  default:
    console.log('Other');
}
