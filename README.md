# Cross-Origin Auth Frontend

This repository contains the **front-end** part of a project built with **Vite.js**.  
It is designed to communicate securely with an external **API hosted on a different origin** (domain, port, or protocol). The link of the API repo is [here](https://github.com/alanakra/docker-php-auth)

## Environment

- **Front-end:** https://demo-register-client.local:5173  
- **Back-end (API):** http://demo-register-server.local:8080/

This architecture is considered **cross-site**, since both the client and server use different hostnames and ports.


<!-- ## About the Cross-site Context

This setup is called a **cross-site (or cross-origin)** configuration — meaning the front-end and back-end run on different origins.  
Although “cross-site” can sound risky, it is a **common and secure pattern** when properly configured using:
- `SameSite=None; Secure` cookies
- `Access-Control-Allow-Origin` set to the front-end URL
- `Access-Control-Allow-Credentials: true` on the server

These settings allow the browser to exchange authentication cookies safely between the client and the API. -->

## Tech Stack

- [Vite.js](https://vitejs.dev/)
- Secure cross-origin communication via HTTPS and CORS (Coming soon)

## Setting up Custom Domains (Localhost)

To make your local development setup more realistic and modular, you can serve your apps using **custom local domains** such as:
- `demo-register-client.local`
- `demo-register-server.local`

### 1. Edit your `hosts` file
Map these domains to your local IP address (`127.0.0.1`).

#### On Windows:
Edit the file located at: `C:\Windows\System32\drivers\etc\hosts`

Add:

`127.0.0.1 demo-register-client.local`
`127.0.0.1 demo-register-server.local`


#### On macOS / Linux:
Edit `/etc/hosts` (requires `sudo`):

`127.0.0.1 demo-register-client.local`
`127.0.0.1 demo-register-server.local`

### 2. Start your front-end and back-end

Then access your applications via:

`https://demo-register-client.local:5173`

`http://demo-register-server.local:8080`

Your browser will now treat them as separate origins — ideal for testing CORS and cookie behavior.

# Getting Started

## Install dependencies
`pnpm install`

## Run the development server
`pnpm run dev`

Then open http://demo-register-client.local:5173 in your browser.

Ensure your API is accessible from http://demo-register-server.local:8080/.