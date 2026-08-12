# User Research Summary & Key Insights
## Smart Cafeteria Ordering Mobile Application

### 1. Executive Summary
User research conducted with 5 representative campus participants (students and university staff) confirmed that **physical queueing and queue uncertainty are the primary drivers of dissatisfaction** in campus dining. The average reported peak wait time was ~25 minutes, with 100% of participants expressing strong enthusiasm for a mobile pre-ordering app that supports scheduled collection time slots.

---

### 2. Core Research Insights & Design Requirements

#### Insight 1: Queue Bottlenecks Cause Meal Skipping & Class Tardiness
* **Finding:** 80% of student participants reported skipping meals or running late to lectures at least twice a week due to cafeteria line delays.
* **Design Requirement:** The app must emphasize **Speed of Action**—enabling users to complete an order in under 60 seconds and offering 1-tap reordering for frequent meals.

#### Insight 2: High Demand for Scheduled Collection Slots
* **Finding:** Users do not just want "ASAP" prep; 80% rated scheduled pickup slots (e.g. 12:30 PM, 1:00 PM) as *Extremely Important* to align food collection with 45-minute lecture breaks or department meeting windows.
* **Design Requirement:** The checkout flow must require explicit **Collection Time Slot selection** with greyed-out unavailable slots to prevent kitchen over-capacity.

#### Insight 3: Disappointment over Sold-Out Menu Items
* **Finding:** Waiting in line only to discover an item is out of stock causes significant frustration and decision paralysis.
* **Design Requirement:** Prominent **Stock Availability Badges** (*Available*, *Low Stock*, *Sold Out*) must be displayed on menu items, and "Add to Cart" actions must be disabled for sold-out items to prevent ordering errors.

#### Insight 4: Need for Status Transparency & Express Pickup
* **Finding:** Users expressed anxiety about whether their food was actually being prepared once paid for.
* **Design Requirement:** A prominent **4-Stage Visual Status Stepper** (*Received* ➔ *Preparing* ➔ *Ready* ➔ *Collected*) with push notifications when food is ready.

---

### 3. Impact on Information Architecture & Wireframe Layouts
These research findings directly dictated the following low-fidelity Balsamiq wireframe decisions:
1. **Home Screen Active Order Banner:** Placed prominently at the top of the Home Dashboard so users can instantly monitor order progress without navigating deep into menus.
2. **Dynamic Price Updating during Customization:** Real-time subtotal calculator added to the Meal Customization modal to eliminate checkout surprises.
3. **M-Pesa Express Payment Integration:** Placed as the default payment method based on 60% user preference.
