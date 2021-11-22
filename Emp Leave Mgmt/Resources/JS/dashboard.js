//JS for home page

document.getElementById('show-apply').addEventListener('click', function(){
    toggleClass(1);
});

document.getElementById('show-view').addEventListener('click', function(){
    toggleClass(2);
});

document.getElementById('nav-3').addEventListener('click', function(){
    location.replace('file:///home/aarushi/Documents/sem2/web%20designing/Emp%20Leave%20Mgmt/Home/home.html');
});

// document.getElementById('show-feedback').addEventListener('click', function(){
//     location.replace('file:///home/aarushi/Documents/sem2/web%20designing/Emp%20Leave%20Mgmt/Home/home.html');
//     toggleClass(3);
// });


const text=document.querySelector('.elm-quick-links');
const strText=text.textContent;
const splitText=strText.split('');
text.textContent="";
for(let i=0;i<splitText.length;i++)
{
    text.innerHTML+="<span>"+splitText[i]+"</span>";
}

let char=0;
let timer=setInterval(onTick, 50);

function onTick()
{
    const span_el=text.querySelectorAll('span')[char];
    span_el.classList.add('fade');
    char++;
    if(char===splitText.length)
    {
        complete();
        return;
    }
}

function complete()
{
    clearInterval(timer);
    timer=null;
}


function validateApply()
{
    let pass=document.forms['apply']['pass'];
    let date=document.forms['apply']['date'];
    let remarks=document.forms['apply']['remarks'];
    let flag=true;
    if(pass.value=="")
    {
        alert('Enter a valid password.');
        flag=false;
    }
    if(remarks.value=="")
    {
        alert('Please enter some remarks.');
        flag=false;
    }
    if(date.value=="")
    {
        alert('Please enter a date.');
        flag=false;
    }
    if(flag===true)
    {
        alert('Leave applied successfully!');
    }
}



function toggleClass(selectedVal)
{
    for (var i = 0; i < 3/*4*/; ++i) {
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
// document.getElementById('nav-3').addEventListener("click", function(){ 
//     toggleClass(3)
// }); 

toggleClass(0);


