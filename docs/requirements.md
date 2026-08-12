# Functional & Non-Functional Requirements
## Smart Cafeteria Ordering Mobile Application

### 1. Functional Requirements Matrix

| ID | Feature Area | Detailed Description | Priority | HCI Heuristic Alignment |
|---|---|---|---|---|
| **FR-01** | Registration | Account creation with full name, university email (`@univ.edu`), student/staff ID, phone, password. Real-time form validation. | High | Error Prevention |
| **FR-02** | Login & Auth | Email/ID authentication, remembered sessions, "Forgot Password" workflow. | High | Recognition vs Recall |
| **FR-03** | Home Dashboard | Central hub containing global search bar, food category pills, active order banner, deals carousel, quick reorder tray, and recommended meals. | High | Aesthetic & Minimalist Design |
| **FR-04** | Menu Browsing | Tabbed browsing across categories: *Breakfast*, *Lunch*, *Snacks*, *Drinks*, *Vegetarian*, *Combos*. | High | Consistency & Standards |
| **FR-05** | Search & Filter | Keyword search with live modal filters for Price (KSh), Dietary (Veg/Vegan/Halal), and Availability. | Medium | Flexibility & Efficiency |
| **FR-06** | Meal Details | Card display of item image, full description, calorie info, allergy warnings, baseline price, and base item count. | High | Visibility of System Status |
| **FR-07** | Customization | Meal options modal: portion size (+/- KSh), ingredient add/remove checkboxes, side dish selector, drink selector, text input for chef instructions. | High | User Control & Freedom |
| **FR-08** | Smart Cart | Review tray showing customized line items, unit prices, quantity steppers, item deletion confirmation, clear cart, and cost summary. | High | Error Prevention / User Control |
| **FR-09** | Pre-Ordering | Guided checkout flow with breadcrumb steps (Cart → Collection Time & Location → Payment → Confirmation). | High | Visibility of System Status |
| **FR-10** | Collection Time | Time slot grid (ASAP, 12:30 PM, 1:00 PM, 1:30 PM, 2:00 PM). Greyed-out buttons for fully booked/past slots. | High | Error Prevention |
| **FR-11** | Pickup Location | Cafeteria selector: Main Dining Hall, Student Union Food Court, Engineering Snack Bar, Staff Dining Room. | High | Match Real World |
| **FR-12** | Payment Methods | Choice of M-Pesa, Campus Smart Card, Debit/Credit Card, or Pay at Counter with clear order total display. | High | Flexibility & Efficiency |
| **FR-13** | Confirmation | Display Order ID (#1045), pickup venue, target collection time, QR code / numerical pickup code, and receipt breakdown. | High | Visibility of System Status |
| **FR-14** | Order Tracking | Visual 4-stage stepper status bar (*Received* ➔ *Preparing* ➔ *Ready for Pickup* ➔ *Collected*). Auto updates status. | High | Visibility of System Status |
| **FR-15** | Push Alerts | Toast/banner notifications when status transitions to "Ready for Collection" with audio chime toggle. | High | Visibility of System Status |
| **FR-16** | Order History | Reverse-chronological past orders list with receipt view and 1-tap "Reorder" action that adds items to cart. | Medium | Flexibility & Efficiency |
| **FR-17** | Favorite Meals | Heart toggle on meal cards to save items to Favorites screen for quick 1-tap ordering. | Medium | Recognition vs Recall |
| **FR-18** | Recommendations | Carousel of items curated based on popular campus lunch trends and user's order frequency. | Low | Flexibility & Efficiency |
| **FR-19** | Promotions | Highlighted daily specials (e.g. "Student Combo: Chicken & Rice + Drink @ KSh 300"). | Low | Aesthetic & Minimalist Design |
| **FR-20** | Digital Receipt | View itemized proof of transaction including tax breakdown and payment method. | Medium | Match Real World |
| **FR-21** | Rating & Feedback| Post-collection star rating (1-5) and feedback comment box. | Low | User Control & Feedback |
| **FR-22** | Stock Status | Badges on menu items (*Available* [Green], *Low Stock* [Orange], *Sold Out* [Red]). Disables add-to-cart on Sold Out. | High | Error Prevention |

---

### 2. Non-Functional & HCI Design Requirements

#### 2.1 Touch Target & Mobile Usability Specifications
- **Minimum Touch Target Size:** All primary action buttons, nav icons, and checkboxes shall measure at least **48 × 48 px** to prevent accidental mis-taps.
- **Contrast Ratio:** Text and UI elements must maintain a minimum contrast ratio of **4.5:1** against backgrounds (WCAG AA standard).
- **Navigation Structure:** Persistent 5-tab Bottom Navigation Bar (`Home | Menu | Orders | Favorites | Profile`) fixed at the screen base.
- **Maximum Depth:** Critical task completion (e.g. reordering a favorite meal) shall require no more than **4 physical taps** from launch.

#### 2.2 Performance & Responsiveness
- **Screen Transitions:** UI state transitions shall respond within **100 ms** to user input.
- **Status Updates:** Order status tracking updates shall simulate real-time progression with clear visual indicators.

#### 2.3 Safety & Data Privacy Guidelines
- **Fictional Data Safeguard:** No real credit card credentials, live M-Pesa PINs, or actual user passwords are collected or stored in the prototype.
- **Anonymized Usability Records:** All usability testing participants are identified exclusively by anonymous IDs (e.g. P1..P5).
