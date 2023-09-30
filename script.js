let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let DeleteEl = document.getElementById("delete-pr")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function deleteEl() {
    saveEl.textContent = "Previous entries :"
}
