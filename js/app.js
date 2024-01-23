function collapse() {
    const triggers = document.querySelectorAll('.faq-question')

    triggers.forEach(function(item) {
        item.addEventListener('click', function() {
            item.closest('.faq__block').classList.toggle('active')
        })
    })
}

function scrollTasks() {
    const triggers = document.querySelectorAll('.task__card')

    triggers.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault()
            let id = item.getAttribute('href')
            let block = document.querySelector(id)
            block.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    })
}

const swiper = new Swiper('.clients-swiper', {
    slidesPerView: 6,
    loop: true
});

collapse()
scrollTasks()