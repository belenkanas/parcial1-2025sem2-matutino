const API_USERS = "http://localhost:3000/users";

//Mostrar todos los usuarios en la página
async function showUsers(listaUsuarios){
    try{
        const response = await fetch(API_USERS);
        const USERS = await response.json();

        const usersList = document.getElementById("users");
        let listUsers = "";
        for (const user of listaUsuarios) {
            listUsers += 
            `<li>${user.name} - ${user.role} - ${user.email}
            <button id="promote">Promote</button>
            <button id"demote">Demote</button>
            <button id="delete">Delete</button>
            </li>`;
        }
        usersList.innerHTML = listUsers;
    }    catch(error){
        console.error("Error al mostrar los usuarios:", error);    
    }
    
}

document.addEventListener('DOMContentLoaded', showUsers(USERS.users));

//Agregar usuario a la lista
async function addUser(name, email, role){
    try{
        const response = await fetch(API_USERS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({ name, email, role })
            })
        if (response.ok) {
            throw new Error("Error en la solicitud");
        }
        const newUser = await response.json();
        USERS.users.push(newUser);
        showUsers(USERS.users);
    }
    catch(error){
        console.error("Error al agregar el usuario:", error);    
    }
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;
    addUser(name, email, role);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("role").value = "Admin";
}); 

//Botones para cambiar rol:
const demoteButton = document.getElementById("demote");
demoteButton.addEventListener("click", () => {
    demoteUser();
});

const promoteButton = document.getElementById("promote");
promoteButton.addEventListener("click", () => { 
    promoteUser();
});

async function promoteUser() {
    try{
        const response = await fetch(API_USERS, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({role})
            });
        if (response.ok) {
            throw new Error("Error en la solicitud");
        }
        const updatedUser = await response.json();
        const index = USERS.users.findIndex(u => u.id === updatedUser.id);
        if (index !== -1) {
            USERS.users[index] = updatedUser;
            showUsers(USERS.users);
        }
    }catch(error){
        console.error("Error al promover el usuario:", error);
    }
}

async function demoteUser() {
    try{
        const response = await fetch(API_USERS, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({role})
            });
        if (response.ok) {
            throw new Error("Error en la solicitud");
        }
        const name = USERS.users.name;
        const updatedUser = await response.json();
        const index = USERS.users.findIndex(u => u.id === updatedUser.id);
        if (index !== -1) {
            USERS.users[index] = updatedUser;
            showUsers(USERS.users);
        }   
    }catch(error){
        console.error("Error al degradar el usuario:", error);
    }
}

async function deleteUser() {
    try{
        const response = await fetch(`${API_USERS}/${name}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'}
            });
        if (response.ok) {
            throw new Error("Error en la solicitud");
        }
        const USERS = await response.json();
        if (USERS.users.length === 0) {
            console.log("No hay usuarios para eliminar.");
            return;} 
        
    }catch(error){
        console.error("Error al eliminar el usuario:", error);
    }
}

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
    deleteUser();
});