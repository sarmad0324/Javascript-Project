//Chrome Extension

let myLeads = []

const textEl = document.getElementById("text-el")
const inputBtn = document.getElementById("input-btn")
const saveBtn = document.getElementById("save-btn")
const delBtn = document.getElementById("del-btn")
const ulEl = document.getElementById("ul-el")

const saveLead = JSON.parse(localStorage.getItem("myLeads"))

console.log(saveLead)
if(saveLead){
    myLeads = saveLead
    render(myLeads)
}

function render(leads) {
    let listItem = ""
    for (let i = 0; i < leads.length; i++) {
        //listItem += "<li> <a href = '" + myLeads +"'  target = 'blank' >" + myLeads[i] 
        listItem += `
        <li>
            <a href='${leads[i]}' target='_blank'>
                ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItem
}

inputBtn.addEventListener("click", function () {
    myLeads.push(textEl.value)
    textEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

saveBtn.addEventListener("click",function(){

    chrome.tabs.query({active : true, currentWindow: true},function(tabs) {
        myLeads.push(tabs[0].url) 
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

delBtn.addEventListener("dblclick",function (){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})





// const main = document.getElementById("main")
// main.innerHTML = <button>Buys!</button>