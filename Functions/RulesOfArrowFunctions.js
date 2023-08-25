// JavaScript Arrow Function


// Note :
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;



// Before Arrow:


hello = function() {
  return "Hello World!";
}


// With Arrow Function:
hello = () => {
  return "Hello World!";
}


//Arrow Functions Return Value by Default:

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

// Example :
  
hello = () => "Hello World!";


// Note: This works only if the function has only one statement.

// If you have parameters, you pass them inside the parentheses:

// Arrow Function With Parameters:
                                     hello = (val) => "Hello " + val;

// In fact, if you have only one parameter, you can skip the parentheses as well:

// Arrow Function Without Parentheses:
                                            hello = val => "Hello " + val;