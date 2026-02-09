

# VoteGuard Developer Documentation

## 1. Project Overview

**VoteGuard** is a secure electronic voting system prototype designed to ensure voter eligibility, data integrity, and a user-friendly voting experience. It leverages a modern tech stack to simulate a real-world e-voting scenario, featuring:

-   **Citizen Verification**: Validates users against a mock Government Registry.
-   **Two-Factor Authentication (2FA)**: Ensures secure login via Mobile and Email OTPs.
-   **Secure Voting**: Prevents double voting and ensures vote integrity using a receipt hash mechanism.
-   **Real-time Dashboard**: Displays election status and results.
-   **Admin Panel**: For managing elections and candidates.

## 2. Architecture & Tech Stack

The project follows a standard client-server architecture:

-   **Frontend**: Next.js 14 (App Router)
-   **Backend**: Node.js + Express.js
-   **Database**: PostgreSQL (managed via Prisma ORM)
-   **Authentication**: Custom JWT-based auth with 2FA
-   **Styling**: Tailwind CSS

### 2.1 Technology Breakdown

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | Next.js 14 | React framework for server-rendered and static web applications. |
| **UI Library** | React 18 | Component-based UI development. |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid UI development. |
| **Animations** | Framer Motion | Library for production-ready animations. |
| **Backend Server** | Express.js | Fast, unopinionated, minimalist web framework for Node.js. |
| **ORM** | Prisma | Modern database access for TypeScript & Node.js. |
| **Database** | PostgreSQL | Robust, relational database system for all data storage. |
| **Security** | bcryptjs, JWT | Password hashing and stateless authentication tokens. |

## 3. Folder Structure

### 3.1 Root Directory

```
vote-guard/
├── app/                  # Next.js App Router (Frontend Pages)
├── vote-guard-server/    # Express Backend Server
├── public/               # Static assets
├── components/           # Reusable React components (if applicable)
├── middleware.js         # Next.js Middleware (Route protection)
├── package.json          # Frontend dependencies
└── README.md             # Project README
```

### 3.2 Backend Structure (`vote-guard-server/`)

```
vote-guard-server/
├── src/
│   ├── app.js            # (Placeholder/Setup)
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers (Business Logic)
│   │   ├── authController.js
│   │   ├── voteController.js
│   │   └── ...
│   ├── middleware/       # Express Middleware (Auth, Validation)
│   ├── routes/           # API Route Definitions
│   │   ├── authRoutes.js
│   │   ├── voteRoutes.js
│   │   └── ...
│   ├── utils/            # Helper functions
│   └── services/         # (Optional) Service layer
├── prisma/
│   └── schema.prisma     # Database Schema Definition
├── server.js             # Main Entry Point
└── package.json          # Backend dependencies
```

### 3.3 Frontend Structure (`app/`)

```
app/
├── login/                # Login & Registration Page
├── dashboard/            # User Dashboard (Protected)
├── vote/                 # Voting Interface
├── verify/               # Citizen Verification Page
├── results/              # Election Results Page
├── admin/                # Admin Panel
├── layout.js             # Root Layout (wraps all pages)
├── page.js               # Landing Page (Redirects to /login)
└── globals.css           # Global Styles
```

## 4. Database Schema

The project uses **PostgreSQL** locally or via a cloud provider (e.g., Supabase, Neon), managed by **Prisma**.

### 4.1 Models

#### `GovtRegistry`
Simulates the government database of valid citizens.
-   `citizenId` (PK): Unique ID for the citizen (e.g., "CIT-12345").
-   `fullName`, `dob`, `gender`, `email`, `mobile`: Personal details.
-   `isRegistered`: Boolean flag to track if they have signed up for VoteGuard.

#### `User`
Registered users of the VoteGuard platform.
-   `userId` (PK): UUID.
-   `username`: Unique username.
-   `passwordHash`: Bcrypt hashed password.
-   `role`: "voter" or "admin".
-   `citizenId`: FK to `GovtRegistry`.
-   `otpCode`, `otpExpiresAt`: Temporary fields for 2FA.

#### `Election`
Represents an ongoing or upcoming election.
-   `id` (PK): UUID.
-   `title`: (e.g., "National Parliamentary Election 2024").
-   `status`: "UPCOMING", "LIVE", "ENDED".
-   `startTime`, `endTime`: Election timeline.

#### `Candidate`
Candidates running in an election.
-   `id` (PK): UUID.
-   `name`, `party`, `symbol`: Candidate details.
-   `voteCount`: Cached counter for quick results.
-   `electionId`: FK to `Election`.

#### `Vote`
 The immutable record of a cast vote.
-   `id` (PK): UUID.
-   `userId`: Who voted.
-   `electionId`: Which election.
-   `candidateId`: Who they voted for.
-   `receiptHash`: SHA-256 hash for verification.
-   `@@unique([userId, electionId])`: **Crucial constraints preventing double voting.**

#### `AuditLog`
Logs critical actions for security auditing.
-   `userId`, `action`, `ipAddress`, `timestamp`.

## 5. API Documentation

The backend runs on `http://localhost:5001` (default).

### 5.1 Authentication (`/api/auth`)

| Method | Endpoint | Description | Body Params |
| :--- | :--- | :--- | :--- |
| `POST` | `/verify-citizen` | Checks if a Citizen ID is valid. | `{ citizenId }` |
| `POST` | `/register` | Registers a new user. | `{ username, password, citizenId, ... }` |
| `POST` | `/login` | Initiates login (triggers 2FA). | `{ username, password }` |
| `POST` | `/verify-otp` | Verifies OTP to complete login. | `{ username, otp }` |
| `POST` | `/logout` | Logs out the user. | - |
| `GET` | `/dashboard` | Protected route test. | - |

### 5.2 Voting (`/api/vote`)

| Method | Endpoint | Description | Body Params |
| :--- | :--- | :--- | :--- |
| `GET` | `/ballot` | Retrieves the ballot for the user. | - |
| `POST` | `/cast` | Casts a vote. | `{ electionId, candidateId }` |

### 5.3 Administration (`/api/admin`)

*(Endpoints for managing elections and candidates - see `adminRoutes.js` for details)*

### 5.4 Elections (`/api/elections`)

*(Endpoints for public election data - see `electionRoutes.js` for details)*

## 6. Setup and Installation

### 6.1 Prerequisites
-   Node.js (v18+)
-   PostgreSQL Database URL

### 6.2 Environment Variables

Create a `.env` file in `vote-guard-server/`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/vote_guard?schema=public"
DIRECT_URL="postgresql://user:password@localhost:5432/vote_guard?schema=public"
JWT_SECRET="your_super_secret_key"
PORT=5001
```

### 6.3 Installation Steps

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/vote-guard.git
    cd vote-guard
    ```

2.  **Install Frontend Dependencies**:
    ```bash
    npm install
    ```

3.  **Install Backend Dependencies**:
    ```bash
    cd vote-guard-server
    npm install
    ```

4.  **Database Setup**:
    ```bash
    # Inside vote-guard-server/
    npx prisma generate
    npx prisma db push  # Pushes schema to DB
    ```

5.  **Run the Application**:

    *Option A: Separate Terminals*
    -   Frontend: `npm run dev` (Runs on port 3000)
    -   Backend: `cd vote-guard-server && npm run dev` (Runs on port 5001)

    *Option B: Concurrent (if configured)*
    -   `npm run dev` (from root)

## 7. Development Guidelines

-   **Code Style**: Follow standard ESLint configuration.
-   **Commits**: Use descriptive commit messages.
-   **Database Changes**: When modifying `schema.prisma`, always run `npx prisma generate` and `npx prisma db push` to update the client and database.

---
