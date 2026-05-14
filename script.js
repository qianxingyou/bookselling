const categories = [
    { id: "math", name: "数学类", color: "#e74c3c" },
    { id: "english", name: "英语类", color: "#2ecc71" },
    { id: "computer", name: "计算机类", color: "#3498db" },
    { id: "misc", name: "杂物类", color: "#9b59b6" }
];

const booksData = [
    {
        title: "python数据挖掘算法与应用",
        price: 2,
        image: "python数据挖掘算法与应用.jpg",
        category: "computer"
    },
    {
        title: "数据结构习题与实验指导",
        price: 2,
        image: "数据结构习题与实验指导.jpg",
        category: "computer"
    },
    {
        title: "2025计算机408历年真题解析",
        price: 2,
        image: "2025计算机408历年真题解析.jpg",
        category: "computer"
    },
    {
        title: "26王道408综合题做题本（操作系统）",
        price: 3,
        image: "26王道408综合题做题本（操作系统）.jpg",
        category: "computer"
    },
    {
        title: "26王道408综合题做题本（数据结构）",
        price: 2,
        image: "26王道408综合题做题本（数据结构）.jpg",
        category: "computer"
    },
    {
        title: "26王道408选择题做题本（操作系统）",
        price: 3,
        image: "26王道408选择题做题本（操作系统）.jpg",
        category: "computer"
    },
    {
        title: "26王道408选择题做题本（数据结构）",
        price: 3,
        image: "26王道408选择题做题本（数据结构）.jpg",
        category: "computer"
    },
    {
        title: "26王道408选择题做题本（计算机组成原理）",
        price: 3,
        image: "26王道408选择题做题本（计算机组成原理）.jpg",
        category: "computer"
    },
    {
        title: "26王道408选择题做题本（计算机网络）",
        price: 3,
        image: "26王道408选择题做题本（计算机网络）.jpg",
        category: "computer"
    },
    {
        title: "26考研数学临门一脚",
        price: 3,
        image: "26考研数学临门一脚.jpg",
        category: "math"
    },
    {
        title: "C++程序设计工程化实验教程",
        price: 3,
        image: "C++程序设计工程化实验教程.jpg",
        category: "computer"
    },
    {
        title: "python数据分析",
        price: 3,
        image: "python数据分析.jpg",
        category: "computer"
    },
    {
        title: "Spark大数据分析技术",
        price: 3,
        image: "Spark大数据分析技术.jpg",
        category: "computer"
    },
    {
        title: "云计算导论",
        price: 2,
        image: "云计算导论.jpg",
        image: "云计算导论.jpg",
        category: "computer"
    },
    {
        title: "信息安全技术",
        price: 3,
        image: "信息安全技术.jpg",
        category: "computer"
    },
    {
        title: "数学建模",
        price: 3,
        image: "数学建模.jpg",
        category: "math"
    },
    {
        title: "概率论与数理统计",
        price: 3,
        image: "概率论与数理统计.jpg",
        category: "math"
    },
    {
        title: "红宝书",
        price: 5,
        image: "红宝书.jpg",
        category: "english"
    },
    {
        title: "线性代数与空间解析几何（第五版）",
        price: 3,
        image: "线性代数与空间解析几何（第五版）.jpg",
        category: "math"
    },
    {
        title: "线性代数与空间解析几何（第四版）学习指导教程",
        price: 3,
        image: "线性代数与空间解析几何（第四版）学习指导教程.jpg",
        category: "math"
    },
    {
        title: "考研英语阅读的逻辑",
        price: 3,
        image: "考研英语阅读的逻辑.jpg",
        category: "english"
    },
    {
        title: "计算机组成原理",
        price: 2,
        image: "计算机组成原理.jpg",
        category: "computer"
    }
];

function initBooks() {
    booksData.forEach((book, index) => {
        book.id = index + 1;
    });
}

function renderCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.innerHTML = categories.map(cat => `
        <button 
            class="category-btn ${cat.id === 'all' ? 'active' : ''}" 
            data-category="${cat.id}"
            style="--category-color: ${cat.color}"
            onclick="filterByCategory('${cat.id}')"
        >
            ${cat.name}
        </button>
    `).join('');
}

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

    booksGrid.innerHTML = books.map(book => {
        const category = categories.find(c => c.id === book.category);
        return `
            <div class="book-card" onclick="openBookModal(${book.id})">
                <div class="book-info">
                    <span class="book-category" style="background: ${category?.color || '#666'}">${category?.name || '未分类'}</span>
                    <h3 class="book-title">${book.title}</h3>
                    <div class="book-price">
                        <span class="price">¥${book.price}</span>
                    </div>
                    <div class="click-hint">点击查看详情</div>
                </div>
            </div>
        `;
    }).join('');
}

function openBookModal(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    const modal = document.getElementById('bookModal');
    const modalBody = document.getElementById('modalBody');
    const category = categories.find(c => c.id === book.category);

    modalBody.innerHTML = `
        <div class="modal-cover">
            <img src="${book.image}" alt="${book.title}" />
        </div>
        <div class="modal-details">
            <span class="modal-category" style="background: ${category?.color || '#666'}">${category?.name || '未分类'}</span>
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

let currentCategory = 'all';

function filterByCategory(categoryId) {
    currentCategory = categoryId;
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${categoryId}"]`).classList.add('active');
    filterBooks();
}

function filterBooks() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const sortBy = document.getElementById('priceSort').value;

    let filteredBooks = booksData.filter(book => {
        const matchesCategory = currentCategory === 'all' || book.category === currentCategory;
        const matchesSearch = book.title.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
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

initBooks();
renderCategories();
renderBooks(booksData);
