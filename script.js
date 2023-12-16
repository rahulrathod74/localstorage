const form=document.querySelector(".userform")
const display=document.querySelector("#display")
const userData = document.querySelector("#userdata")


form.addEventListener("submit",function(event){
    event.preventDefault();
    const name=document.querySelector("#name").value;
    const age=document.querySelector("#age").value;

    if(name && age){
        const userdata={
            name:name,
            age:age
        }
        localStorage.setItem('userdata',JSON.stringify(userdata));

        form. reset();
    }else{
        alert("please fill in the field")
    }
})

function retrive(){
    const stored=localStorage.getItem("userdata")

    if(stored){
        const userdata=JSON.parse(stored)
        displaydata(userdata)
    }else{
        display.innerHTML="No data plesea retry"
    }
}
function displaydata(userdata){
    let tablecontent=`
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
    <td>${userdata.name}</td>
    
    <td>${userdata.age}</td>
    </tr>   
    `;
    
    userData.innerHTML=tablecontent
}
