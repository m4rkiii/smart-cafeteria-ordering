# Usability Recommendations & Heuristic Improvements
## Smart Cafeteria Ordering Mobile Application

Based on the empirical findings from usability testing with 5 representative campus users, the following HCI design recommendations were formulated and implemented into Prototype Version 2.

---

### Key Recommendations Mapped to Nielsen's 10 Heuristics

#### 1. Visibility of System Status (Heuristic #1)
* **Recommendation:** Elevate active order tracking status to the top of the Home Dashboard.
* **Implementation:** Designed a sticky **Active Order Progress Banner** on the Home screen featuring a live 4-stage stepper preview (*Order #1045 - Preparing in Kitchen - Est. 10 mins*).

#### 2. Error Prevention (Heuristic #5)
* **Recommendation:** Prevent users from attempting to order sold-out items or placing orders without a selected collection time slot.
* **Implementation:**
  1. Disabled the "Add to Cart" button for items tagged *Sold Out* and greyed out their cards.
  2. Created a dedicated **Collection Time Selection Screen** as a mandatory step before payment, with unavailable time slots greyed out.

#### 3. Flexibility and Efficiency of Use (Heuristic #7)
* **Recommendation:** Provide shortcuts for power users who frequently reorder the same meals between classes.
* **Implementation:**
  1. Added a 1-tap **"Reorder"** button directly on past order cards in Order History.
  2. Added a **Quick Reorder Tray** on the Home Dashboard showing recent favorite combinations.

#### 4. Aesthetic and Minimalist Design (Heuristic #8)
* **Recommendation:** Reduce clutter on the Meal Customization modal so users can see dynamic price updates clearly.
* **Implementation:** Cleaned up typography, increased option row spacing to >48px touch targets, and fixed a sticky bottom button displaying `[ Add to Cart - KSh 320 ]`.
