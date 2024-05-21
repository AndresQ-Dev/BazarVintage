document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filters input');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.value.toLowerCase();

            cards.forEach(card => {
                if (category === 'todo') {
                    card.classList.remove('hidden');
                } else {
                    if (card.getAttribute('cat') === category) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});