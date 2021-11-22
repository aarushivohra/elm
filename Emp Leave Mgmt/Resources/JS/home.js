//JS for home page
let signUp=document.getElementById('signup-btn').addEventListener('click', validateSignUp);

function validateSignUp(){
    var fname=document.forms['signUpForm']['fname'];
    var lname=document.forms['signUpForm']['lname'];
    var uname=document.forms['signUpForm']['uname'];
    var pass=document.forms['signUpForm']['pass'];
    var flag=true;
    if(fname.value=="")
    {
        console.log(fname);
        alert('Please enter your first name');
        fname.focus();
        flag=false;
    }
    if(lname.value=="")
    {
        alert("Please enter your last name"); 
        lname.focus(); 
        flag=false; 
    }
    if(uname.value=="")
    {
        alert("Please enter a valid username"); 
        uname.focus(); 
        flag=false; 
    }
    if(pass.value=="")
    {
        alert('Please enter a valid password.');
        pass.focus();
        flag=false;
    }
    else
    {   
        console.log(pass.length);
        if(pass.length<6)
        {
            alert('Password must be atleast 6 characters.');
            flag=false;
        }    
    }
    if(flag===true)
    {
        alert('Signed up successfully!');
        return true;
    }
    return false;
}

if(signUp===true)
{
    alert('Signed up successfully!!');
}

function validateLogin()
{
    var pass=document.forms['loginForm']['pass'];
    var uname=document.forms['loginForm']['uname'];
    var flag=true;
    if(uname.value=="")
    {
        alert('Enter a valid username.');
        flag=false;
    }
    if(pass.value=="")
    {
        alert('Enter a valid password.');
        flag=false;
    }
    if(flag===true)
    {
        location.replace('file:///home/aarushi/Documents/sem2/web%20designing/Emp%20Leave%20Mgmt/Dashboard/dashboard.html');
    }
}

function validateFeedback()
{
    var uname=document.forms['feedback']['uname'];
    var pass=document.forms['feedback']['pass'];
    var feed=document.forms['feedback']['feedback'];
    var flag=true;
    if(uname.value=="")
    {
        alert('Enter a valid username.');
        flag=false;
    }
    if(pass.value=="")
    {
        alert('Enter a valid password.');
        flag=false;
    }
    if(feed.value=="")
    {
        alert('Enter some feedback.');
        flag=false;
    }
    if(flag===true)
    {
        alert('Feedback sent successfully!');
    }
}




function toggleClass(selectedVal)
{
    for (var i = 0; i < 5; ++i) {
        if (selectedVal == i) {
            document.querySelector('#tab-' + i).className = "";
            document.querySelector('#tab-' + i).className = "elm-container p-3 p-lg-5 d-flex align-items-center";
            

        }
        else {
            document.querySelector('#tab-' + i).className = "";
            document.querySelector('#tab-' + i).style.display = 'none';
            document.querySelector('#nav-'+i).className ="nav-link";
        
        }
    }
}

document.getElementById('nav-0').addEventListener("click",function(){
    toggleClass(0)
}); 
document.getElementById('nav-1').addEventListener("click", function(){ 
    toggleClass(1)
}); 
document.getElementById('nav-2').addEventListener("click", function(){ 
    toggleClass(2)
}); 
document.getElementById('nav-3').addEventListener("click", function(){ 
    toggleClass(3)
}); 
document.getElementById('nav-4').addEventListener("click", function(){ 
    toggleClass(4)
}); 

toggleClass(0);



