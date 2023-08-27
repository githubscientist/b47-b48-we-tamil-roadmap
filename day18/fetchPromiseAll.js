const urls = [
    `https://jsonplaceholder.typicode.com/users/`,
    `https://jsonplaceholder.typicode.com/posts/`,
    `https://jsonplaceholder.typicode.com/comments/`
];

const fetchPromises = urls.map(url => fetch(url));

Promise.all(fetchPromises)
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(dataArray => {
        console.log(dataArray);
    })
    .catch(error => {
        console.log(error);
    });