const button = document.querySelector ('button')
const list = document.querySelector('table')
const p =document.querySelector('p')
const numbers = []
let rowCount = 0


button.addEventListener('click',()=> {
    const tr = list.insertRow()
    for (let i = 0;i<7;i++) {
        const td = tr.insertCell(i)
        td.innerHTML = Math.floor(Math.random() * 9) + 1
    }  
    rowCount++
    p.textContent = "Valmiita rivejä " + rowCount
})



