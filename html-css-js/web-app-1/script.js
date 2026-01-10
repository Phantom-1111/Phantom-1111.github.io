let users=[];
function addUser()
{
    
    let name = document.getElementById('nametext').value
    let email = document.getElementById('emailtext').value
    let password = document.getElementById('pass').value
    let user = {name : name,email : email,password: password}
    users.push(user);
    showLoginForm();
    console.log(users);

}

function dispMessage()
{
    

    let email = document.getElementById("emailtext").value;
  let password = document.getElementById("Pass").value;
  let found = users.find(
    (element) => element.email === email && element.password === password
  );
  if (found) {
    lblMessage.innerHTML = "Welcome";
  } else {
    lblMessage.innerHTML = "Access Denied";
  }
}

function showLoginForm()
{
    let str =`
   
        <h3>Login Form</h3>
        <p><label id = "lblMessage"></label></p>
        
        <p><input type="text" id="emailtext" placeholder="Email Address"></p>
        <p><input type ="password" id="pass" placeholder="Password"></p>
        <p><button class="login-btn" onclick = "dispMessage()"> Login </button></p>
         
        
        <p><button class="reg-btn" onclick ="showRegisterForm()">Register</button></p>

    `
    root.innerHTML=str
}

function showRegisterForm()
{
    let str = `
    <h3>Registration Form</h3>
    <p><label id = "lblMessage"></label></p>
        <p><input type="text" id="nametext" placeholder="UserName"></p>
        <p><input type="text" id="emailtext" placeholder="Email Address"></p>
        <p><input type ="password" id="pass" placeholder="Password"></p>
        
        <p><button class = "submit-btn" onclick="addUser()">Submit</button>
        <p><button class="reg-btn" onclick ="showLoginForm()">Login</button></p>
    
    `
    root.innerHTML=str
}
