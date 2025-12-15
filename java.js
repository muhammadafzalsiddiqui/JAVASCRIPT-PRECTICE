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

var a2d = [

   [1,2,3],
   [1,5,9],
   [1,6,7],
]

console.log("jjjjj",a2d[2][1])
