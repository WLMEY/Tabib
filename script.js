// var c = document.getElementById("canvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(30, 100);
// ctx.stroke();

// const continer_FAQ=document.getElementById("continer_FAQ");
// const icons=document.getElementById("icons")
// const icon=icons.getElementsByTagName("i")



// const continer_large =
// `    <div class="continer_large" id="continer_large">
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore.
//             Sed vel aliquid officia optio, asperiores aspernatur error sapiente
//             recusandae nulla ut ab quaerat placeat harum debitis, dolorem esse at
//             nobis aliquam dolores exercitationem velit inventore, qui perferendis?
//             Quaerat perferendis beatae labore optio repellat iste corporis voluptatem
//             enim non. Voluptate.
//         </p>
//     </div>`


//     for(let x=0 ;x<icon.length; x++){
//         icon[x].onclick=change;
//         icon[x].style.color="red";
//         function change() {
//             for(let x=0 ;x<icon.length; x++){
//                 icon.onmousemove=()=>{icon[x].style.cursor="pointer"}
//                 if (icon[x].className==="fa-solid fa-chevron-up"){
//                     icon[x].className="fa-solid fa-chevron-down";
//                 }
//                 else{
//                     icon[x].className="fa-solid fa-chevron-up";
//                 }
//             }
//         }
//     }


////////////////////////////////////
// const continer_FAQ=document.getElementById("continer_FAQ");
// const item=document.getElementById("item")
// const icon=item.getElementsByTagName("i")

const items=document.querySelectorAll("item")
items.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');
    const icon = item.querySelector('.icon');

    question.addEventListener('click',()=>{
        items.forEach(otherItem=>{
            const otherAnswer=otherItem.querySelector('.answer')
            const otherIcon=otherItem.querySelector('.icon');
            if(otherAnswer!=answer){
                otherAnswer.classList.remove('open')
                otherIcon.classList.remove('rotate');

            }
        });
        answer.classList.toggle('open');
        icon.classList.toggle('rotate');
    })
});