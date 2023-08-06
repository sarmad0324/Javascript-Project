//navbar

const m_open = document.getElementById("btn-open")
const m_head = document.getElementById("head")
const m_img = document.getElementById("img")
const m_nav = document.getElementById("nav")
const m_list = document.getElementById("ul-list")
const m_link = document.getElementById("links")

const m_close = document.getElementById("btn-close")
const dropdown=document.getElementById("drop")
const s_btn=document.getElementById("s-btn")
 
m_open.addEventListener("click", function(){
    m_head.style.cssText=`
    display: flex;
    justify-content: space-between;
    height: 300px;
    `
    m_open.style.display='none'
    m_img.style.display='none'
    m_close.style.display='block'
    m_nav.style.display='block'
    
    m_list.style.cssText=`display:block; height:300px; padding-top:20px ; `
    m_link.style.cssText=`border:1px solid black ;`
    
    dropdown.style.display='none'
    s_btn.style.display='none'
   
})
m_close.addEventListener("click",function(){
    m_open.style.display='block'
    m_close.style.display='none'
    m_head.style.cssText=`
    display: flex;
    justify-content: space-between;
    height: 80px;
    `
    m_img.style.display='block'
    m_nav.style.display='none'
    dropdown.style.display='block'
    s_btn.style.display='block'

})





//dropdown
const Dp=document.getElementById("dp")
const menu= document.getElementById("drop-menu")
Dp.addEventListener("click",function(){
    if (menu.style.display === "none") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
})


//slider
 const img_1=document.getElementById("s-img-1")
 const img_2=document.getElementById("s-img-2")
 const img_3=document.getElementById("s-img-3")

i=1
let y=0;
function setSlide(n){
  i+=n

  if(i<2 || i>3){
    console.log("prev")
    img_1.style.display='block'
    img_2.style.display='none'
    img_3.style.display='none'
    i=1
    console.log(i)
  }else if(i<3&& i>1){
    img_1.style.display='none'
    img_2.style.display='block'
    img_3.style.display='none'
    //console.log("next")
    i=2
    //console.log(i)
  }
  else if(i<4&& i>1){
    img_1.style.display='none'
    img_2.style.display='none'
    img_3.style.display='block'
    //console.log("more next")
    i=3
    //console.log(i)
  }

}