# User Journey Map
## Smart Cafeteria Ordering Mobile Application

This journey map tracks Alex Chen (Student Persona) through the end-to-end meal ordering and pickup experience using the Smart Cafeteria app versus the traditional physical queue experience.

---

### End-to-End User Journey Matrix

| Stage | Step & User Action | Touchpoint | Emotional State | System Response / HCI Feature | Opportunity / Design Insight |
|---|---|---|---|---|---|
| **1. Need Discovery** | Feels hungry between 11:30 AM lecture and 1:00 PM lab. Opens app from classroom. | Smartphone Home Screen | 😐 Neutral / Anticipatory | App loads instantly (< 1.5s). Home Dashboard shows Active Deals & Quick Order Tray. | Display popular lunch combos prominently on Home. |
| **2. Menu Browsing** | Filters menu by "Lunch" & "Under KSh 300". Browses options. | Menu Screen / Category Tabs | 🙂 Pleased | Category tabs switch instantly. Badges show "Available" or "Low Stock". | Highlight stock status early so users don't choose sold-out items. |
| **3. Meal Selection** | Selects *Grilled Chicken & Rice*. Views description & ingredients. | Meal Details Screen | 😊 Interested | Meal view shows calories, allergens, price, and "Customize" button. | Clear ingredient transparency builds user trust. |
| **4. Customization** | Upgrades to Large portion (+KSh 50), adds Fresh Juice, checks "No Onions". | Customization Modal | 😁 Engaged | Total price dynamically updates in real-time at the bottom bar. | Immediate price calculation eliminates checkout surprises. |
| **5. Time & Venue Selection** | Selects *Main Cafeteria* & *12:30 PM Collection Slot*. | Collection Time Screen | 🤩 Confirmed | Unavailable slots are greyed out with clear "Fully Booked" badges. | Prevents kitchen overcrowding by capping time-slot capacity. |
| **6. Checkout & Payment** | Chooses *M-Pesa Express*. Reviews order total (KSh 320) and taps *Pay*. | Payment Interface | 😌 Secure | Shows itemized subtotal, zero surprise fees, and 1-tap confirmation. | Simple payment options speed up checkout under 30 seconds. |
| **7. Order Confirmation** | Receives unique Order #1045 and digital pickup barcode. | Order Confirmation Screen | 🎉 Satisfied | Displays estimated prep time (12 mins) & target pickup time (12:30 PM). | Clear system confirmation reduces anxiety. |
| **8. Progress Tracking** | Walks across campus while checking live 4-stage order stepper. | Order Tracking Screen | 😃 Informed | Stepper transitions from *Received* ➔ *Preparing* in real time. | Remote visibility means no physical queue waiting. |
| **9. Ready Notification** | Receives push alert & audio chime: *"Order #1045 is Ready at Shelf B3!"* | Smartphone Notification Banner | 🥳 Delighted | Banner provides direct link to pickup barcode screen. | Actionable alerts ensure prompt meal collection. |
| **10. Express Collection** | Walks to express counter, scans barcode, grabs food tray in 20 seconds. | Cafeteria Express Counter | 🌟 Thrilled | Express pickup counter bypasses the 30-person main queue completely. | Eliminates queue friction entirely. |
| **11. Post-Meal Feedback** | Rates meal 5 stars and taps "Save to Favorites" for tomorrow. | Rating & History Screen | 🥰 Loyal | App prompts 1-tap star rating and saves custom item to Favorites. | Reordering capability encourages repeat usage. |

---

### Emotional Curve Comparison

```
Satisfaction Level
 High  ▲                                    [Express Collection] ── [Feedback]
       │                                  /
       │                 [Customization] ── [Order Confirmed]
       │                /
 Mid   ┼ ── [Browse] ──
       │
       │  ------------------------------------------------------------- (Traditional Queue Experience)
 Low   ▼                                                                [20-min Queue Failure]
       └───────────────────────────────────────────────────────────────────► Time
```
