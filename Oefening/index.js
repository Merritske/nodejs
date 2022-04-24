#!/usr/bin/env node
console.log("merritske@gmail.com")

  
var express = require('express');
var app = express();
var path = require('path');
require("dotenv").config()

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));    
});

app.get('/current', function(req, res){
    
    res.send(
        `
        #######################################
                     AN VERBEECK 
        #######################################
        <br/>
       <a href= "https://portfolio-merritske.vercel.app/" style="margin: 50px" >  https://portfolio-merritske.vercel.app/ </a>
        `
            
    )
    
});

app.get('/skills', function(req, res){
    res.send(
`
#########################################
SOFTWARE DEVELOPER
#########################################

<p style="margin: 20px">
<ul style="list-style-type:disc; ">
<li style="margin: 20px">
competenties: leergierig, creatief, betrouwbaar, kan goed luisteren  
</li>
<li style="margin: 20px">
kennis: front-end programma's en een basis van back-end, grafische computerprogramma's, verschillende talen 
</li>
<li style="margin: 20px">
werkervaring: onderwijs, administratie, verkoop
</li>
<li style="margin: 20px">
diploma's: master in de productdesign
</li>
<li style="margin: 20px">
getuigschriften: front-end development, digital coordinator
</li>
<li style="margin: 20px">
hobbies: muziek, literatuur, natuur
</li>
</ul>
</p>
`)
});

app.listen(process.env.PORT || 1337, () => {
    console.log('running...' + process.env.PORT || 1337);
});


       
 



