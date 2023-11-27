const spans = document.querySelectorAll('.section4-left span');

function changeText(cardId) {
    spans.forEach(span => {
        span.classList.remove('span-displayed');
    });
    const currentCard = document.getElementById(cardId);
    currentCard.classList.add('span-displayed');
}

const section4Left = document.querySelector('.section4-left');

section4Left.addEventListener('mouseleave', () => {
    const firstCard = document.getElementById('card1');
    firstCard.classList.add('span-displayed');
});

const section4Right = document.querySelector('.section4-right');

section4Right.addEventListener('mouseleave', () => {
    const firstCard = document.getElementById('card1');
    firstCard.classList.add('span-displayed');

    for (let i = 2; i <= spans.length; i++) {
        const card = document.getElementById(`card${i}`);
        card.classList.remove('span-displayed');
    }
});
