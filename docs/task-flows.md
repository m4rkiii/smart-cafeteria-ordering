# Task Flows
## Smart Cafeteria Ordering Mobile Application

This document outlines the operational task flows for the three core user scenarios specified in the PRD.

---

### Scenario 1: Place an Order (Primary Flow)
**Goal:** A student or staff member selects, customizes, schedules, pays for, and places a meal order.

```mermaid
flowchart TD
    A([Launch Application]) --> B[Home Dashboard]
    B --> C{Select Entry Point}
    C -->|Browse Categories| D[Menu Screen]
    C -->|Tap Promotion| E[Meal Details Screen]
    C -->|Search Keyword| F[Search Results]
    
    D --> E
    F --> E
    
    E --> G{Customize Meal?}
    G -->|Yes| H[Meal Customization Screen]
    G -->|No| I[Add Default Item to Cart]
    H -->|Select Portion / Add Extras / Instructions| J[Update Cart Total] --> I
    
    I --> K[Shopping Cart Screen]
    K --> L{Review Order}
    L -->|Edit Item| H
    L -->|Proceed| M[Collection Time & Venue Screen]
    
    M --> N[Select Pickup Location]
    N --> O[Select Pickup Time Slot]
    O --> P[Payment Method Screen]
    
    P --> Q[Select Payment: M-Pesa / Card / Campus]
    Q --> R[Confirm Payment]
    R --> S[Order Confirmation Screen - Order # Generated]
    S --> T([Transition to Live Order Tracking])
```

---

### Scenario 2: Track an Active Order
**Goal:** User checks real-time preparation status and collects food upon notification.

```mermaid
flowchart TD
    A([User Opens App or Taps Notification]) --> B{Navigation Source}
    B -->|Home Banner| C[Active Order Card]
    B -->|Orders Tab| D[Active Orders List]
    B -->|Push Notification| E[Order Tracking Screen]
    
    C --> E
    D --> E
    
    E --> F[Display Visual 4-Stage Stepper]
    F --> G{Current Status?}
    
    G -->|Stage 1: Received| H[Display Prep Time: ~15 mins]
    G -->|Stage 2: Preparing| I[Display Kitchen Activity Message]
    G -->|Stage 3: Ready| J[Trigger Push Alert + Chime & Display Pickup Code / Barcode]
    G -->|Stage 4: Collected| K[Prompt Star Rating & Digital Receipt]
    
    J --> L[User Scans Code at Express Shelf]
    L --> K
    K --> M([Task Complete])
```

---

### Scenario 3: Reorder a Previous Meal
**Goal:** User rapidly re-orders a past meal from history in under 3 taps.

```mermaid
flowchart TD
    A([User Launches App]) --> B[Home Dashboard]
    B --> C{Reorder Route}
    C -->|Quick Reorder Tray on Home| D[Tap Past Item 'Reorder']
    C -->|Bottom Nav 'Orders'| E[Order History Screen]
    
    E --> F[Locate Desired Past Receipt]
    F --> G[Tap 'Reorder' Button]
    
    D --> H[Auto-Populate Cart with Exact Customizations]
    G --> H
    
    H --> I[Shopping Cart Screen]
    I --> J[Confirm Pickup Slot & Payment]
    J --> K[Order Placed - New Order # Generated]
    K --> L([Task Complete - 3 Taps Total])
```
