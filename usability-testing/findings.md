# Usability Testing Findings & System Usability Scale (SUS)
## Smart Cafeteria Ordering Mobile Application

---

### 1. Task Completion Matrix (Version 1 vs Version 2)

| Task | Description | V1 Completion | V1 Avg Time | V2 Completion | V2 Avg Time | Key Friction Point Identified in V1 |
|---|---|---|---|---|---|---|
| **Task 1** | Place & Customize Order | 80% (4/5) | 84 sec | **100% (5/5)** | **48 sec** | Collection time slot selector was hidden below fold in V1. |
| **Task 2** | Track Active Order | 60% (3/5) | 42 sec | **100% (5/5)** | **14 sec** | Users could not easily locate active order in V1 (was nested under Orders tab). |
| **Task 3** | Reorder Previous Meal | 80% (4/5) | 36 sec | **100% (5/5)** | **18 sec** | Reorder button in V1 opened details instead of directly populating cart. |
| **Task 4** | Save to Favorites | 100% (5/5) | 18 sec | **100% (5/5)** | **12 sec** | Clear heart icons made bookmarking intuitive. |
| **Task 5** | Handle Sold-Out Item | 80% (4/5) | 24 sec | **100% (5/5)** | **10 sec** | V1 allowed clicking sold-out item before showing warning; V2 disabled button upfront. |

---

### 2. System Usability Scale (SUS) Evaluation

The System Usability Scale (SUS) is a 10-item Likert scale questionnaire yielding a overall usability score from 0 to 100.

#### SUS Score Progression:
- **Version 1 Prototype Score:** **68.5 / 100** *(OK / Average Usability)*
- **Version 2 Prototype Score:** **86.5 / 100** *(Excellent / Best-in-Class Usability)*

```
SUS Score Scale:
 0 ────────────── 50 ────────────── 68.5 (V1) ────── 80 ──── 86.5 (V2) ────── 100
                    [Below Avg]      [Average]     [Good]   [Excellent]
```

---

### 3. Top Identified Friction Points & User Quotes

#### Friction Point 1: Active Order Hidden in Sub-Menu (V1)
- **Problem:** In V1, active order tracking required tapping `Orders` tab -> `Active Orders` tab -> `View Stepper`. Users took over 40 seconds to find their order status.
- **Quote (P1):** *"Where is my active food? I placed an order, but I don't see any live update on the main screen."*
- **Resolution (V2):** Added a prominent **Active Order Banner** directly to the top of the Home Dashboard.

#### Friction Point 2: Hidden Collection Time Slot (V1)
- **Problem:** In V1, collection time selection was placed at the bottom of the long Payment screen. Users missed it and attempted to pay without choosing a time slot.
- **Quote (P4):** *"I almost paid before realizing I hadn't chosen when to pick up my food!"*
- **Resolution (V2):** Separated Collection Time Selection into its own dedicated step prior to Payment.
