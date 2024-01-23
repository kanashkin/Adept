function collapse() {
    const triggers = document.querySelectorAll('.faq-question')

    triggers.forEach(function(item) {
        item.addEventListener('click', function() {
            item.closest('.faq__block').classList.toggle('active')
        })
    })
}

collapse()