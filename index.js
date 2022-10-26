import fetchData from "./api.js";
import { populateUserTable } from "./users.js";

async function main() {
    const [users, posts] = await fetchData();

    populateUserTable(users, (id, username) => { console.log(id, username) });    
}

main();