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
    //a=10
    //b=20
    //c=a+b
    //alert("Message")


    /*const user = {
        name :"Jhon",
        email: "jhon@gmail.com",
        password:"1234",
    };
    console.log(user.name)*/

    /*const arr =["Maths","Science"];
    console.log(arr[1])
    arr.push("English")
    console.log(arr)
*/
    users = [
        {
        name :"Jhon",
        email: "jhon@gmail.com",
        password:"1234",
        },
        {
        name :"cena",
        email: "cena@gmail.com",
        password:"4321",
    }
    ]

    //alert(document.getElementById("log").value)
    //lblMessage.innerHTML = document.getElementById("email").value + "-" + document.getElementById("pass").value

    /*let email = document.getElementById('emailtext').value
    let password = document.getElementById('pass').value
    if(email==="@kitsw" && password==="1234")
    {
        lblMessage.innerHTML = "Welcome";

    }
    else
    {
        lblMessage.innerHTML = "Access denied";
    }*/
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
