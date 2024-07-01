// defining variables by using "var" and "let"
// let first = "jerk";
// console.log(first);
// var sec = "joke";
// console.log(sec);
// defining alert message
// let Alert = "Muzammil kya h?";
// alert(Alert);

// =================== Question type========================
// Declaring two variables : Admin and Name.
// Assign the Value "John" to Name.
// Copy the value of from name and paste to Admin.
// Show the value of Admin using alert (must output "Admin")

// let Admin;
// let Name;
// name="Bhadwa!!!";
// Admin=name;
// alert(Admin)

// let ff = "bail bhi h!!";
// alert(ff);

// =========================Understanding Constants==========================
// const birthday="03.12.2004";
// birthdy="13.12.2004"
// console.log(birthday);

// =======================Data types in JS====================================

// 1) Number:
// let n1 = 12;
// let n2 = 1.22;
// console.log(n1,n2)

// 2) Bigint : It's nthng but the number which have laarge integer (might indefinite)
// let bigint = 1111111111111111n;
// console.log(bigint)

// 3) String :
// let norm = "str";
// let int = "1 + 2";
// let single ='Single quotes are ok toooooo'
// console.log(norm)
// console.log(int)
// console.log(single)

// =======================We can embedded through String==============================

// let s1 = `${norm} is a text type`;
// console.log(s1);
// console.log(`the answer of 1 + 3 = ${1+3}`);

// 4) Boolean :
// let Greater = 4<1;
// alert(Greater);

// 5) Null:
// let age = null;
// alert(age);

// 6) Undefine:
// let data;   
// alert(data);

// 7) Object (Uses for more Complex Data Structures)
// 8) Symbol (Uses for Unique Identifiers)

// ==========================Basic Operators=============================

// Basic operators 

// addition 
// let apples = "2";
// let oranges = "3";
// alert( apples + oranges );

// 1.arithmatic operator 
// a1 = 20;
// a2 = 30;
// a3 = a1 + a2;
// console.log(a3);

// 2.assignment operator 
// a1 = 20;  //a1 = 20 + 30
// a1 += 30;
// console.log(a1);

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// alert( n ); // 14

// let x = 1;
// x = -x;
// alert( x ); //  unary negation was applied

// let z = 36, y = 35;
// alert( z + 50 ); 
// division  8 / 3
// alert( 8 % 3 ); 

// exponentional 2² 
// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16

// '1' is string ...therefore value is 12
// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"

// alert(2 + 2 + '1' ); 

// 3.string operator 
// let s = "my" + "string";
// alert(s); // mystring

// 4.increment and decement operator 
// ++x pre-increment ...increment x by 1 then return x 
// x++ post-increment ...return x than increment by 1
// --x pre-decrement ...decrement x by 1 then return x
// x-- post-decrement ...return x than decrement by 1

// let f;
// f = 10;
// console.log(++f);  //11
// console.log(f);     //11

// let g;
// g = 12;
// console.log(g++);  //12
// console.log(g);     //13

// let h;
// h = 10;
// console.log(--h);  //9
// console.log(h);     //9

// let i;
// i = 12;
// console.log(i--); //12
// console.log(i);  //11

// 5.logical operator
// && Logical AND: true if both the operands/boolean values are true, else evaluates to false
// || Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false
// ! Logical NOT: true if the operand is false and vice-versa.


// AND && 
// const a = true, b = false;
// const c = 4;
// console.log(a && a); // true
// console.log(a && b);  // false
// console.log((c > 2) && (c < 2)); // false

// || OR 
// const a = true, b = false, c = 4;
// console.log(a || b); // true
// console.log(b || b); // false
// console.log((c>2) || (c<2)); // true

// ! NOT 
// const a = true, b = false;
// console.log(!a); // false
// console.log(!b); // true

// url 
// https://javascript.info/operators

// 6. comparison operator 
// x=5
// x =="5"  //true
// x === "5" //false

// url 
// https://www.w3schools.com/js/js_comparisons.asp

// 7.condition operator 
let company = prompt('which company created javascript?');
if(company == 'mai'){
  alert("you are right");
}else{
  alert("you are wrong");
}

company == 'nestscape' ? console.log("you are right") :  console.log("you are wrong");

// functions 
// url 
// https://javascript.info/function-basics


// Array 
// const fruites = ["Bannana", "Mango", "Orange", "Apple"];
//       index..... 0           1         2         3
// length 4


