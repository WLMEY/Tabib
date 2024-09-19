


const body =document.querySelector('body')
const nav_bar=document.querySelector('.nav_bar')
const title =document.querySelector('.title')

var x=1;
function colors(){
    // body.style.backgroundColor="#232323"
    x++;
    if(x%2==0){
        black_color();
        console.log("black")
    }
    else{
        default_color();
        console.log("default")

    }

}
function black_color(){
    body.style.backgroundColor="#232323"

}
function default_color(){
    body.style.backgroundColor="#ffffff"

}