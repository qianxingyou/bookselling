const booksData = [
    {
        id: 1,
        title: "高等数学（第七版）上册",
        author: "同济大学数学系",
        category: "textbook",
        price: 35,
        originalPrice: 59,
        condition: "九成新",
        description: "同济大学高等数学第七版，是理工科学生的经典教材。书本保存完好，少量笔记，不影响阅读。",
        emoji: "📐"
    },
    {
        id: 2,
        title: "线性代数及其应用",
        author: "David C. Lay",
        category: "textbook",
        price: 45,
        originalPrice: 79,
        condition: "九成新",
        description: "英文原版线性代数教材，内容深入浅出，适合深入学习线性代数知识。",
        emoji: "📊"
    },
    {
        id: 3,
        title: "Python编程：从入门到实践",
        author: "Eric Matthes",
        category: "reference",
        price: 40,
        originalPrice: 79,
        condition: "八成新",
        description: "Python入门经典书籍，附带大量练习和项目，适合零基础学习。",
        emoji: "🐍"
    },
    {
        id: 4,
        title: "三体",
        author: "刘慈欣",
        category: "literature",
        price: 25,
        originalPrice: 68,
        condition: "九成新",
        description: "科幻小说经典之作，带你领略宇宙的奥秘和黑暗森林法则。",
        emoji: "🌌"
    },
    {
        id: 5,
        title: "活着",
        author: "余华",
        category: "literature",
        price: 15,
        originalPrice: 39,
        condition: "八成新",
        description: "余华经典作品，讲述一个人一生的故事，感人至深。",
        emoji: "❤️"
    },
    {
        id: 6,
        title: "JavaScript高级程序设计",
        author: "Nicholas C. Zakas",
        category: "reference",
        price: 55,
        originalPrice: 129,
        condition: "九成新",
        description: "JavaScript权威指南，前端开发必备书籍。",
        emoji: "💻"
    },
    {
        id: 7,
        title: "现代汉语词典",
        author: "中国社会科学院语言研究所",
        category: "reference",
        price: 60,
        originalPrice: 99,
        condition: "九成新",
        description: "第七版现代汉语词典，学习中文的必备工具书。",
        emoji: "📖"
    },
    {
        id: 8,
        title: "百年孤独",
        author: "加西亚·马尔克斯",
        category: "literature",
        price: 20,
        originalPrice: 55,
        condition: "八成新",
        description: "魔幻现实主义文学代表作，讲述布恩迪亚家族七代人的故事。",
        emoji: "🏠"
    },
    {
        id: 9,
        title: "大学物理（第三版）",
        author: "张三慧",
        category: "textbook",
        price: 30,
        originalPrice: 52,
        condition: "八成新",
        description: "大学物理教材，内容全面，适合理工科学生使用。",
        emoji: "⚛️"
    },
    {
        id: 10,
        title: "经济学原理",
        author: "曼昆",
        category: "textbook",
        price: 48,
        originalPrice: 89,
        condition: "九成新",
        description: "经济学入门经典教材，宏观经济学和微观经济学都有涉及。",
        emoji: "💰"
    },
    {
        id: 11,
        title: "红楼梦",
        author: "曹雪芹",
        category: "literature",
        price: 35,
        originalPrice: 68,
        condition: "九成新",
        description: "中国古典四大名著之一，值得反复品读。",
        emoji: "🏮"
    },
    {
        id: 12,
        title: "算法导论",
        author: "Thomas H. Cormen",
        category: "reference",
        price: 65,
        originalPrice: 128,
        condition: "九成新",
        description: "算法领域的经典教材，计算机专业必读。",
        emoji: "🧮"
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
            <div class="book-cover">${book.emoji}</div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-price">
                    <span class="price">¥${book.price}<span class="original-price">¥${book.originalPrice}</span></span>
                    <span class="book-condition">${book.condition}</span>
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
        <div class="modal-cover">${book.emoji}</div>
        <div class="modal-details">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <div class="modal-price">¥${book.price}</div>
            <div class="modal-original-price">原价 ¥${book.originalPrice}</div>
            <span class="modal-condition">${book.condition}</span>
            <p class="modal-description">${book.description}</p>
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
    const category = document.getElementById('categorySelect').value;
    const sortBy = document.getElementById('priceSort').value;

    let filteredBooks = booksData.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchQuery) ||
                            book.author.toLowerCase().includes(searchQuery);
        const matchesCategory = category === '' || book.category === category;
        return matchesSearch && matchesCategory;
    });

    if (sortBy === 'asc') {
        filteredBooks.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'desc') {
        filteredBooks.sort((a, b) => b.price - a.price);
    }

    renderBooks(filteredBooks);
}

document.getElementById('searchInput').addEventListener('input', filterBooks);
document.getElementById('categorySelect').addEventListener('change', filterBooks);
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