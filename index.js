const express = require('express');
const app = express();
require('dotenv').config();
const backup = require('./backup');
const cmd = require('node-cmd');
const schedule = require('node-schedule');

// var spawn = require('child_process').spawn,
// ls = spawn('cmd.exe', ['/c', 'dump.bat']);

// ls.stdout.on('data', function (data) {
// console.log('stdout: ' + data);
// });

// ls.stderr.on('data', function (data) {
// console.log('stderr: ' + data);
// });

// ls.on('exit', function (code) {
// console.log('child process exited with code ' + code);
// });

// app.get('/', function(req, res){
//     cmd.get(
//         // `mongodump --db=${process.env.DB} --archive=./rbac.gzip --gzip`
//         `mongodump --host=localhost --port=27017 --db=${process.env.DB} --archive=./${process.env.DB}.gzip --gzip`,
//         // or you can use the uri ex: db_uri=mongodb://localhost:27017/posts
//         // `mongodump --uri=${process.env.db_uri}  --out=./backup`,
//         function (err, data, stderr) {
//             if (err) return rej("Backup Error");
//             const file = `${__dirname}/polio.gzip`;
//             res.download(file); 
//             // return res.json(`${process.env.DB }'_'${Date.now()}.gzip`);
//         }
//     )
//     // Set disposition and send it.
//   })

/**
 * Demo backup every minutes.
 * Remove the params you will get default timer at 2AM daily.
 */

backup('* * * * * *').then(r=>{
    console.log("dataset",r);
}).catch(e=>{
    console.log(e);
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});