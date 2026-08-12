# Smart Cafeteria Ordering Mobile Application
> **Human–Computer Interaction (HCI) Group Term Assignment**  
> *Core Proposition: "Order ahead, skip the queue, and collect your meal when it's ready."*

[![Live Prototype](https://img.shields.io/badge/Live%20Prototype-GitHub%20Pages-2563eb)](https://m4rkiii.github.io/smart-cafeteria-ordering/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717)](https://github.com/m4rkiii/smart-cafeteria-ordering)
[![HCI Heuristics](https://img.shields.io/badge/HCI%20Heuristics-Nielsen's%2010-059669)](docs/requirements.md)
[![SUS Score](https://img.shields.io/badge/Usability%20Score-86.5%2F100-7c3aed)](usability-testing/findings.md)

---

## 🌐 Prototype Links
- **🌐 Live Web Prototype (GitHub Pages):** [https://m4rkiii.github.io/smart-cafeteria-ordering/](https://m4rkiii.github.io/smart-cafeteria-ordering/)
- **📁 GitHub Source Code:** [https://github.com/m4rkiii/smart-cafeteria-ordering](https://github.com/m4rkiii/smart-cafeteria-ordering)
- **🔀 Latest Commit:** [https://github.com/m4rkiii/smart-cafeteria-ordering/commit/1aa2cc9](https://github.com/m4rkiii/smart-cafeteria-ordering/commit/1aa2cc9)

---

## 📌 Project Overview
University cafeterias experience severe queue congestion during peak breakfast and lunch hours (11:30 AM – 1:30 PM). Students and staff spend an average of **25+ minutes** standing in physical lines to view menus, place orders, make payments, and wait for preparation—frequently resulting in missed lectures, skipped meals, and operational chaos.

The **Smart Cafeteria Ordering Mobile Application** is an interactive mobile prototype developed using **Balsamiq** and an **Interactive Mobile Web App** that enables campus users to browse menus, customize meals, select scheduled collection time slots, pay digitally, and track kitchen preparation in real time before collecting their food at an express pickup counter.

---

## 🎯 Objectives
- **Reduce Queues:** Eliminate physical queue waiting times from 25 minutes to < 1 minute.
- **Enhance Stock Visibility:** Provide real-time stock indicators (*Available*, *Low Stock*, *Sold Out*) to prevent order disappointment.
- **Scheduled Collection:** Allow users to pick up food at specified class break windows (e.g. 12:30 PM, 1:00 PM).
- **HCI Excellence:** Adhere strictly to mobile HCI usability heuristics and iterative user testing principles.

---

## 👥 Target Users & Personas

| Persona | Role | Primary Goal | Key Pain Point |
|---|---|---|---|
| **Alex Chen (21)** | Undergraduate Student | Quick, affordable lunch between tight class breaks. | 25-min lines causing lecture tardiness & sold-out item surprises. |
| **Dr. Sarah Jenkins (38)** | Faculty Staff Member | Scheduled 1:15 PM lunch pickup near office hours. | Unpredictable cafeteria noise and lack of meal customization. |

*Detailed personas available in [`docs/personas.md`](docs/personas.md).*

---

## 🚀 Key Features

1. **Home Dashboard:** Search bar, category filter pills, deals carousel, quick reorder tray, loyalty point balance, and **Active Order Banner**.
2. **Menu & Stock Badges (15+ Items):** Category tabs (*Lunch, Breakfast, Snacks, Drinks, Veggie, Combos*) with clear *Available*, *Low Stock*, and *Sold Out* tags.
3. **Meal Customization & Nutrition:** Portion size selection, add-on checkboxes, chef instructions, dynamic total price updating, and nutrition breakdown cards (protein, carbs, fats).
4. **Scheduled Pickup Slot Selection:** Select collection venue (*Main Dining*, *Engineering*, etc.) and time slot (*12:30 PM*, *1:00 PM*).
5. **Order Tracking Stepper:** Real-time visual progress bar: `Received` ➔ `Preparing` ➔ `Ready for Collection` ➔ `Collected`.
6. **Express Pickup Code:** High-contrast QR code and pickup PIN for 20-second counter pickup.
7. **1-Tap Express Reordering:** Instant re-order capability from past Order History receipts.
8. **Campus Loyalty Rewards:** Redeem 100 points for a KSh 50 discount during checkout.
9. **Digital Receipts:** View itemized proof of purchase with tax breakdown and loyalty points earned.

---

## 📁 Repository Structure

```
smart-cafeteria/
├── README.md                           # Main GitHub Project Documentation
├── index.html                          # Interactive Mobile Web Prototype Entrypoint
├── styles.css                          # Mobile App Styling & Balsamiq UI Themes
├── app.js                              # Interactive Application Logic & State Engine
├── docs/
│   ├── PRD.md                          # Product Requirements Document
│   ├── problem-statement.md            # Problem Context & Cafeteria Queue Bottlenecks
│   ├── requirements.md                 # Functional (FR-01..28) & HCI Specifications
│   ├── personas.md                     # Alex Chen (Student) & Dr. Jenkins (Staff) Personas
│   ├── user-journey.md                 # End-to-End User Journey & Emotional Curve Map
│   └── task-flows.md                   # Mermaid Task Flow Diagrams for 3 User Scenarios
├── research/
│   ├── questionnaire.md                # 10-Question User Research Survey & Interview Guide
│   ├── findings.md                     # Raw User Research Data & Participant Matrix
│   └── user-research-summary.md        # Synthesized Findings & Information Architecture Impact
├── wireframes/
│   ├── initial-sketches/               # Paper Wireframe Sketches & Ideation Notes
│   └── balsamiq/                       # Balsamiq Screen Specifications for 15 Screens
├── usability-testing/
│   ├── test-plan.md                    # Usability Protocol, 5 Tasks, SUS Evaluation Metric
│   ├── participants.md                 # Profiles of 5 Representative Test Users
│   ├── findings.md                     # Test Task Results, SUS Metrics (68.5 vs 86.5)
│   └── recommendations.md              # Nielsen's 10 Heuristics Design Recommendations
├── iterations/
│   ├── version-1/                      # Version 1 Initial Prototype Overview
│   ├── version-2/                      # Version 2 Iterated Prototype Overview
│   └── changes.md                      # Side-by-Side Comparison & HCI Changelog
└── final/
    ├── final-report/                   # Comprehensive Final HCI Term Assignment Report
    └── presentation/                   # Group Presentation Slide Deck Outline
```
