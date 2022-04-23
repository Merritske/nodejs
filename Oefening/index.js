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
       <a href= "https://portfolio-merritske.vercel.app/">  https://portfolio-merritske.vercel.app/ </a>
        `
            
    )
    
});

app.get('/skills', function(req, res){
    res.send(
`
#########################################
SOFTWARE DEVELOPER
#########################################
<br/>

competenties: leergierig, creatief, betrouwbaar, kan goed luisteren
<br/>
kennis: front-end programma's en een basis van back-end, grafische computerprogramma's, verschillende talen 
<br/>
werkervaring: onderwijs, administratie, verkoop
<br/>
diploma's: master in de productdesign
<br/>
getuigschriften: front-end development, digital coordinator
<br/>
hobbies: muziek, literatuur, natuur
<br/>

`)
});

app.listen(process.env.PORT || 1337, () => {
    console.log('running...' + process.env.PORT || 1337);
});


       
 



