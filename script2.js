//Async and await
/* 
Async and await also work with promises but it handles the promises
in the different manner.
*/
const jokes=document.querySelector('#joke');
const jokebtn=document.querySelector('#jokebtn');

const generatejokes= async ()=>{
    try{
    const setHeader={
        headers:{
            Accept:"application/json"
        }

    }
    const res=await fetch("https://icanhazdadjoke.com", setHeader);
    const data=await res.json();
    jokes.innerHTML=data.joke;
}catch(err){
    console.log(err);
}
}
jokebtn.addEventListener('click', generatejokes);
generatejokes()