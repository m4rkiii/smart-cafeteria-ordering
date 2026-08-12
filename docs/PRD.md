# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Smart Cafeteria Ordering Mobile Application

**Project Type:** Human–Computer Interaction (HCI) Group Term Assignment  
**Platform:** Smartphone Mobile Application  
**Design Tool:** Balsamiq & Interactive Web Prototype  
**Collaboration Platform:** GitHub  
**Project Duration:** 3 Weeks  
**Recommended Group Size:** 7–10 Students  
**Prototype Type:** Interactive Low-Fidelity & High-Fidelity Mobile Prototype  
**Document Version:** 1.0  

---

### 1. Document Purpose

This Product Requirements Document defines the requirements, functionality, design specifications, usability requirements, development rules, and project standards for the proposed **Smart Cafeteria Ordering Mobile Application**.

The application is intended to improve the cafeteria experience for university students and staff by allowing users to browse meals, customize orders, place orders in advance, select collection times, monitor order progress, and receive notifications when their meals are ready.

The project is developed as a mobile application prototype using Balsamiq and an interactive Web App for HCI evaluation. The primary focus is user research, interaction design, information architecture, wireframing, prototyping, usability evaluation, and iterative improvement.

---

### 2. Problem Statement

University cafeterias often experience high demand during breakfast and lunch periods. Students and staff spend considerable time standing in queues to:
1. View available meals
2. Place an order
3. Make payment
4. Wait for food preparation
5. Collect their meals

This results in long queues, congestion, lost time between classes, difficulty knowing food availability, poor visibility of order progress, and unnecessary waiting.

The Smart Cafeteria Ordering Mobile Application reduces physical waiting by enabling users to browse, customize, order, and track meals through a smartphone before collecting them from a selected cafeteria location.

---

### 3. Product Vision & Objectives

#### Vision
To provide a simple, efficient, and user-friendly mobile cafeteria ordering experience that allows university students and staff to order meals in advance and collect them with minimal waiting.

#### Objectives
- Reduce physical queues at university cafeterias by at least 40%.
- Allow users to browse available meals conveniently.
- Provide clear meal information, pricing, and ingredients.
- Enable full meal customization (portion, ingredients, sides, drinks).
- Allow pre-ordering with scheduled collection time slots.
- Provide real-time order tracking and ready-for-pickup notifications.
- Enable rapid reordering from order history and favorites.
- Adhere strictly to mobile HCI design heuristics (Nielsen's 10 Heuristics).

---

### 4. Core Functional Requirements (FR-01 to FR-28)

| ID | Requirement Name | Description |
|---|---|---|
| **FR-01** | User Registration | Create account with Name, Email, Student/Staff ID, Phone, Password. Clear error validation. |
| **FR-02** | User Login | Authenticate with Email/ID and Password. Includes Forgot Password option. |
| **FR-03** | Home Dashboard | Central hub displaying search, categories, promotions, active order banner, favorites, and recommendations. |
| **FR-04** | Menu Browsing | View menu items categorized (Breakfast, Lunch, Snacks, Drinks, Vegetarian, Combos). |
| **FR-05** | Meal Search & Filtering | Search by keywords and filter by price range, dietary preference, and availability status. |
| **FR-06** | Meal Details | Detailed view showing image, name, price, ingredients, description, availability, quantity selector. |
| **FR-07** | Meal Customization | Modify portion sizes, add/remove ingredients, select sides/drinks, add special instructions. Dynamic total price calculation. |
| **FR-08** | Smart Cart | Review ordered items, adjust quantities, edit customizations, clear cart, view itemized subtotal & total. |
| **FR-09** | Pre-Ordering | Seamless multi-step order placement prior to visiting cafeteria. |
| **FR-10** | Collection Time Selection | Select pickup time slots (ASAP, 12:30 PM, 1:00 PM, 1:30 PM, 2:00 PM). Grey out unavailable slots. |
| **FR-11** | Collection Point Selection | Choose pickup venue (Main Cafeteria, Student Centre, Engineering Cafeteria, Staff Dining). |
| **FR-12** | Payment Interface | Select payment method (M-Pesa, Campus Card, Credit/Debit Card, Pay at Collection). |
| **FR-13** | Order Confirmation | Display order summary, unique Order #, collection time, venue, and status. |
| **FR-14** | Order Tracking | Visual 4-stage status stepper (Order Received → Preparing → Ready → Collected). |
| **FR-15** | Notifications System | Alert users when food status changes (e.g. "Food is Ready for Pickup!"). |
| **FR-16** | Order History | Display historical receipts with itemized breakdown and 1-tap "Reorder" button. |
| **FR-17** | Favorite Meals | Bookmark meals for instant access from Home or Favorites tab. |
| **FR-18** | Recommendations | Suggest items based on past orders and popular items. |
| **FR-19** | Promotions & Deals | Highlight lunch combos, student discounts, and daily specials. |
| **FR-20** | Digital Receipts | View itemized digital proof of purchase with barcode/pickup code. |
| **FR-21** | Ratings & Feedback | Rate meal quality (1-5 stars) and submit comments post-collection. |
| **FR-22** | Availability Indicators | Visually tag items as "Available", "Low Stock", or "Sold Out" (prevents ordering sold-out items). |

---

### 5. HCI Heuristics Compliance

1. **Visibility of System Status:** Real-time order progress stepper and immediate toast feedback for cart actions.
2. **Match Between System and Real World:** Cafeteria terminology, familiar icons, digital food tray concepts.
3. **User Control & Freedom:** Clear back buttons, cart item editing, order cancellation before prep starts.
4. **Consistency & Standards:** Standard bottom navigation bar (`Home | Menu | Orders | Favorites | Profile`).
5. **Error Prevention:** Disabled "Add to Cart" for sold-out items, collection time validation, checkout summary confirmation.
6. **Recognition Rather Than Recall:** Displaying customized options directly in cart; recommended meals based on history.
7. **Flexibility & Efficiency of Use:** 1-tap reordering from Order History; fast search filters.
8. **Aesthetic and Minimalist Design:** Uncluttered layouts, high contrast touch targets (>48px), clean typography.
9. **Help Users Recognize, Diagnose, and Recover from Errors:** Explicit error banners explaining *what happened*, *why*, and *how to fix it*.
10. **Help & Documentation:** FAQ and support contacts accessible via Profile screen.
