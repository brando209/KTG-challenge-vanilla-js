function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
}

function fetchPosts() {
    return fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json());
}

export default function fetchData() {
    return Promise.all([fetchUsers(), fetchPosts()]);
}