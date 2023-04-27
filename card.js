function cardActive(activeCard = 0) {
    const cards = document.querySelectorAll('.card')

    cards[activeCard].classList.add('active')

for (const card of cards) {
    card.addEventListener('click', () => {
        clearActiveClasses()
        card.classList.add('active')
    })
}

function clearActiveClasses() {
    cards.forEach((card) => {
        card.classList.remove('active')
    })
}
}

cardActive()