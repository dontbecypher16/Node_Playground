/*
readFile and readFileSync to read json files.
/////////// synchronously: loaded one at a time.
const fs = require('fs');

let rawdata = fs.readFileSync('student.json');
let student = JSON.parse(rawdata);
console.log(student);


//////// aysnchronously: immediately loads and has a callback function with file to be read in arguments.
const fs = require('fs');

fs.readFile('student.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});

console.log('This is after the read call');

///////////////////////////////////////
/*
writeFile and writeFileSync to json files.
2-3 parameters: path of file to write data to, the data to write and an optional parameter.

const fs = require('fs');

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(student);
fs.writeFileSync('student-2.json', data);
//////////////////////////


const fs = require('fs');

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(student, null, 2);

fs.writeFile('student-3.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');



*/


