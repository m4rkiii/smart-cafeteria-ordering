# Balsamiq Low-Fidelity Wireframes (15 Linked Screens)
## Smart Cafeteria Ordering Mobile Application

This document provides the full Balsamiq wireframe specifications, layout architecture, and visual wireframe breakdowns for all 15 mobile screens required by the PRD.

---

### Screen Index & Navigation Hierarchy

```
                               ┌───────────────────┐
                               │  1. Splash Screen │
                               └─────────┬─────────┘
                                         │
                               ┌─────────▼─────────┐
                               │ 2. Login/Register │
                               └─────────┬─────────┘
                                         │
                               ┌─────────▼─────────┐
                               │  3. Home Dashboard│
                               └─────────┬─────────┘
        ┌──────────────────┬─────────────┼─────────────┬──────────────────┐
        │                  │             │             │                  │
┌───────▼───────┐  ┌───────▼───────┐  ┌──▼───┐  ┌──────▼──────┐  ┌────────▼────────┐
│ 4. Menu Screen│  │ 13. History   │  │ Search│  │14. Favorites│  │ 15. Profile/    │
└───────┬───────┘  └───────┬───────┘  └──────┘  └──────┬──────┘  │    Settings     │
        │                  │                           │         └─────────────────┘
┌───────▼───────┐  ┌───────▼───────┐            ┌──────▼──────┐
│5. Meal Details│  │   Reorder     │            │ Quick Order │
└───────┬───────┘  └───────┬───────┘            └──────┬──────┘
        │                  └─────────────┬─────────────┘
┌───────▼───────┐                        │
│6. Customization                        │
└───────┬───────┘                        │
        │                                │
┌───────▼────────────────────────────────▼─────────┐
│              7. Shopping Cart                    │
└───────────────────────┬──────────────────────────┘
                        │
┌───────────────────────▼──────────────────────────┐
│          8. Collection Time & Venue              │
└───────────────────────┬──────────────────────────┘
                        │
┌───────────────────────▼──────────────────────────┐
│              9. Payment Interface                │
└───────────────────────┬──────────────────────────┘
                        │
┌───────────────────────▼──────────────────────────┐
│           10. Order Confirmation                 │
└───────────────────────┬──────────────────────────┘
                        │
┌───────────────────────▼──────────────────────────┐
│          11. Order Tracking (Stepper)            │
└───────────────────────┬──────────────────────────┘
                        │
┌───────────────────────▼──────────────────────────┐
│        12. Ready for Collection (Barcode)        │
└──────────────────────────────────────────────────┘
```

---

### Detailed Wireframe Layout Specifications

#### Screen 1: Splash Screen
- **UI Elements:** Central App Logo (Coffee Cup / Tray icon), Tagline *"Order ahead, skip the queue, collect when ready"*, "Get Started" primary button, "Log In" secondary link.
- **HCI Purpose:** Immediate visual identity and brand proposition.

#### Screen 2: Login / Register Screen
- **UI Elements:** Tabbed toggle (*Login* | *Register*), Email/Student ID text input, Password input with show/hide eye toggle, "Remember Me" checkbox, "Forgot Password?", Primary "Log In" button, Social OAuth buttons.
- **HCI Purpose:** Minimalist authentication with clear validation errors.

#### Screen 3: Home Dashboard
- **UI Elements:** Top App Bar with location indicator (*Main Cafeteria*), Search bar with filter icon, Horizontal Category Pills (*All, Breakfast, Lunch, Snacks, Drinks, Veg*), Prominent **Active Order Card** (*Order #1045 - Preparing - Est. 12 mins*), Deals Carousel, Quick Reorder Tray, Recommended Meals grid, Bottom Nav Bar (`Home | Menu | Orders | Favorites | Profile`).
- **HCI Purpose:** Central hub providing immediate visibility of system status (Active Order).

#### Screen 4: Menu Screen
- **UI Elements:** Sticky search bar, Category tab bar, Meal cards grid with food image, meal title, baseline price, caloric count, stock badge (*Available* [Green], *Low Stock* [Orange], *Sold Out* [Red]), and heart icon to bookmark.
- **HCI Purpose:** High-scannability food catalog with stock status error prevention.

#### Screen 5: Meal Details Screen
- **UI Elements:** Large meal hero image, Title (*Grilled Chicken & Savory Rice*), Price (*KSh 250*), Description text, Calorie/Allergen badges, Quantity stepper (`- 1 +`), "Customize Meal" button, "Add to Cart" primary button.
- **HCI Purpose:** Complete information transparency before purchase.

#### Screen 6: Meal Customization Screen
- **UI Elements:** Header back button, Section 1: Portion Size (Radio buttons: *Standard*, *Large +KSh 50*), Section 2: Add-Ons (Checkboxes: *Extra Sauce +KSh 20*, *Fried Egg +KSh 30*), Section 3: Side Dish (Dropdown: *Steamed Veggies*, *French Fries*), Section 4: Chef Instructions (Textarea), Sticky Bottom Bar showing dynamic price update: `[ Add to Cart - KSh 320 ]`.
- **HCI Purpose:** User control & freedom; dynamic price feedback.

#### Screen 7: Shopping Cart Screen
- **UI Elements:** Order itemization list showing customized choices, line item price, inline quantity stepper, delete icon, Promo Code input field, Order Breakdown (Subtotal, Tax, Total), Sticky "Select Collection Time ➔" primary action.
- **HCI Purpose:** Transparent item review and easy modification.

#### Screen 8: Collection Time & Venue Selection Screen
- **UI Elements:** Step indicator (Step 2 of 4), Cafeteria Venue selector chips (*Main Dining*, *Student Centre*, *Engineering*, *Staff Room*), Pickup Time Slot Grid (*ASAP*, *12:15 PM*, *12:30 PM*, *12:45 PM*, *1:00 PM*), greyed-out unavailable slots, "Proceed to Payment ➔" button.
- **HCI Purpose:** Error prevention by capping capacity per time slot.

#### Screen 9: Payment Interface Screen
- **UI Elements:** Step indicator (Step 3 of 4), Order Total banner (*KSh 320*), Payment method selector radio buttons (*M-Pesa Express*, *Campus Smart Card*, *Credit/Debit Card*, *Pay at Collection*), Phone number / Card details input field, "Pay KSh 320 Now" primary button.
- **HCI Purpose:** Simple, secure prototype payment selection.

#### Screen 10: Order Confirmation Screen
- **UI Elements:** Green success checkmark icon, "Order Received!", Order Number (`#1045`), Pickup Location (*Main Cafeteria - Express Window B*), Target Pickup Time (*12:30 PM*), Itemized summary card, "Track Order Progress" primary button.
- **HCI Purpose:** Immediate feedback confirming order creation.

#### Screen 11: Order Tracking Screen (Live Status Stepper)
- **UI Elements:** Top header back button, Live 4-stage vertical stepper:
  1. ✅ **Order Received** (12:14 PM)
  2. 🟡 **Preparing in Kitchen** (In Progress - Est. 10 mins)
  3. ⚪ **Ready for Collection** (Pending)
  4. ⚪ **Collected** (Pending)
  Visual kitchen animation, "Cancel Order" option (if stage < 2), "Contact Cafeteria" button.
- **HCI Purpose:** Maximum visibility of system status.

#### Screen 12: Ready for Collection Screen
- **UI Elements:** Prominent green notification card *"Your Food is Ready!"*, High-contrast QR Code & numerical pickup code (`#1045`), Express Shelf location instructions (*Pickup Shelf B3 - Main Dining Hall*), "Scan at Shelf" button, "I Have Collected My Meal" button.
- **HCI Purpose:** Rapid, frictionless physical collection.

#### Screen 13: Order History Screen
- **UI Elements:** Tabbed list (*Active Orders* | *Past Orders*), Order cards displaying Date, Items, Total Price, Status badge (*Completed* / *Cancelled*), "View Digital Receipt" button, 1-tap "Reorder" button.
- **HCI Purpose:** Efficiency of use & rapid reordering.

#### Screen 14: Favorites Screen
- **UI Elements:** Saved meals grid with meal thumbnail, name, price, stock status, "Quick Add to Cart" button, heart icon to remove from favorites.
- **HCI Purpose:** Recognition rather than recall.

#### Screen 15: Profile & Settings Screen
- **UI Elements:** User avatar, Name (*Alex Chen*), Student ID (*#8839201*), Saved Payment Methods, Preferred Collection Point setting, Dietary Preferences toggle (Veg/Halal), Help & Support FAQ, Logout button.
- **HCI Purpose:** Personalization and user account management.
