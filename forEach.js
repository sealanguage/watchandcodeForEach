//runWithDebugger code
function logTenNumbers () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}
function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
}
runWithDebugger(function logTenNumbers () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
});

//setTimeout code
//simple text based alarm clock

setTimeout(function( ) { 
    console.log('wake up Gordon');
        }, 
    5000);
    
//  forEach code
var students = ['jonathan', 'jenny', 'elliot'];
// one way to log the names
function logName(name) {
    console.log(name)''
}
// a different way to do the same thing
for (var i = 0; i < students.length; i++) {
    logName(students[i]);
}
// simple way to do the same thing using forEach and adding the function inside the parens
// forEach is a build in function that works on arrays
students.forEach(logName)

//  yet another way to do this
students.forEach(function logName(name) {
    console.log(name);
})

//  write forEach function by hand
function forEach(myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
}
forEach(students, function(student) {
    console.log(student);
})
