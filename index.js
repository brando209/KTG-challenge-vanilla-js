import fetchData from "./api.js";

async function main() {
    const [users, posts] = await fetchData();
    console.log(users, posts);
}

main();