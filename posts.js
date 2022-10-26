const postSection = document.querySelector("section#posts");

export function showUserPosts(username, posts) {
    const addUserPost = ({ id, title, body }) => {
        const card = document.createElement("div");
        const cardTitle = document.createElement("div");
        const cardBody = document.createElement("div");
        card.className = "post"
        card.id = id
        cardTitle.className = "post-title"
        cardTitle.textContent = title;
        cardBody.className = "post-body"
        cardBody.textContent = body;
        card.appendChild(cardTitle);
        card.appendChild(cardBody);
        postSection.appendChild(card);
    }

    //Clear previous posts shown
    postSection.innerHTML = "";
    //Add new header for posts section
    const postHeader = document.createElement("h3");
    postHeader.textContent = `Showing posts for ${username}`;
    postSection.appendChild(postHeader);
    //For each post, create and append post card to post section
    for(let post of posts) {
        addUserPost(post);
    }
}