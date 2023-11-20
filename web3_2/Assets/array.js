var car = ["bmw", "benz", "ford"];
      car.push("impala")    // add new element
      console.log(car);

      var car = ["bmw", "benz", "impala", "ford"];
      car.fill("pride");         //fill the elements
      console.log(car);

      var car = ["bmw", "benz", "impala", "ford"];
      car.pop ();       //remove ladst element
      console.log(car);

      var car = ["bmw", "benz", "impala", "ford"];
      car.shift()       //remove first
      console.log(car);
      

      var name1 = ["ali" , "reza" , "hamid" , "masoud" , "hadi"]
      console.log(name1);
      console.log(name1.length);


      var name1 = ["ali" , "reza" , "hamid" , "masoud" , "hadi"]
      console.log(name1);
      name1.sort()   // sorted by name
      console.log('with sort syntax : ' + name1);

      var numb = [100 , 20 , 30 , 10]
      console.log(numb);
      numb.splice(2 , 2 , 40 , 50) // add 2 elements and remove 2 elements at position 2
      console.log(numb);


      city1 = ['tehran' , 'lorestan' , 'kordestan']
      city2 = ['mashhad' , 'hamedan']
      console.log(city1);
      console.log(city2);
      console.log(city1.concat(city2));  // mix 2 elements


      


      var number1 = [1, 2, 3, 4, 5,6];
      console.log(number1);
      console.log(number1.slice(2,-1));


      var number1 = [1, 2, 3, 4, 5,6];
      console.log(number1);
      console.log(number1.flatMap((x) => x * 2));



      var car = ["bmw", "benz", "impala", "ford"];
      console.log(car);
      car.reverse()       //remove first
      console.log('this is reversed wiyh reverse syntax : ' + car);