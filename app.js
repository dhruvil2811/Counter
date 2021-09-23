const inc=document.getElementById("btninc");
const dec=document.getElementById("btndec");
const res=document.getElementById("btnres");
const cnt=document.querySelector("#cnt");
let count=0;

inc.addEventListener('click',function(){
    count += 1;
     if(count>=0)
    {
        cnt.style.color="black";   
    }
    cnt.textContent=count;
    console.log(count);
});
dec.addEventListener('click',function(){
    count -= 1;
    if(count<0)
    {
        cnt.style.color="red";   
    }
    cnt.textContent=count;
    console.log(count);
});
res.addEventListener('click',function(){
    count = 0;
    cnt.textContent=count;
    console.log(count);
});