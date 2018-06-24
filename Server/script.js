const $ = s => document.querySelector(s)

const main = $('main')
const sizeInput = $('.size')
const colorInput = $('.color')
const backColorInput = $('.back-color')
const fontSelect = $('.font-family select')
const theme = $('.theme select')
const save = $('.save button')
const imgSize = $('.img')
const img = $('img')

sizeInput.oninput = e => main.style.fontSize = `${e.target.value}px`
colorInput.oninput = e => main.style.color = e.target.value
backColorInput.oninput = e => document.body.style.backgroundColor = e.target.value
fontSelect.oninput = e => main.style.fontFamily = e.target.value
imgSize.oninput = e => img.style.width = `${e.target.value}%`

let themes = []

save.onclick = () => {
    themes.push({
        size: main.style.fontSize,
        color: main.style.color,
        backColor: document.body.style.backgroundColor,
        font: main.style.fontFamily,
        img: img.style.width
    })
    const name = prompt("Enter the name of the new theme:") || `Your theme ${themes.length}`
    theme.innerHTML += `<option value="${themes.length - 1}">${name}</option>`
}

theme.oninput = e => {
    const el = themes[e.target.value]
    main.style.fontSize = el.size
    main.style.color = el.color
    document.body.style.backgroundColor = el.backColor
    main.style.fontFamily = el.font
    img.style.width = el.img
}



