// 1. GLOBAL STATE
// This line connects your PRODUCTS.js data to the rest of the app and adds IDs
const products = (typeof PRODUCTS !== 'undefined') ? PRODUCTS.map((p, index) => ({...p, id: index + 1})) : [];
let cart = JSON.parse(localStorage.getItem('irsa_cart')) || [];

function renderHeader() {
    const header = document.querySelector('header');
    if (!header) return;
    header.innerHTML = `
        <div class="logo-container">
            <a href="index.html" style="text-decoration:none; display: flex; align-items: center;">
                <svg class="main-logo" viewBox="0 0 100 100" fill="none">
                    <rect x="15" y="20" width="12" height="60" fill="black"/>
                    <rect x="35" y="20" width="45" height="12" fill="black"/>
                    <rect x="35" y="44" width="30" height="12" fill="black"/>
                    <rect x="35" y="20" width="12" height="60" fill="black"/>
                </svg>
            </a>
        </div>
        <div class="header-icons">
            <span class="icon-link" onclick="toggleSearch()" style="cursor:pointer;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></span>
            <a href="account.html" class="icon-link">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
            </a>
            <a href="cart.html" class="icon-link" style="position: relative; display: flex; align-items: center; justify-content: center;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <span class="cart-count">0</span>
            </a>
        </div>
        <div class="search-container" id="searchBar" style="display:none; padding: 10px 15px; background: #f9f9f9; border-bottom: 1px solid #eee; position:absolute; top:60px; left:0; width:100%;">
            <input type="text" id="searchInput" placeholder="Search for snacks..." oninput="handleSearch(event)" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 0.9rem; outline: none;">
            <span onclick="toggleSearch()" style="cursor:pointer; font-weight:bold; padding-left: 15px;">✕</span>
        </div>
    `;
}

function renderFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    // Apply clean styling directly to the footer tag to ensure visibility
    footer.style.marginTop = "50px";
    footer.style.padding = "40px 20px";
    footer.style.background = "#f9f9f9";
    footer.style.borderTop = "1px solid #eee";
    footer.style.textAlign = "center";
    footer.style.display = "block"; // Force display

    footer.innerHTML = `
        <h3 style="font-weight: 800; margin-bottom: 15px; color: #000; font-size: 1.2rem; display: block;">IRSA FOODS</h3>
        
        <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
            <a href="legal.html" style="text-decoration: none; color: #666; font-size: 0.85rem; font-weight: 700;">ABOUT</a>
            <a href="legal.html" style="text-decoration: none; color: #666; font-size: 0.85rem; font-weight: 700;">CONTACT</a>
            <a href="legal.html" style="text-decoration: none; color: #666; font-size: 0.85rem; font-weight: 700;">POLICIES</a>
        </div>
        
        <p style="font-size: 0.75rem; color: #aaa; margin: 0;">© 2026 Irsa Foods Daska. All rights reserved.</p>
    `;
}


let visibleCount = 8; 
let activeProducts = []; 

function displayProducts(filteredList = products, isLoadMore = false) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    activeProducts = filteredList; // Store the current list (all, or filtered)

    // If it's a new category/search, start from 8. If "Load More", add 8.
    if (!isLoadMore) {
        visibleCount = 8;
        grid.innerHTML = ''; 
    }

    const itemsToShow = activeProducts.slice(isLoadMore ? visibleCount - 8 : 0, visibleCount);

    const html = itemsToShow.map((product, index) => `
    <a href="product-detail.html?id=${product.id}" class="product-card">
        <img src="${product.image}" 
             alt="Buy ${product.name} - Irsa Foods Daska" 
             ${index === 0 ? 'fetchpriority="high"' : ''} 
             onerror="this.src='https://placehold.co/400x400/f5f5f5/000000?text=Irsa+Foods'" 
             class="product-image">
        <div class="product-info">
            <h2 class="product-name" style="font-size: 0.9rem; font-weight: 600; margin: 8px 0 2px;">
                ${product.name}
            </h2>
            <p class="product-price">Rs. ${product.price}</p>
        </div>
    </a>
`).join('');

    grid.insertAdjacentHTML('beforeend', html);

    // Manage the "Show More" Button visibility
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = (visibleCount < activeProducts.length) ? 'inline-block' : 'none';
    }
}

function handleLoadMore() {
    visibleCount += 8;
    displayProducts(activeProducts, true);
}


function filterProducts(category) {
    const filtered = category === 'All' ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
}

function renderProductDetail() {
    const container = document.getElementById('product-detail-view');
    if (!container) return;
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = products.find(p => p.id === productId);
    if (product) {
        container.innerHTML = `
            <div class="detail-container">
                <img src="${product.image}" onerror="this.src='https://placehold.co/400x400/f5f5f5/000000?text=Irsa+Foods'" class="detail-img">
                <h1 class="detail-name">${product.name}</h1>
                <p class="detail-category">${product.category}</p>
                <p class="detail-price">Rs. ${product.price}</p>
                <div style="margin-top: 25px; display: flex; align-items: center; gap: 20px;">
                    <span style="font-weight: 600; font-size: 0.9rem;">QUANTITY</span>
                    <div style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 20px; padding: 5px 15px; gap: 15px;">
                        <button onclick="changeQty(-1)" style="border:none; background:none; font-size: 1.2rem; cursor:pointer;">-</button>
                        <span id="qty-count" style="font-weight: bold; min-width: 20px; text-align: center;">1</span>
                        <button onclick="changeQty(1)" style="border:none; background:none; font-size: 1.2rem; cursor:pointer;">+</button>
                    </div>
                </div>
                <button class="buy-btn" onclick="addToCart(${product.id})">ADD TO BAG</button>
            </div>
        `;
    }
}

let currentQty = 1;
function changeQty(amount) {
    currentQty = Math.max(1, currentQty + amount);
    const qtyDisplay = document.getElementById('qty-count');
    if (qtyDisplay) qtyDisplay.innerText = currentQty;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let currentCart = JSON.parse(localStorage.getItem('irsa_cart')) || [];
        const existingItem = currentCart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += currentQty;
        } else {
            currentCart.push({ ...product, quantity: currentQty });
        }
        localStorage.setItem('irsa_cart', JSON.stringify(currentCart));
        updateCartCount();
        showToast(`${currentQty}x ${product.name} added to bag`);
        currentQty = 1;
        if (document.getElementById('qty-count')) document.getElementById('qty-count').innerText = 1;
    }
}

function updateCartCount() {
    const counts = document.querySelectorAll('.cart-count');
    const currentCart = JSON.parse(localStorage.getItem('irsa_cart')) || [];
    const totalItems = currentCart.reduce((sum, item) => sum + item.quantity, 0);
    counts.forEach(el => {
        el.innerText = totalItems;
        el.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function toggleSearch() {
    const sb = document.getElementById('searchBar');
    if (sb) sb.style.display = (sb.style.display === 'flex') ? 'none' : 'flex';
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
}
function checkoutEmail(btn) {
    // 1. Get form data
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;
    
    // 2. Validation
    if(!name || !phone || !address) {
        showToast("⚠️ Please fill in all details");
        return;
    }

    const cart = JSON.parse(localStorage.getItem('irsa_cart')) || [];
    if(cart.length === 0) {
        showToast("🛒 Your bag is empty");
        return;
    }

    // 3. UI Loading State
    const originalText = btn.innerText;
    btn.innerText = "SENDING...";
    btn.disabled = true;

    // 4. Initialize EmailJS explicitly
    emailjs.init("wbeYSYW8HE-yUwLJX");

    // 5. Prepare Data
    let orderDetails = cart.map(item => `- ${item.name} (x${item.quantity})`).join('\n');
    let total = document.getElementById('cart-total').innerText;

    const templateParams = {
        customer_name: name,
        customer_phone: phone,
        customer_address: address,
        order_details: orderDetails,
        total_price: total
    };

    // 6. Send
    emailjs.send('service_qwcwsej', 'template_7hvvlpm', templateParams)
    .then(function() {
        showToast("✅ Order Sent Successfully!");
        localStorage.removeItem('irsa_cart');
        setTimeout(() => { window.location.href = "index.html"; }, 2000);
    })
    .catch(function(error) {
        console.error("EmailJS Error:", error);
        // This will now show the SPECIFIC reason for failure in the toast
        showToast("❌ Error: " + (error.text || "Check EmailJS setup"));
        btn.innerText = originalText;
        btn.disabled = false;
    });
}





document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    displayProducts();
    renderProductDetail();
    updateCartCount();
});
