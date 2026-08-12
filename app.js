/* ==========================================================================
   SMART CAFETERIA ORDERING MOBILE APPLICATION - JS STATE ENGINE v2.6
   Dish-Specific Add-Ons & Extras (Lentils -> Chapati, Chicken -> Garlic Sauce, etc.)
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
    description: 'Freshly grilled marinated chicken breast served with steamed savory turmeric rice and fresh garden salad.',
    addons: [
      { name: 'Extra Garlic Herb Sauce', price: 20 },
      { name: 'Extra Steamed Turmeric Rice', price: 40 },
      { name: 'Pan-fried Egg', price: 30 },
      { name: 'Fresh Avocado Slice', price: 40 }
    ]
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
    description: '100% prime beef patty with melted cheese, lettuce, tomato, and seasoned crispy french fries.',
    addons: [
      { name: 'Extra Melted Cheddar Cheese', price: 30 },
      { name: 'Extra Crispy Bacon', price: 50 },
      { name: 'Upgrade to Large Fries', price: 40 },
      { name: 'Extra Beef Patty', price: 100 }
    ]
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
    description: 'Freshly squeezed natural mango and passion fruit juice blend with zero added sugar.',
    addons: [
      { name: 'Add Organic Chia Seeds', price: 20 },
      { name: 'Extra Passion Fruit Pulp', price: 30 },
      { name: 'Upgrade to Large Glass', price: 30 }
    ]
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
    description: 'Wok-tossed egg noodles with crisp vegetables, sesame oil, and savory soy garlic sauce.',
    addons: [
      { name: 'Add Pan-seared Tofu Cubes', price: 40 },
      { name: 'Extra Chili Garlic Oil', price: 15 },
      { name: 'Add Fried Egg', price: 30 }
    ]
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
    description: 'Three-egg fluffy omelette with diced bell peppers, onions, tomatoes, and toasted whole wheat bread.',
    addons: [
      { name: 'Extra Whole Wheat Toast (2 Slices)', price: 25 },
      { name: 'Add Melted Cheese', price: 30 },
      { name: 'Add Pan-fried Sausages', price: 50 }
    ]
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
    description: 'Two golden crispy pastry pockets filled with spiced minced beef and green peas.',
    addons: [
      { name: 'Add Extra Samosa (+1pc)', price: 50 },
      { name: 'Tamarind Chutney Dip', price: 20 },
      { name: 'Tangy Mint Sauce', price: 15 }
    ]
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
    description: 'Traditional slow-cooked tender beef curry served with warm white cornmeal ugali and sauteed spinach.',
    addons: [
      { name: 'Extra Warm Ugali Block', price: 30 },
      { name: 'Extra Sauteed Sukuma Wiki', price: 25 },
      { name: 'Add Avocado Slice', price: 40 },
      { name: 'Extra Beef Gravy Dip', price: 20 }
    ]
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
    description: 'Smashed ripe avocado on sourdough toast topped with a runny poached egg and chili flakes.',
    addons: [
      { name: 'Extra Runny Poached Egg', price: 30 },
      { name: 'Add Smoked Salmon Slices', price: 80 },
      { name: 'Extra Sourdough Toast Slice', price: 30 }
    ]
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
    description: 'Hearty brown lentil stew simmered with coconut milk, garlic, and ginger, served with 2 soft chapatis.',
    addons: [
      { name: 'Extra Soft Chapati (+1pc)', price: 30 },
      { name: 'Extra Coconut Lentil Bowl', price: 50 },
      { name: 'Side of Fresh Kachumbari Salad', price: 25 },
      { name: 'Fresh Avocado Slice', price: 40 }
    ]
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
    description: 'Three fluffy golden buttermilk pancakes served with pure maple syrup and fresh banana slices.',
    addons: [
      { name: 'Extra Pure Maple Syrup', price: 25 },
      { name: 'Add Fluffy Whipped Cream', price: 30 },
      { name: 'Add Extra Pancake (+1pc)', price: 40 },
      { name: 'Side of Fresh Strawberries', price: 40 }
    ]
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
    description: 'Pan-seared tilapia fillet simmered in aromatic Swahili coconut curry with fragrant basmati rice.',
    addons: [
      { name: 'Extra Coconut Basmati Rice', price: 40 },
      { name: 'Extra Swahili Curry Sauce', price: 30 },
      { name: 'Side of Spicy Kachumbari', price: 25 }
    ]
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
    description: 'Generous tray of golden hand-cut potato fries served with ketchup and spicy mayo dip.',
    addons: [
      { name: 'Melted Cheddar Drizzle', price: 30 },
      { name: 'Spicy Garlic Mayo Dip', price: 20 },
      { name: 'Upgrade to Large Tray (+50%)', price: 40 }
    ]
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
    description: 'Chilled organic hibiscus tea infused with fresh ginger, mint leaves, and natural honey.',
    addons: [
      { name: 'Add Fresh Lemon Slices', price: 15 },
      { name: 'Extra Mint & Honey Shot', price: 20 },
      { name: 'Upgrade to Large Glass', price: 25 }
    ]
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
    description: 'Crispy pan-fried tofu cubes glazed in sweet teriyaki sauce over brown rice and steamed broccoli.',
    addons: [
      { name: 'Extra Crispy Teriyaki Tofu', price: 50 },
      { name: 'Extra Steamed Brown Rice', price: 35 },
      { name: 'Side of Steamed Broccoli', price: 30 }
    ]
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
    description: 'Grilled salmon or steak option with roast potatoes, grilled vegetables, fresh juice, and dessert.',
    addons: [
      { name: 'Upgrade to Grilled Salmon Fillet', price: 100 },
      { name: 'Extra Executive Side Salad', price: 40 },
      { name: 'Add Chocolate Cake Slice', price: 60 }
    ]
  }
];

class CafeteriaApp {
  constructor() {
    this.currentScreen = 'screenHome';
    this.cart = [];
    this.favorites = ['m1', 'm3', 'm7', 'm9'];
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
    this.currentCustomization = { portion: 'Standard', selectedAddons: [], instructions: '', extraCost: 0 };
    this.historyOrders = [
      {
        id: '#1044',
        date: 'Yesterday, 1:15 PM',
        items: '1x Lentil Curry + 1x Extra Chapati',
        total: 190,
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
    this.renderCodeGraphics('#1045');
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
      'screenCustomize': 'Dish Add-Ons & Extras',
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
    let cur = parseInt(qtySpan?.innerText || '1') + delta;
    if (cur < 1) cur = 1;
    qtySpan.innerText = cur;

    const totalPrice = cur * (this.currentDetailItem.price + (this.currentCustomization.extraCost || 0));
    const btn = document.getElementById('detailAddToCartBtn');
    if (btn) btn.innerText = `Add to Cart - KSh ${totalPrice}`;
  }

  openCustomizeModal() {
    document.getElementById('customizeMealName').innerText = this.currentDetailItem.name;

    // Render dish-specific add-ons dynamically!
    const container = document.getElementById('dynamicAddonsContainer');
    const groupTitle = document.getElementById('addonsGroupTitle');
    
    if (groupTitle) {
      groupTitle.innerText = `Add-Ons & Extras for ${this.currentDetailItem.name}`;
    }

    if (container) {
      const addons = this.currentDetailItem.addons || [];
      if (addons.length === 0) {
        container.innerHTML = '<p class="subtitle" style="padding:10px 0;">No extra add-ons available for this item.</p>';
      } else {
        container.innerHTML = addons.map((a, idx) => `
          <label class="checkbox-option">
            <input type="checkbox" class="dish-addon-check" data-price="${a.price}" data-name="${a.name}" onchange="app.updateCustomizeTotal()">
            <span>${a.name}</span>
            <strong>+ KSh ${a.price}</strong>
          </label>
        `).join('');
      }
    }

    this.navigateTo('screenCustomize');
    this.updateCustomizeTotal();
  }

  updateCustomizeTotal() {
    let extraCost = 0;
    const portion = document.querySelector('input[name="portion"]:checked')?.value || 'Standard';
    if (portion === 'Large') extraCost += 50;

    const selectedAddonNames = [];
    document.querySelectorAll('.dish-addon-check:checked').forEach(chk => {
      const p = parseInt(chk.getAttribute('data-price') || '0');
      const n = chk.getAttribute('data-name') || '';
      extraCost += p;
      selectedAddonNames.push(n);
    });

    this.currentCustomization.extraCost = extraCost;
    this.currentCustomization.selectedAddons = selectedAddonNames;

    const qty = parseInt(document.getElementById('detailQty')?.innerText || '1');
    const total = (this.currentDetailItem.price + extraCost) * qty;

    const btn = document.getElementById('saveCustomizationBtn');
    if (btn) btn.innerText = `Save Customization - KSh ${total}`;

    const detailBtn = document.getElementById('detailAddToCartBtn');
    if (detailBtn) detailBtn.innerText = `Add to Cart - KSh ${total}`;
  }

  confirmCustomization() {
    const count = this.currentCustomization.selectedAddons?.length || 0;
    this.showToast(`Saved Customization (${count} add-ons selected) ✓`);
    this.navigateTo('screenMealDetails');
  }

  addCurrentDetailToCart() {
    const qty = parseInt(document.getElementById('detailQty')?.innerText || '1');
    const itemTotal = (this.currentDetailItem.price + this.currentCustomization.extraCost) * qty;

    const addonText = (this.currentCustomization.selectedAddons && this.currentCustomization.selectedAddons.length > 0)
      ? ` (${this.currentCustomization.selectedAddons.join(', ')})`
      : '';

    const cartItem = {
      id: this.currentDetailItem.id,
      name: this.currentDetailItem.name + addonText,
      basePrice: this.currentDetailItem.price,
      qty: qty,
      extraCost: this.currentCustomization.extraCost,
      total: itemTotal,
      emoji: this.currentDetailItem.emoji
    };

    this.cart.push(cartItem);
    this.showToast(`Added ${qty}x ${this.currentDetailItem.name} to Cart 🛒`);
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
            <p>Qty: ${item.qty} ${item.extraCost > 0 ? '(Customized Extras)' : ''}</p>
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

    // Standard chapati add-on pre-populated for Lentils
    const defaultAddonText = (meal.id === 'm9') ? ' (Extra Soft Chapati)' : '';
    const defaultAddonCost = (meal.id === 'm9') ? 30 : 0;

    this.cart = [{
      id: meal.id,
      name: meal.name + defaultAddonText,
      basePrice: meal.price,
      qty: 1,
      extraCost: defaultAddonCost,
      total: meal.price + defaultAddonCost,
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
      this.renderCodeGraphics('#1045');
      this.navigateTo('screenConfirmation');
    }, 1000);
  }

  generateSVGQRCode(orderNum) {
    const matrix = [
      [1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1],
      [1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1],
      [1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1],
      [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1],
      [1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1],
      [1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
      [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0],
      [1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1],
      [0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0],
      [1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1],
      [0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0],
      [1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1],
      [0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0],
      [1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1],
      [1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0],
      [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1],
      [1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0],
      [1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1],
      [1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1],
      [1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1]
    ];

    let rects = '';
    const size = 6;
    for (let r = 0; r < 21; r++) {
      for (let c = 0; c < 21; c++) {
        if (matrix[r][c] === 1) {
          rects += `<rect x="${c * size}" y="${r * size}" width="${size}" height="${size}" fill="#0f172a" />`;
        }
      }
    }
    return `
      <div style="background:#fff; padding:10px; border-radius:12px; display:inline-block; border:1px solid #cbd5e1; box-shadow:0 4px 12px rgba(0,0,0,0.08); text-align:center;">
        <svg width="126" height="126" viewBox="0 0 126 126">${rects}</svg>
        <div style="font-size:11px; font-weight:700; color:#0f172a; margin-top:4px; font-family:monospace;">PICKUP QR ${orderNum}</div>
      </div>
    `;
  }

  generateSVGBarcode(orderNum) {
    const bars = [2,1,3,1,2,2,1,1,3,2,1,2,3,1,1,2,1,3,2,1,1,2,3,1,2,1,1,3,2,2,1,1,2,3,1,2,1,2,3,1,1,3,2,1,2,1,1,2,3,1,2,2,1];
    let x = 10;
    let paths = '';
    bars.forEach((w, i) => {
      if (i % 2 === 0) {
        paths += `<rect x="${x}" y="10" width="${w * 2}" height="45" fill="#0f172a" />`;
      }
      x += w * 2.5;
    });
    return `
      <div style="background:#fff; padding:10px 14px; border-radius:10px; display:inline-block; border:1px solid #cbd5e1; text-align:center; box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <svg width="220" height="60" viewBox="0 0 220 60">${paths}</svg>
        <div style="font-family:monospace; font-weight:800; font-size:13px; letter-spacing:3px; color:#0f172a; margin-top:2px;">CODE128: ${orderNum}</div>
      </div>
    `;
  }

  renderCodeGraphics(orderNum) {
    const confQR = document.getElementById('confQRCodeContainer');
    if (confQR) {
      confQR.innerHTML = this.generateSVGQRCode(orderNum) + '<div style="margin-top:6px;">' + this.generateSVGBarcode(orderNum) + '</div>';
    }

    const readyBarcode = document.getElementById('readyBarcodeContainer');
    if (readyBarcode) {
      readyBarcode.innerHTML = this.generateSVGBarcode(orderNum);
    }

    const readyQR = document.getElementById('readyQRCodeContainer');
    if (readyQR) {
      readyQR.innerHTML = this.generateSVGQRCode(orderNum);
    }
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
        <div class="receipt-line"><span>1x Lentil Curry + Chapati</span> <span>KSh 190</span></div>
        <div class="receipt-line"><span>+ Extra Chapati Add-on</span> <span>KSh 30</span></div>
        <hr style="margin:6px 0; border:none; border-top:1px dashed #000;">
        <div class="receipt-line"><strong>Total Paid (M-Pesa)</strong> <strong>KSh 220</strong></div>
        <div class="receipt-line"><span>Loyalty Pts Earned:</span> <span>+22 pts</span></div>
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
            <button class="btn-mini" onclick="app.quickReorder('m9')">Reorder</button>
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

  switchAuthTab(mode) {
    const heading = document.getElementById('authHeading');
    const subheading = document.getElementById('authSubheading');
    const tabLogin = document.getElementById('tabLoginBtn');
    const tabReg = document.getElementById('tabRegBtn');
    const nameGroup = document.getElementById('regNameGroup');
    const options = document.getElementById('loginOptions');
    const submitBtn = document.getElementById('authSubmitBtn');

    if (mode === 'register') {
      if (heading) heading.innerText = 'Create Account';
      if (subheading) subheading.innerText = 'Register for fast cafeteria ordering';
      if (tabLogin) tabLogin.classList.remove('active');
      if (tabReg) tabReg.classList.add('active');
      if (nameGroup) nameGroup.style.display = 'block';
      if (options) options.style.display = 'none';
      if (submitBtn) submitBtn.innerText = 'Create Account';
    } else {
      if (heading) heading.innerText = 'Welcome Back';
      if (subheading) subheading.innerText = 'Sign in to your cafeteria account';
      if (tabReg) tabReg.classList.remove('active');
      if (tabLogin) tabLogin.classList.add('active');
      if (nameGroup) nameGroup.style.display = 'none';
      if (options) options.style.display = 'flex';
      if (submitBtn) submitBtn.innerText = 'Log In';
    }
  }

  handleAuth() {
    const email = document.getElementById('authEmailInput')?.value || 'alex.chen@univ.edu';
    const isRegister = document.getElementById('tabRegBtn')?.classList.contains('active');

    if (isRegister) {
      this.showToast(`Account created for ${email}! Welcome to Smart Cafeteria.`);
    } else {
      this.showToast(`Signed in successfully as ${email}`);
    }
    this.navigateTo('screenHome');
  }
}

// Global Instance
window.app = new CafeteriaApp();
