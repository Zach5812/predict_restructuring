// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// 1. Tesla
// 2. Mercedes

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

// 1. The first one will be an error because nothing is passed into the value side of name
// 2. The second one will be Elon becuase it changed the name of the key to otherName

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// 1. Since the object has no key name "password", the variable password is returned
// 2. Since there is no password variable in the function and no hashed password, it returns undefined


// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

// 1. 2 is not equal to 5, it returns False
// 2. 2 is equal to 2, so it returns True

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// 1. The first one will return 'value'
// 2. the second will return [1, 5, 1, 8, 3, 3]
// 3. The third will return 1
// 4. The fourth will return 5






