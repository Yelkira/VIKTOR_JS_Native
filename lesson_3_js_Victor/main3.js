//handler === listener === subscriber => function
//handler ⊂ callback,
// callback => setTimeout/setInterval, param of array method
//onclick = handler; handler({....})
//{...} - event, ev, e
const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

const handler = (e)=>{
    e.stopPropagation()
    if(e.target.tagName === "BUTTON"){
        alert(e.target.id)
    }
}
const handler2 = (e)=>{
    alert(e)
}
const handler3 = (e)=>{
    alert("YO")
}
/*sm.onclick = handler
sm.onclick = handler2*/
/*

sm.addEventListener("click", handler)
sm.addEventListener("click", (e)=>{
    alert(e)
})
sm.removeEventListener("click", handler)
sm.removeEventListener("click", handler2)
*/

sm.onclick = handler
md.onclick = handler2
bg.onclick = handler3
