const jokes=document.querySelector('#joke');
const jokebtn=document.querySelector('#jokebtn');

const generatejokes=()=>{
    const setHeader=
{
    headers:{
        Accept:"application/json"

    }
}
fetch('https://icanhazdadjoke.com', setHeader)
.then(
    (res)=>
    res.json()).
    then(
        (data)=>{
    jokes.innerHTML=data.joke
} ).catch((error)=>{
    console.log(error)
})
}
jokebtn.addEventListener('click',generatejokes);
generatejokes();