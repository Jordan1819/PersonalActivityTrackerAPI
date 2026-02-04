# Personal Activity Tracker API

A backend REST API built from scratch to explore how real-world APIs are designed, structured, and deployed.

The goal of this project is **learning by building** — focusing on core backend concepts like HTTP, routing, authentication, persistence, and clean architecture.

This API will allow users to track personal activities (e.g., workouts, study sessions, hobbies) and retrieve meaningful insights over time.

---

## Tech Stack

- **Node.js**
- **Express**
- **PostgreSQL** (later phases)
- **JWT Authentication**
- **Prisma / SQL** (TBD)
- **RESTful API design**

---

## Project Structure (early scaffold)
src/  
|- app.js # Express app config  
|- server.js # Server entry point  
|- routes/ # API route definitions  
|- middeware/ # Custom middleware  


This structure will evolve as the project grows.

---

## Development Phases

### Phase 1: Project Skeleton & Server Setup
**Goal:** Understand how requests flow through an API.

- Initialize Node.js project with npm
- Install and configure Express
- Create base project structure
- Implement a `GET /health` endpoint
- Run a local development server

**Outcome:** API responds to HTTP requests with a clean separation between app setup and server startup.

---

### Phase 2: Database Integration
**Goal:** Persist real data.

- Connect to a relational database
- Design initial schema (users, activities)
- Implement basic CRUD operations
- Validate database connectivity

**Outcome:** API can store and retrieve data reliably.

---

### Phase 3: Authentication & Authorization
**Goal:** Secure the API.

- User registration and login
- Password hashing
- JWT-based authentication
- Protected routes

**Outcome:** Only authenticated users can access their data.

---

### Phase 4: Core Activity Features
**Goal:** Deliver meaningful functionality.

- Create, read, update, delete activities
- Tag activities
- Associate activities with users
- Input validation and error handling

**Outcome:** Fully functional activity tracking system.

---

### Phase 5: Querying & Insights
**Goal:** Make the data useful.

- Filtering (by date, tag, type)
- Pagination
- Aggregations (time per week, activity frequency)
- Summary endpoints

**Outcome:** API provides insights, not just raw data.

---

### Phase 6: Testing & Hardening
**Goal:** Increase reliability.

- Unit and integration tests
- Centralized error handling
- Request validation
- Rate limiting and security middleware

**Outcome:** API is stable and predictable.

---

### Phase 7: Documentation & Deployment
**Goal:** Make it production-ready.

- OpenAPI / Swagger documentation
- Environment-based configuration
- Deployment to a cloud provider
- Versioned API routes (`/api/v1`)

**Outcome:** API is accessible, documented, and deployable.

---