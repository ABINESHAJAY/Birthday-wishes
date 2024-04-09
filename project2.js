const letter=document.getElementsByClassName("letter");

for(let i=0;i<letter.length;i++){
    letter[i].style.animationDelay=i*0.5+"s";

}