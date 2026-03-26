# AI_STUDIO_CONTEXT.md
# ShiftToAI — Full Build Context for Google AI Studio

---

## APP OVERVIEW
ShiftToAI is a SaaS platform that provides AI agents and voice AI automation 
services to clients. Users can sign up, manage AI agents, view their dashboard, 
handle billing/subscriptions, and configure account settings. 
An admin portal exists for platform management.

---

## TECH STACK

### Frontend (Already Built)
- React 19
- Vite 8
- TailwindCSS 3.4
- React Router DOM 7.13
- @tailwindcss/forms, @tailwindcss/container-queries

### Backend (To Be Built)
- Node.js + Express
- PostgreSQL (via Supabase)
- Prisma ORM
- JWT Authentication
- bcryptjs for password hashing

### Infrastructure
- Frontend: Vercel
- Backend: Railway
- Database: Supabase (PostgreSQL)

---

## FOLDER STRUCTURE

### Current Frontend
```
src/
  assets/
    hero.png
    react.svg
    vite.svg
  components/
    Contact.jsx
    DashboardPreview.jsx
    Demo.jsx
    Footer.jsx
    Hero.jsx
    ProfileDrawer.jsx
    Services.jsx
    TopNavBar.jsx
  pages/
    AgentsPage.jsx
    BillingPage.jsx
    DashboardPage.jsx
    LoginPage.jsx
    SettingsPage.jsx
    SignupPage.jsx
  App.jsx
  App.css
  main.jsx
  index.css
public/
  designs/
    account_settings_with_sidebar.png
    admin_portal.png
    ai_agents_management.png
    authentication.png
    billing_subscriptions_with_sidebar.png
    landing_page_with_client_dashboard_preview.png
    user_dashboard.png
```

### Expected Backend Structure (To Be Generated)
```
backend/
  src/
    controllers/
      authController.js
      userController.js
      agentController.js
      billingController.js
      adminController.js
    middleware/
      authMiddleware.js
      errorMiddleware.js
    routes/
      authRoutes.js
      userRoutes.js
      agentRoutes.js
      billingRoutes.js
      adminRoutes.js
    models/ (Prisma schema only)
  prisma/
    schema.prisma
    migrations/
  server.js
  .env.example
```

---

## BUILT PAGES — STATUS

### 1. Landing Page (BUILT)
Components: Hero.jsx, Services.jsx, Demo.jsx, Contact.jsx, Footer.jsx, TopNavBar.jsx
Route: /
Status: Complete, no backend needed

### 2. LoginPage.jsx (BUILT — needs API wiring)
Route: /login
Stitch design: authentication.png
Currently: Static form, no API call
Needs: POST /api/auth/login → returns JWT token

### 3. SignupPage.jsx (BUILT — needs API wiring)
Route: /signup
Stitch design: authentication.png
Currently: Static form, no API call
Needs: POST /api/auth/signup → creates user, returns JWT

### 4. DashboardPage.jsx (BUILT — needs API wiring)
Route: /dashboard
Stitch design: user_dashboard.png
Currently: Static/mock data
Needs: GET /api/user/dashboard → returns user stats, agent activity

### 5. AgentsPage.jsx (BUILT — needs API wiring)
Route: /agents
Stitch design: ai_agents_management.png
Currently: Static list
Needs: GET /api/agents, POST /api/agents, PUT /api/agents/:id, DELETE /api/agents/:id

### 6. BillingPage.jsx (BUILT — needs API wiring)
Route: /billing
Stitch design: billing_subscriptions_with_sidebar.png
Currently: Static
Needs: GET /api/billing/subscription, POST /api/billing/upgrade

### 7. SettingsPage.jsx (BUILT — needs API wiring)
Route: /settings
Stitch design: account_settings_with_sidebar.png
Currently: Static form
Needs: GET /api/user/profile, PUT /api/user/profile, PUT /api/user/password

---

## UNBUILT PAGES

### 8. AdminPage.jsx (NOT BUILT)
Route: /admin
Stitch design: admin_portal.png
Description: Admin dashboard to manage all users, view platform stats,
manage subscriptions, view all AI agents across accounts.
Layout: Sidebar navigation + main content area with stats cards,
users table, and activity log.
Needs: All /api/admin/* endpoints

---

## REQUIRED BACKEND ROUTES

### Auth
POST   /api/auth/signup        body: {name, email, password}         returns: {token, user}
POST   /api/auth/login         body: {email, password}               returns: {token, user}
POST   /api/auth/logout        headers: Authorization                returns: {success}
GET    /api/auth/me            headers: Authorization                returns: {user}

### User
GET    /api/user/profile       headers: Authorization                returns: {user}
PUT    /api/user/profile       body: {name, email, avatarUrl}        returns: {user}
PUT    /api/user/password      body: {currentPassword, newPassword}  returns: {success}
GET    /api/user/dashboard     headers: Authorization                returns: {stats, recentActivity}

### Agents
GET    /api/agents             headers: Authorization                returns: [{agent}]
POST   /api/agents             body: {name, type, config}            returns: {agent}
PUT    /api/agents/:id         body: {name, type, config, status}    returns: {agent}
DELETE /api/agents/:id         headers: Authorization                returns: {success}
GET    /api/agents/:id/stats   headers: Authorization                returns: {callCount, successRate}

### Billing
GET    /api/billing/subscription   headers: Authorization            returns: {plan, status, renewalDate}
POST   /api/billing/upgrade        body: {planId}                    returns: {subscription}
GET    /api/billing/invoices       headers: Authorization            returns: [{invoice}]

### Admin (protected — admin role only)
GET    /api/admin/users            headers: Authorization            returns: [{user}]
GET    /api/admin/stats            headers: Authorization            returns: {totalUsers, activeAgents, revenue}
PUT    /api/admin/users/:id        body: {role, status}              returns: {user}
DELETE /api/admin/users/:id        headers: Authorization            returns: {success}

---

## DATABASE SCHEMA

### users
id            UUID PRIMARY KEY DEFAULT gen_random_uuid()
name          VARCHAR(255) NOT NULL
email         VARCHAR(255) UNIQUE NOT NULL
password_hash VARCHAR(255) NOT NULL
role          ENUM('user', 'admin') DEFAULT 'user'
avatar_url    VARCHAR(500)
created_at    TIMESTAMP DEFAULT NOW()
updated_at    TIMESTAMP DEFAULT NOW()

### agents
id            UUID PRIMARY KEY DEFAULT gen_random_uuid()
user_id       UUID REFERENCES users(id) ON DELETE CASCADE
name          VARCHAR(255) NOT NULL
type          VARCHAR(100) NOT NULL
config        JSONB
status        ENUM('active', 'inactive', 'paused') DEFAULT 'inactive'
call_count    INTEGER DEFAULT 0
created_at    TIMESTAMP DEFAULT NOW()
updated_at    TIMESTAMP DEFAULT NOW()

### subscriptions
id            UUID PRIMARY KEY DEFAULT gen_random_uuid()
user_id       UUID REFERENCES users(id) ON DELETE CASCADE
plan          ENUM('free', 'starter', 'pro', 'enterprise') DEFAULT 'free'
status        ENUM('active', 'cancelled', 'past_due') DEFAULT 'active'
renewal_date  TIMESTAMP
created_at    TIMESTAMP DEFAULT NOW()

### invoices
id            UUID PRIMARY KEY DEFAULT gen_random_uuid()
user_id       UUID REFERENCES users(id)
subscription_id UUID REFERENCES subscriptions(id)
amount        DECIMAL(10,2)
status        ENUM('paid', 'pending', 'failed') DEFAULT 'pending'
issued_at     TIMESTAMP DEFAULT NOW()

---

## ENVIRONMENT VARIABLES NEEDED

### Frontend (.env)
VITE_API_BASE_URL=http://localhost:5000

### Backend (.env)
DATABASE_URL=postgresql://...
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

---

## DESIGN ASSETS (GitHub raw URLs)
Replace YOUR_USERNAME with: shifttoai
Replace YOUR_REPO with: shift-to-ai

https://raw.githubusercontent.com/shifttoai/shift-to-ai/main/public/designs/user_dashboard.png
https://raw.githubusercontent.com/shifttoai/shift-to-ai/main/public/designs/ai_agents_management.png
https://raw.githubusercontent.com/shifttoai/shift-to-ai/main/public/designs/billing_subscriptions_with_sidebar.png
https://raw.githubusercontent.com/shifttoai/shift-to-ai/main/public/designs/account_settings_with_sidebar.png
https://raw.githubusercontent.com/shifttoai/shift-to-ai/main/public/designs/admin_portal.png
https://raw.githubusercontent.com/shifttoai/shift-to-ai/main/public/designs/authentication.png
https://raw.githubusercontent.com/shifttoai/shift-to-ai/main/public/designs/landing_page_with_client_dashboard_preview.png
