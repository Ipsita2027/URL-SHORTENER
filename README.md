# URL Shortener

A full-stack URL shortener application that allows users to generate short URLs with or without custom aliases. Built using the MERN stack, with modern frontend state management, routing, and styling.

# Features

- Shorten long URLs into compact, shareable links

- Support for custom short URLs

- Automatic generation of short URLs using nanoid

- Automatic redirection from short URL to original URL

- Authentication-aware frontend (JWT-based)

- Protected routes for authenticated users

- Persistent authentication via backend token validation

# Tech Stack
## Frontend

- React

- Redux Toolkit (state management)

- TanStack Router (routing & route guards)

- Tailwind CSS (styling)

## Backend

- Node.js

- Express

- MongoDB

- JWT authentication

- nanoid (short URL generation)

# Architecture Highlights

- JWT-based authentication with backend as the source of truth

- Auth state is hydrated on app load via backend token validation

- Route protection implemented using beforeLoad in TanStack Router

- Redux used as a UI cache rather than an authentication authority

- Clean separation of concerns between routing, state management, and API logic

# Core Functionality Flow

1. User submits a long URL (optionally with a custom alias)

2. Backend generates a unique short URL using nanoid (or validates the custom alias)

3. URL mapping is stored in MongoDB

4. Requests to the short URL are redirected to the original URL

5. Authenticated users access protected routes