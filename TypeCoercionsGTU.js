// Primitive and Reference Type Coercions - GTU 01
// Please try to guess, test, and then understand following examples:
// primitives
console.log(Number('0x77') === 0x77)  // false     //true
console.log(Number('077') === 077 )  // true     //false
console.log(Number(' 12')) // 12       Number('1 2')
console.log(isNaN(' ')) // false
console.log(0 === +0) // true
console.log(+0 === -0 ) // true
console.log(1 / '2')  // 0.5
console.log(1 / 0 ) // infinity 
console.log(0 / 0)  // 1    // NaN
console.log(+true ) // 1
console.log(+false ) // 0
console.log(+null)   //   0
console.log(+undefined) // NaN
console.log(typeof 0x77)
// operators
// Suppose that

const a = { 
  valueOf() { 
    return 224; 
  }, 
};  


const b = {      // const b = "hey"
  valueOf() { 
    return "hey"; 
  }, 
};  

const c = { 
  valueOf() { 
    return new String("some"); 
  }, 
};  

const d = { 
  toString() { 
    return 22; 
  }, 
};  


const f = { 
  toString() { 
    return new Number(5); 
  }, 
}; 


// and suppose that e isn't declared
// binary + operator

null + undefined   //  + NaN,  == true, === false,   < false,  > false, >= true, <= true
null + true   // 0 + 1 = 1   // - -1,  * 0, / 0, % 0, == false, === false, < true, > false, >= false, <= true
null + false  // 0 + 0     // - 0,  * 0, / NaN, % NaN, == false, === false, < false, > false, >= true, <= true
undefined + true   // NaN + 1 = NaN //  == false, === false, < false, > false, >= false, <= false
undefined + false  // NaN + 0 = NaN  //  == false, === false, < false, > false, >= false, <= false
undefined + 5   // NaN + 5 = NaN  //  == false, === false, < false, > false, >= false, <= false
true + false  // 1 + 0  // - 1,  * 0, / Infinity, % Infinity, == false, === false, < false, > true, >= true, <= false
true + 2  // 3 // - -1,  * 2, / 0.5, % 1, == false, === false, < true, > false, >= false, <= true
false + 4  // 4  // - -4,  * 0, / 0, % 0, == false, === false, < true, > false, >= false, <= true
false + NaN  // NaN //  == false, === false, < false, > false, >= false, <= false
5 + 3  // 8 
5 + NaN   // NaN //  == false, === false, < false, > false, >= false, <= false
'hello' + NaN  // NaN //  == false, === false, < false, > false, >= false, <= false
'hello' + a + b + c + d + e + f  // + -> "hello224NaNNaN22NaN5" // - , * , / , % ,  -> NaN // == , === ,-> false // > ,>= , -> false // < , <=, -> true //

// try the same also for binary -, *, /, %, ==, ===, <, >, >=, <= operators as you did for binary + operator
// unary - operator

 -([]) // -> 0  // []++ -> 1 // ++[] -> -1 // []-- -> -1 // --[] ->  1               
 -([2]) // -> -2 // []++ -> -1 // ++[] -> -3 // []-- -> -3 // --[] ->  -1                            
 -([2, 3]) // -> NaN    
 -(function() { }) // -> NaN    
 -(a) // -> -224  // ++ , -- ->  TypeError
 -(b) // -> NaN // ++ , -- ->  TypeError
 -(c) // -> -1  // ++ , -- ->  TypeError 
 -(d) // -> NaN // ++ , -- ->  TypeError
 -(e) // -> NaN // ++ , -- ->  TypeError
 -(f) // -> -5  // ++ , -- ->  TypeError

// test the same also for b, c, d, e and f
// try the same also for both postfix and prefix ++ and -- operators as you did for unary - operator
// postfix and prefix ++ & -- operators

// . for each one of a, b, c, d, e, f try the following console.log(a, a++, a); &
// console.log(a, ++a, a);

// . do the same also for -- operator

// ? operator

 1 ? 234 : 32 // 234

//  for each one of a, b, c, d, e, f try the following 

a[a.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() // -> a["valueOf"]
b[b.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() // -> b["valueOf"]
c[c.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() // -> c["valueOf"]
d[d.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() // -> d["toString"]
e[e.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() // -> e["toString"]
f[f.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']() // -> f["toString"]

// instanceof operator

 null instanceof Object // -> false
 true instanceof Boolean // -> false
false instanceof Boolean // -> false
1 instanceof Number // -> false
NaN instanceof Number // -> false
'hello' instanceof String // -> false
(function () { }) instanceof Function // -> true

// in operator

 'valueOf' in null // -> false
 'valueOf' in undefined // -> false
 'valueOf' in true // -> false
 'valueOf' in 1 // -> false
 'valueOf' in 'toString' // -> false

// delete operator

 delete ({}).valueOf
 delete 1
 delete a.x
 a.y = 3; console.log(delete a.y);
 delete f

