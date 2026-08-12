# Initial Paper Wireframe Sketches & Ideation
## Smart Cafeteria Ordering Mobile Application

Before digitizing into Balsamiq, the team created low-fidelity paper wireframes to map screen layouts, navigation hierarchy, and touch target placement.

---

### 1. Conceptual Paper Layouts

```
┌───────────────────────────┐  ┌───────────────────────────┐  ┌───────────────────────────┐
│  [Logo] Smart Cafeteria   │  │ < Back    Meal Detail     │  │ < Back    Your Cart   [X] │
│  Search meals...     [Q]  │  │ [========= Image =========]│  │ 1x Grilled Chicken KSh250 │
│ ───────────────────────── │  │ Grilled Chicken Combo     │  │  └ Extra Rice     KSh 50  │
│ [All] [Lunch] [Snacks]    │  │ KSh 250                   │  │ 1x Fresh Juice     KSh 80 │
│ ───────────────────────── │  │ ───────────────────────── │  │ ───────────────────────── │
│ [Active Order: Prep 12m]  │  │ Portion: (o) Med  (*) Lg  │  │ Subtotal:         KSh 380 │
│ ───────────────────────── │  │ [ ] Extra Sauce (+KSh 20) │  │ Select Pickup:  [12:30PM] │
│ Recommended:              │  │ [ Add to Cart - KSh 270 ] │  │ [ Proceed to Payment -> ] │
│  [Card 1]     [Card 2]    │  └───────────────────────────┘  └───────────────────────────┘
│ ───────────────────────── │
│ [Home] [Menu] [Orders]... │
└───────────────────────────┘
```

---

### 2. Design Rationale for Key Paper Wireframes

1. **Home Screen Layout:**
   - Placed search bar at the very top for rapid discovery.
   - Placed Category Pills horizontally scrollable right below search.
   - Added an **Active Order Status Banner** right above recommended meals so returning users instantly see their food status.

2. **Meal Detail & Customization:**
   - High-contrast image header.
   - Clear radio buttons for portion selection and checkboxes for add-ons.
   - Fixed bottom primary action button displaying dynamic price: `[ Add to Cart - KSh 320 ]`.

3. **Cart & Time Selection:**
   - Itemized list with inline `+` and `-` quantity steppers.
   - Dropdown/chip grid for **Collection Time Slot** selection placed prominently before payment to prevent users from forgetting to select a time.
