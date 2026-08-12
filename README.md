# Smart Cafeteria Ordering Mobile Application
> **Human–Computer Interaction (HCI) Group Term Assignment**  
> *Core Proposition: "Order ahead, skip the queue, and collect your meal when it's ready."*

[![Prototype](https://img.shields.io/badge/Prototype-Interactive%20Mobile%20Web%20%26%20Balsamiq-2563eb)](index.html)
[![HCI Heuristics](https://img.shields.io/badge/HCI%20Heuristics-Nielsen's%2010-059669)](docs/requirements.md)
[![SUS Score](https://img.shields.io/badge/Usability%20Score-86.5%2F100-7c3aed)](usability-testing/findings.md)

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

1. **Home Dashboard:** Search bar, category filter pills, deals carousel, quick reorder tray, and **Active Order Banner**.
2. **Menu & Stock Badges:** Category tabs (*Lunch, Drinks, Combos*) with clear *Available*, *Low Stock*, and *Sold Out* tags.
3. **Meal Customization:** Interactive modal for portion size selection, add-on checkboxes, chef instructions, and real-time total price updating.
4. **Scheduled Pickup Slot Selection:** Select collection venue (*Main Dining*, *Engineering*, etc.) and time slot (*12:30 PM*, *1:00 PM*).
5. **Order Tracking Stepper:** Real-time visual progress bar: `Received` ➔ `Preparing` ➔ `Ready for Collection` ➔ `Collected`.
6. **Express Pickup Code:** High-contrast QR code and pickup PIN for 20-second counter pickup.
7. **1-Tap Express Reordering:** Instant re-order capability from past Order History receipts.

---

## 🎨 Interactive Web Prototype & Balsamiq Assets
The repository contains both Balsamiq low-fidelity wireframe specifications and a zero-dependency interactive web application:

- **Launch Interactive Web App:** Open [`index.html`](index.html) in any browser to test all 15 screens and 3 user scenarios live.
- **Balsamiq Screen Specifications:** Detailed wireframe definitions for all 15 screens in [`wireframes/balsamiq/balsamiq_wireframes.md`](wireframes/balsamiq/balsamiq_wireframes.md).

---

## 📊 User Research & Usability Testing Summary

### User Research (N = 5 Campus Participants)
- **Average Peak Wait Time:** 24.6 minutes.
- **Mobile Pre-Ordering Adoption Intent:** 100% positive intent.
- **Preferred Payment Method:** 60% M-Pesa, 20% Campus Card, 20% Pay at Collection.

### Usability Testing & Iteration (V1 vs V2)
Usability testing was conducted with 5 representative users across 5 core task scenarios:

| Metric | Prototype Version 1 | Prototype Version 2 (Revised) | Improvement |
|---|---|---|---|
| **Task Completion Rate** | 76% | **100%** | **+24%** |
| **Average Task Completion Time** | 84 seconds | **48 seconds** | **43% faster** |
| **System Usability Scale (SUS)** | **68.5 / 100** | **86.5 / 100** | **+18.0 pts (Excellent)** |

#### Key Design Improvements (V1 ➔ V2):
- **Active Order Card:** Moved active order status to top of Home Dashboard for immediate status visibility.
- **Dedicated Time Slot Screen:** Separated Collection Time selection into a mandatory checkout step to eliminate payment error states.
- **Front-End Error Prevention:** Disabled touch targets for *Sold Out* items directly on the menu screen.

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

---

## 🤝 Team Member Roles & Contributions

| Member / Role | Primary Responsibilities | Major Deliverables |
|---|---|---|
| **Project Lead** | Project coordination, task delegation, HCI timeline management | Project Plan, Final Presentation |
| **UX Researcher** | User research, questionnaire design, participant interviewing | Questionnaire, Findings, Personas |
| **UX Designer** | Information architecture, user journey mapping, task flows | User Journeys, Task Flows, Sketches |
| **Balsamiq Designer 1** | Wireframing Home, Menu, Search, & Categories | Screens 1, 2, 3, 4 |
| **Balsamiq Designer 2** | Wireframing Customization, Cart, & Checkout | Screens 5, 6, 7, 8, 9, 10 |
| **Balsamiq Designer 3** | Wireframing Tracking, History, Favorites, & Profile | Screens 11, 12, 13, 14, 15 |
| **Usability Test Lead**| Usability testing protocol execution, SUS score calculation | Test Plan, SUS Analysis, Recommendations |
| **Documentation Lead**| PRD synthesis, final report compilation, README formatting | PRD, Final Report, Requirements |
| **GitHub Manager** | Repository structure, code versioning, GFM markdown compliance | Repository Layout, Iterations Log |
| **Presentation Lead**| Final slide deck preparation, prototype demonstration script | Slide Deck, Presentation Script |
