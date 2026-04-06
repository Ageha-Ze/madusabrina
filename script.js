// =========================================
// MADU SABRINA - JAVASCRIPT
// =========================================

// Product Data
const products = {
    premium: [
        {
            id: 1,
            name: 'Madu Klanceng',
            price: 270000,
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
            description: 'Madu murni dari lebah Apis Dorsata yang bersarang di pohon-pohon tinggi hutan Sumatra. Dipanen secara tradisional oleh para pemanjat pohon ahli. Rasa lebih kuat dan kompleks dengan aroma bunga hutan yang khas. Mengandung berbagai nektar dari ratusan jenis bunga liar, memberikan manfaat kesehatan yang luar biasa lengkap.',
            category: 'premium'
        }
    ],
    regular: [
        {
            id: 3,
            name: 'Madu Akasia Crassicarpa',
            price: 85000,
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
            price: 55000,
            unit: '180gr',
            image: 'images/klc.jpg',
            description: 'Madu dari lebah Stingless Bee (Trigona sp.) yang tidak memiliki sengat. Dipanen dari sarang lebah kecil yang hidup di dalam batang pohon. Teksturnya lebih cair dengan rasa asam segar khas, kaya akan propolis alami. Kandungan enzim dan antioksidannya sangat tinggi, cocok untuk meningkatkan daya tahan tubuh dan mengatasi berbagai penyakit.',
            category: 'lite'
        },
        {
            id: 8,
            name: 'Madu Klanceng',
            price: 135000,
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
            description: 'Khusus kemasan kaca dari Madu dari lebah Stingless Bee (Trigona sp.) yang tidak memiliki sengat. Dipanen dari sarang lebah kecil yang hidup di dalam batang pohon. Teksturnya lebih cair dengan rasa asam segar khas, kaya akan propolis alami. Kandungan enzim dan antioksidannya sangat tinggi, cocok untuk meningkatkan daya tahan tubuh dan mengatasi berbagai penyakit.',
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
        },
        {
            id: 13,
            name: 'Sabrina Kids Honey',
            price: 25000,
            unit: '180gr',
            image: 'images/skhoney.jpeg',
            description: 'Madu khusus anak-anak dengan rasa manis alami yang lembut. Madu murni khusus untuk sistem pencernaan anak yang sensitif. Kaya akan vitamin dan mineral alami yang mendukung pertumbuhan sehat. Dikemas dalam ukuran praktis yang mudah dibawa. Cocok dicampur dengan susu atau makanan penutup anak.',
            category: 'kids'
        },
        {
            id: 14,
            name: 'Madu Hutan Liar',
            price: 55000,
            unit: '180gr',
            image: 'images/hutan180.jpg',
            description: 'Madu murni dari lebah Apis Dorsata yang bersarang di pohon-pohon tinggi hutan Sumatra. Dipanen secara tradisional oleh para pemanjat pohon ahli. Rasa lebih kuat dan kompleks dengan aroma bunga hutan yang khas. Mengandung berbagai nektar dari ratusan jenis bunga liar, memberikan manfaat kesehatan yang luar biasa lengkap.',
            category: 'lite'
        },
        {
            id: 16,
            name: 'Madu Hutan Liar',
            price: 85000,
            unit: '300gr',
            image: 'images/HL300g.png',
            description: 'Madu murni dari lebah Apis Dorsata yang bersarang di pohon-pohon tinggi hutan Sumatra. Dipanen secara tradisional oleh para pemanjat pohon ahli. Rasa lebih kuat dan kompleks dengan aroma bunga hutan yang khas. Mengandung berbagai nektar dari ratusan jenis bunga liar, memberikan manfaat kesehatan yang luar biasa lengkap.',
            category: 'lite'
        }
    ],
    necropolis: [
        {
            id: 15,
            name: 'NECROPOLIS - Propolis Trigona Raw',
            price: 150000,
            unit: '10ml',
            image: 'images/necro.jpg',
            description: 'Propolis Trigona Raw dari lebah Trigona species. MEMBAKAR LIDAH, MENYIKSA TENGGOROKAN, dan MENGHANCURKAN LAMBUNG dengan panas yang tak terbendung! Harus dicampur air saat dikonsumsi, cukup 2-3 tetes per minum. Aromanya khas bunga dengan kesan mistik yang menyeramkan. Kaya akan senyawa bioaktif alami yang sangat bermanfaat untuk kesehatan, TAPI JANGAN SEPELEKAN KEBERANIANMU UNTUK MENCOBANYA!',
            category: 'necropolis'
        }
    ]
};

// Cart — backed by localStorage so it persists across pages
const CART_KEY = 'madusabrina_cart';

function cartLoad() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
}

function cartSave(data) {
    localStorage.setItem(CART_KEY, JSON.stringify(data));
}

let cart = cartLoad();
let currentOrder = { quantity: 1 };

// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
    // Reload cart from localStorage on every page load
    cart = cartLoad();

    // Initialize loading screen
    initLoadingScreen();

    // Initialize other components
    initHeroSlider();
    initNavigation();
    initHamburger();
    initScrollAnimation();
    renderProducts();
    renderPOContent();
    updateCartDisplay();
    updateCartBadge();
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
    const heroSection = document.querySelector('.hero');

    function updateNavbarTransparency() {
        if (heroSection) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            const scrollY = window.scrollY;

            if (scrollY < heroBottom - 100) {
                // User is in hero section - make navbar transparent
                header.style.background = 'transparent';
                header.style.backdropFilter = 'none';
                header.style.boxShadow = 'none';
            } else {
                // User is outside hero section - make navbar opaque
                header.style.background = 'rgba(45, 31, 20, 0.98)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
        } else {
            // Fallback for pages without hero section
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }

    // Initial check
    updateNavbarTransparency();

    // Update on scroll
    window.addEventListener('scroll', updateNavbarTransparency);

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

    // Check if hamburger elements exist
    if (!hamburger || !navMenu) {
        return;
    }

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

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Hero Slider
function initHeroSlider() {
    // Check if hero elements exist (available in both index.html and products.html)
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length === 0 || dots.length === 0) {
        return;
    }

    let currentSlide = 0;

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
    if (premiumContainer) {
        products.premium.forEach(product => {
            const productCard = createProductCard(product);
            premiumContainer.appendChild(productCard);
        });
    }

    // Render Regular Products
    if (regularContainer) {
        products.regular.forEach(product => {
            const productCard = createProductCard(product);
            regularContainer.appendChild(productCard);
        });
    }

    // Render Lite Products
    if (liteContainer) {
        products.lite.forEach(product => {
            const productCard = createProductCard(product);
            liteContainer.appendChild(productCard);
        });
    }

    // Render Necropolis Products
    if (necropolisContainer) {
        products.necropolis.forEach(product => {
            const productCard = createProductCard(product);
            necropolisContainer.appendChild(productCard);
        });
    }
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

    cartSave(cart);
    updateCartDisplay();
    closeOrderModal();

    alert(`Berhasil menambahkan ${currentOrder.quantity} ${currentOrder.name} ke keranjang!`);
};

// Cart Functions
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    // Check if cart containers exist (only available in index.html)
    if (!cartItemsContainer || !cartTotalDisplay || !emptyCartMessage) {
        return;
    }

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartTotalDisplay.textContent = formatRupiah(0);
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

    updateCartBadge();
}


// Cart Badge — shows item count in navbar across all pages
function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let badge = document.getElementById('cart-badge');

    // Create badge if it doesn't exist yet
    if (!badge) {
        const cartLink = document.querySelector('a[href="#order"]');
        if (!cartLink) return;
        badge = document.createElement('span');
        badge.id = 'cart-badge';
        badge.style.cssText = `
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--honey-gold, #D4A574);
            color: #fff;
            font-size: 11px;
            font-weight: 700;
            min-width: 18px;
            height: 18px;
            border-radius: 9px;
            padding: 0 5px;
            margin-left: 6px;
            vertical-align: middle;
            line-height: 1;
        `;
        cartLink.appendChild(badge);
    }

    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
}

window.changeCartQuantity = function (itemId, change) {
    const cartItem = cart.find(item => item.id === itemId);
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity < 1) {
            removeFromCart(itemId);
        } else {
            cartSave(cart);
            updateCartDisplay();
        }
    }
};

window.removeFromCart = function (itemId) {
    cart = cart.filter(item => item.id !== itemId);
    cartSave(cart);
    updateCartDisplay();
};

window.clearCart = function () {
    if (cart.length === 0) {
        alert('Keranjang sudah kosong');
        return;
    }

    if (confirm('Yakin ingin mengosongkan keranjang?')) {
        cart = [];
        cartSave(cart);
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
    // Buka modal dengan produk Necropolis (ID 14)
    openOrderModal(15);
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

    message += `\n*TOTAL PESANAN EXCLUDE BIAYA KIRIM : ${formatRupiah(total)}*\n\n_Mohon ditunggu konfirmasinya. Terima kasih!_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/628993071991?text=${encodedMessage}`;
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

// ── PRE-ORDER DATA ─────────────────────────────────────────
const PO_PRODUCTS = [
    {
        id: 0,
        name: 'Madu Akasia Crassicarpa',
        waGreeting: 'Kak aku mau ikut Pre-Order Madu Akasia Crassicarpa...',
        desc: 'Si Hitam Manis kaya manfaat dari Sumatra! 100% Raw Honey murni tanpa proses pemanasan — langsung dari peternak terpercaya dengan sanad jelas.',
        options: [
            { id: 'eceran', label: 'Eceran 1kg: Rp 85.000 (1–4kg)', price: 85000, min: 1, max: 4 },
            { id: 'reseller', label: 'Reseller Ecer: Rp 65.000/kg (min. 5kg)', price: 65000, min: 5, max: 9 },
            { id: 'grosir-1kg', label: 'Grosir 1kg: Rp 60.000/kg (min. 10kg)', price: 60000, min: 10, max: 14 },
            { id: 'grosir-curah', label: 'Grosir Curah Tanpa Label: Rp 55.000/kg (15kg)', price: 55000, min: 15, max: 24 },
            { id: 'agent', label: 'DAFTAR MENJADI AGEN (min. 25kg)', price: 55000, min: 25, max: Infinity, isAgent: true },
        ],
        prices: [
            { label: 'Eceran 1kg', value: 'Rp 85.000' },
            { label: 'Reseller Ecer', value: 'Rp 65.000/kg' },
            { label: 'Grosir 1kg', value: 'Rp 60.000/kg', min: 'Min. 10kg' },
            { label: 'Grosir Curah', value: 'Rp 55.000/kg', min: '15kg' },
        ],
        agent: { price: 'Rp 55.000/kg', note: 'tanpa minimal berkelanjutan!', min: 'Order awal min. 25kg' },
        jerigen: { value: 'Rp 2.100.000', note: '(exclude ongkir)' },
    },
    {
        id: 1,
        name: 'Madu Multiflora',
        waGreeting: 'Kak aku mau ikut Pre-Order Madu Multiflora...',
        desc: 'Madu multiflora kaya manfaat dari Sumatra! 100% Raw Honey murni tanpa proses pemanasan — langsung dari peternak terpercaya dengan sanad jelas.',
        options: [
            { id: 'eceran', label: 'Eceran 1kg: Rp 90.000 (1–4kg)', price: 90000, min: 1, max: 4 },
            { id: 'reseller', label: 'Reseller Ecer: Rp 70.000/kg (min. 5kg)', price: 70000, min: 5, max: 9 },
            { id: 'grosir-1kg', label: 'Grosir 1kg: Rp 65.000/kg (min. 10kg)', price: 65000, min: 10, max: 14 },
            { id: 'grosir-curah', label: 'Grosir Curah Tanpa Label: Rp 60.000/kg (15kg)', price: 60000, min: 15, max: 24 },
            { id: 'agent', label: 'DAFTAR MENJADI AGEN (min. 25kg)', price: 60000, min: 25, max: Infinity, isAgent: true },
        ],
        prices: [
            { label: 'Eceran 1kg', value: 'Rp 90.000' },
            { label: 'Reseller Ecer', value: 'Rp 70.000/kg' },
            { label: 'Grosir 1kg', value: 'Rp 65.000/kg', min: 'Min. 10kg' },
            { label: 'Grosir Curah', value: 'Rp 60.000/kg', min: '15kg' },
        ],
        agent: { price: 'Rp 60.000/kg', note: 'tanpa minimal berkelanjutan!', min: 'Order awal min. 25kg' },
        jerigen: { value: 'Rp 2.250.000', note: '(exclude ongkir)' },
    },
    {
        id: 2,
        name: 'Multiflora Alpukat & Kayu Putih',
        waGreeting: 'Kak aku mau ikut Pre-Order Madu Multiflora Alpukat & Kayu Putih (Jawa - Purwodadi)...',
        desc: 'Madu Multi Jawa dominan nektar alpukat dan kayu putih — rasanya manis segerrr, panen langsung dari Purwodadi, Jawa Tengah. Perpaduan nektar alami pilihan: antioksidan tinggi bantu lawan radikal bebas, dukung daya tahan tubuh, bantu redakan tenggorokan & napas lebih lega, anti-inflamasi alami, serta sumber energi & stamina harian. Cocok untuk konsumsi rutin seluruh keluarga.',
        options: [
            { id: 'konsumen',    label: 'Konsumen/Eceran: Rp 150.000/kg (1–4kg)',        price: 150000, min: 1,  max: 4 },
            { id: 'marketer',    label: 'Marketer: Rp 95.000/kg (min. 1kg)',              price: 95000,  min: 1,  max: 4 },
            { id: 'reseller',    label: 'Reseller: Rp 85.000/kg (min. 5kg)',              price: 85000,  min: 5,  max: 14 },
            { id: 'agen',        label: 'Agen: Rp 75.000/kg (min. 15kg)',                 price: 75000,  min: 15, max: 24 },
            { id: 'curah-kg',    label: 'Curah Kiloan: Rp 70.000/kg (min. 25kg)',         price: 70000,  min: 25, max: 49 },
            { id: 'curah-grosir',label: 'DAFTAR MENJADI AGEN Curah Grosir: Rp 55.000/kg (25–50kg)', price: 55000, min: 25, max: 50, isAgent: true },
        ],
        prices: [
            { label: 'Konsumen/Eceran', value: 'Rp 150.000/kg' },
            { label: 'Marketer',        value: 'Rp 95.000/kg' },
            { label: 'Reseller',        value: 'Rp 85.000/kg',  min: 'Min. 5kg' },
            { label: 'Agen',            value: 'Rp 75.000/kg',  min: 'Min. 15kg' },
            { label: 'Curah Kiloan',    value: 'Rp 70.000/kg',  min: 'Min. 25kg' },
            { label: 'Curah Grosir',    value: 'Rp 55.000/kg',  min: '25–50kg (non kiloan)' },
        ],
        agent: { price: 'Rp 55.000/kg', note: 'non kiloan, tanpa minimal berkelanjutan!', min: 'Order awal min. 25kg (25–50kg)' },
        jerigen: { value: 'Rp 2.750.000', note: '(50kg, exclude ongkir)' },
    },
];

const BENEFITS = [
    { title: 'Trusted & Terbukti', desc: 'Sudah terkenal luas di mayoritas kalangan dengan ribuan pelanggan puas.' },
    { title: 'Jaminan Kemurnian Bukan Sekedar Keaslian', desc: 'Kami jamin murni tanpa campuran gula/air/pengawet.' },
    { title: 'Tersertifikasi Lengkap', desc: 'Teruji lab, berizin PIRT & bersertifikat Halal.' },
    { title: 'Pelayanan Premium', desc: 'Konsultasi GRATIS + panduan konsumsi. Bukan asal murah, tapi berkualitas produk DAN pelayanan!' },
    { title: 'Terstandar Kualitas', desc: 'Setiap batch diuji ketat, fresh langsung dari sumber.' },
    { title: 'Garansi 100%', desc: 'Uang kembali jika terbukti palsu/tidak murni.' },
    { title: 'Edukasi Gratis', desc: 'Cara bedakan madu asli vs palsu.' },
    { title: 'Sanad Terjaga', desc: 'Bisa dilacak dari peternak mana madunya berasal.' },
    { title: 'Free Sample', desc: 'Tester gratis untuk order minimal tertentu (biar bisa coba dulu kualitasnya!).' },
];

let currentPOProduct = 0;

// ── TAB SWITCHER ────────────────────────────────────────────
window.switchPOTab = function (idx) {
    document.querySelectorAll('.po-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
    document.querySelectorAll('.po-tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
    document.querySelectorAll('.po-hero-slide').forEach((s, i) => s.classList.toggle('active', i === idx));
    currentPOProduct = idx;
};

// ── PARALLAX ────────────────────────────────────────────────
(function initPOParallax() {
    const banner = document.querySelector('.po-hero-banner');
    if (!banner) return;

    function updateParallax() {
        const rect = banner.getBoundingClientRect();
        const viewH = window.innerHeight;

        // Only run when banner is visible
        if (rect.bottom < 0 || rect.top > viewH) return;

        // progress: 0 = banner top at viewport bottom, 1 = banner bottom at viewport top
        const progress = 1 - rect.bottom / (viewH + rect.height);
        // shift background from 20% (entering) to 80% (leaving) — slow drift
        const yPos = 20 + progress * 60;

        document.querySelectorAll('.po-hero-slide').forEach(slide => {
            slide.style.backgroundPosition = `center ${yPos.toFixed(1)}%`;
        });
    }

    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();
})();

// ── RENDER CONTENT PANELS ───────────────────────────────────
function renderPOContent() {
    const benefitsHTML = BENEFITS.map(b => `
        <div class="feature-item">
            <div class="feature-icon">✅</div>
            <div class="feature-text"><h4>${b.title}</h4><p>${b.desc}</p></div>
        </div>`).join('');

    PO_PRODUCTS.forEach(p => {
        const el = document.getElementById('po-content-' + p.id);
        if (!el) return;

        const priceRows = p.prices.map(pr => `
            <div class="price-item">
                <span class="price-label">${pr.label}:</span>
                <span class="price-value">${pr.value}</span>
                ${pr.min ? `<span class="price-min">${pr.min}</span>` : ''}
            </div>`).join('');

        el.innerHTML = `
            <div class="section-label">OPEN PRE-ORDER</div>
            <h2 class="section-title">🍯 ${p.name.toUpperCase()} ${p.id === 2 ? '(JAWA - PURWODADI)' : p.id === 0 ? '(SUMATRA TO JOGJA)' : '(SUMATRA TO JOGJA)'} 🍯</h2>
            <p class="about-text">${p.desc}</p>
            <p class="about-text"><strong>Kenapa pilih Madu Sabrina?</strong></p>
            <div class="feature-list">${benefitsHTML}</div>
            <div class="price-list">
                <h4>💰 DAFTAR HARGA PO MADU KEMASAN 1kg:</h4>
                <div class="price-grid">${priceRows}</div>
                <div class="agent-special">
                    <h4>🔥 SPECIAL FOR AGENT:</h4>
                    <div class="agent-price">
                        <span class="agent-value">${p.agent.price}</span>
                        <span class="agent-note">${p.agent.note}</span>
                        <span class="agent-min">${p.agent.min}</span>
                    </div>
                    <div class="jerigen-price">
                        <span class="jerigen-label">Jerigen 50kg:</span>
                        <span class="jerigen-value">${p.jerigen.value}</span>
                        <span class="jerigen-note">${p.jerigen.note}</span>
                    </div>
                </div>
            </div>
            <div class="order-info">
                <div class="location-badge"><span class="location-icon">📍</span><span class="location-text">Limited slot batch Yogyakarta</span></div>
                <div class="quality-note"><span class="quality-icon">⚡</span><span class="quality-text">Harga mencerminkan kualitas. Investasi kesehatan keluarga, bukan sekedar beli madu.</span></div>
                <div class="cs-info"><span class="cs-icon">💬</span><span class="cs-text">CS siap bantu 24/7</span><span class="cs-phone">📞 0899-3071-991</span></div>
            </div>`;
    });
}

// ── UNIFIED MODAL ───────────────────────────────────────────
window.openPreOrderModal = function (productIdx) {
    currentPOProduct = productIdx !== undefined ? productIdx : currentPOProduct;
    const p = PO_PRODUCTS[currentPOProduct];

    document.getElementById('po-modal-title').textContent = '🛒 Pre-Order ' + p.name;

    const optionsHTML = p.options.map(opt => `
        <label class="preorder-option-label${opt.isAgent ? ' agent-label' : ''}">
            <input type="checkbox" class="po-option" id="po-opt-${opt.id}" data-idx="${currentPOProduct}" data-id="${opt.id}">
            <span>${opt.label}</span>
        </label>`).join('<div class="agent-divider">───────────────────────────────</div>');

    // Insert divider before agent option
    document.getElementById('po-modal-options').innerHTML = optionsHTML;

    // Attach change listeners
    document.querySelectorAll('.po-option').forEach(cb => {
        cb.addEventListener('change', onPOOptionChange);
    });

    // Reset form
    document.getElementById('po-name').value = '';
    document.getElementById('po-address').value = '';
    document.getElementById('po-qty-field').style.display = 'none';
    document.getElementById('po-qty-input').value = '';

    document.getElementById('preorder-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
};

// Backward-compat aliases for old onclick calls in HTML
window.openOrderModalPreOrder = function () { openPreOrderModal(0); };
window.openOrderModalMultiflora = function () { openPreOrderModal(1); };

function onPOOptionChange(e) {
    // Uncheck siblings
    document.querySelectorAll('.po-option').forEach(cb => {
        if (cb !== e.target) cb.checked = false;
    });

    const qtyField = document.getElementById('po-qty-field');
    const qtyInput = document.getElementById('po-qty-input');

    if (!e.target.checked) {
        qtyField.style.display = 'none';
        qtyInput.value = '';
        return;
    }

    const p = PO_PRODUCTS[currentPOProduct];
    const opt = p.options.find(o => o.id === e.target.dataset.id);
    if (!opt) return;

    qtyField.style.display = 'block';
    qtyInput.min = opt.min;
    qtyInput.max = opt.max === Infinity ? '' : opt.max;
    qtyInput.placeholder = opt.max === Infinity
        ? `Masukkan jumlah kg (min. ${opt.min}kg)`
        : `Masukkan jumlah kg (${opt.min}–${opt.max}kg)`;
    qtyInput.focus();
}

window.closePreOrderModal = function () {
    document.getElementById('preorder-modal').classList.remove('active');
    document.body.style.overflow = '';
};

// Backward-compat
window.closeOrderModalPreOrder = window.closePreOrderModal;
window.closeOrderModalMultiflora = window.closePreOrderModal;

window.sendPreOrderWA = function () {
    const name = document.getElementById('po-name').value.trim();
    const address = document.getElementById('po-address').value.trim();
    const checked = document.querySelector('.po-option:checked');
    const qty = parseInt(document.getElementById('po-qty-input').value);

    if (!name || !address) { alert('Mohon lengkapi Nama dan Alamat.'); return; }
    if (!checked) { alert('Silakan pilih jenis orderan.'); return; }
    if (!qty || qty < 1) { alert('Silakan masukkan jumlah kg yang valid.'); return; }

    const p = PO_PRODUCTS[currentPOProduct];
    const opt = p.options.find(o => o.id === checked.dataset.id);

    if (qty < opt.min || qty > opt.max) {
        const maxStr = opt.max === Infinity ? '' : `–${opt.max}kg`;
        alert(`Jumlah tidak sesuai. Range: ${opt.min}kg${maxStr}`);
        return;
    }

    const total = qty * opt.price;
    const msg = `Halo Kak Madu Sabrina!%0A%0A*${p.waGreeting}*%0A%0A*Data Pemesan:*%0A- Nama: ${encodeURIComponent(name)}%0A- Alamat: ${encodeURIComponent(address)}%0A%0A*Jenis Orderan:*%0A- ${encodeURIComponent(opt.label)}%0A- Jumlah: ${qty}kg%0A- Harga/kg: Rp ${opt.price.toLocaleString('id-ID')}%0A- Total: Rp ${total.toLocaleString('id-ID')}%0A%0A*Catatan:*%0A- Mohon konfirmasi ketersediaan dan ongkir%0A- Mohon panduan pembayaran%0A%0ATerima kasih Kak!%0A%0A*Madu Sabrina - Keaslian Alam Indonesia*`;

    window.open(`https://wa.me/628993071991?text=${msg}`, '_blank');
    closePreOrderModal();
};