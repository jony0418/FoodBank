# FoodBank — CLAUDE.md

Inventory and distribution management platform for food banks. Built with a MERN stack and GraphQL, it lets authorized staff track food inventory, record incoming stock (Receive), and log outgoing distributions (Distribute) with quantities automatically recomputed from the full transaction history.

---

## Repository Layout

```
FoodBank/
├── package.json          # Root — concurrently scripts, shared devDeps
├── client/               # React 16 SPA (Create React App)
│   ├── src/
│   │   ├── App.js        # Router, ApolloProvider, ChakraProvider setup
│   │   ├── theme.js      # Chakra UI custom theme (brand colors)
│   │   ├── components/
│   │   │   ├── admin/    # Feature views (Dashboard, Inventory, Distribution…)
│   │   │   ├── auth/     # Login, Register
│   │   │   ├── donations/# Banner, Buttons
│   │   │   ├── layout/   # Header, Sidebar, Footer (shared shell)
│   │   │   └── utils/
│   │   │       ├── auth.js      # AuthService class (JWT in localStorage)
│   │   │       ├── api.js       # REST fetch helpers (inventory/distribution)
│   │   │       ├── mutations.js # Shared GQL mutation strings
│   │   │       └── queries.js   # Shared GQL query strings
│   │   ├── hooks/        # Custom React hooks (forms, report helpers)
│   │   └── pages/        # Route-level page components
└── server/
    ├── server.js         # Express + Apollo Server entry point
    ├── config/
    │   └── connection.js # Mongoose connection (MONGODB_URI env var)
    ├── schemas/
    │   ├── typeDefs.js   # GraphQL SDL
    │   ├── resolver.js   # GraphQL resolvers
    │   └── index.js      # Exports { typeDefs, resolvers }
    ├── models/
    │   ├── User.js       # bcrypt password hashing pre-save hook
    │   ├── Product.js    # name, description, image, quantity, category ref
    │   ├── Category.js   # name, products[] ref
    │   ├── Transaction.js# Embedded product snapshot + operation enum
    │   └── index.js      # Re-exports all models
    ├── controllers/
    │   ├── productController.js     # addProductQuantity / subtractProductQuantity
    │   └── transactionController.js # CRUD + restoreTransaction()
    ├── routes/
    │   ├── index.js      # Mounts /api/distribution and /api/inventory
    │   ├── distribution.js
    │   ├── inventory.js
    │   └── product.js    # (stub, unused)
    ├── utils/
    │   └── auth.js       # JWT sign / authMiddleware for Apollo context
    └── seed/
        └── index.js      # Drop + recreate mock products and transactions
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 16, React Router v6 |
| UI library | Chakra UI v1 (with `framer-motion` v4) |
| Charts | Recharts |
| GraphQL client | Apollo Client v3 |
| Payments (wired, not fully implemented) | Stripe (`@stripe/react-stripe-js`) |
| Backend | Node.js, Express 4 |
| GraphQL server | Apollo Server Express v3 |
| Database | MongoDB via Mongoose 7 |
| Auth | JWT (`jsonwebtoken`) + bcrypt |
| Dev tooling | concurrently, nodemon |

---

## Development Workflow

### Install

```bash
npm run install   # installs both server/ and client/ dependencies
```

### Run (dev mode, both processes)

```bash
npm run develop   # nodemon server + CRA dev server on :3000
```

The client proxies to `http://localhost:3001/` (set in `client/package.json`).

### Run server only

```bash
npm start         # nodemon server/server.js on :3001
```

### Seed the database

```bash
npm run seed      # drops Products + Transactions, inserts mock data
```

### Production build

```bash
npm run build     # builds client/build; Express serves it statically
```

### GraphQL Playground

Available at `http://localhost:3001/graphql` during development (`introspection: true` is set).

---

## Environment Variables

| Variable | Default | Purpose |
|---|---|---|
| `MONGODB_URI` | `mongodb://127.0.0.1:27017/foodbankv1` | MongoDB connection string |
| `PORT` | `3001` | Express listen port |
| `NODE_ENV` | — | Set to `production` to serve client build |

No `.env` file is committed. Create one at the repo root or in `server/` for local overrides.

**Security note:** The JWT secret is currently hardcoded as `'mysecretsshhhhh'` in `server/utils/auth.js:4`. Move it to `process.env.JWT_SECRET` before any non-local deployment.

---

## API Architecture

The app uses **two parallel API layers**:

### GraphQL (`/graphql`)

Used for product and user CRUD. The Apollo context injects the authenticated user via `authMiddleware`.

**Queries:** `me`, `categories`, `category(categoryId)`, `products`, `product(productId)`

**Mutations:** `addUser`, `login`, `addCategory`, `addProduct`, `updateProduct`, `deleteProduct`

### REST (`/api/…`)

Used exclusively for Transactions (inventory receives and distribution events):

| Method | Path | Action |
|---|---|---|
| GET | `/api/inventory/` | List all transactions |
| POST | `/api/inventory/` | Create Receive transaction + restoreTransaction |
| PUT | `/api/inventory/:id` | Update transaction + restoreTransaction |
| GET | `/api/distribution/` | List all transactions |
| POST | `/api/distribution/` | Create Distribute transaction + restoreTransaction |
| PUT | `/api/distribution/:id` | Update transaction + restoreTransaction |

### Transaction Restoration Pattern

Product quantities are **not stored as a live counter**. After every write, `restoreTransaction()` runs:

1. Resets all Product quantities to `0`.
2. Replays every Transaction in order, adding or subtracting `product.quantity * unit` per product snapshot embedded in the transaction.

This makes quantity always derivable from the full transaction log at the cost of O(transactions × products) on every write. Keep this in mind when adding new transaction types or optimizing performance.

---

## Data Models

### User
- `username` (unique), `email` (unique, validated), `password` (bcrypt hashed pre-save)
- Custom method `isCorrectPassword(plain)` for login

### Product
- `name` (required, trimmed), `description`, `image` (URL string), `quantity` (Number, default 0), `category` (ObjectId ref)
- `timestamps: true`

### Category
- `name` (required, trimmed), `products` ([ObjectId refs to Product])

### Transaction
- `product` — array of **embedded Product schema snapshots** (not refs), so historical state is preserved
- `transaction_date` (Date, default now), `purpose` (String), `unit` (Number), `batchSize` (String)
- `operation` — enum `'Receive' | 'Distribute'`
- `timestamps: true`

---

## Frontend Conventions

### Page Layout Shell

Every page follows this pattern:

```jsx
<Flex direction="column" minHeight="100vh">
  <Header />
  <Flex as="main" flex="1" p={4}>
    <Sidebar />
    <Box flex="1" ml={4} p={5} bg={bg} borderRadius="md">
      {/* page content */}
    </Box>
  </Flex>
  <Footer />
</Flex>
```

### Color Mode

Always use `useColorModeValue` for colors so light/dark mode works:

```js
const bg = useColorModeValue("gray.100", "gray.800");
const color = useColorModeValue("gray.700", "gray.200");
```

### Brand Colors (theme.js)

| Token | Hex |
|---|---|
| `primary` | `#E2E8F0` (light gray) |
| `secondary` | `#D20428` (red) |
| `tertiary` | `#F7BD00` (yellow) |
| `quaternary` | `#FFFFFF` (white) |

### Authentication

`AuthService` (`client/src/components/utils/auth.js`) is a singleton managing the JWT:
- Token stored under `localStorage` key `id_token`
- `Auth.loggedIn()` checks existence and expiry
- `Auth.login(token)` / `Auth.logout()` set/remove the token
- Apollo Client reads `id_token` and sends it as `Authorization: Bearer <token>` on every request

### GraphQL Mutations / Queries

Shared GQL strings live in `client/src/components/utils/mutations.js` and `queries.js`. Several page components also define their own inline `gql` strings — prefer importing from utils to avoid duplication.

**Note:** `UPDATE_PRODUCT_QUANTITY` and `CREATE_TRANSACTION` exported from `mutations.js` do not exist in the server `typeDefs` and will fail at runtime. Do not use them.

### REST API Helpers

`client/src/components/utils/api.js` exports `sendDataDistribution`, `sendDataInventory`, `getDataInventory`, `getDataDistribution`. There is a URL swap bug: `getDataInventory` actually fetches from the distribution endpoint and vice versa. Fix before relying on these for reads.

---

## Known Issues / Technical Debt

1. **Hardcoded JWT secret** — `server/utils/auth.js:4`. Must be an env var before production.
2. **`productlist.js` variable hoisting bug** — `products` is referenced before `data` is destructured from `useQuery`. This causes a runtime error on render. Move the `useQuery` call above the `products` line.
3. **Unused/stub mutations** — `findproduct`, `UPDATE_PRODUCT_QUANTITY`, `CREATE_TRANSACTION` in `mutations.js` reference fields or operations not in `typeDefs`.
4. **`additem.js` category input** — The category text input captures a freeform string but `addProduct` expects a `categoryId` (ObjectId). The category name is silently ignored on submit.
5. **REST URL swap** — `getDataInventory` calls the distribution URL and `getDataDistribution` calls the inventory URL in `api.js`.
6. **`DistributionReportH.js` / `FormDistribition.js`** — These hooks contain static/placeholder data and are not wired to the live API.
7. **Output route commented out in Sidebar** — The `/output` route and page exist but the sidebar link is commented out.
8. **`product.js` route** — The route file is empty (no handlers registered).

---

## Routing (client-side)

| Path | Component | Auth required |
|---|---|---|
| `/` | Login | No |
| `/register` | Register | No |
| `/dashboard` | Dashboard | Yes (implicit) |
| `/inventory` | InventoryManagement | Yes |
| `/distribution` | DistributionManagement | Yes |
| `/productlist` | ProductList | Yes |
| `/additem` | AddItem | Yes |
| `/modifyitem` | ModifyItem | Yes |
| `/modifyitem/:productId` | ModifyItem | Yes |
| `/inputs` | Input | Yes |
| `/output` | Output | Yes |
| `/BoM` | DistributionRequest | Yes |
| `/distributionreport` | DistributionReportPage | Yes |
| `/privacy` | PrivacyPolicy | No |
| `/terms` | TermsOfService | No |
| `/aboutus` | AboutUs | No |

Route protection is done manually per component by checking `Auth.loggedIn()` — there is no shared `<ProtectedRoute>` wrapper.

---

## Adding New Features

### New product field
1. Add field to `server/models/Product.js` schema.
2. Add to `typeDefs.js` under `type Product` and any relevant Query/Mutation args.
3. Update resolver in `resolver.js`.
4. Update client queries/mutations in `utils/queries.js` / `utils/mutations.js`.

### New transaction type (beyond Receive/Distribute)
1. Add the value to the `operation` enum in `server/models/Transaction.js`.
2. Add a new route in `server/routes/` that calls `addTransaction(req, res, 'NewType')`.
3. Mount the route in `server/routes/index.js`.
4. Update `restoreTransaction()` in `transactionController.js` to handle the new operation.

### New page
1. Create the component in `client/src/pages/`.
2. Register a `<Route>` in `client/src/App.js`.
3. Add a sidebar icon/link in `client/src/components/layout/Sidebar.js` if it should appear in navigation.
4. Follow the Header/Sidebar/Footer shell pattern.
