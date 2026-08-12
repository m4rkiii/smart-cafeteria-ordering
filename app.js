/* ==========================================================================
   SMART CAFETERIA ORDERING MOBILE APPLICATION - JS STATE ENGINE
   Manages all 15 Screens, 3 Scenarios, Cart Engine, & Live Tracking Stepper
   ========================================================================== */

const sampleMeals = [
  {
    id: 'm1',
    name: 'Grilled Chicken & Savory Rice',
    price: 250,
    category: 'Lunch',
    emoji: '🍱',
    calories: 520,
    prepTime: '10 min',
    stock: 'Available',
    description: 'Freshly grilled marinated chicken breast served with steamed savory turmeric rice and fresh garden salad.'
  },
  {
    id: 'm2',
    name: 'Beef Burger & Fries Combo',
    price: 320,
    category: 'Combos',
    emoji: '🍔',
    calories: 680,
    prepTime: '15 min',
    stock: 'Sold Out', // FR-22 Error Prevention demo
    description: '100% prime beef patty with melted cheese, lettuce, tomato, and seasoned crispy french fries.'
  },
  {
    id: 'm3',
    name: 'Fresh Mango & Passion Juice',
    price: 80,
    category: 'Drinks',
    emoji: '🥤',
    calories: 140,
    prepTime: '3 min',
    stock: 'Available',
    description: 'Freshly squeezed natural mango and passion fruit juice blend with zero added sugar.'
  },
  {
    id: 'm4',
    name: 'Vegetarian Stir-Fry Noodles',
    price: 220,
    category: 'Lunch',
    emoji: '🍜',
    calories: 410,
    prepTime: '12 min',
    stock: 'Low Stock',
    description: 'Wok-tossed egg noodles with crisp vegetables, sesame oil, and savory soy garlic sauce.'
  },
  {
    id: 'm5',
    name: 'Spanish Omelette & Toast',
    price: 180,
    category: 'Breakfast',
    emoji: '🍳',
    calories: 380,
    prepTime: '8 min',
    stock: 'Available',
    description: 'Three-egg fluffy omelette with diced bell peppers, onions, tomatoes, and toasted whole wheat bread.'
  },
  {
    id: 'm6',
    name: 'Crispy Samosa Pair',
    price: 100,
    category: 'Snacks',
    emoji: '🥟',
    calories: 260,
    prepTime: '2 min',
    stock: 'Available',
    description: 'Two golden pastry pockets filled with spiced minced beef and green peas.'
  }
];

class CafeteriaApp {
  constructor() {
    this.currentScreen = 'screenHome';
    this.cart = [];
    this.favorites = ['m1', 'm3'];
    this.activeOrder = {
      id: '#1045',
      items: [{ name: 'Grilled Chicken & Savory Rice', qty: 1, price: 250 }],
      total: 320,
      venue: 'Main Cafeteria',
      timeSlot: '12:30 PM',
      paymentMethod: 'M-Pesa',
      statusStep: 2, // 1: Received, 2: Prep, 3: Ready, 4: Collected
    };
    this.currentDetailItem = sampleMeals[0];
    this.currentCustomization = { portion: 'Standard', extras: [], instructions: '', extraCost: 0 };
    this.historyOrders = [
      {
        id: '#1044',
        date: 'Yesterday, 1:15 PM',
        items: '1x Grilled Chicken & Rice',
        total: 250,
        status: 'Completed',
        venue: 'Main Cafeteria'
      },
      {
        id: '#1020',
        date: 'Aug 10, 2026',
        items: '1x Veggie Noodles + 1x Juice',
        total: 300,
        status: 'Completed',
        venue: 'Student Centre'
      }
    ];

    this.init();
  }

  init() {
    this.renderMealsGrid('homeMealsGrid', sampleMeals);
    this.renderMealsGrid('fullMenuGrid', sampleMeals);
    this.renderFavoritesGrid();
    this.renderHistoryList();
    this.setupEventListeners();
    this.updateClock();
    setInterval(() => this.updateClock(), 30000);
  }

  updateClock() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').innerText = `${hrs}:${mins}`;
  }

  setupEventListeners() {
    // Mode toggles
    document.getElementById('wireframeToggle').addEventListener('change', (e) => {
      if (e.target.checked) {
        document.body.classList.add('mode-wireframe');
        document.body.classList.remove('mode-polished');
      } else {
        document.body.classList.add('mode-polished');
        document.body.classList.remove('mode-wireframe');
      }
    });

    document.getElementById('versionToggle').addEventListener('change', (e) => {
      const isV2 = e.target.checked;
      const banner = document.getElementById('activeOrderBanner');
      if (banner) {
        banner.style.display = isV2 ? 'block' : 'none';
      }
      this.showToast(isV2 ? 'Switched to V2 Prototype (Active Order Banner Enabled)' : 'Switched to V1 Prototype (Active Order Banner Hidden)');
    });

    document.getElementById('headerBackBtn').addEventListener('click', () => {
      this.navigateTo('screenHome');
    });
  }

  navigateTo(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.style.display = 'none');

    // Show target screen
    const target = document.getElementById(screenId);
    if (target) {
      target.style.display = 'block';
      this.currentScreen = screenId;
    }

    // Update Header
    const backBtn = document.getElementById('headerBackBtn');
    const title = document.getElementById('headerTitle');

    if (screenId === 'screenHome') {
      backBtn.style.display = 'none';
      title.innerText = 'Smart Cafeteria';
      this.setActiveNav('navHome');
    } else {
      backBtn.style.display = 'flex';
      title.innerText = this.getScreenTitle(screenId);
    }

    // Nav bar highlights
    if (screenId === 'screenMenu') this.setActiveNav('navMenu');
    if (screenId === 'screenHistory') this.setActiveNav('navOrders');
    if (screenId === 'screenFavorites') this.setActiveNav('navFavorites');
    if (screenId === 'screenProfile') this.setActiveNav('navProfile');
  }

  getScreenTitle(id) {
    const titles = {
      'screenSplash': 'Welcome',
      'screenLogin': 'Authentication',
      'screenMenu': 'Cafeteria Menu',
      'screenMealDetails': 'Meal Overview',
      'screenCustomize': 'Customize Order',
      'screenCart': 'Shopping Cart',
      'screenTimeSelect': 'Pickup Details',
      'screenPayment': 'Payment Interface',
      'screenConfirmation': 'Order Confirmed',
      'screenTracking': 'Live Order Stepper',
      'screenReady': 'Ready for Pickup',
      'screenHistory': 'Order Receipts',
      'screenFavorites': 'Saved Meals',
      'screenProfile': 'Account Profile'
    };
    return titles[id] || 'Smart Cafeteria';
  }

  setActiveNav(navId) {
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(navId);
    if (activeBtn) activeBtn.classList.add('active');
  }

  showToast(msg) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>ℹ️</span> <div>${msg}</div>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  renderMealsGrid(containerId, meals) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = meals.map(m => {
      const isFav = this.favorites.includes(m.id);
      const isSoldOut = m.stock === 'Sold Out';
      const badgeClass = isSoldOut ? 'badge-danger' : (m.stock === 'Low Stock' ? 'badge-warning' : 'badge-success');

      return `
        <div class="meal-card ${isSoldOut ? 'sold-out' : ''}" onclick="app.openMealDetails('${m.id}')">
          <button class="fav-heart-btn" onclick="event.stopPropagation(); app.toggleFavorite('${m.id}')">
            ${isFav ? '❤️' : '🤍'}
          </button>
          <div class="meal-card-icon">${m.emoji}</div>
          <div class="meal-card-title">${m.name}</div>
          <span class="badge ${badgeClass}" style="align-self: flex-start; margin-bottom: 4px;">${m.stock}</span>
          <div class="meal-card-price">KSh ${m.price}</div>
        </div>
      `;
    }).join('');
  }

  filterMeals(query) {
    const filtered = sampleMeals.filter(m => 
      m.name.toLowerCase().includes(query.toLowerCase()) || 
      m.category.toLowerCase().includes(query.toLowerCase())
    );
    this.renderMealsGrid('homeMealsGrid', filtered);
    this.renderMealsGrid('fullMenuGrid', filtered);
  }

  selectCategory(cat) {
    document.querySelectorAll('.cat-pill').forEach(btn => {
      btn.classList.toggle('active', btn.innerText.includes(cat));
    });
    if (cat === 'All') {
      this.renderMealsGrid('homeMealsGrid', sampleMeals);
      this.renderMealsGrid('fullMenuGrid', sampleMeals);
    } else {
      const filtered = sampleMeals.filter(m => m.category === cat);
      this.renderMealsGrid('homeMealsGrid', filtered);
      this.renderMealsGrid('fullMenuGrid', filtered);
    }
  }

  openMealDetails(mealId) {
    const item = sampleMeals.find(m => m.id === mealId);
    if (!item) return;

    if (item.stock === 'Sold Out') {
      this.showToast('⚠️ Error: This meal is currently Sold Out and cannot be ordered.');
      return;
    }

    this.currentDetailItem = item;
    document.getElementById('detailTitle').innerText = item.name;
    document.getElementById('detailPrice').innerText = `KSh ${item.price}`;
    document.getElementById('detailEmoji').innerText = item.emoji;
    document.getElementById('detailDesc').innerText = item.description;
    document.getElementById('detailStockBadge').innerText = item.stock;
    document.getElementById('detailQty').innerText = 1;

    const favBtn = document.getElementById('detailFavBtn');
    favBtn.innerText = this.favorites.includes(item.id) ? '❤️' : '🤍';

    const addBtn = document.getElementById('detailAddToCartBtn');
    addBtn.innerText = `Add to Cart - KSh ${item.price}`;

    this.navigateTo('screenMealDetails');
  }

  toggleFavorite(mealId) {
    if (this.favorites.includes(mealId)) {
      this.favorites = this.favorites.filter(id => id !== mealId);
      this.showToast('Removed from Favorites');
    } else {
      this.favorites.push(mealId);
      this.showToast('Saved to Favorites ❤️');
    }
    this.renderMealsGrid('homeMealsGrid', sampleMeals);
    this.renderMealsGrid('fullMenuGrid', sampleMeals);
    this.renderFavoritesGrid();
  }

  toggleFavoriteCurrentDetail() {
    if (this.currentDetailItem) {
      this.toggleFavorite(this.currentDetailItem.id);
      const favBtn = document.getElementById('detailFavBtn');
      favBtn.innerText = this.favorites.includes(this.currentDetailItem.id) ? '❤️' : '🤍';
    }
  }

  renderFavoritesGrid() {
    const grid = document.getElementById('favoritesGrid');
    if (!grid) return;
    const favMeals = sampleMeals.filter(m => this.favorites.includes(m.id));
    if (favMeals.length === 0) {
      grid.innerHTML = '<p style="grid-column: span 2; text-align:center; padding: 20px; color: var(--text-muted);">No favorite meals saved yet.</p>';
    } else {
      this.renderMealsGrid('favoritesGrid', favMeals);
    }
  }

  adjustDetailQty(delta) {
    const qtySpan = document.getElementById('detailQty');
    let cur = parseInt(qtySpan.innerText) + delta;
    if (cur < 1) cur = 1;
    qtySpan.innerText = cur;

    const totalPrice = cur * this.currentDetailItem.price;
    document.getElementById('detailAddToCartBtn').innerText = `Add to Cart - KSh ${totalPrice}`;
  }

  openCustomizeModal() {
    document.getElementById('customizeMealName').innerText = this.currentDetailItem.name;
    this.navigateTo('screenCustomize');
    this.updateCustomizeTotal();
  }

  updateCustomizeTotal() {
    let extraCost = 0;
    const portion = document.querySelector('input[name="portion"]:checked')?.value || 'Standard';
    if (portion === 'Large') extraCost += 50;

    if (document.getElementById('addSauce')?.checked) extraCost += 20;
    if (document.getElementById('addEgg')?.checked) extraCost += 30;
    if (document.getElementById('addAvocado')?.checked) extraCost += 40;

    this.currentCustomization.extraCost = extraCost;
    const total = (this.currentDetailItem.price + extraCost) * parseInt(document.getElementById('detailQty').innerText);
    document.getElementById('saveCustomizationBtn').innerText = `Save Customization - KSh ${total}`;
  }

  confirmCustomization() {
    this.showToast('Customization Saved ✓');
    this.navigateTo('screenMealDetails');
  }

  addCurrentDetailToCart() {
    const qty = parseInt(document.getElementById('detailQty').innerText);
    const itemTotal = (this.currentDetailItem.price + this.currentCustomization.extraCost) * qty;

    const cartItem = {
      id: this.currentDetailItem.id,
      name: this.currentDetailItem.name,
      basePrice: this.currentDetailItem.price,
      qty: qty,
      extraCost: this.currentCustomization.extraCost,
      total: itemTotal,
      emoji: this.currentDetailItem.emoji
    };

    this.cart.push(cartItem);
    this.showToast(`Added ${qty}x ${cartItem.name} to Cart 🛒`);
    this.renderCart();
    this.navigateTo('screenCart');
  }

  renderCart() {
    const container = document.getElementById('cartItemsList');
    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = '<p style="text-align:center; padding: 30px; color: var(--text-muted);">Your cart is empty. Add a meal from the menu!</p>';
      document.getElementById('cartSubtotal').innerText = 'KSh 0';
      document.getElementById('cartTotal').innerText = 'KSh 0';
      document.getElementById('cartActionsBlock').style.display = 'none';
      return;
    }

    document.getElementById('cartActionsBlock').style.display = 'block';

    let subtotal = 0;
    container.innerHTML = this.cart.map((item, idx) => {
      subtotal += item.total;
      return `
        <div class="cart-item-card">
          <div class="cart-item-info">
            <h4>${item.emoji} ${item.name}</h4>
            <p>Qty: ${item.qty} ${item.extraCost > 0 ? '(Customized)' : ''}</p>
          </div>
          <div class="cart-item-price">KSh ${item.total}</div>
          <button class="icon-btn" onclick="app.removeCartItem(${idx})">🗑️</button>
        </div>
      `;
    }).join('');

    document.getElementById('cartSubtotal').innerText = `KSh ${subtotal}`;
    document.getElementById('cartTotal').innerText = `KSh ${subtotal}`;
    document.getElementById('paymentTotalAmount').innerText = `KSh ${subtotal}`;
  }

  removeCartItem(idx) {
    this.cart.splice(idx, 1);
    this.renderCart();
    this.showToast('Item removed from cart');
  }

  quickReorder(mealId) {
    const meal = sampleMeals.find(m => m.id === mealId);
    if (!meal) return;

    this.cart = [{
      id: meal.id,
      name: meal.name,
      basePrice: meal.price,
      qty: 1,
      extraCost: 0,
      total: meal.price,
      emoji: meal.emoji
    }];

    this.renderCart();
    this.showToast(`Reordered 1x ${meal.name}! Navigating to Cart...`);
    this.navigateTo('screenCart');
  }

  setCheckoutVenue(btn, venueName) {
    document.querySelectorAll('.venue-chips .chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    this.activeOrder.venue = venueName;
  }

  selectTimeSlot(btn, slotTime) {
    document.querySelectorAll('.time-slots-grid .time-slot').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    this.activeOrder.timeSlot = slotTime;
  }

  switchPayMethod(methodKey) {
    const inputLabel = document.getElementById('payInputLabel');
    const inputField = document.getElementById('payInputField');

    if (methodKey === 'mpesa') {
      inputLabel.innerText = 'M-Pesa Phone Number';
      inputField.value = '0712 345 678';
    } else if (methodKey === 'campus') {
      inputLabel.innerText = 'Campus Student/Staff Smart Card ID';
      inputField.value = '8839201-STUDENT';
    } else if (methodKey === 'card') {
      inputLabel.innerText = 'Card Number';
      inputField.value = '4111 •••• •••• 9920';
    } else {
      inputLabel.innerText = 'Express Cash Collection Code';
      inputField.value = 'PAY-AT-SHELF-B3';
    }
  }

  processPayment() {
    this.showToast('Payment Processing... ⌛');
    setTimeout(() => {
      document.getElementById('confVenue').innerText = `${this.activeOrder.venue} (Express Window)`;
      document.getElementById('confTime').innerText = this.activeOrder.timeSlot;
      document.getElementById('confPayment').innerText = `Paid (KSh ${document.getElementById('cartTotal').innerText})`;
      
      this.activeOrder.statusStep = 1;
      this.updateStepperVisuals();
      this.navigateTo('screenConfirmation');
    }, 1000);
  }

  simulateNextStatus() {
    if (this.activeOrder.statusStep < 4) {
      this.activeOrder.statusStep += 1;
      this.updateStepperVisuals();

      if (this.activeOrder.statusStep === 3) {
        this.showToast('🔔 PUSH NOTIFICATION: Your food is Ready at Shelf B3!');
        this.navigateTo('screenReady');
      } else if (this.activeOrder.statusStep === 4) {
        this.showToast('Order Completed! Please leave a rating.');
        document.getElementById('ratingModal').style.display = 'flex';
      }
    } else {
      this.showToast('Order already collected.');
    }
  }

  updateStepperVisuals() {
    const step = this.activeOrder.statusStep;
    document.querySelectorAll('.stepper-item').forEach((item, idx) => {
      const itemStep = idx + 1;
      item.classList.remove('completed', 'active');
      if (itemStep < step) item.classList.add('completed');
      else if (itemStep === step) item.classList.add('active');
    });

    const bannerTime = document.getElementById('bannerEstTime');
    if (bannerTime) {
      if (step === 1) bannerTime.innerText = 'Est: 15 mins';
      else if (step === 2) bannerTime.innerText = 'Est: 8 mins';
      else if (step === 3) bannerTime.innerText = 'READY FOR PICKUP!';
      else bannerTime.innerText = 'COLLECTED';
    }
  }

  confirmCollection() {
    this.activeOrder.statusStep = 4;
    this.updateStepperVisuals();
    document.getElementById('ratingModal').style.display = 'flex';
  }

  setRating(stars) {
    document.querySelectorAll('.star-rating span').forEach((s, idx) => {
      s.classList.toggle('active', idx < stars);
    });
  }

  submitRating() {
    document.getElementById('ratingModal').style.display = 'none';
    this.showToast('Thank you for rating your cafeteria meal!');
    this.navigateTo('screenHome');
  }

  switchHistoryTab(tab) {
    document.querySelectorAll('.history-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    this.renderHistoryList();
  }

  renderHistoryList() {
    const container = document.getElementById('historyListContainer');
    if (!container) return;

    container.innerHTML = this.historyOrders.map(o => `
      <div class="summary-card" style="margin-bottom: 12px;">
        <div class="card-row">
          <strong>Order ${o.id}</strong>
          <span class="badge badge-success">${o.status}</span>
        </div>
        <div class="card-row">
          <span>${o.items}</span>
          <strong>KSh ${o.total}</strong>
        </div>
        <div class="card-row">
          <span style="font-size:11px; color: var(--text-muted);">${o.date} • ${o.venue}</span>
          <button class="btn-mini" onclick="app.quickReorder('m1')">Reorder</button>
        </div>
      </div>
    `).join('');
  }

  openFilterModal() {
    this.showToast('Filter options: Price < KSh 300, Dietary: Veg/Halal');
  }
}

// Global App Instance
window.app = new CafeteriaApp();
