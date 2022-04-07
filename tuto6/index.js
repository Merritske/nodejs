 var fs = require('fs')


 fs.readFile('./combolist.txt', 'utf-8', (err, res)=>{
  let arrayList = res.split("\r\n");
 //console.log(arrayList)
  arrayList.map((user)=>{
   
  fs.appendFile('./output.txt', `${user.split("\:")[0]}\n`
,'utf-8', (err)=>{
    console.log("saved")
}) }) 
 })

//of via een package speciaal geschreven om lijn per lijn data te zoeken

// var LineByLineReader = require('line-by-line'), //geimporteerde package
//     lr = new LineByLineReader('combolist.txt'); //datasource
//     lr.on('line', function(line){
//         console.log(line.split(":")[0])
// fs.appendFile('output.txt', `${line.split(":")[0]}\n`, "utf-8", (err)=>{
//     console.log("saved")
// })
//  