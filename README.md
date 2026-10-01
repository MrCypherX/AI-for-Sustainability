<<<<<<< HEAD
# AI-for-Sustainability
=======
# 🌿 NourishLoop — AI-Powered Food Rescue & Sustainability Platform

[![Full-Stack Architecture](https://img.shields.io/badge/Architecture-Monorepo%20(Vite%20%2B%20Express)-10B981)](.)
[![UI Style](https://img.shields.io/badge/Design-Editorial%20Culinary%20Aesthetic-F25C05)](.)
[![Status](https://img.shields.io/badge/Status-Hackathon%20Ready-153E2B)](.)

**NourishLoop** is an AI-powered full-stack community food-rescue and waste-mitigation platform created for the AI Sustainability Hackathon. It connects surplus food sources with hungry communities through predictive demand forecasting, intelligent automated matching, and optimized route dispatching.

---

## 🏛️ Ecosystem Stakeholder Roles

NourishLoop orchestrates four primary actors in the food sustainability ecosystem:

| Role | Represented Entities | Core Platform Capabilities |
| :--- | :--- | :--- |
| **🏢 Food Donors** | Restaurants, Cafeterias, Hotels, Hostels, Event Organizers, Households | • AI Meal Prep Demand Forecasting<br>• 1-Click Surplus Listing with Shelf-life AI<br>• Automated NGO Matching |
| **🍲 Recipient NGOs** | Community Kitchens, Homeless Shelters, Children's Homes, Food Banks | • Real-time Surplus Matching (Dietary & Distance Ranked)<br>• 1-Click Match Acceptance<br>• Live Volunteer Courier Tracking |
| **🚴 Rescue Volunteers** | Field Couriers, EV Drivers, Green Delivery Personnel | • Route Step Tracker (Assigned → Picked Up → Delivered)<br>• Turn-by-Turn Waypoints & ETA<br>• Carbon-Neutral Delivery Metrics |
| **🏛️ Platform Admins** | City Municipalities, Food Safety Authorities, Org Managers | • ESG Carbon & Landfill Avoidance Reports<br>• SDG 2, 12, 13 Compliance Auditing<br>• System-wide Impact Analytics |

> **Interactive Role Switcher**: A quick switcher in the top navigation allows judges and testers to seamlessly toggle views between **Food Donor**, **NGO / Community Kitchen**, **Rescue Volunteer**, and **City Admin**.

---

## 📐 Full-Stack Monorepo Architecture

```
ai sus/
├── frontend/                     # Modern Vanilla JS + Vite Web Application
│   ├── public/                   # High-res culinary photography & transparent decor cutouts
│   │   ├── images/               # Food photography (dumplings, pasta, rice, etc.)
│   │   ├── decor/                # Spices, herbs, peapods transparent cutouts
│   │   └── favicon.svg           # Custom NourishLoop SVG icon
│   ├── src/
│   │   ├── components/           # Reusable UI widgets
│   │   │   ├── header.js         # Top nav with role switcher & notifications
│   │   │   ├── listingModal.js   # Multi-step surplus donation dialog
│   │   │   ├── notificationsDrawer.js # Real-time alert center
│   │   │   ├── aiAssistant.js    # Interactive AI sustainability copilot
│   │   │   ├── modals.js         # Walkthrough & org detail modals
│   │   │   └── toast.js          # Polished status notifications
│   │   ├── pages/                # Distinct application views
│   │   │   ├── overview.js       # Editorial landing & sustainability dashboard
│   │   │   ├── prediction.js     # AI preparation forecasting simulator
│   │   │   ├── surplus.js        # Active surplus marketplace & filters
│   │   │   ├── matches.js        # AI multi-criteria recipient ranking & map
│   │   │   ├── routes.js         # Live courier transit tracker & step controls
│   │   │   ├── reports.js        # ESG & SDG impact reporting dashboard
│   │   │   └── settings.js       # Profile, organization & AI parameters
│   │   ├── services/             # API client with automatic offline fallback
│   │   │   └── api.js
│   │   ├── data/                 # Reactive client store & state bus
│   │   │   └── store.js
│   │   ├── styles/               # Editorial design system (marble texture, DM Serif)
│   │   │   └── style.css
│   │   ├── App.js                # Router orchestrator
│   │   └── main.js               # Web app bootstrap
│   ├── index.html                # Single-page HTML shell
│   ├── vite.config.js            # Reverse proxy configuration (/api -> :5000)
│   └── package.json
│
├── backend/                      # Node.js + Express REST API Service
│   ├── src/
│   │   ├── config/               # Environment & CORS configuration
│   │   ├── controllers/          # Request handlers
│   │   │   ├── authController.js       # Role switching & user profiles
│   │   │   ├── predictionController.js # AI demand forecasting
│   │   │   ├── surplusController.js    # Surplus listing CRUD
│   │   │   ├── matchController.js      # Multi-criteria scoring
│   │   │   ├── routeController.js      # Courier step tracking
│   │   │   └── impactController.js     # ESG metrics & live logs
│   │   ├── services/             # Core business & AI logic
│   │   │   ├── aiPredictionService.js  # Weather & attendance heuristic
│   │   │   ├── matchingService.js      # Distance/capacity scoring
│   │   │   ├── routeOptimizationService.js # ETA & EV carbon calculation
│   │   │   └── impactService.js        # Carbon, water & financial analytics
│   │   ├── models/               # In-memory mock database & seed state
│   │   │   └── mockDb.js
│   │   ├── middleware/           # RBAC & error handlers
│   │   │   ├── roleMiddleware.js
│   │   │   └── errorHandler.js
│   │   ├── routes/               # Modular Express API routers
│   │   ├── app.js                # Express app setup
│   │   └── server.js             # HTTP server entry point (Port 5000)
│   └── package.json
│
├── shared/                       # Shared Types, Constants & Validation
│   ├── constants/                # Roles, food categories & ESG factors
│   ├── types/                    # JSDoc type definitions
│   ├── validation/               # Input validation functions
│   └── package.json
│
├── scripts/                      # Developer automation scripts
│   └── dev.cjs                   # Cross-platform concurrent dev runner
├── package.json                  # Root npm workspaces configuration
└── README.md
```

---

## 🚀 Quick Start Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Run Full-Stack (Frontend + Backend Concurrently)
From the project root:
```bash
npm run dev
```
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

### 2. Run Independently
To run only the frontend:
```bash
npm run dev:frontend
```

To run only the backend API:
```bash
npm run dev:backend
```

### 3. Build for Production
```bash
npm run build
```

---

## 📡 REST API Reference

All endpoints are hosted at `http://localhost:5000/api`:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service status and uptime check |
| `GET` | `/api/auth/user` | Fetch current active user profile |
| `POST` | `/api/auth/switch-role` | Switch current role (`donor`, `ngo`, `volunteer`, `admin`) |
| `GET` | `/api/predictions/current` | Get current AI demand prediction |
| `POST` | `/api/predictions/simulate` | Run forecast simulation with custom attendance/weather |
| `POST` | `/api/predictions/apply` | Calibrate tomorrow's kitchen preparation schedule |
| `GET` | `/api/surplus` | List all surplus food donations (filterable by status) |
| `POST` | `/api/surplus` | Create a new surplus donation listing |
| `GET` | `/api/matches` | Get ranked NGO matches for donation |
| `POST` | `/api/matches/accept` | Accept a recipient match and activate courier dispatch |
| `GET` | `/api/routes/active` | Get active delivery route details & courier telemetry |
| `POST` | `/api/routes/step` | Advance route step (`1: Created`, `2: Assigned`, `3: Picked Up`, `4: Delivered`) |
| `GET` | `/api/impact/metrics` | Retrieve total meals rescued, CO2 avoided, and water saved |
| `GET` | `/api/impact/report` | Retrieve complete ESG and UN SDG compliance audit |

---

## 🌱 Environmental Impact Formulae

- **GHG Emissions Avoided**: `2.5 kg CO₂e` avoided per kg of food diverted from landfill methane generation.
- **Embedded Water Saved**: `5,000 Liters` conserved per kg of food rescued.
- **Average Meal Weight**: Standardized to `0.33 kg` per nutritious portion.
- **Economic Value Saved**: `₹120 / $1.45` estimated value per meal portion saved.
>>>>>>> b8a74cc (feat: restructure into full-stack monorepo with frontend, backend, and shared packages for NourishLoop)
