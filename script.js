const booksData = [
    {
        id: 1,
        title: "python数据挖掘算法与应用",
        price: 3,
        image: "C7364A5CA98E3A39127BF6E91B347A21.jpg"
    },
    {
        id: 2,
        title: "数据结构习题与实验指导",
        price: 2,
        image: "57761EE71050D6152BCF60CE1DB4928E.jpg"
    }
];

function renderBooks(books) {
    const booksGrid = document.getElementById('booksGrid');
    const noResults = document.getElementById('noResults');

    if (books.length === 0) {
        booksGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    booksGrid.style.display = 'grid';
    noResults.style.display = 'none';

    booksGrid.innerHTML = books.map(book => `
        <div class="book-card" onclick="openBookModal(${book.id})">
            <div class="book-cover">
                <img src="${book.image}" alt="${book.title}" />
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <div class="book-price">
                    <span class="price">¥${book.price}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function openBookModal(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    const modal = document.getElementById('bookModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-cover">
            <img src="${book.image}" alt="${book.title}" />
        </div>
        <div class="modal-details">
            <h3>${book.title}</h3>
            <div class="modal-price">¥${book.price}</div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('bookModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function scrollToBooks() {
    document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
}

function filterBooks() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const sortBy = document.getElementById('priceSort').value;

    let filteredBooks = booksData.filter(book => {
        return book.title.toLowerCase().includes(searchQuery);
    });

    if (sortBy === 'asc') {
        filteredBooks.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
        filteredBooks.sort((a, b) => b.price - a.price);
    }

    renderBooks(filteredBooks);
}

document.getElementById('searchInput').addEventListener('input', filterBooks);
document.getElementById('priceSort').addEventListener('change', filterBooks);

document.getElementById('bookModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

renderBooks(booksData);