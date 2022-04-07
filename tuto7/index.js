//https://parceljs.org/getting-started/webapp/
import $ from "jquery"
import fetch from "axios"

fetch.get("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.data)
.then((data)=>{
    data.forEach((post)=>{
        console.log(post.title)
        $(".list-group").append(`<li class="list-group-item  text-warning bg-secondary">
        <h1 class="fs-1 ">  ${post.title} </h1> 
          </li> `)
    })
})


console.log($('.list-group'))