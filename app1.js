// let string=prompt("enter the string:");
// if(string.length>=3 && string[0]=='a'){
//    alert("it is a good string ");
// }
// else{
//     alert("not good string");
// }
// let day="2";
// switch(day){
    
    
//     case"1":
//     console.log("today is monday");
//     break;
//     case"tuesday":
//     console.log("today is "+day);
//     break;
//     case"wednesday":
//     console.log("today is "+day);
//     break;
//     case"thursday":
//     console.log("today is "+day);
//     break;
//     case"friday":
//     console.log("today is "+day);
//     break;
    
    
//     default:
//     console.log("happy holiday");
// }

// let mymovie="avatar";
// let x=prompt("guess the movie name or enter quit for exit: ");
// if(x!="quit"){
//     while(x!=mymovie ){
//         let x=prompt("guess the movie name or enter quit for exit: ");
//         if(x==mymovie){
//             alert("you guessed well! ");
//             break;
//         }
//         else if(x=="quit"){
//             alert(`the movie is ${mymovie}`);
//             break;
//             }
//         } 
// }

// function add( n){
//  let i=0;
//  let sum=1;
//     while(i!=n){
//         sum=sum+i;
//     }
//    return sum;
// }
// add(10);
// const info={
//     name:"ria",
//     age:12,
//     eng:30,
//     math:23,
//     hindi:30,
//     getmarks(){
//         console.log((this.eng+this.hindi+this.math)/3);

//     }
// };
// const sum = (a,b)=>(
//  a+b
// );
// const square =(n)=>(n*n);

// -->important <--

// let id=setInterval(()=>{
//     console.log("hello");
// },1000);
// setTimeout(()=>{
//     clearInterval(id);
//     console.log("cleared!");
// },5000);


// const array=[10,10,10,10];
// const avg=(array)=>{
//     let num=0;
//     for(let i of array){
//         num+=i
//     }
//     return num/array.length;}

const isEven=(n)=>{
 if(n%2==0){
    console.log("EVEN NUMBER");
 }
 else{
    console.log("ODD NUMBER");
 }
}

// let arr=[1,2,3,4];
// let p=function (el){
//     console.log(el**2);
// };
// myarray.forEach(p);

// let array=[5,20,30,40,45];
// let ans=array.every((el)=>el%5==0);
// console.log(ans);
//  let myarray=[1,2];

//  let res=myarray.map((el)=>el**2);
//  let result=res.reduce((lp,el1)=>
//     lp+el1
// );
// let final=result/2;
// console.log(final);
// let btn=document.querySelector("button");
// btn.append("this is for printing");
// let input=document.createElement("input");
// btn.insertAdjacentElement("beforebegin",input);

// let btns=document.querySelectorAll("button");
// for(btn of btns){
//    // btn.onclick= change_bg;
   
//          btn.addEventListener("click",function(){
//             console.log("clicked!!!!");
//          })
      
// }


// function change_bg(){
//    // let i=prompt("enter the colour");
//    // btn.classList.add("red");
//    // alert("hello");

// }
// let bs=document.querySelectorAll("buttons");
// for(b of bs){
//    b.addEventListener("click",function(){
//       console.log("clicked!!!!");
//    })
// }
// let h2=document.querySelector("h2");
// let mybtn=document.querySelector("button");
// let mydiv=document.querySelector("div");
// mybtn.addEventListener("click",change);
// // mybtn.addEventListener("click",change_div);

// function change(){
//    let random=randomcolour();
//    h2.innerText=random;
  
//    // let random=randomcolour();

//    mydiv.style.backgroundColor=random;
// }
// function randomcolour(){
//    let red=Math.floor(Math.random()*255);
//    let green=Math.floor(Math.random()*255);
//    let blue=Math.floor(Math.random()*255);
//    let colour=`rgb(${red}, ${green}, ${blue})`;
//   return colour;
// }

// let inp=document.querySelector("input");
// let h2=document.querySelector("h2");
// inp.addEventListener("input",function(){
// h2.innerText=inp.value;
// })
let gameSeq=[];
let userSeq=[];
let btns=['red','yellow','green','blue'];
let started=false;
let level=0;
let h3=document.querySelector("h3")
document.addEventListener("keypress",function(){
   if(started==false){
      console.log("game was started!");
       started=true;
       levelup();
       
   }
})
function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash")
   },250)

}
function levelup(){
   userSeq=[];
level++;
h3.innerText= `level ${level}`;

let randinx=Math.floor(Math.random()*3);
let randcol=btns[randinx];
let randbtn=document.querySelector(`.${randcol}`);
// console.log(randinx);
// console.log(randcol);

btnflash(randbtn);
gameSeq.push(randcol);
console.log(gameSeq);
}
function btnpress(){
   // console.log("btn was clicked");
   let btn=this;
   btnflash(btn);
   let usercol=btn.getAttribute("id");
   console.log(usercol);
   userSeq.push(usercol);
   checkans(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".division");
for(division of allbtns){
division.addEventListener("click",btnpress);}


function checkans(ind){
   
   if(userSeq[ind]===gameSeq[ind]){
     if(userSeq.length==gameSeq.length){
      setTimeout(levelup,1000);
     
     }
   }
   else{
      h3.innerHTML=`game over your score is <br>${level}`;
      document.querySelector("body").style.background="pink";
      reset();
   }
}

function reset(){
   started=false;
   userSeq=[];
   gameSeq=[];
   level=0;

}