# BEMS Institute of Technology & Vocational Studies — Technuture 5.0 Enrollment System

Pixel-mapped React + Tailwind frontend and Express backend for the Technuture 5.0 enrollment flow: homepage, courses directory with detail modals, login/register, and checkout/payment.

## Structure

```
bems-institute/
├── frontend/   React (Vite) + Tailwind CSS + React Router
└── backend/    Node.js + Express API (auth, courses, payment)
```

## Frontend

```bash
cd frontend
npm install
npm run dev       # http://localhost:5173
```

Pages:
- `/` — Home (hero, features, fee banner, course teasers)
- `/courses` — Course directory + "View Details" modal (UI/UX Design, Web Development, Graphics Design)
- `/login` — Login / Register segmented tabs
- `/register` — Register form (program locked to Technuture 5.0, course dropdown)
- `/payment` — Checkout: Pay with Card / Bank Transfer / USSD

State: `EnrollmentContext` carries the selected course from the course modal → register → payment page, so the enrollment summary and total always reflect the user's pick (Form Fee ₦5,000 + Payment Fee ₦45,000 = ₦50,000).

## Backend

```bash
cd backend
cp .env.example .env
npm install
npm start          # http://localhost:5000
```

Routes:
- `POST /api/auth/register` — creates a user (bcrypt-hashed password, in-memory store)
- `POST /api/auth/login` — authenticates and returns a JWT
- `GET  /api/courses` — list of programs/courses (mirrors the frontend data)
- `GET  /api/courses/:id` — single course detail
- `POST /api/payment/charge` — mock payment charge (see note below)

The Vite dev server proxies `/api/*` to `http://localhost:5000`, so run both servers together during development.

## ⚠️ Before going live

1. **Swap the in-memory user store** (`backend/data/users.js`) for a real database (MongoDB/Postgres).
2. **Replace the mock payment route** (`backend/routes/paymentRoutes.js`) with a real Paystack/Flutterwave server-side integration — initialize the transaction, collect card details through the provider's hosted fields/SDK (never handle raw PANs on your own server), and verify the transaction server-side before marking an enrollment as paid.
3. Set a strong `JWT_SECRET` in `.env` and serve the app over HTTPS.
4. Replace the Unsplash placeholder course images in `frontend/src/data/courses.js` with your own licensed photography/screens.

## Design tokens (from the Figma brief)

| Token | Value |
|---|---|
| Deep Navy | `#1E1B4B` |
| Accent Purple | `#7C3AED` |
| Light Purple Tint | `#FAF5FF` |
| Surface Grey | `#F9FAFB` |
| Font | Plus Jakarta Sans |
