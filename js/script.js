const $ = document

const weight = $.querySelector("#weight")
const weightVal = $.querySelector("#weight-val")
const height = $.querySelector("#height")
const heightVal = $.querySelector("#height-val")
const result = $.querySelector("#result")
const category = $.querySelector("#category")

function calculate() {
    //! Front
    weightVal.innerHTML = weight.value + "kg"
    heightVal.innerHTML = height.value + "cm"
    //! Calc
    let meter = height.value / 100
    let resultNumber = weight.value / (meter ** 2)

    console.log(meter);
    console.log(weight.value);
    console.log(meter ** 2);
    

    result.innerHTML = resultNumber.toFixed(1)

    if (resultNumber < 18.5) {
        result.style.cssText = "color: #fcff4a;"
        category.innerHTML = "Underweight"
    } else if (resultNumber > 18.5 && resultNumber < 24.9) {
        result.style.cssText = "color: #0be881;"
        category.innerHTML = "Normal Weight"
    } else if (resultNumber > 24.9 && resultNumber < 29.9) {
        result.style.cssText = "color: #ff5e5e;"
        category.innerHTML = "OverWeight"
    } else if (resultNumber > 29.9) {
        result.style.cssText = "color: #ff1f1f;"
        category.innerHTML = "Obese"

    }
} 

weight.addEventListener("input", calculate)
height.addEventListener("input", calculate)
