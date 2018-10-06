
var os = require('os')

const ld = require('lodash')
// var fs = require('fs')
// var myModule = require('./myModule.js')
var mathModule = require('./math.js')

var commandArgv = process.argv

// var userInfo = os.userInfo();
// var sysUserName = userInfo.username;

// fs.appendFile("myOutput.txt", `System Username:: ${sysUserName}`, function(error) {
//     if(error) throw error
//     console.log("File updated")
// });

// var greatestOf2 = mathModule.returnGreatestNo(7, 4);
// console.log(greatestOf2);
// console.log(myModule.myFunction())
// console.log(ld.camelCase("test input power"))


// var myArray = ['ABC', 'Abc', 2 , 2, 4, 'ABC']

// console.log(ld.uniq(myArray));
// console.log(myArray[1]);

//console.log(mathModule.sum(commandArgv[2], commandArgv[3]))

var getUserDetails = (callback) => {

    var user = {id:1, name:"srigin"};
    callback && callback(user)
}

var getMyUserOutput = getUserDetails((userObj)=> {
    console.log(userObj)
})


