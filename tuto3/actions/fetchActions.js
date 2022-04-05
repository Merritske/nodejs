const baseURL = 'https://jsonplaceholder.typicode.com'
const fetch = require('node-fetch')

module.exports = {
    getPosts: function(){
        fetch(`${baseURL}/posts`)
        .then(res => res.json())
        .then((data)=>{
            console.log(data)
        })
    },
    getSinglePost: function (id){
        console.log("get singel", id)
        fetch(`${baseURL}/posts/${id}`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
        })
    },
    addPost: function(post){
console.log("this is addPost method", post)
    },
    deletePost : function (id){
        console.log("delete method", id)
    },
    updatePost : function(id){
        console.log("update method", id)
    }
}