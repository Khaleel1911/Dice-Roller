const mybtn=document.getElementById("mybtn");
const myinput=document.getElementById("myinput");
const mydiv=document.getElementById("mydiv");

mybtn.onclick = function(){
    mydiv.innerHTML="";
  let  No_of_dice=myinput.value;
  No_of_dice=Number(No_of_dice);

  for(let i=1;i<=No_of_dice;i++){
    let Random_num=Math.floor(Math.random() * (6)+1);
    mydiv.innerHTML +=`<img src="${Random_num}.png">`;
  }

}

