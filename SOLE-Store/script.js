/* ============================================================
   SOLE. STORE — script.js
   ============================================================ */

const WA_NUMBER = "2290169213654"; // ← Numéro WhatsApp Bénin

const products = [
    // 👟 SNEAKERS (8)
    { id: 1, cat: 'sneakers', type: 'Ensembles', name: 'Nike Air Force 1', brand: 'Nike', price: '75 000 FCFA', priceNum: 75000, sizes: [38, 40, 42, 44], img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80', tag: 'Best-seller' },
    { id: 2, cat: 'sneakers', type: 'Ensembles', name: 'Air Max 90 OG', brand: 'Nike', price: '95 000 FCFA', priceNum: 95000, sizes: [39, 41, 43, 45], img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80', tag: 'Promo' },
    { id: 3, cat: 'sneakers', type: 'Ensembles', name: 'Air Jordan 1 High', brand: 'Jordan', price: '120 000 FCFA', priceNum: 120000, sizes: [40, 41, 42, 43, 44, 45], img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80', tag: 'Hot' },
    { id: 4, cat: 'sneakers', type: 'T-shirts', name: 'Air Jordan 4 Retro', brand: 'Jordan', price: '150 000 FCFA', priceNum: 150000, sizes: [42, 43, 44], img: 'https://images.unsplash.com/photo-1597045566774-bf457c80d44a?auto=format&fit=crop&w=600&q=80', tag: 'Rare' },
    { id: 5, cat: 'sneakers', type: 'T-shirts', name: 'Adidas Ultraboost', brand: 'Adidas', price: '105 000 FCFA', priceNum: 105000, sizes: [38, 40, 42, 44], img: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=600&q=80', tag: null },
    { id: 6, cat: 'sneakers', type: 'Joggings', name: 'Adidas Forum Low', brand: 'Adidas', price: '65 000 FCFA', priceNum: 65000, sizes: [37, 39, 41, 43], img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80', tag: null },
    { id: 7, cat: 'sneakers', type: 'Joggings', name: 'New Balance 990v5', brand: 'New Balance', price: '145 000 FCFA', priceNum: 145000, sizes: [40, 41, 42, 43, 44], img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80', tag: 'Premium' },
    { id: 8, cat: 'sneakers', type: 'Joggings', name: 'New Balance 550', brand: 'New Balance', price: '85 000 FCFA', priceNum: 85000, sizes: [38, 40, 42], img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=600&q=80', tag: 'Classic' },

    // 👞 CLASSIQUES (6)
    { id: 9, cat: 'classiques', type: 'Ensembles', name: 'Stan Smith', brand: 'Adidas', price: '60 000 FCFA', priceNum: 60000, sizes: [36, 38, 40, 42, 44], img: 'https://images.unsplash.com/photo-1589187775328-882e91b3db4f?auto=format&fit=crop&w=600&q=80', tag: 'Iconic' },
    { id: 10, cat: 'classiques', type: 'Ensembles', name: 'Superstar', brand: 'Adidas', price: '65 000 FCFA', priceNum: 65000, sizes: [38, 40, 42], img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=600&q=80', tag: null },
    { id: 11, cat: 'classiques', type: 'T-shirts', name: 'Chuck Taylor 70', brand: 'Converse', price: '55 000 FCFA', priceNum: 55000, sizes: [35, 37, 39, 41, 43, 45], img: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=600&q=80', tag: null },
    { id: 12, cat: 'classiques', type: 'T-shirts', name: 'Old Skool', brand: 'Vans', price: '45 000 FCFA', priceNum: 45000, sizes: [36, 38, 40, 42, 44], img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80', tag: null },
    { id: 13, cat: 'classiques', type: 'Joggings', name: 'Reebok Classic', brand: 'Reebok', price: '58 000 FCFA', priceNum: 58000, sizes: [39, 41, 43], img: 'https://images.unsplash.com/photo-1511551203524-9a24350a5771?auto=format&fit=crop&w=600&q=80', tag: null },
    { id: 14, cat: 'classiques', type: 'Joggings', name: 'Air Max 1', brand: 'Nike', price: '90 000 FCFA', priceNum: 90000, sizes: [40, 42, 44], img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80', tag: 'Classic' },

    // ⚡ SPORT (6)
    { id: 15, cat: 'sport', type: 'Ensembles', name: 'Mercurial Elite', brand: 'Nike', price: '165 000 FCFA', priceNum: 165000, sizes: [40, 41, 42, 43, 44], img: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=600&q=80', tag: 'Elite' },
    { id: 16, cat: 'sport', type: 'Ensembles', name: 'Predator Accuracy', brand: 'Adidas', price: '150 000 FCFA', priceNum: 150000, sizes: [39, 41, 43, 45], img: 'https://images.unsplash.com/photo-1515444744559-7be63e1600de?auto=format&fit=crop&w=600&q=80', tag: 'Pro' },
    { id: 17, cat: 'sport', type: 'T-shirts', name: 'Pegasus 40', brand: 'Nike', price: '85 000 FCFA', priceNum: 85000, sizes: [38, 40, 42, 44], img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80', tag: 'Running' },
    { id: 18, cat: 'sport', type: 'T-shirts', name: 'Gel-Kayano 30', brand: 'Asics', price: '125 000 FCFA', priceNum: 125000, sizes: [40, 42, 44, 46], img: 'https://images.unsplash.com/photo-1624309666276-0f85268c4333?auto=format&fit=crop&w=600&q=80', tag: 'Premium' },
    { id: 19, cat: 'sport', type: 'Joggings', name: 'Puma Future 7', brand: 'Puma', price: '140 000 FCFA', priceNum: 140000, sizes: [38, 40, 42, 44], img: 'https://images.unsplash.com/photo-1533681018184-68bd1d8f39fe?auto=format&fit=crop&w=600&q=80', tag: 'New' },
    { id: 20, cat: 'sport', type: 'Joggings', name: 'Reebok Nano X3', brand: 'Reebok', price: '90 000 FCFA', priceNum: 90000, sizes: [39, 41, 43], img: 'https://images.unsplash.com/photo-1512374382149-4332c6c02151?auto=format&fit=crop&w=600&q=80', tag: 'Crossfit' }
];

/* ===== STATE & SELECTION ===== */
let cart = [];
let currentProduct = null;
let selectedSize = null;

/* ===== INTERSECTION OBSERVER (REVEAL) ===== */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

function observeReveal() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

/* ===== NAVIGATION (SPA Logic) ===== */
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${pageId}`);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-link, .mobile-link').forEach(l => {
        if (l.dataset.page === pageId) l.classList.add('active');
        else l.classList.remove('active');
    });

    closeMobileMenu();
    window.scrollTo(0, 0);
    observeReveal();
}

document.querySelectorAll('[data-page]').forEach(el => {
    el.onclick = (e) => {
        e.preventDefault();
        showPage(el.dataset.page);
    };
});

/* ===== MOBILE MENU & OVERLAY ===== */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('closeMenu');

function openMobileMenu() { mobileMenu.classList.add('active'); overlay.classList.add('active'); }
function closeMobileMenu() { if(mobileMenu) mobileMenu.classList.remove('active'); if(overlay) overlay.classList.remove('active'); }

if(menuBtn) menuBtn.onclick = openMobileMenu;
if(closeMenu) closeMenu.onclick = closeMobileMenu;
if(overlay) overlay.onclick = closeMobileMenu;

/* ===== CATALOGUE & CAROUSELS ===== */
function createCard(p) {
    const sizeRange = p.sizes ? `${p.sizes[0]} - ${p.sizes[p.sizes.length-1]}` : '--';
    return `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="size-badge-small">${sizeRange}</div>
      </div>
      <div class="product-info">
        <p class="product-brand">${p.brand}</p>
        <h4 class="product-name">${p.name}</h4>
        <p class="product-price">${p.price}</p>
      </div>
      ${p.tag ? `<div class="card-tag">${p.tag}</div>` : ''}
    </div>`;
}

function renderBestSellers() {
    const container = document.getElementById('bestSellersContainer');
    if (!container) return;
    container.innerHTML = '';
    
    const bests = products.slice(0, 6);
    const row = document.createElement('div');
    row.className = 'carousel-row reveal';
    row.innerHTML = `
        <div class="carousel-header">
            <h3>Top Tendances</h3>
            <div class="carousel-nav">
                <button class="nav-prev">❮</button>
                <button class="nav-next">❯</button>
            </div>
        </div>
        <div class="carousel-track-container">
            <div class="carousel-track">${bests.map(p => createCard(p)).join('')}</div>
        </div>
    `;
    container.appendChild(row);
    initCarousel(row);
    observeReveal();
}

function renderCategory(cat) {
    const container = document.getElementById('catContent');
    if (!container) return;
    container.innerHTML = '';

    const types = ["Ensembles", "T-shirts", "Joggings"];
    types.forEach(type => {
        const filtered = products.filter(p => p.cat === cat && p.type === type);
        if (filtered.length === 0) return;

        const row = document.createElement('div');
        row.className = 'carousel-row reveal';
        row.innerHTML = `
            <div class="carousel-header">
                <h3>${type}</h3>
                <div class="carousel-nav">
                    <button class="nav-prev">❮</button>
                    <button class="nav-next">❯</button>
                </div>
            </div>
            <div class="carousel-track-container">
                <div class="carousel-track">${filtered.map(p => createCard(p)).join('')}</div>
            </div>
        `;
        container.appendChild(row);
        initCarousel(row);
    });
    observeReveal();
}

function initCarousel(row) {
    const track = row.querySelector('.carousel-track');
    const next = row.querySelector('.nav-next');
    const prev = row.querySelector('.nav-prev');
    
    if(!track || !next || !prev) return;

    next.onclick = () => {
        const card = track.querySelector('.product-card');
        if(!card) return;
        const cardW = card.offsetWidth + 20;
        track.scrollBy({ left: cardW, behavior: 'smooth' });
    };
    prev.onclick = () => {
        const card = track.querySelector('.product-card');
        if(!card) return;
        const cardW = card.offsetWidth + 20;
        track.scrollBy({ left: -cardW, behavior: 'smooth' });
    };
}

document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.onclick = () => {
        document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderCategory(tab.dataset.cat);
    };
});

/* ===== MODAL & CART ===== */
const modal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const cartDrawer = document.getElementById('cartDrawer');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
const toast = document.getElementById('toast');

function openModal(id) {
    currentProduct = products.find(p => p.id === id);
    if(!currentProduct) return;
    selectedSize = null;
    
    const modalImg = document.getElementById('modalImg');
    if(modalImg) modalImg.src = currentProduct.img;
    
    document.getElementById('modalTitle').textContent = currentProduct.name;
    document.getElementById('modalBrand').textContent = currentProduct.brand;
    document.getElementById('modalPrice').textContent = currentProduct.price;
    
    const sizesDiv = document.getElementById('modalSizes');
    if(sizesDiv) {
        sizesDiv.innerHTML = currentProduct.sizes.map(s => `<button class="size-opt" onclick="selectSize(this, ${s})">${s}</button>`).join('');
    }
    
    if(modal) modal.classList.add('active');
}

window.selectSize = (btn, s) => {
    document.querySelectorAll('.size-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = s;
};

window.openModal = openModal;

if(closeModal) closeModal.onclick = () => modal.classList.remove('active');
if(cartBtn) cartBtn.onclick = () => cartDrawer.classList.add('active');
if(closeCart) closeCart.onclick = () => cartDrawer.classList.remove('active');

const addToCartBtn = document.getElementById('addToCartBtn');
if(addToCartBtn) {
    addToCartBtn.onclick = () => {
        if (!selectedSize) return alert('Choisissez une pointure !');
        cart.push({ ...currentProduct, selectedSize, cartId: Date.now() });
        updateCart();
        modal.classList.remove('active');
        showToast();
    };
}

function updateCart() {
    const items = document.getElementById('cartItems');
    const count = document.querySelector('.cart-count');
    const total = document.getElementById('cartTotal');
    
    if(count) count.textContent = cart.length;
    
    if (cart.length === 0) {
        if(items) items.innerHTML = '<p class="empty-msg">Votre panier est vide.</p>';
        if(total) total.textContent = "0 FCFA";
        return;
    }
    
    if(items) {
        items.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.img}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.selectedSize} · ${item.price}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.cartId})">✕</button>
            </div>
        `).join('');
    }
    
    const sum = cart.reduce((s, i) => s + i.priceNum, 0);
    if(total) total.textContent = sum.toLocaleString() + " FCFA";
}

window.removeFromCart = (cid) => {
    cart = cart.filter(i => i.cartId !== cid);
    updateCart();
};

function showToast() {
    if(toast) {
        toast.classList.add('active');
        setTimeout(() => toast.classList.remove('active'), 2500);
    }
}

/* ===== WHATSAPP ORDER ===== */
const checkoutBtn = document.getElementById('checkoutBtn');
if(checkoutBtn) {
    checkoutBtn.onclick = () => {
        if (cart.length === 0) return;
        let msg = `Bonjour SOLE. ! Je souhaite commander :\n\n`;
        cart.forEach((i, idx) => {
            msg += `${idx+1}. 🔥 ${i.brand} ${i.name}\n   📏 Pointure: ${i.selectedSize}\n   💰 Prix: ${i.price}\n\n`;
        });
        const sum = cart.reduce((s, i) => s + i.priceNum, 0);
        msg += `━━━━━━━━━━━━━━━\nTOTAL : ${sum.toLocaleString()} FCFA\n━━━━━━━━━━━━━━━`;
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    };
}

/* ===== CONTACT FORM ===== */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.onsubmit = (e) => {
        e.preventDefault();
        const nom = contactForm.querySelector('input[placeholder="Nom complet"]').value;
        const modele = contactForm.querySelector('input[placeholder="Modèle souhaité"]').value;
        const pointure = contactForm.querySelector('input[placeholder="Pointure (ex: 42)"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        let msg = `Bonjour SOLE. ! Nouvelle demande de contact :\n\n`;
        msg += `👤 Nom: ${nom}\n`;
        msg += `👟 Modèle: ${modele}\n`;
        msg += `📏 Pointure: ${pointure}\n`;
        msg += `✉️ Message: ${message}`;
        
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
        contactForm.reset();
    };
}

/* ===== INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
    renderBestSellers();
    renderCategory('sneakers');
    observeReveal();
});
