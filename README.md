# Twitter Clone



## Prerequisites

- [Node.js](https://nodejs.org/en/) 
- [Pnpm](https://pnpm.io/)

## Clone the repository

```bash
git clone https://github.com/leonelhv/twiter-clone.git
```

## Install dependencies

```bash
pnpm install
```

## Setup environment variables

BACKEND

```bash
MONGO_URI=""
JWT_SECRET=""
NODE_ENV="development"
FRONTEND_URL="http://localhost:5173"
```

FRONTEND

```bash
VITE_API_BASE_URL="http://localhost:3000/api"
VITE_API_ASSETS_URL="http://localhost:3000"
```

## Seed the database
Only for environment development

```bash
POST /api/seeder/users
POST /api/seeder/tweets
```


## Run the project

```bash
pnpm dev
