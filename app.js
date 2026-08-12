/* ==========================================================================
   SMART CAFETERIA ORDERING MOBILE APPLICATION - JS STATE ENGINE v2.5
   15+ Varied Menu Items, Loyalty Rewards, Filters, & Digital Receipts
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
    protein: '38g', carbs: '62g', fats: '12g', tag: 'Halal',
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
    stock: 'Sold Out',
    protein: '32g', carbs: '75g', fats: '28g', tag: 'Combo',
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
    protein: '1g', carbs: '32g', fats: '0g', tag: 'Vegan',
    description: 'Freshly squeezed natural mango and passion fruit juice blend with zero added sugar.'
  },
  {
    id: 'm4',
    name: 'Vegetarian Stir-Fry Noodles',
    price: 220,
    category: 'Vegetarian',
    emoji: '🍜',
    calories: 410,
    prepTime: '12 min',
    stock: 'Low Stock',
    protein: '14g', carbs: '58g', fats: '9g', tag: 'Veggie',
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
    protein: '22g', carbs: '30g', fats: '18g', tag: 'Halal',
    description: 'Three-egg fluffy omelette with diced bell peppers, onions, tomatoes, and toasted whole wheat bread.'
  },
  {
    id: 'm6',
    name: 'Crispy Samosa Pair (2pcs)',
    price: 100,
    category: 'Snacks',
    emoji: '🥟',
    calories: 260,
    prepTime: '2 min',
    stock: 'Available',
    protein: '12g', carbs: '28g', fats: '11g', tag: 'Halal',
    description: 'Two golden crispy pastry pockets filled with spiced minced beef and green peas.'
  },
  {
    id: 'm7',
    name: 'Beef Stew & Ugali with Sukuma',
    price: 220,
    category: 'Lunch',
    emoji: '🍲',
    calories: 590,
    prepTime: '7 min',
    stock: 'Available',
    protein: '35g', carbs: '68g', fats: '14g', tag: 'Halal',
    description: 'Traditional slow-cooked tender beef curry served with warm white cornmeal ugali and sauteed spinach.'
  },
  {
    id: 'm8',
    name: 'Avocado Toast & Poached Egg',
    price: 200,
    category: 'Breakfast',
    emoji: '🥑',
    calories: 340,
    prepTime: '6 min',
    stock: 'Available',
    protein: '16g', carbs: '28g', fats: '17g', tag: 'Veggie',
    description: 'Smashed ripe avocado on sourdough toast topped with a runny poached egg and chili flakes.'
  },
  {
    id: 'm9',
    name: 'Lentil Curry (Kamande) & Chapati',
    price: 160,
    category: 'Vegetarian',
    emoji: '🫓',
    calories: 450,
    prepTime: '5 min',
    stock: 'Available',
    protein: '20g', carbs: '65g', fats: '8g', tag: 'Vegan',
    description: 'Hearty brown lentil stew simmered with coconut milk, garlic, and ginger, served with 2 soft chapatis.'
  },
  {
    id: 'm10',
    name: 'Pancakes with Maple Syrup & Fruit',
    price: 190,
    category: 'Breakfast',
    emoji: '🥞',
    calories: 420,
    prepTime: '9 min',
    stock: 'Available',
    protein: '10g', carbs: '72g', fats: '9g', tag: 'Veggie',
    description: 'Three fluffy golden buttermilk pancakes served with pure maple syrup and fresh banana slices.'
  },
  {
    id: 'm11',
    name: 'Fish Curry & Coconut Rice',
    price: 280,
    category: 'Lunch',
    emoji: '🍛',
    calories: 510,
    prepTime: '14 min',
    stock: 'Low Stock',
    protein: '34g', carbs: '56g', fats: '15g', tag: 'Halal',
    description: 'Pan-seared tilapia fillet simmered in aromatic Swahili coconut curry with fragrant basmati rice.'
  },
  {
    id: 'm12',
    name: 'Crispy French Fries Tray',
    price: 120,
    category: 'Snacks',
    emoji: '🍟',
    calories: 380,
    prepTime: '5 min',
    stock: 'Available',
    protein: '4g', carbs: '48g', fats: '19g', tag: 'Vegan',
    description: 'Generous tray of golden hand-cut potato fries served with ketchup and spicy mayo dip.'
  },
  {
    id: 'm13',
    name: 'Iced Hibiscus Zobo Tea',
    price: 70,
    category: 'Drinks',
    emoji: '🍹',
    calories: 90,
    prepTime: '2 min',
    stock: 'Available',
    protein: '0g', carbs: '22g', fats: '0g', tag: 'Vegan',
    description: 'Chilled organic hibiscus tea infused with fresh ginger, mint leaves, and natural honey.'
  },
  {
    id: 'm14',
    name: 'Tofu Teriyaki Bowl',
    price: 240,
    category: 'Vegetarian',
    emoji: '🥗',
    calories: 390,
    prepTime: '10 min',
    stock: 'Available',
    protein: '22g', carbs: '45g', fats: '10g', tag: 'Vegan',
    description: 'Crispy pan-fried tofu cubes glazed in sweet teriyaki sauce over brown rice and steamed broccoli.'
  },
  {
    id: 'm15',
    name: 'Staff Executive Lunch Box',
    price: 450,
    category: 'Combos',
    emoji: '💼',
    calories: 750,
    prepTime: '15 min',
    stock: 'Available',
    protein: '45g', carbs: '80g', fats: '22g', tag: 'Premium',
    description: 'Grilled salmon or steak option with roast potatoes, grilled vegetables, fresh juice, and dessert.'
  }
];

class CafeteriaApp {
  constructor() {
    this.currentScreen = 'screenHome';
    this.cart = [];
    this.favorites = ['m1', 'm3', 'm7'];
    this.loyaltyPoints = 240;
    this.useLoyaltyDiscount = false;
    this.isGroupOrder = false;

    this.activeOrder = {
      id: '#1045',
      items: [{ name: 'Grilled Chicken & Savory Rice', qty: 1, price: 250 }],
      total: 320,
      venue: 'Main Cafeteria',
      timeSlot: '12:30 PM',
      paymentMethod: 'M-Pesa',
      statusStep: 2,
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
        items: '1x Beef Stew + 1x Mango Juice',
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
    const clock = document.getElementById('clock');
    if (clock) clock.innerText = `${hrs}:${mins}`;
  }

  setupEventListeners() {
    document.getElementById('wireframeToggle')?.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.body.classList.add('mode-wireframe');
        document.body.classList.remove('mode-polished');
      } else {
        document.body.classList.add('mode-polished');
        document.body.classList.remove('mode-wireframe');
      }
    });

    document.getElementById('versionToggle')?.addEventListener('change', (e) => {
      const isV2 = e.target.checked;
      const banner = document.getElementById('activeOrderBanner');
      if (banner) banner.style.display = isV2 ? 'block' : 'none';
      this.showToast(isV2 ? 'V2 Prototype Active (Home Order Status Banner Enabled)' : 'V1 Prototype Active (Order Banner Hidden)');
    });

    document.getElementById('headerBackBtn')?.addEventListener('click', () => {
      this.navigateTo('screenHome');
    });
  }

  navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    const target = document.getElementById(screenId);
    if (target) {
      target.style.display = 'block';
      this.currentScreen = screenId;
    }

    const backBtn = document.getElementById('headerBackBtn');
    const title = document.getElementById('headerTitle');

    if (screenId === 'screenHome') {
      if (backBtn) backBtn.style.display = 'none';
      if (title) title.innerText = 'Smart Cafeteria';
      this.setActiveNav('navHome');
    } else {
      if (backBtn) backBtn.style.display = 'flex';
      if (title) title.innerText = this.getScreenTitle(screenId);
    }

    if (screenId === 'screenMenu') this.setActiveNav('navMenu');
    if (screenId === 'screenHistory') this.setActiveNav('navOrders');
    if (screenId === 'screenFavorites') this.setActiveNav('navFavorites');
    if (screenId === 'screenProfile') this.setActiveNav('navProfile');
  }

  getScreenTitle(id) {
    const titles = {
      'screenSplash': 'Welcome',
      'screenLogin': 'Authentication',
      'screenMenu': 'Cafeteria Menu (15+ Items)',
      'screenMealDetails': 'Meal Overview & Nutrition',
      'screenCustomize': 'Customize Options',
      'screenCart': 'Shopping Cart & Loyalty',
      'screenTimeSelect': 'Pickup Details',
      'screenPayment': 'Payment Interface',
      'screenConfirmation': 'Order Confirmed',
      'screenTracking': 'Live Kitchen Stepper',
      'screenReady': 'Ready for Pickup',
      'screenHistory': 'Order Receipts',
      'screenFavorites': 'Saved Meals',
      'screenProfile': 'Account & Points'
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
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>ℹ️</span> <div>${msg}</div>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  changeVenue(val) {
    const badge = document.getElementById('venueCrowdBadge');
    const busyness = {
      'Main Cafeteria': '🔥 65% Busy (Est 10m)',
      'Student Centre': '🌿 30% Quiet (Est 5m)',
      'Engineering Dining': '⚡ 45% Moderate',
      'Staff Dining': '👔 20% Quiet'
    };
    if (badge) badge.innerText = busyness[val] || '🔥 50% Busy';
    this.showToast(`Updated pickup venue to ${val}`);
  }

  renderMealsGrid(containerId, meals) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (meals.length === 0) {
      container.innerHTML = '<p style="grid-column: span 2; text-align:center; padding: 20px; color: var(--text-muted);">No meals match your active search filters.</p>';
      return;
    }

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
          <div style="display:flex; gap:4px; margin-bottom:4px;">
            <span class="badge ${badgeClass}">${m.stock}</span>
            <span class="badge badge-neutral">${m.tag}</span>
          </div>
          <div class="meal-card-price">KSh ${m.price}</div>
        </div>
      `;
    }).join('');
  }

  filterMeals(query) {
    const filtered = sampleMeals.filter(m => 
      m.name.toLowerCase().includes(query.toLowerCase()) || 
      m.category.toLowerCase().includes(query.toLowerCase()) ||
      m.tag.toLowerCase().includes(query.toLowerCase())
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
      this.showToast('⚠️ FR-22 Error Prevention: Sold Out items cannot be ordered.');
      return;
    }

    this.currentDetailItem = item;
    document.getElementById('detailTitle').innerText = item.name;
    document.getElementById('detailPrice').innerText = `KSh ${item.price}`;
    document.getElementById('detailEmoji').innerText = item.emoji;
    document.getElementById('detailDesc').innerText = item.description;
    document.getElementById('detailStockBadge').innerText = item.stock;
    document.getElementById('detailCalorieBadge').innerText = `🔥 ${item.calories} kcal`;
    document.getElementById('detailPrepBadge').innerText = `⏱️ ${item.prepTime}`;

    document.getElementById('nutriProtein').innerText = item.protein;
    document.getElementById('nutriCarbs').innerText = item.carbs;
    document.getElementById('nutriFats').innerText = item.fats;
    document.getElementById('nutriTag').innerText = item.tag;

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

    const totalPrice = cur * (this.currentDetailItem.price + this.currentCustomization.extraCost);
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

  toggleGroupOrder() {
    this.isGroupOrder = !this.isGroupOrder;
    const text = document.getElementById('groupOrderText');
    if (text) {
      text.innerText = this.isGroupOrder ? '👥 Shared Group Tray Active (2 Classmates Joined)' : '👥 Individual Order Mode (Tap to enable Group Tray)';
    }
    this.showToast(this.isGroupOrder ? 'Group Order Mode Enabled' : 'Individual Order Mode');
  }

  toggleLoyaltyDiscount() {
    this.useLoyaltyDiscount = document.getElementById('usePointsCheck')?.checked || false;
    this.renderCart();
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

    let discount = this.useLoyaltyDiscount ? 50 : 0;
    let finalTotal = Math.max(0, subtotal - discount);

    document.getElementById('cartSubtotal').innerText = `KSh ${subtotal}`;
    const discRow = document.getElementById('discountRow');
    if (discRow) discRow.style.display = this.useLoyaltyDiscount ? 'flex' : 'none';
    
    document.getElementById('cartTotal').innerText = `KSh ${finalTotal}`;
    document.getElementById('paymentTotalAmount').innerText = `KSh ${finalTotal}`;
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
      document.getElementById('confPayment').innerText = `Paid (${document.getElementById('cartTotal').innerText})`;
      
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
        this.showToast('🔔 PUSH ALERTS: Order #1045 is READY at Shelf B3!');
        this.navigateTo('screenReady');
      } else if (this.activeOrder.statusStep === 4) {
        this.showToast('Order Completed! Please leave feedback.');
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

  openDigitalReceipt(orderId) {
    const modal = document.getElementById('receiptModal');
    const content = document.getElementById('receiptBoxContent');
    if (modal && content) {
      content.innerHTML = `
        <div class="receipt-line"><strong>SMART CAFETERIA RECEIPT</strong> <span>#1045</span></div>
        <div class="receipt-line"><span>Date: Aug 12, 2026</span> <span>12:30 PM</span></div>
        <div class="receipt-line"><span>Venue: Main Cafeteria</span> <span>Window B3</span></div>
        <hr style="margin:6px 0; border:none; border-top:1px dashed #000;">
        <div class="receipt-line"><span>1x Grilled Chicken & Rice</span> <span>KSh 250</span></div>
        <div class="receipt-line"><span>+ Large Portion & Sauce</span> <span>KSh 70</span></div>
        <hr style="margin:6px 0; border:none; border-top:1px dashed #000;">
        <div class="receipt-line"><strong>Total Paid (M-Pesa)</strong> <strong>KSh 320</strong></div>
        <div class="receipt-line"><span>Loyalty Pts Earned:</span> <span>+30 pts</span></div>
      `;
      modal.style.display = 'flex';
    }
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
        <div class="card-row" style="margin-top:4px;">
          <span style="font-size:11px; color: var(--text-muted);">${o.date} • ${o.venue}</span>
          <div>
            <button class="btn-mini" style="background:var(--secondary);" onclick="app.openDigitalReceipt('${o.id}')">Receipt</button>
            <button class="btn-mini" onclick="app.quickReorder('m1')">Reorder</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  openFilterModal() {
    const modal = document.getElementById('filterModal');
    if (modal) modal.style.display = 'flex';
  }

  closeFilterModal() {
    const modal = document.getElementById('filterModal');
    if (modal) modal.style.display = 'none';
  }

  applyFilters() {
    const maxPrice = parseInt(document.getElementById('priceRange')?.value || 400);
    const filterVeg = document.getElementById('filterVeg')?.checked || false;
    const filterHalal = document.getElementById('filterHalal')?.checked || false;
    const availableOnly = document.getElementById('filterAvailableOnly')?.checked || false;

    const filtered = sampleMeals.filter(m => {
      if (m.price > maxPrice) return false;
      if (availableOnly && m.stock === 'Sold Out') return false;
      if (filterVeg && !(m.tag === 'Veggie' || m.tag === 'Vegan')) return false;
      if (filterHalal && m.tag !== 'Halal' && m.tag !== 'Vegan') return false;
      return true;
    });

    this.renderMealsGrid('homeMealsGrid', filtered);
    this.renderMealsGrid('fullMenuGrid', filtered);
    this.closeFilterModal();
    this.showToast(`Filters Applied: ${filtered.length} meals found under KSh ${maxPrice}`);
  }
}

// Global Instance
window.app = new CafeteriaApp();
