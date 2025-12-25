// alert("Thanks for your input!");
// console.log()
// window.log(6+7)

// Practice Questions on String Variable


// var name = "afzal"
// alert(name)
 
// var city = "karachi"
// alert("i love"  + city)

// var  name;
// name = "afzal"
// alert(name)

// var name = "ali"
// var name = "ali-1"
// alert(name)

// Variables for Numbers

// var num = 2
// alert(num)

// var num1 = 3
// var num2 = 4
// alert(num1 + num2)

//  var num1 = 4
//  alert(num1 +4)

// Math expressions:Familiar operators

//  var num = 2
//  alert(num + 3)

//  we can also write 
// alert( 2 + 5)

// alert ( 10 % 2)

// var num = 1
// var num2 = num++
// alert(num2)
//  var a = 1
//  var b = a++ + a++
//  console.log(b)

//  var a = 1
//  var c = 2
//  var b = a++ + a++ + c++ - --a + a++ + c++
//  console.log(b)

//  var a = 2
//  var b = 1
//  var c = 3
//  var d = 4
//  var e = a++ - b++ + a++ + c++ + ++d + a++ + c++ + ++d

//  console.log(e)
// var a = 1
// console.log(--a)

// console.log(3/ 5);

// var firstName = "afzal"
// console.log(firstName+" siddiqui")

// var a = prompt("How many cats do you have")

// console.log("i have seven cats " + a)
// console.log(a);
// let a = 10;
//  out put Error  becouse js work top to botttom

// let a = 10;
// onsole.log(a);

// function test(x = y, y = 2) {
//   return x + y;
// }
// console.log(test());


// var marks = prompt("Enter your percetage");
// if( marks >= 90){
//     console.log("Grade A1")
// }
// else if (marks >= 80){
//     console.log("Grade A")
// }
// else if(marks >= 60){
//     console.log("grade B")
// }
// else
//     (marks<=59)
//     console.log("fail")
    
// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
//   alert("Correct!");
// }
// ReferenceError

// let firstName = "Ali";
// let lastName = "Raza";
// let fullName = "Ali Raza";

// if (fullName === firstName + " " + lastName) {
//   console.log("Correct!");
// } else {
//   console.log("Wrong!");
// }

// 1 if (weight > 300 &&
// time < 6) {
// 2   alert("Come to our tryout!");
// 3 }
// 4 else {
// 5   alert("Come to our cookout!");
// 6 }
//  var color = prompt("Enter A color")
//  if ( color === "red"){
//     console.log("stop")
//  }
//  else if(color === "green"){
//     console.log("go")
//  }
//  else(
//     console.log("color  not match")
//  )


// var age = prompt("Enter your age") 
// var hasID = true
// if(age >=8){
//     if(hasID===true)
//     {
//     console.log("Enter Alowed")
//     }
//     else{("not Allowed")}
// }
// else{("to young")}

// array prectice 
// const one = [2,
//     "afza", 3,
//     7
// ]
// console.log(one[3])        <space is not proble in array initi

// const two = [null , 3, , 5, "khan"]
// console.log(two[3])

// let age =[20,30,40,50]
// age[2]=2
// console.log(age)

// let age1 = [20,80,70, "imran",60]
// console.log(age1)
// age1[4]=3
// age1 [3]="afzal"
// console.log(age1)

// we have four method in Array shift add remove startadd startremove endremove endadd remndomadd 

// var uname = ["afzal", "imran", "kashif", "haseeb","yaseen"]
// uname.pop()
// uname.push("afzal",3)
// uname.unshift("kashif",5)
// uname.shift()
// console.log(uname)

// uname.splice(2,2,"new" ,"Nan")
// uname.splice(2,0,"new" ,"Nan") adding the new  element befor in 2 index
// uname.splice(1,3)
// uname.splice(0,2)
// uname.splice(1,1,"afzal")
// var fname= uname.slice(2,4)
// console.log(fname)
//  let mname =["afzl","a","b"].concat(fname)
//  console.log(mname)
 

// loop prectice
// for (let i = 1; i< 9; i++){
//    console.log("number "+ i) 

// }
// print random table 
// var num = prompt("enter table number")
//  for ( i = 1 ; i<=10; i++ ){
//     console.log(num + " X " + i + " = " + num* i) 
//  }


// var num = prompt("enter table number")
//  for ( i = 10 ; i >= 1; i--){
//     console.log(num + " X " + i + " = " + num* i) 
//  }

// for (let i = 10; i >= 1; i--) {
//   console.log(`5 x +{i} = {5 * i}`);
// }

// console.log("js is running");
// var arr = ["cat", "dog", "snake", "a", "b", "c"];

// var newArr = arr.splice(0,2);
// console.log("new arr=>", newArr);
// console.log("arr=>", arr);

//  0.  1.  2. 3.   4
// i = 0; i < stulist.length; i++ ){
   // if// var arr = ["a","b","c","d","e","b","c","d","e"]

// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i])
// }


// var stulist = ["ahmed","yaseen", "usman", "khuzaima", "afzal"] 
// var estudent= prompt("Enter absent student")
// for ((estudent == stulist[i]){
//       console.log("you are absent", stulist[i])
//       break;
//    }
  
//  else{
//    console.log("not found")
//  }
// }

// var arr =[1,2,3,4,5,6]
// // console.log(arr.length)
// // console.log(arr.length-1)
// console.log("last element",arr[arr.length-1])

//  2D Array.

// var a2d = [


//    [1,2,3],
//    [1,[5,7,[8,9,[0]]],9],
//    [1,6,7,[2,3,4,[7,"t",]]],
// ]
// console.log("jjjjj",a2d[2][3][3][1]) 
// console.log(a2d[1][1][2][2])
// console.log(a2d)

// var arry1 =[[1,2,3],[4,5,6],[7,8,9]]
// var arry2 = [[9,8,7],[6,5,4],[3,2,1]]
//  var result= arry1[2][1] + arry2[0][1]
//  console.log(result)

//  var arry1 =
//  [[1,2,3],
//  [4,5,6],
//  [7,8,9]]

//  for(i = 0; i<arry1.length; i++){
//   let arry2 = 3;
//       for( j = 0 ; j<arry1[i].length; j++){
//          // arry2 += arry1[i][j];
//          arry2 = arry2+ arry1[i][j]
//  }
//   console.log("Row " + i + " sum = " + arry2); 
//  }


//  var arry1 = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];

// for (let j = 0; j < arry1[0].length; j++) {
//   let arry2 = 3;   // har column ke liye starting value
//   for (let i = 0; i < arry1.length; i++) {
//     arry2 = arry2 + arry1[i][j];
//   }
//   console.log("Column " + j + " sum = " + arry2);
// }


//  const matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
// matrix[0][0]= "x"
// for(let row of matrix ){
//    const rowString = row.join('');
//    console.log(row)
// }nsole.log( rowString);
//  

// co spread Operator
//  var a = [1,2,3,4]
//  var b = [5,6,7,8]
//  var c =a.concat(b)
//  console.log(c)
//  console.log(a)

// array to String

// let a = ["afza","usman","yaseen","imran", "kashif"]
// console.log(a)
// console.log(a.toString())
// console.log(a.join("____ "))
// console.log(a.indexOf("usman"))



// a.sort();
// console.log(a)



//    var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// 2  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// 3  var fullNames = [];
// 5  for
// (var i = 0; i < firstNames.length; i++) {
// 6    for
// (var j = 0; j < lastNames.length; j++) {
// 7      
// fullNames.push(firstNames[i] + lastNames[j]);
// 67
// }
// 9    
// 10 }


// let input = prompt("Enter numbers separated by commas:");
// // let numbers = input.split(",").map(Number);

// for (let num of numbers) {
//     if (num % 2 === 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }

//  var city = "karachi";
//  console.log(city.toUpperCase());

//  var city = "karachi";
// var titleCaseCity = city.charAt(2).toUpperCase() + city.slice(2).toLowerCase();
// console.log(titleCaseCity); // "Karachi"
//  var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();

// var firstChar = cityToCheck.slice(0, 1).toUpperCase();
// var otherChars = cityToCheck.slice(1);

// var cappedCity = firstChar + otherChars;

// alert("Normalized city: " + cappedCity);
//  var first_name= prompt("enter first name")
//  var last_Name = prompt("Enter your last name")
//   var f_name = first_name.slice(0, 1);
//   var l_name = first_name.slice(.length-1);
//    f_name = f_name.toUpperCase();
//    l_name = l_name.toLowerCase();
//    var c_name = f_name + l_name;
//    console.log(c_name);
// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;
// console.log(cappedCity)

// var month= prompt("enter month name")
// var months = month.length;
//  if (month> 3){
//    uname = month.slice( 0.3)
//    console.log(uname)
//  }
//  else{console.log ("car smaler then 3")}

// var firstName = prompt("enter your name ?")
// var first_name = firstName.slice(0,1)
// first_name = firstName.toUpperCase();
// var remain = firstName.slice(1)
// remain = remain.toLowerCase();
// var com = first_name+ remain
// console.log(first_name)
// task one 
// var innn = [1,2,3,4,5,6,7,8,9,1,1,4,6]
// console.log(innn.length)

// let text = "JavaScript Learning";
// console.log(text.substring(4,10))
// console.log(text.slice(-11))

// let str = "Afzal is learning JS";
// console.log(str.length);

// let str = "Afzal loves JavaScript";
// console.log(str.slice(6));      
// console.log(str.substring(0,5));

// var ali = prompt(" enter your name ")
//  var all = ali.length;
//  for( var i =0; i <all;  i++ ){
//    if ( ali.slice(i, i+ 3) ===> "   "){
//       console.log("double space not allwo");
//       break
//  }
//  else
//    console.log("no space")
//  }

//  1 var str = prompt("Enter some text");
// 2 var numChars = str.length;
// 3 for (var i = 0; i < numChars; i++) {
// 4   if (str.slice(i, i + 2) === " ") {
// 5     
// alert("No double spaces!");
// 6     
// break;
// let str = "HelloWorld";
// console.log(str.slice(-6,-2));
// var firstChar = text.indexOf("World War II");
// console.log(firstChar)

// var yname = prompt("Enter city name ")
// // var nname = yname.length;
// for( var i = 0 ; i< yname.length; i++){
//    if (yname.slice(i, i+12) === "World War II"){
// console.log("find")
//    }
// }


// 1 for (var i = 0; i < text.length; i++) {
// 2   if (text.slice(i, i + 12) === "World War II") {
// 3     
// text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
// 4   }
// 5 }
// dice game
// console.log (Math.floor(Math.random()*totalNumberOfOutcome+1)+Shift)
                                          // 6-1+1  1
// console.log (Math.floor(Math.random()*Max-Min+1)+min)
// console.log(Math.floor(num*6)+1)

// var num = Math.random()
// console.log(Math.floor(num*6)+1)

// Number •	Number Guessing Game
// var num1 = Math.random()
// var num2 = (num1 *3)
// var num3 = Math.ceil(num2)
// var  num4 =prompt("enter a number")
// if (num3 > num4){
//    console.log("to high ")

// }
// else if(num3< num4){
//    console.log("To low")
// }
// else if (num3 == num4){
//    console.log(" matched")
// }
// console.log(num3)
// console.log(Math.round(5.756566))
// console.log(Math.ceil(5.756566))
// console.log(Math.floor(5.756566))
// console.log(num1)
// console.log(num1.toFixed(2))
// console.log(num3)


// OTP GRN formula
// console.log(Math.floor(Math.random()*(9999-1000+1))+1000)

// var  num = "344"
// var num2 = parseInt(num)
// console.log(num)
// // ignor decimal number
// var num = "54567.6566"
// var   num1 = parseInt(num)/
// console.log(num1)
// var num = "54567.6566"
// var   num1 = parseFloat(num)
// console.log(num1)
// var num = 54567.6566
// var   num1 = num.toString()
// console.log(num1)
// var num = "54567.6566"
// var   num1 = Number(num)
// console.log(num1)