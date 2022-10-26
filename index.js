import fetchData from "./api.js";
import { populateUserTable } from "./users.js";
import { showUserPosts } from './posts.js';

async function main() {
    //Fetch data
    const [users, posts] = await fetchData();
    //Click handler which shows a users' posts
    const handleUserSelect = (id, username) => {
        console.log(id, username);
        const userPosts = posts.filter((post) => post.userId === Number(id));
        showUserPosts(username, userPosts);
    }
    //Populate table with data
    populateUserTable(users, handleUserSelect);    
}

main();