const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const priceFilter = document.getElementById('priceFilter');
const cards = document.querySelectorAll('.card');

function filterCards() {
    const search = searchInput.value.toLowerCase();
    const type = typeFilter.value;
    const price = priceFilter.value;

    cards.forEach(card => {
        const name = card.querySelector('h3').innerText.toLowerCase();
        const cardType = card.dataset.type;
        const cardPrice = parseInt(card.dataset.price);

        let show = true;

        if (!name.includes(search)) show = false;
        if (type !== 'all' && cardType !== type) show = false;
        if (price !== 'all' && cardPrice > price) show = false;

        card.style.display = show ? 'block' : 'none';
    });
}

searchInput.addEventListener('input', filterCards);
typeFilter.addEventListener('change', filterCards);
priceFilter.addEventListener('change', filterCards);