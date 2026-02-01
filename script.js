// =========================================
// MADU SABRINA - JAVASCRIPT
// =========================================

// Product Data
const products = {
    premium: [
        {
            id: 1,
            name: 'Madu Klanceng',
            price: 350000,
            unit: '1000gr',
            image: 'images/klanceng.jpg',
            description: 'Madu dari lebah Stingless Bee (Trigona sp.) yang tidak memiliki sengat. Dipanen dari sarang lebah kecil yang hidup di dalam batang pohon. Teksturnya lebih cair dengan rasa asam segar khas, kaya akan propolis alami. Kandungan enzim dan antioksidannya sangat tinggi, cocok untuk meningkatkan daya tahan tubuh dan mengatasi berbagai penyakit.',
            category: 'premium'
        },
        {
            id: 2,
            name: 'Madu Hutan Liar',
            price: 250000,
            unit: '1000gr',
            image: 'images/hutan.jpg',
            description: 'Madu murni dari lebah Apis Dorsata yang bersarang di pohon-pohon tinggi hutan Kalimantan. Dipanen secara tradisional oleh para pemanjat pohon ahli. Rasa lebih kuat dan kompleks dengan aroma bunga hutan yang khas. Mengandung berbagai nektar dari ratusan jenis bunga liar, memberikan manfaat kesehatan yang luar biasa lengkap.',
            category: 'premium'
        }
    ],
    regular: [
        {
            id: 3,
            name: 'Madu Akasia Crassicarpa',
            price: 75000,
            unit: '1000gr',
            image: 'images/akasia.jpg',
            description: 'Madu monofloral dari bunga Akasia Crassicarpa yang tumbuh di perkebunan dataran rendah. Warna cerah keemasan dengan tekstur yang jernih. Rasa manis lembut dengan sedikit sentuhan floral yang menyegarkan. Tidak mudah mengkristal, cocok sebagai pemanis alami untuk teh dan minuman. Baik untuk kesehatan pencernaan dan detoksifikasi tubuh.',
            category: 'regular'
        },
        {
            id: 4,
            name: 'Madu Multiflora',
            price: 95000,
            unit: '1000gr',
            image: 'images/multiflora.jpg',
            description: 'Madu dari berbagai jenis bunga (multiflora) yang memberikan kombinasi rasa unik dan seimbang. Lebah mengambil nektar dari beragam tanaman di sekitar perkebunan. Kaya akan vitamin dan mineral dari berbagai sumber bunga. Rasa manis natural dengan aroma bunga yang lembut, cocok untuk konsumsi harian keluarga.',
            category: 'regular'
        },
        {
            id: 5,
            name: 'Madu Kaliandra',
            price: 175000,
            unit: '1000gr',
            image: 'images/kaliandra.jpg',
            description: 'Madu dari bunga Kaliandra merah yang banyak tumbuh di dataran tinggi Jawa. Warna lebih gelap dengan rasa khas yang sedikit sepat dan manis. Tekstur agak kental dengan aroma bunga yang kuat. Tinggi antioksidan dan baik untuk kesehatan jantung. Dipercaya mampu meningkatkan stamina dan vitalitas tubuh.',
            category: 'regular'
        },
        {
            id: 6,
            name: 'Madu Randu',
            price: 185000,
            unit: '1000gr',
            image: 'images/randu.jpg',
            description: 'Madu dari bunga pohon Randu (Kapuk) yang mekar di musim kemarau. Warna lebih pucat dengan tekstur encer dan rasa manis yang ringan. Aroma khas bunga randu yang lembut dan tidak terlalu kuat. Cocok untuk anak-anak karena rasanya yang mudah diterima. Baik untuk kesehatan paru-paru dan sistem pernapasan.',
            category: 'regular'
        },
    ],
    lite: [
        {
            id: 7,
            name: 'Madu Klanceng',
            price: 40000,
            unit: '180gr',
            image: 'images/klc.jpg',
            description: 'Madu dari lebah Stingless Bee (Trigona sp.) yang tidak memiliki sengat. Dipanen dari sarang lebah kecil yang hidup di dalam batang pohon. Teksturnya lebih cair dengan rasa asam segar khas, kaya akan propolis alami. Kandungan enzim dan antioksidannya sangat tinggi, cocok untuk meningkatkan daya tahan tubuh dan mengatasi berbagai penyakit.',
            category: 'lite'
        },
        {
            id: 8,
            name: 'Madu Klanceng',
            price: 125000,
            unit: '500gr',
            image: 'images/klc500.jpg',
            description: 'Madu dari lebah Stingless Bee (Trigona sp.) yang tidak memiliki sengat. Dipanen dari sarang lebah kecil yang hidup di dalam batang pohon. Teksturnya lebih cair dengan rasa asam segar khas, kaya akan propolis alami. Kandungan enzim dan antioksidannya sangat tinggi, cocok untuk meningkatkan daya tahan tubuh dan mengatasi berbagai penyakit.',
            category: 'lite'
        },
        {
            id: 9,
            name: 'Madu Klanceng',
            price: 75000,
            unit: '200ml',
            image: 'images/klc250.png',
            description: 'Madu dari lebah Stingless Bee (Trigona sp.) yang tidak memiliki sengat. Dipanen dari sarang lebah kecil yang hidup di dalam batang pohon. Teksturnya lebih cair dengan rasa asam segar khas, kaya akan propolis alami. Kandungan enzim dan antioksidannya sangat tinggi, cocok untuk meningkatkan daya tahan tubuh dan mengatasi berbagai penyakit.',
            category: 'lite'
        },
        {
            id: 10,
            name: 'Madu Randu',
            price: 55000,
            unit: '200ml',
            image: 'images/cpetra.jpg',
            description: 'Madu dari bunga pohon Randu (Kapuk) yang mekar di musim kemarau. Warna lebih pucat dengan tekstur encer dan rasa manis yang ringan. Aroma khas bunga randu yang lembut dan tidak terlalu kuat. Cocok untuk anak-anak karena rasanya yang mudah diterima. Baik untuk kesehatan paru-paru dan sistem pernapasan.',
            category: 'lite'
        },
        {
            id: 11,
            name: 'Madu Kaliandra',
            price: 60000,
            unit: '200ml',
            image: 'images/cal.jpg',
            description: 'Madu dari bunga Kaliandra merah yang banyak tumbuh di dataran tinggi Jawa. Warna lebih gelap dengan rasa khas yang sedikit sepat dan manis. Tekstur agak kental dengan aroma bunga yang kuat. Tinggi antioksidan dan baik untuk kesehatan jantung. Dipercaya mampu meningkatkan stamina dan vitalitas tubuh.',
            category: 'lite'
        },
        {
            id: 12,
            name: 'Madu Akasia Crassicarpa',
            price: 45000,
            unit: '200ml',
            image: 'images/ac.jpg',
            description: 'Madu monofloral dari bunga Akasia Crassicarpa yang tumbuh di perkebunan dataran rendah. Warna cerah keemasan dengan tekstur yang jernih. Rasa manis lembut dengan sedikit sentuhan floral yang menyegarkan. Tidak mudah mengkristal, cocok sebagai pemanis alami untuk teh dan minuman. Baik untuk kesehatan pencernaan dan detoksifikasi tubuh.',
            category: 'lite'
        }
    ],
    necropolis: [
        {
            id: 13,
            name: 'NECROPOLIS - Propolis Trigona Raw',
            price: 150000,
            unit: '10ml',
            image: 'images/necro.jpg',
            description: 'Propolis Trigona Raw dari lebah Trigona species. MEMBAKAR LIDAH, MENYIKSA TENGGOROKAN, dan MENGHANCURKAN LAMBUNG dengan panas yang tak terbendung! Harus dicampur air saat dikonsumsi, cukup 2-3 tetes per minum. Aromanya khas bunga dengan kesan mistik yang menyeramkan. Kaya akan senyawa bioaktif alami yang sangat bermanfaat untuk kesehatan, TAPI JANGAN SEPELEKAN KEBERANIANMU UNTUK MENCOBANYA!',
            category: 'necropolis'
        }
    ]
};

// Cart
let cart = [];
let currentOrder = { quantity: 1 };

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
    // Initialize loading screen
    initLoadingScreen();

    // Initialize other components
    initHeroSlider();
    initNavigation();
    initHamburger();
    initScrollAnimation();
    renderProducts();
    updateCartDisplay();
});

// Loading Screen Function
function initLoadingScreen() {
    setTimeout(function () {
        document.body.classList.add('loaded');

        setTimeout(function () {
            const loadingScreen = document.querySelector('.loading-screen');
            if (loadingScreen) {
                loadingScreen.remove();
            }
        }, 500);
    }, 1000);

    window.addEventListener('load', function () {
        document.body.classList.add('loaded');

        setTimeout(function () {
            const loadingScreen = document.querySelector('.loading-screen');
            if (loadingScreen) {
                loadingScreen.remove();
            }
        }, 500);
    });
}

// Navigation
function initNavigation() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');

    function activeMenu() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', activeMenu);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Hamburger Menu
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Hero Slider
function initHeroSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        currentSlide = index;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showSlide(currentSlide);
    }

    let slideInterval = setInterval(nextSlide, 5000);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
}

// Scroll Animation
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .gallery-item, .feature-item, .benefit-card').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for banner
    const banner = document.querySelector('.klanceng-banner-slide');
    if (banner) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            banner.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        const img = this.querySelector('img');
        if (img) {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;

            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';

            lightbox.addEventListener('click', function (e) {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
});

// Render Products
function renderProducts() {
    const premiumContainer = document.getElementById('premium-products');
    const regularContainer = document.getElementById('regular-products');
    const liteContainer = document.getElementById('lite-products');
    const necropolisContainer = document.getElementById('necropolis-products');

    // Render Premium Products
    products.premium.forEach(product => {
        const productCard = createProductCard(product);
        premiumContainer.appendChild(productCard);
    });

    // Render Regular Products
    products.regular.forEach(product => {
        const productCard = createProductCard(product);
        regularContainer.appendChild(productCard);
    });

    // Render Lite Products
    products.lite.forEach(product => {
        const productCard = createProductCard(product);
        liteContainer.appendChild(productCard);
    });

    // Render Necropolis Products
    products.necropolis.forEach(product => {
        const productCard = createProductCard(product);
        necropolisContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.category === 'premium' ? '<div class="product-badge">Premium</div>' : ''}
        </div>
        <div class="product-info">
            <h4 class="product-name">${product.name}</h4>
            <p class="product-unit">${product.unit}</p>
            <p class="product-description">${product.description.substring(0, 120)}...</p>
            <div class="product-footer">
                <div class="product-price">${formatRupiah(product.price)}</div>
                <button class="btn-add-cart" onclick="openOrderModal(${product.id})">
                    Pesan
                </button>
            </div>
        </div>
    `;
    return card;
}

// Order Modal
window.openOrderModal = function (productId) {
    const product = [...products.premium, ...products.regular, ...products.lite, ...products.necropolis].find(p => p.id === productId);
    if (!product) return;

    currentOrder = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        description: product.description
    };

    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-quantity').textContent = '1';
    updateModalPrice();

    document.getElementById('order-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeOrderModal = function () {
    document.getElementById('order-modal').classList.remove('active');
    document.body.style.overflow = '';
    currentOrder.quantity = 1;
};

window.changeQuantity = function (change) {
    currentOrder.quantity += change;
    if (currentOrder.quantity < 1) currentOrder.quantity = 1;
    document.getElementById('modal-quantity').textContent = currentOrder.quantity;
    updateModalPrice();
};

function updateModalPrice() {
    const totalPrice = currentOrder.price * currentOrder.quantity;
    document.getElementById('modal-total-price').textContent = formatRupiah(totalPrice);
}

window.addToCart = function () {
    const existingItem = cart.find(item => item.id === currentOrder.id);

    if (existingItem) {
        existingItem.quantity += currentOrder.quantity;
    } else {
        cart.push({ ...currentOrder });
    }

    updateCartDisplay();
    closeOrderModal();
    alert(`Berhasil menambahkan ${currentOrder.quantity} ${currentOrder.name} ke keranjang!`);
};

// Cart Functions
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';

        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatRupiah(item.price)}</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control-cart">
                        <button onclick="changeCartQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeCartQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="btn-remove">Hapus</button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        cartTotalDisplay.textContent = formatRupiah(total);
    }
}

window.changeCartQuantity = function (itemId, change) {
    const cartItem = cart.find(item => item.id === itemId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity < 1) {
            removeFromCart(itemId);
        } else {
            updateCartDisplay();
        }
    }
};

window.removeFromCart = function (itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
};

window.clearCart = function () {
    if (cart.length === 0) {
        alert('Keranjang sudah kosong');
        return;
    }

    if (confirm('Yakin ingin mengosongkan keranjang?')) {
        cart = [];
        updateCartDisplay();
        
        // Kosongkan form detail pemesanan
        document.getElementById('order-name').value = '';
        document.getElementById('order-phone').value = '';
        document.getElementById('order-address').value = '';
        document.getElementById('order-notes').value = '';
    }
};

// Fungsi untuk menambahkan Necropolis ke keranjang dari tombol di section Necropolis
function addToCartFromNecropolis() {
    // Buka modal dengan produk Necropolis (ID 13)
    openOrderModal(13);
}

window.sendOrderViaWhatsApp = function () {
    const customerName = document.getElementById('order-name').value.trim();
    const customerPhone = document.getElementById('order-phone').value.trim();
    const customerAddress = document.getElementById('order-address').value.trim();
    const customerNotes = document.getElementById('order-notes').value.trim();

    if (!customerName || !customerPhone || !customerAddress) {
        alert('Mohon lengkapi Nama, No. WhatsApp, dan Alamat sebelum memesan.');
        return;
    }

    if (cart.length === 0) {
        alert('Keranjang masih kosong. Silakan pilih produk terlebih dahulu.');
        return;
    }

    let message = `*PESANAN BARU - MADU SABRINA*\n=========================\n*Detail Pemesan:*\nNama: *${customerName}*\nNo. WhatsApp: *${customerPhone}*\nAlamat: *${customerAddress}*`;

    if (customerNotes) {
        message += `\nCatatan: *${customerNotes}*`;
    }

    message += `\n=========================\n\n*Rincian Pesanan:*\n`;

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `*- ${item.name}*\n  (${item.quantity} x ${formatRupiah(item.price)}) = *${formatRupiah(itemTotal)}*\n`;
    });

    message += `\n*TOTAL PESANAN: ${formatRupiah(total)}*\n\n_Mohon ditunggu konfirmasinya. Terima kasih!_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6289930719991?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
};

// Format Rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

// Close modal when clicking outside
document.addEventListener('click', function (e) {
    const modal = document.getElementById('order-modal');
    if (e.target === modal) {
        closeOrderModal();
    }
});
