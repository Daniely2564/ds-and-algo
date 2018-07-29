const fs = require('fs');
function readImage(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./SAT.jpg',(err,data)=>{
            if(err) return reject(err);
            resolve(data);
        })
    })
}

function writeJSON(data){
    return new Promise((resolve,reject)=>{
        let buf = new Buffer.from(data);
        fs.writeFile('SAT.json',JSON.stringify(buf.toJSON(),undefined,2),'utf-8',(err,file)=>{
            if(err) return reject(err);
            resolve(file);
        })
    })
}
function readJSON(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./SAT.json',(err,data)=>{
            if(err) return reject(err);
            resolve(JSON.parse(data).data);
        })
    });
}
// readImage()
//     .then((data)=>{
//         writeJSON(data)
//             .then((result)=>{
//                 console.log(result);
//             })
//     })
// ;

readJSON()
    .then((data)=>{
        let rbg = [];
        for(let i = 0; i<data.length;i+=3){
            rbg.push([data[i],data[i+1],data[i+2]]);
        }
        console.log(rbg.length/2200);
    })