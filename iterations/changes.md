# Iteration Changelog (Version 1 vs Version 2)
## Smart Cafeteria Ordering Mobile Application

This document provides a side-by-side comparative analysis demonstrating how usability testing feedback directly informed changes between Version 1 and Version 2 of the prototype.

---

### Side-by-Side Design Iteration Matrix

| Feature Area | Version 1 (Initial Design) | Usability Test Trigger | Version 2 (Revised Design) | HCI Heuristic Justification |
|---|---|---|---|---|
| **Active Order Access** | Active order hidden deep inside `Orders` tab sub-menu. | 2 out of 5 users took > 40 seconds to locate their active order status. | Prominent **Active Order Card** displayed at top of Home Dashboard. | **Visibility of System Status (Heuristic #1):** Keeps current state immediately accessible. |
| **Collection Time Selection** | Placed inside long scrolling Payment screen. | 3 users attempted payment without selecting a collection time slot. | Dedicated **Collection Time Screen** required prior to payment step. | **Error Prevention (Heuristic #5):** Enforces selection before payment commitment. |
| **Reorder Workflow** | Tapping "Reorder" opened Meal Details page. | Users complained about having to re-select options for identical orders. | 1-tap **"Reorder"** populates cart with saved customizations and opens checkout. | **Flexibility & Efficiency of Use (Heuristic #7):** Minimizes repetitive steps. |
| **Sold Out Items** | Item cards clickable; warning shown only inside details modal. | Users felt frustrated spending time reviewing sold-out items. | Red **"Sold Out"** badge on card; card disabled on menu screen. | **Error Prevention (Heuristic #5):** Prevents dead-end user paths. |
| **Order Stepper Visuals** | Plain text status list. | Users wanted clearer visual feedback while walking across campus. | High-contrast **4-Stage Visual Progress Bar** with animated timer. | **Match Between System & Real World (Heuristic #2):** Graphical progress feedback. |
