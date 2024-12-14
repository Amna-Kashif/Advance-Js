
//  ===== GLOBAL SCOPE =====    
// var - Declare a variable using var outside of any function or block.  
var varVariable = "Hello, world!";
// this is accessible globally
console.log(varVariable); // "Hello, world!"





// let - Declare a variable using let outside of any function or block.
let letVariable = "Hello, world!";
// this is accessible globally
console.log(letVariable); // "Hello, world!"




// const - Declare a variable using const outside of any function or block.
const constVariable = "Hello, world!";
// this is accessible globally
console.log(constVariable);  // "Hello, world!"



//   ===== FUNCTION SCOPE ===== 

// function scope with var
function varScope() {
    var myVar = 'I am declare with var'
    console.log(myVar);  //   (it is only accessible in this function)
}
// it cannot accessed outside the function because of function scope
// console.log(myVar);  //   ReferenceError: myVar is not defined.
varScope()  // (to console this i have to call the function)


// function scope with let
function letScope() {
    let myLet = 'I am declare with let'
    console.log(myLet);  //   (it is only accessible in this function)
}
// it cannot accessed outside the function because of function scope
// console.log(myLet);  //   ReferenceError: myVar is not defined.
letScope() // (to console this i have to call the function)


// function scope with const
function constScope() {
    const myConst = 'I am declare with const';
    console.log(myConst);  //   (it is only accessible in this function)
}
// it cannot accessed outside the function because of function scope
// console.log(myConst);  //   ReferenceError: myVar is not defined. 
constScope()  // (to console this i have to call the function)



// // ===== BLOCK SCOPE =====

// // if(true) {
// //     var declareVar = 'Amna';
// // }            
// // console.log(declareVar);  //  Accessible outside the if block because 'var' is function-scoped or globally-scoped.


// // if(true) {
// //     let declareLet = 'Amna';
// // }            
// // console.log(declareLet);   // ReferenceError: declareLet is not defined


// // if(true) {
// //     const declareConst = 'Amna';
// // }            
// // console.log(declareConst);   // ReferenceError: declareLet is not defined


// // ===== Hoisting with var =====

// console.log(a); // undefined (because of hoisting)
// var a = 5;


// // ==== Hoisting with let and const =====

// // console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;

// // console.log(c); // ReferenceError: Cannot access 'c' before initialization
// const c = 20;


// // ===== Re-declaration =====

// // // var - redeclaration:
// // var redeclareVar = 2;
// // console.log(redeclareVar);
// // var redeclareVar;     // Variables declared with var can be redeclared 

// // // let - redeclaration:
// // let redeclaredLet = 3;
// // console.log(redeclaredLet);
// // let redeclaredLet;       // SyntaxError: Identifier 'redeclaredLet' has already been declared

// // // const - redeclaration:
// // const redeclareConst = 4
// // console.log(redeclareConst);
// // const redeclareConst;         // SyntaxError: Identifier 'redeclareConst' has already been declared
// // console.log(redeclareConst);



// // ===== Re-assignment =====

// // var reassignedVar = "Hello";
// // console.log(reassignedVar);
// // reassignedVar =  "world";   
// // console.log(reassignedVar);   // Variables declared with 'var' can be reassigned


// // let reassignedLet = "Welcome";
// // console.log(reassignedLet);
// // reassignedLet = "Greetings";  
// // console.log(reassignedLet);    // Variables declared with 'let' can be reassigned


// // const reassignedConst = "value";  
// // console.log(reassignedConst);
// // reassignedConst = "New value"; // TypeError: Assignment to 'constant' variable.
// // console.log(reassignedConst);




// // ===== Temporal Dead Zone (TDZ) =====

// //          {
// //     console.log(greets);   // ReferenceError: cannot access 'greets' before initialization
// //     let greets = "Hello User";
// // } 

// // {
// //     console.log(greetUser);   // ReferenceError: cannot access 'greets' before initialization
// //     const greetUser = "Hello User";
// // }

// //  (the variables are in a "dead zone" where it can't be accessed. Trying to log the variable before its declaration gives a ReferenceError 
// // because it hasn’t been set up yet.)


//                 // ===== USECASE OF var, let, and const ===== 

// // use case of 'var' is to declare a variable inside a function that is shared across the entire function scope.
// function varUsecase() {
//     for (var i = 0; i < 3; i++) {
//         console.log(i); // Output:  0, 1, 2 
//     }
//     console.log(i);  // Output: 3 // (it gives last iteration, 'i' is still accessible here, because `var` is function-scoped)
// }
// varUsecase();


// // Best use case of 'let' is when you need a variable that is scoped to a block and may change its value over time.
// function LetUsecase() {
//     let total = 0;

//     for(let i = 1; i <= 5; i++) {
//         total += i;  // total is updated with each iteration
//     }
//     console.log(total); // Output: 15 
// }
// LetUsecase();


// // 'const' is perfect when you have a variable whose value should never change once it’s set.
// function constUsecase() {
//     const user = {
//         name: "Amna",
//         city: "karachi"
//     }
//      user.name = "Kashif"; // This is allowed, because we can modify the object's properties.
//      console.log(user);
//     // user = []; // This will give a TypeError: Assignment to constant variable
//     //  console.log(user);
     
// }
// constUsecase();



//                             // ===== String Interpolation =====
                       
// let fName = "Amna";
// let lName = "Kashif";
// // Using template literals for string interpolation
// console.log(`My name is ${fName} ${lName}`); 


//                         //    ===== Multi-line Strings =====
        
        
// let multiLineString = `Plot-123, Block-4, Gulshan-e-Iqbal, Karachi`;
// console.log(`Address: ${multiLineString}`); 

//                        // ===== Simple Expressions =====
                       
// let num1 = 10;
// let num2 = 5;
// let sum = `The sum of ${num1} and ${num2} is ${num1 + num2}.`
// console.log(sum); 

//                      // ===== Function Calls =====

// // Function to return the product of two numbers
// function muliplication(a,b) {    
//      return a * b;
// }
// // Using a template literal to call the function and log the result
// let num3 = 10;
// let num4 = 5;

// console.log(`The result of ${num3} and ${num4} is ${muliplication(num3, num4)}`);


//                  // ===== Creating a Tagged Template =====

                 
// function logTag(strings, ...values) {
//     console.log(`String part: ${strings}`);
//     console.log(`Value : ${values}`);
    
// }

// // Using the tagged template function
// // let name = "Amna";
// // let age = 21;
// // logTag`Hello... My name is ${name} and I am ${age} years old.`;


//                 // ===== Formatting =====

// // function uppercaseTag(strings, ...values) {
// //     let formatted = strings[0];

// //     values.forEach((element, index) => {
// //         formatted += element.toUpperCase() + strings[index + 1];
// //     })
// //     return formatted;
// // }
// // let myName = "Amna";
// // let myProfession = "Developer";
// // let upperCase = uppercaseTag `My name is ${myName} and I am a ${myProfession}`
// // console.log(upperCase);


//                 // ===== Conditional Logic =====

// // let currentHour = new Date().getHours();
// // console.log(currentHour);

// // let greeting = `Good ${currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening"}`
// // console.log(greeting);

// //                 // ===== Loops within Template Literals =====

// // let shoppingList = ["milk", "eggs", "chicken", "bread"];
// // let items = ` <ul>${shoppingList.map(item => `<li>${item}</li>`) .join('')}</ul>`
// // console.log(items);

//                 // ===== Escaping Backticks =====
// let backtickStr = `This is a "string" with a "backtick" character `
// console.log(backtickStr);

//                 // ===== Nested Template Literals =====

// let tableData = {
//     name: "Amna",
//     age: 21,
//     profession: "Developer"
// }
// let tableHtml = `
// <table border="1">
//   <tr>
//     <th>Name</th>
//     <th>Age</th>
//     <th>Profession</th>
//   </tr>
//   <tr>
//     <td>${tableData.name}</td>
//     <td>${tableData.age}</td>
//     <td>${tableData.profession}</td>
//   </tr>
// </table>`;
// console.log(tableHtml);


//                 // ===== Simple Condition =====
// let age = 21;
// let canVote = age >= 18 ? 'yes' : 'no';
// console.log(canVote);


//                // ===== Even or Odd =====

// // let number = +prompt("Enter any numer:");
// // let evenOrOdd = number % 2 === 0 ? 'even' : 'odd';
// // console.log(evenOrOdd);


//                // ===== Grade Evaluation =====
// // let score = +prompt("Enter your score:");
// // let grade = score >= 90 ? 'A' :
// //             score >= 80 ? 'B' :
// //             score >= 70 ? 'C' :
// //             score >= 60 ? 'D' :
// //             'F';
// // console.log(grade);

//                // ===== Login Status =====

//  let isLoggedIn = true;
//  let statusMessage = isLoggedIn ? 'Welcome back!' : 'Please log in';
//  console.log(statusMessage);

//                // ===== Discount Eligibility =====

// let isMember = true;
// let purchaseAmount = 100;
// let discount = isMember === true && purchaseAmount >= 100 ? 'yes' : 'no';
// console.log(discount);

//                // ===== Determine Max Value =====

// function maxValue(a, b) {
//     return a > b ? a : b;
// }
// let max = maxValue(30, 20);
// console.log(max);

//                // ===== Greeting Message =====

// function greet(name) {
//     if (!name) {
//         return 'Hello, Guest!';
//     } else {
//         return `Hello, ${name}!`
//     }
//   }
            
// console.log(greet());  
            
 
//                // ===== Mapping Values =====
// // let numbers = [1, 2, 3, 4, 5];
// // let doubleNum = numbers.map((element) => {
// //         if (element % 2 == 0) {
// //             return element ** 2;
// //         } else {
// //             return element ** 3
// //         }
// // })
// // console.log(doubleNum);


//                // ===== Filtering Values =====

// let strArr = ['Amna', 'Zoya', 'Ahmed', 'Aisha', 'Ali'];
// let filteredStr = strArr.filter((element) => {
//     if(element.length > 4) {
//         return element;
//     }
// })
// console.log(filteredStr);


//                // ===== Copying an Array =====


// let originalArray = [1, 2, 3, 4, 5];
// console.log(originalArray);

// let copiedArray = [...originalArray]
// console.log(copiedArray);


//                // ===== Merging Arrays =====

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let mergedArray = [...array1, ...array2];
// console.log(mergedArray);


//                // ===== Adding Elements to an Array =====

// let numbers = [2, 3, 4];
// let newArr = [1, ...numbers, 5]
// console.log(newArr);
// console.log(numbers);


//                // ===== Copying an Object =====

// let originalObject = {
//     name: 'Amna',
//     age: 21,
//     occupation: 'Software Engineer'
// }
// console.log(`This is original object:` , originalObject);
// let copiedObject = {...originalObject}
// console.log(`This is copied object:` , copiedObject);

//                // ===== Merging Objects =====
// let object1 = {
//     fName: 'Amna',
//     lName: 'Kashif'
    
//     }
// let object2 = {
//     city: 'karachi',
//     profession: 'Software Engineer'
//     }
// let mergedObject = {...object1, ...object2};
// console.log(mergedObject);


//                // ===== Updating Object Properties =====

// let user = {
//     name: 'Amna',
//     age: 21,
//     email: 'amna@gmail.com'
// }
// let updatedUser = {...user ,  email: 'amna12@gmail' , address: 'karachi' }
// console.log(updatedUser);


//                // ===== Passing Array Elements as Arguments =====

// //  function sum1(a, b, c) {
// //     return a + b + c
// //  }
// // let arrOfNum = [1, 2, 3];
// // let sumOfNum = sum1(...arrOfNum)
// // console.log(sumOfNum);
               

//                // ===== Combining Multiple Arrays =====             

// function combineArrays(...arrays) {
//     return [].concat(...arrays);
    

// }
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combinedArray = combineArrays(arr1, arr2)
// console.log(combinedArray);


//                // ===== Rest Parameter with Spread Operator =====

//  function multiply(fNumber, ...otherNumbers) {
//         return otherNumbers.map(num => fNumber * num);
//  }
//  let result = multiply(2, 3, 4)
//  console.log(result);


//                // ===== Spread Operator with Nested Structures =====

// let nestedArray = [10, 20, 30, [40, 50, 60]];
// let shallowCopy = [...nestedArray]
// // Modify the inner array in the copied array
// shallowCopy[3][0] = 100;
// console.log('Original Array:', nestedArray);  
// console.log('Shallow Copy:', shallowCopy); 


//                // ===== Sum Function =====

// function sum3(...num) {
//     return num.reduce((element, num) => element + num, 0);
// }

// // Test the function
// console.log(sum3(1, 2, 3, 4)); 


//                // ===== Average Function =====

// function average(...arg) {
//     return arg.reduce((element, num) => element + num, 0) / arg.length

// }
// console.log(average(1, 2, 3));



//                // ===== First and Rest =====
// let numArr = [1, 2, 3, 4, 5];
// let [first, ...rest] = numArr;
// console.log(first);  
// console.log(rest);   

//                // ===== Skip and Rest:
// let colorArr = ['blue', 'green', 'red', 'yellow'];
// let [,, ...remainingColors] = colorArr;
// console.log(remainingColors);


//                // ===== Basic Destructuring =====

// let person = {
//     name: 'Amna',
//     age: 21,
//     email: 'amna@gmail.com',
//     address: 'karachi'
// }
// let {name, email, ...restVariables} = person
// console.log(name);
// console.log(email);
// console.log(restVariables);


//                // ===== Nested Destructuring =====

// let student = {
//     id: 1,
//     nameOfStu: 'Amna',
//     grades: 'A',
//     info: {
//         ageOfStu: 21,
//         major: 'CS'
//     }
// }
// let {id, nameOfStu, info: {major, ...ageOfStu},  ...grades} = student;
// console.log(id);
// console.log(nameOfStu);
// console.log(grades);
// console.log(major);
// console.log(ageOfStu);


//                // ===== Filter Even Numbers =====

// function filterEven(...filtEven) {
//         return filtEven.filter(element => element % 2 === 0);
// }
// console.log(filterEven(1, 2, 3, 4, 5, 6));


//                // ===== Combine and Sort Arrays =====

// function combineAndSort(...num) {
//     let combined = [...num];
//     let sorted = combined.sort((a, b) => a - b);
//     return sorted;

// }
// console.log(combineAndSort(4, 3, 2, 1));


//                // ===== Basic Destructuring =====

// let fruits = ['apple', 'banana', 'cherry'];
// let [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);


//                // ===== Skipping Elements =====

// let colors = ['red', 'green', 'blue', 'yellow'];
// let [primaryColor, , tertiaryColor] = colors;
// console.log(primaryColor);
// console.log(tertiaryColor);


//                // ===== Rest Operator =====

// let numbersArr = [1, 2, 3, 4, 5];
// let [firstNumber, ...remainingNumbers] = numbersArr;
// console.log(firstNumber);
// console.log(remainingNumbers);


//                // ===== Basic Destructuring =====

// let person1 = {
//     name: 'Amna',
//     age: 21,
//     city: 'Karachi'
// }
// let {name: nameOfPerson, age: ageOfPerson, city: cityOfPerson} = person1;
// console.log(nameOfPerson);
// console.log(ageOfPerson);
// console.log(cityOfPerson);


//                // ===== Renaming Variables =====

// let car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2024
// }
// let {make:carMake, model: carModel, year: carYear} = car;
// console.log(carMake);
// console.log(carModel);
// console.log(carYear);


//                // ===== Default Values =====

// let settings = {
//     theme: 'light',
// }
// let {theme, language = 'English'} = settings;
// console.log(theme);
// console.log(language);


               // ===== Array of Arrays =====

let nestedArr = [[1, 2], [3, 4], [5, 6]];
let [[a] , [b], [c]] = nestedArr;
console.log(a);
console.log(b);
console.log(c);

               
               // ===== Object within an Object =====

let profile = {
    userName: 'Amna',
    details: {
        email: 'amna@gmail.com',
        address: 'Karachi'
    }
}
let {userName, details: {email, address}} = profile;
console.log(userName);
console.log(email);
console.log(address);


               // ===== Mix of Arrays and Objects =====

let data = {
    id: 'A',
    info: [
        {name: 'Amna'},
        {age: 21}
        
    ]
}
let {id: userId, info:[{name: userName1}, {age: userAge}]} = data;
console.log(userId);
console.log(userName1);
console.log(userAge);


               // ===== Array Parameters =====

function printCoordinates(arr) {
     let [x, y] = arr;
     console.log(x);
     console.log(y);
}
printCoordinates([2, 5]);


               // ===== Object Parameters =====

function displayUser(obj) {
    let {name, age} = obj;
    console.log(name);
    console.log(age);    
}
displayUser({name:'Amna', age: 21})


               // ===== List Property Names =====

let book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    year: 2000
}

console.log(Object.keys(book)); 


               // ===== Count Properties =====

let student = {
    name: 'Sara',
    age: 20,
    grade: 'A',
    school: 'Everest Junior High School'
}
console.log(Object.keys(student));
console.log(Object.keys(student).length);


               // ===== Iterate Over Keys =====

let product = {
    name: 'Laptop',
    price: 100000,
    category: 'Electronics',
}
// console.log(Object.keys(product), Object.values(product));
let objKeys = Object.keys(product);
objKeys.forEach((element) => {
    console.log(element, product[element]);
})


               // ===== List Property Values =====

let movie = {
    title: 'Avengers',
    director: 'Joss Whedon',
    year: 2012,
    genre: 'Action'
}
console.log(Object.values(movie));


               // ===== Sum Values =====

let scores = {
    math: 90,
    science: 80,
    english: 70
}
let sumOfScore =  Object.values(scores).reduce((acc, element) => acc + element, 0);
console.log(sumOfScore); 


               // ===== Iterate Over Values =====

let user = {
    userName: 'Amna',
    email: 'amna@gmail.com',
    location: 'Karachi',
}
let objValues = Object.values(user);
objValues.forEach((element) => {
    console.log(element);
})

               // ===== List Entries =====

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
}
let carObj = Object.entries(car);
carObj.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });



               // ===== Convert Object to Array =====

let person = {
    firstName: 'Amna',
    lastName: 'Kashif',
    age: 21
}
let personObj = Object.entries(person);
console.log(personObj);


               // ===== Iterate Over Entries =====

let settings = {
    theme: 'dark',
    notifications: true,
    privacy: 'high'
}
let settingsObj = Object.entries(settings)
settingsObj.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})



               // ===== Filter Keys =====

let inventory = {
    apples: 2,
    bananas: 3,
    oranges: 6,
    grapes: 8
}
let filterFruits = Object.keys(inventory).filter(value => inventory[value] > 5);
console.log(filterFruits);


               // ===== Transform Values:
let temperatures = {
    morning: 15,    
    afternoon: 22,  
    evening: 18      
};
let temperatureArr = Object.entries(temperatures).map(([key, value]) => {
    return [key, value * 9/5 + 32]
})
console.log(temperatureArr);


               // ===== Key-Value Swap =====

let roles = {
    admin: "Has full access to all features.",
    editor: "Can edit content but cannot manage users.",
    viewer: "Can only view content, no editing permissions."
};

let SwappedRoles = Object.entries(roles).map(([key, value]) => {
    return [value, key]
})
console.log(SwappedRoles);


               // ===== Filter and Map =====
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterAndMap(arr, filterfunc, mapfunc) {
    return arr.filter(filterfunc).map(mapfunc)
}

let filtEvenNum = (num) => num % 2 !== 0;
let multiplyByTwo = (num) => num * num;
let result = filterAndMap(numbers, filtEvenNum, multiplyByTwo)
console.log(result);


               // ===== Sort and Reduce =====

let words = ["apple","banana", "cherry", "date"];
function sortAndReduce(arr, sortfunc, reducefunc) {
    let sortedArray = arr.sort(sortfunc)
    return sortedArray.reduce(reducefunc)
}
let sortAlphabetically = (a, b) => a.localeCompare(b);
let concatWords = (acc, curElem) => acc + curElem;
let concatenated =  sortAndReduce(words, sortAlphabetically, concatWords);

console.log(concatenated);



               // ===== Simple Callback =====

function greet(name, greetingMsg) {
    console.log(`Hello ${name}! ` );
    greetingMsg()
    
}
function printGreeting() {
    console.log('Greeting message');
    
}
greet('Amna', printGreeting)

               // ===== Asynchronous Callback ===== 

function fetchData(callback) {
    setTimeout(() => {
        let data = {
            message: 'Data fetched!'
         };
         callback(data)
    } , 2000);
}
fetchData((data) => {
    console.log(data.message);
})


               // ===== Simple Arrow Function =====

let add = (a,b) => a + b;
console.log(add(3, 5));


               // ===== Arrow Function with Array Methods =====

let numbersArr = [1, 2, 3, 4, 5];
let squaredNumbers = numbersArr.map((element) => {
    return element * element
})
console.log(squaredNumbers);


               // ===== Variable Scope =====

function outer() {
    let x = 2
    function inner() {
        console.log(x);
        
    }
    inner();
    
}
outer();


               // ===== Closure =====

function createCounter() {
    let counter = 0;
    return function () {
        counter++
        console.log(counter);

    };
}
let counter1 = createCounter()
let counter2 = createCounter()
 
counter1()
counter1()
counter1()

counter2()
counter2()
counter2()


               // ===== Simple Default Parameters =====

function greet(name, msg='Hello') {
        return `${msg} ${name}!`;
}
console.log(greet('Amna'));
console.log(greet('Amna', 'Good Morning'));


               // ===== Default Parameters with Other Arguments =====

function calculateArea(width=10, height=5) {
    return width * height
    // return `area : width${width} and height${height}`;
}
let defaultArea =  calculateArea()
console.log(`Area with default values: ${defaultArea}`);
let customArea = calculateArea(6, 4)
console.log(`Area with custom values: ${customArea}`);


               // ===== Square Numbers =====

let numbersArray = [1, 2, 3, 4, 5];
let squareNumbers = numbersArray.map((element) => {
    return element * element
});
console.log(squareNumbers);


               // ===== Convert to Uppercase =====

let wordsArr = ["apple", "banana", "cherry"];
let uppercaseWords = wordsArr.map((element) => {
    return element.toUpperCase()
})
console.log(uppercaseWords);


               // ===== Filter Even Numbers =====

let arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterEvenNum = arrayOfNum.filter((element) => {
    return element % 2 === 0
})
console.log(filterEvenNum);


               // ===== Filter Long Words =====

let wordsArray = ["apple", "banana", "cherry", "date"];
let filterLongWords = wordsArray.filter((element) => {
    return element.length > 5
})
console.log(filterLongWords);


               // ===== Log Numbers =====

let numArray = [1, 2, 3, 4, 5];
numArray.forEach((element) => {
    console.log(element);
});


               // ===== Log Word Lengths =====

let fruits = ["apple", "banana", "cherry"];
fruits.forEach((element) => {
    console.log(element.length);
    
})


               // ===== Sum of Numbers =====

let array = [1, 2, 3, 4, 5];
let sumOfArr = array.reduce((acc, element) => {
    return acc + element
} ,0)
console.log(sumOfArr);


               // ===== Concatenate Strings =====

let stringArr = ["Hello", "world","this", "is", "JavaScript"];
let concatStr = stringArr.reduce((acc, element) => {
    return acc + " " + element
})
console.log(concatStr); 


               // ===== Check for Even Number =====

let randomValues = [1, 3, 5, 7, 8];
let extractEven = randomValues.some((element) => {
    return element % 2 === 0
})
console.log(extractEven);


               // ===== Check for Long Word =====

let fruitsArr = ["apple", "banana", "cherry", "date"];
let checkLength = fruitsArr.some((element) => {
    return element.length > 5
})
console.log(checkLength);


               // ===== Check All Even Numbers =====

let numArr1 = [2, 4, 6, 8, 10];
let checkEven = numArr1.every((element) => {
    return element % 2 === 0
})
console.log(checkEven);


               // ===== Check All Long Words =====

let animalsArr = ["elephant", "giraffe", "hippopotamus"];
let checkLeng = animalsArr.every((element) => {
    return element.length > 5
})
console.log(checkLeng);


               // ===== Find First Even Number =====

let numArr2 = [1, 2, 3, 5, 7, 8];
let firstEven = numArr2.find((element) => {
    return element % 2 === 0
})
console.log(firstEven);



               // ===== Find Long Word =====

let arrOfWords = ['apple', 'banana', 'cherry', 'date'];
let longWord =arrOfWords.find((element) => {
    return element.length > 5
});
console.log(longWord);


               // ===== Find Index of First Even Number =====

let arrValues = [1, 3, 4, 5, 7, 8];
let firstEvenFind = arrValues.findIndex((element) => {
    return element % 2 === 0
});
console.log(firstEvenFind);


               // ===== Find Index of Long Word =====

let wordArray = ["apple", "banana", "cherry", "date"];
let longWordIndex = wordArray.findIndex((element) => {
     return element.length > 5
});
console.log(longWordIndex);


               // ===== Simple Promise =====

function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms)
        })
}
delay(2000).then(() => {
    console.log('Hello, World!');    
})


               // ===== Promise Chain =====

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({message: 'Data fetched successfully!', second: 1})
        }, 1000)
    })
}
fetchData().then(msg => {
    console.log(msg);
    
})


               // ===== Error Handling =====

function fetchUserData() {
    return new Promise((resolve, reject) => {
        
        let userData = {
            name:'Amna',
            // age:21
        };
        if(userData.age) {
            resolve(userData)
        } else {
            reject('User data is missing age')
        }
    })
}
fetchUserData().then(data => {
    console.log('User data fetched successfully:',data);
}).catch(err => {
    console.log('Error fetching user data:', err); 
})


               // ===== Simulate Network Request =====

function getWeather(location) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let weatherData = {
                location: location,
                temperature: 25,
                humidity: 60
            }


if(location === 'Unknown') {
    reject('Location not found')
} else {
    resolve(weatherData)
}
 }, 1000)
}) 

}

getWeather('Pakistan').then(data => {
    console.log('Weather Data' , data);
    
}).catch((error) => {
    console.log(error);
    
})


               // ===== Simple async Function =====

function delay(msg) {
    return new Promise((resolve) => {
        setTimeout(resolve,msg)
    })
}

async function sayHello() {
        await delay(2000)
        console.log('Hello World..');
        
}
sayHello()
 

               // ===== Fetch Data with async/await =====

function getUserData(msg1) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(msg1)
        } , msg1)
    })
}


async function fetchUserData() {
    let data =  await getUserData(1000)
    console.log('Data fetch!');
    return data;
}


async function logUserData() {
    try {
        let data = await fetchUserData()
        console.log('User data:' , data);
        
     
    }catch(err)  {
        console.log('Error fetching data' , err);
    }
    
}
logUserData()


               // ===== Fetch and Process Data =====

 function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                name: 'Amna',
                age: 21
            }
            resolve(user);
            
        }, 1000)
    })
 }              
 function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let posts = [
                { id: 1, title: 'Post 1' },
                { id: 2, title: 'Post 2' }
                ]
                resolve(posts);
                
        }, 1000)
    })
 }
 async function getUserAndPosts(user) {

    try {
        let posts = await fetchPosts();
        let user = await fetchUser();
        return { user, posts };
    } catch(err) {
        console.log('Error fetching user data:', err);
    }


 getUserAndPosts().then((data) => {
    console.log('User and Posts data:' , data);
 }).catch((err) => {
    console.log('Error', err);
    
 })

 }
               // ===== Error Handling in async/await =====


function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = null;

            if(user) {
                resolve(user)
            } else {
                reject("User data not found");
            }
        }, 1000)
    });
}

async function getUserInfo() {
    try {
        let user = await fetchUser();
        console.log("User Info:", user);

    } catch (err) {
        console.log("Error:",err);
        
    }
}
getUserInfo()


               // ===== Simulate API Calls =====
               
function apiCall() {
    return new Promise((resolve, reject) => {

        let delay = Math.random() * 2000 + 1000;

        setTimeout(() => {
            let success = Math.random() > 0.5;

            if(success) {
                let data = { msg: 'Data fetched successfully', delay }
                resolve(data)
            } else {
                reject("failed to fetch data");
            }
        }, delay)
    })
}
async function getData() {
    try {
        let result1 = await apiCall();
        console.log("First API call result:", result1);

        let result2 = await apiCall();
        console.log("First API call result:", result2);
        
    } catch(err) {
        console.log("Error during API call:", err);
        
    }
}
getData()
