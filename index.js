const incrementBtn = document.getElementById('increment')
const countdspl = document.getElementById('count')

let currentCount = 0

incrementBtn.addEventListener('click', ()=>{
    currentCount ++
    countdspl.innerText = currentCount
})