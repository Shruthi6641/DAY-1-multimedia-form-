var name1=document.getElementById("a")
var email1=document.getElementById("b")

var button1=document.getElementById("submit")
button1.addEventListener("click",(e)=>{
    e.preventDefault()
    let details={
        userN:name1.value,
        userE:email1.value
    }
    console.log(details.userN)
    console.log(details.userE)
})