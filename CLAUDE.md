# GroviaTech Payment Frontend

## 1. Project Identity

This repository is the **GroviaTech reusable white-label payment frontend** — a
single, reusable React application designed to render a branded fee/payment
page for many different client businesses (schools, gyms, sports academies,
coaching centres, dance/music academies, yoga studios, etc.) without
per-client code changes.

- **First demo:** Little Bridge School, served at `/demo/little-bridge`.
- The page must look like it belongs to the client business, not to
  GroviaTech. See "Product direction" below.

## 2. Current Technology

- **React** 19 (functional components, hooks only — no class components)
- **Vite** 8 (build tool and dev server)
- **Node 22** — pinned via `.nvmrc` and `netlify.toml` (`NODE_VERSION = "22"`)
- **Netlify** — static hosting; `netlify.toml` defines `command = "npm run build"`,
  `publish = "dist"`, and a catch-all SPA redirect (`/* -> /index.html`, status 200)
- **GitHub** — source of truth; `main` is the deployed branch

No backend framework, database, or server runtime is part of this repo. This
is a static, client-rendered frontend only.

## 3. Product Direction

- This is a **white-label** client-facing payment experience. The client's
  business name and page title (e.g. "Little Bridge School" / "Fee Payment")
  are the primary visual identity.
- A small, subtle **"Powered by GroviaTech"** footer is the only GroviaTech
  branding on the page. It must never be dominant, sized/colored to compete
  with the client identity, or moved to a prominent position.
- **Current route:** `/demo/little-bridge` — a hardcoded demo dataset,
  resolved client-side in `src/data/paymentData.js` via
  `getDemoPaymentData(slug)`.
- **Future route (not yet implemented):** `/pay/<secure-token>` — intended to
  resolve a payment page from a secure, server-issued token instead of a
  hardcoded slug. The architecture already reserves this route
  (`getPaymentDataByToken(token)` in `src/data/paymentData.js`, wired in
  `src/App.jsx`) but it currently only returns `null` and renders a
  "coming soon" placeholder. Implementing this for real requires a backend
  and is out of scope until explicitly approved.
- Routing is intentionally a small dependency-free path matcher in
  `src/App.jsx`, not React Router — there are only two route shapes today.
  Reassess this decision (and get approval) only if the route surface grows
  meaningfully beyond `/demo/:slug` and `/pay/:token`.
- Page content is driven by a single demo-data object per business
  (`businessName`, `pageTitle`, `parentName`, `studentName`, `amount`,
  `currency`, `dueDate`, `paymentStatus`, `mode`) — never hardcode customer
  data inside UI components. `mode: "demo"` gates any "no real payment" UI
  behavior and must be preserved as the switch point for a future live mode.

## 4. Safety Constraints

These are hard constraints, not defaults to be quietly relaxed:

- **No real payment processing** of any kind unless explicitly approved by
  the user in the conversation.
- **No Razorpay, no other payment SDK, no payment gateway API integration**
  unless explicitly approved by the user in the conversation.
- **Never add or commit secrets, API keys, tokens, or credentials** —
  including placeholder-looking values that could be mistaken for real ones.
  This app has no `.env` usage and no server-side code; keep it that way
  unless a real integration is explicitly approved.
- **Never invent customer, contact, or payment information** (phone numbers,
  emails, addresses, UPI IDs, bank details, etc.). If the UI needs a value
  that hasn't been supplied, use a clearly marked placeholder or a disabled
  control with an explanatory tooltip — do not fabricate real-looking data.
- **Do not change infrastructure architecture** (hosting provider, build
  pipeline, routing strategy, adding a backend, adding a router library,
  etc.) without explicit approval, even if it looks like an improvement.

## 5. Development Workflow

- **Inspect before modifying.** Read the current file(s), current
  `package.json`/`package-lock.json` versions, and current git state before
  changing anything — do not assume prior context is still accurate.
- **Make the smallest appropriate change.** Do not refactor, redesign, or
  add abstractions beyond what the current task requires.
- **Avoid unnecessary dependencies.** Do not install a package (including
  React Router) unless it is genuinely necessary for the task — and explain
  why before adding it.
- **Run lint and build after implementation:**
  ```
  npm run lint
  npm run build
  ```
- **Review `git diff` and `git status`** before reporting a task complete,
  to confirm only the intended files changed.
- **Never commit or push unless explicitly authorized** in that turn. A
  prior approval to commit/push does not carry forward to future changes.

## 6. Required Task Handoff

At the end of every implementation task, report:

- **Objective** — what was asked
- **What changed** — a short description of the actual change
- **Files changed** — explicit list (created/modified/deleted)
- **Important decisions** — any judgment calls made and why
- **Commands executed** — what was actually run
- **Lint/test/build results** — pass/fail and relevant output
- **Git status** — current working tree state
- **Commit/push status** — explicitly state that nothing was committed/pushed
  unless authorized, or confirm the exact commit hash/branch if it was
- **Warnings/issues** — anything found that deviates from spec, is risky, or
  is incomplete
- **Items requiring approval** — anything that needs a decision before
  proceeding (e.g. a new dependency, a route/architecture change, enabling
  real payments)
