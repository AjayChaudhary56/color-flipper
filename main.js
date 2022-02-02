// // let x = document.querySelectorAll("#new-container.intro");
// // console.log(x[0].getAttribute("class"));
// const className = 'intro1';
// let x = document.getElementById('new-container');
// if(x){
//     let classList = x.getAttribute('class');
//     console.log(classList);
//     let index = classList.splice(1,3,'ajay');
//     console.log(index);
//     console.log(classList);
//     // if(index !== -1) console.log(className, ' : class found');

// for(let i=0; i<100; i++){
//     console.log(Math.floor(Math.random()*1000));
// }

// }

// // document.getElementById("demo").innerHTML = ''
// const width = 300;
// const height = 300;
// let marginTop = 5;
// let marginLeft = 5;

// let animateSpeed = 5;

// const wrapper = document.getElementById('main-wrapper');
// const body = document.getElementById('main-body');


// wrapper.style.height = `${height}px`;
// wrapper.style.width = `${width}px`;
// wrapper.style.background = 'red';
// wrapper.style.marginTop = marginTop+"px";
// wrapper.style.marginLeft = marginLeft+"px";

// let button1 = document.createElement('button');
// button1.innerText = ('clicke me');

// body.appendChild(button1);

// button1.onclick = function(){
//     wrapper.style.background = getRandomColor();
// }
// const handleMe = (e) => {
//     console.log(e.code);
//     if(e.code == "ArrowDown"){
//         marginTop += animateSpeed;
//         wrapper.style.marginTop = marginTop+"px";
//     }
//     if(e.code == "ArrowUp"){
//         marginTop -= animateSpeed;
//         wrapper.style.marginTop = marginTop+"px";
//     }  
//     if(e.code == "ArrowRight"){
//         marginLeft += animateSpeed;
//         wrapper.style.marginLeft = marginLeft+"px";
//     }  
//     if(e.code == "ArrowLeft"){
//         marginLeft -= animateSpeed;
//         wrapper.style.marginLeft = marginLeft+"px";
//     }  

// }
// document.addEventListener("keydown" , handleMe);

/*
position
setInterval
timeout
requestAnimationframe
z-index
*/
const click = document.getElementById("btn");
click.addEventListener("click",myfunction);
function myfunction(){
    // x=document.getElementsById("body");
document.body.style.backgroundColor=randomcolor();
document.querySelectorAll("p#color")[0].innerText=document.body.style.backgroundColor;
}
function randomcolor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    // return `rgb(${r},${g},${b})`;
    // let r=getRandomInt(1,256);
    // let g=getRandomInt(1,256);
    // let b=getRandomInt(1,256);
    return `rgb(${r},${g},${b})`;
}
function getRandomInt(min,max){
    min=Math.floor(min);
    max=Math.ceil(max);
    return Math.ceil((Math.random()*(max-min))+min);
}

