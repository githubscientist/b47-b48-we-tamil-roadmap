// function getUserDetails(userID) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
//         .then(response => response.json())
//         .catch(error => console.error(error));
// }

// function getUserPosts(userID) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
//         .then(response => response.json())
//         .catch(error => console.error(error));
// }

// function getUserComments(postID) {
//     return fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postID}`)
//         .then(response => response.json())
//         .catch(error => console.error(error));
// }

// function fetchData() {
//     // get the user details with the userid as an argument
//     getUserDetails(1)
//         .then(users => getUserPosts(users.id))
//         .then(posts => getUserComments(posts[0].id))
//         .then(comments => console.log(comments));
// }

/*
    API Links: 

    Reference Guide: https://jsonplaceholder.typicode.com/guide/

    Access all the users: https://jsonplaceholder.typicode.com/users

    Access a specific user: 
        https://jsonplaceholder.typicode.com/users/1
        https://jsonplaceholder.typicode.com/users/2
    
    Access all the posts:
        https://jsonplaceholder.typicode.com/posts

    Access all the posts posted by a specific user: 
        https://jsonplaceholder.typicode.com/posts?userId=1
        https://jsonplaceholder.typicode.com/posts?userId=2
    
    Access all the comments:
        https://jsonplaceholder.typicode.com/comments
    
    Access all the comments of a specific post:
        https://jsonplaceholder.typicode.com/comments?postId=1
        https://jsonplaceholder.typicode.com/comments?postId=2
*/

async function fetchData() {
    let userId = 1;

    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let user = await response.json();

        let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        let posts = await postsResponse.json();

        console.log(posts);
        let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${posts[0].id}`);
        let comments = await commentsResponse.json();

        console.log(comments);
    } catch (error) {
        console.log('error fetching data', error);
    }
}