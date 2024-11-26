
document.getElementById("userForm").addEventListener("submit",async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  let x = 0;
  async function addUser(name, email, phone,x=0) {
    const url = "http://localhost:3000/users/add";
    const method = 'POST';

    try {
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone })
        });

        if (response.ok && x === 0) {
            console.log("User added successfully");
            fetchUsers(); // Assuming fetchUsers is a function that refreshes the user list
        } if (response.ok && x === 1){
          console.log("User added successfully");

        }
        else {
            console.log("Failed to add user");
        }
    } catch (error) {
        console.error("Error adding user:", error);
    }
}
addUser(name,email,phone,x)

})

async function fetchUsers() {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();

  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  const name = document.getElementById("name").value ="";
  const email = document.getElementById("email").value="";
  const phone = document.getElementById("phone").value="";


  
  users.forEach(user => {
    const div = document.createElement('div');
    div.textContent = `${user.name} (${user.email}) ${user.phone}  `;

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.onclick = async () => {
      const response = await fetch(`http://localhost:3000/users/${user.id}` , {method:'DELETE'});
      
    }

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.onclick = async () => {
        
        const ename = document.getElementById("name").value = user.name;
        const eemail = document.getElementById("email").value = user.email;
        const ephone = document.getElementById("phone").value = user.phone;
        
        await fetch(`http://localhost:3000/users/${user.id}` , {method:'DELETE'});
        addUser(ename,eemail,ephone,1)
        


     
    }
    div.appendChild(deletebtn);
    div.appendChild(editbtn)
    userList.appendChild(div);
    
  });
}
fetchUsers();