const userTable = document.querySelector("table#users");

export function populateUserTable(users, clickHandler = () => {}) {
    const addUserRow = ({ id, name, username, email }) => {
        const userRow = document.createElement("tr");
        const userNameCell = document.createElement("td");
        const fullNameCell = document.createElement("td");
        const emailCell = document.createElement("td");
        userNameCell.textContent = username;
        fullNameCell.textContent = name;
        emailCell.textContent = email;
        emailCell.id = "email-col";
        userRow.className = "user-row";
        userRow.id = id;
        userRow.onclick = () => clickHandler(id, username);
        userRow.appendChild(userNameCell);
        userRow.appendChild(fullNameCell);
        userRow.appendChild(emailCell);
        userTable.querySelector("tbody").appendChild(userRow);
    }

    for(let user of users) {
        addUserRow(user);
    }
}