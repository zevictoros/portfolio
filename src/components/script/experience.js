const descriptions = document.querySelectorAll('.experience-description');
descriptions[0].style.display = 'block';
descriptions[0].classList.add('displayed');

const liItems = document.querySelectorAll('.experience-name li');

function showDescription(index) {
    descriptions.forEach((description, i) => {
        if (i === index) {
            description.style.display = 'block';
            description.classList.add('displayed');
        } else {
            description.style.display = 'none';
            description.classList.remove('displayed');
        }
    });

    liItems.forEach((li, i) => {
        if (i === index) {
            li.classList.add('displayed');
        } else {
            li.classList.remove('displayed');
        }
    });
}
