const {addPost, deletePost, getPosts, getSinglePost, updatePost} = require('./actions/fetchActions')


getPosts()
getSinglePost(3)
addPost({id:2, title:'post title', body: 'some text' })
deletePost(2)
updatePost(6)

//npm i node-fetch@2 > fetching data from url in nodejs app
//npm i nodemon -g >to reload app after any chnages tool