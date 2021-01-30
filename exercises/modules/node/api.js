


const {users, 
       posts,
      } = require('./data')

const getUserById = (id, cb) => {
    setTimeout(() => {
        const user =  users.find(user => user.id === id)
        cb(user)
    }, 150)
}

const getPostsForUser = (userId, cb) => {
    setTimeout(() => {
        const userPosts = posts.filter(post => post.createdBy === userId)
        cb(userPosts) 
    }, 150)
}

module.exports = {
    getUserById, 
    getPostsForUser,
}

// window.App.getUserById = (id, cb) => {
//   // simulate API call
//   window.setTimeout(() => {
//     const user = window.App.users.find(user => user.id === id)
//     cb(user)
//   }, 150)
// }

// window.App.getPostsForUser = (userId, cb) => {
//   // simulate API call
//   window.setTimeout(() => {
//     const posts = window.App.posts.filter(post => post.createdBy === userId)
//     cb(posts)
//   }, 150)
// }

