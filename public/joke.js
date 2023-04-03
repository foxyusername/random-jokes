let button=document.getElementById('button');
let answer=document.getElementById('answer');
let reset_btn=document.getElementById('reset_btn');

button.onclick=function(){
    if(answer.style.visibility==='visible'){
            answer.style.visibility='hidden';
    }else{
        answer.style.visibility='visible';
    }

};

reset_btn.onclick=function(){
    location.reload();
}

