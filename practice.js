/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var arr = [10,20,30];
// Do not edit the code above.

/*
  Create a function named 'first' that is given 'arr' as an argument.
  Return the first item in the given array.
*/

function first(arr) {
  return arr[0];
}



////////// PROBLEM 2 //////////

// Do not edit the code below.
var arr = [40,50,60];
// Do not edit the code above.

/*
  Create a function named 'last' that is given 'arr' as an argument. 
  Return the last item in the given array.
*/

function last(arr) {
  return arr[arr.length-1];
}



////////// PROBLEM 3 //////////

// Do not edit the code below.
var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
// Do not edit the code above.

/*
  Create a function named 'looper' that is given family as it's only argument. 
  Loop through the given array and alert every item in the array.
*/

function looper(family) {
  for (var i = 0; i < family.length; i++) {
    alert(family[i]);
  }
};



////////// PROBLEM 4 //////////

// Do not edit the code below.
var letters = ['A', 'B', 'C', 'D', 'E'];
// Do not edit the code above.

/*
  Write a function called reversedLooper that is given letters as it's only argument. 
  Loop through the given array backwards alerting every item in the array starting at the end.\
*/

function reversedLooper(letters) {
  for (var i = letters.length-1; i >= 0; i--){
    alert(letters[i]);
  }
}



////////// PROBLEM 5 //////////

// Do not edit the code below.
var nums = [1,2,3,6,22,98,45,23,22,12];
// Do not edit the code above.

/*
  Write a function named evenFinder that is given nums as it's only argument.
  Return an array that contains the even numbers from the nums array.
*/

function evenFinder(nums) {
  var newArr = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(nums[i])
    }
  }
  return newArr;
}

  /// add that current number to our new array
  /// at the end of the function, return the new array.







/////////////////////// EXTRA PRACTICE PROBLEMS BELOW ////////////////////
////////// MOVE ONTO NEXT SECTION BEFORE WORKING ON THESE ////////////////







////////// PROBLEM 6 //////////

// Do not edit the code below.
var numbersArray = [1,2,34,54,55,34,32,11,19,17,54,66,13];
// Do not edit the code above.

/*
  Write a function called divider that is given one argument, numbersArray.
  Have divider return an Array with the first item in the array being the evens array (all the even values from numbersArray) and the second item in the Array being the odds array (all the odd values from numbersArray).
*/

function divider(numbersArray){
  let numsEven = [];
  let numsOdd = [];
  let numsTotal = [numsEven, numsOdd];
  for (var i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) {
      numsEven.push(numbersArray[i]);
    }
    else {
      numsOdd.push(numbersArray[i]);
    }
  };
  return numsTotal;
}
console.log(divider(numbersArray));



////////// PROBLEM 7 //////////

// Do not edit the code below.
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * 30);
};
// Do not edit the code above.

/* 
  var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
  Above you're given a function that will return a random number between 0 and 30. There is also a commented out array full of numbers to help you visualize what your function will be receiving.
  Write a function named finder that will take in an array as an argument.
  It will then  get a random number (by invoking getRandomArbitrary).
  Loop through the array to see if that random number is in the array. 
  If it is, return true, if it's not, return false
*/

//write a function named finder with an array param
//give the function a random number using var above
//for loop, checking for the random number
// if statement - if true, return true, if not, false.

function finder(array) {
  let flagger = false;
  let randomNum = getRandomArbitrary();
  for (var i = 0; i < array.length; i++) {
    if (array[i] === randomNum) {
      flagger = true
    }
  }
  return flagger;
}



////////// PROBLEM 8 //////////

// Do not edit the code below.
var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
// Do not edit the code above.

/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list and adding new items to our list.

  //Write a function called removeItem //that is given two arguments, the first is myGroceryList, and the second is an item to remove from myGroceryList. 
  If the second argument (or the item to add or remove) matches an item in myGroceryList, remove that item from the your grocery list and return the new, updated grocery list.

  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list. 
  In addItem add the item you passed in to myGroceryList then return the new, updated grocery list.

  In both removeItem and addItem check to see if the 'myGroceryList' and 'item' arguments are truthy.
  If they are not, return an empty array.

  Here are some examples of calling your functions and what should be returned:
  removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
  addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
  removeItem(myGroceryList) --> [];
  addItem() --> [];
*/

//make function called removeItem
//give function 2 arguments: myGroceryList, item
//if param2 matches an item in param1, remove that item from myGroceryList using .splice and .indexOf(item)

//then, write ANOTHER FUNCTION called addItem
//give addItem function 2 arguments, #1 is myGroceryList, and #2 is 'item' to add to grocery list using .push
//in both functions, check to see if the arguments are 'truthy'
  //if they are not, return an empty array.



////////// PROBLEM 9 //////////

/*
  Write a function /// called maker /// that creates an array, fills that array with numbers from 1 to 215, then returns the array.
*/

//Code Here

///make a function called maker (it doesn't take in any parameters)
///in the function, make an empty array
///make a for loop that runs 250 times
///each time it runs, it adds a new number with .push to the new array
///each number that gets pushed in is one bigger than the last number  
///finish by returning the new array



////////// PROBLEM 10 //////////

// Do not edit the code below.
var numbers = [5, '9', 16, 19, '25', '34', 48];
// Do not edit the code above.

/*
  Write a function /// called addTen /// that is given 'numbers' as it's only argument. ///
  Return a new array after adding ten to each item in numbers. ///
  *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]
*/
  
//Code Here

///write a function called addTen
///it takes numbers as a parameter
///it makes a new empty array
///we coul use .forEach() to add 10 to the number and then .push that new number to the new array
///finish by returning the new empty array



////////// PROBLEM 11 //////////

// Do not edit the code below.
var num1 = Math.floor(Math.random() * 30);
var num2 = Math.floor(Math.random() * 30);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
// Do not edit the code above.

/*
  Above is some code that adds a random number of values to both arr1 and arr2.
  Write a function called 'longer' that is given arr1 and arr2 as it's only arguments. 
  Return the array which is longest.
*/

//Code Here



/*
  As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).
  'both' should return a new array with the matching numbers found in both arr1 and arr2.

  Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

//Code Here



////////// PROBLEM 12 //////////

// Do not edit the code below.
var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};
// Do not edit the code above.

/*
  Above you're given an empty array and four variables containing objects. 
  Fill the devMountainEmployees array with those four objects. 
  After that console.log the length of the Array and make sure that it's equal to 4. 
*/

//Code Here



/*
  Now let's say Cahlan has a mental breakdown and has to take a leave of absence to 'find himself'.
  Loop through your devMountainEmployees until you find cahlan, then remove him from the array.
*/

//Code Here



////////// PROBLEM 13 //////////


/*
  A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects) of Data is to have an Array full of objects. 
  Create an empty array called users.
*/

//Code Here



/*
  Now add three user objects to your users array. Each user object should contain the following properties. name, email, password, username.

  Include the following user1 object as one of the objects in your array.
*/

// Do not edit the code below.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniteLoop'
};
// Do not edit the code above.

//Code Here



/*
  Now you have a very common data structure. 
  Twitter is a good use case.
  It's easy to imagine that your followers list on Twitter is an Array full of objects and those objects contain properties about the specific person you follow.

  Now let's say that Tyler decided to delete his account.
  Loop through your array of objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
  Once you find the particular index he's located in, delete him from the array.
*/

//Code Here



/*
  The activity we just did is very much how data works in 'the real world'.
*/
