const current = document.querySelector("#current")
const imgs = document.querySelectorAll('.imgs img')

imgs[0].style.opacity = 0.6

imgs.forEach(img => {
    img.addEventListener('click', () => {
        if(img.src === current.src) return

        imgs.forEach(img => img.style.opacity = 1)
        current.src = img.src

        current.classList.add('fade-in')
        setTimeout(() => current.classList.remove('fade-in'), 500)

        img.style.opacity = 0.6
    })
})




