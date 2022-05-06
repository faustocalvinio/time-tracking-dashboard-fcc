
let qs=(param)=>document.querySelector(param);
const qsa=(param)=>document.querySelectorAll(param);

const daily=qs('#daily');
const weekly=qs('#weekly');
const monthly=qs('#monthly');

const getData=async()=>{
    try{
    await fetch('../data.json')
    .then(response=>{    
   
    return response.json();  
    })
    .then(data=>console.log(data[0].timeframes.daily.current))
    }catch(err){
    console.err(err)
}};    

// error de tiempo, al hacer click no existe la data
getData();

const arrayHoursText=document.querySelectorAll('.text-hrs')
daily.addEventListener('click',()=>{
   arrayHoursText[0].innerHTML=data[0].timeframes.daily.current;
   arrayHoursText[1].innerHTML='asdasd'
})

weekly.addEventListener('click',()=>{
    alert('b')
});

monthly.addEventListener('click',()=>{
    alert('bc')
})
