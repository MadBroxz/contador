const value = document.querySelector("#value")
const inc = document.querySelector("#inc")
const dec = document.querySelector("#dec")
const res = document.querySelector("#res")

let count = 0

value.textContent = count

inc.addEventListener("click", function() {

        count++
        value.textContent = count
        if(count >= 5) {
            value.style.color = "blue"
        }
        if(count >= 10) {
            value.style.color = "red"
        }

})

dec.addEventListener("click", function() {

    if (count > 0) {
        count--
        value.textContent = count
    }
    if (count <= 10) {
        value.style.color = "blue"
    }
    if (count <= 5) {
        value.style.color = "#000"
    }

})

res.addEventListener("click", function() {
    count = 0
    value.textContent = count
    value.style.color = "#000"

})