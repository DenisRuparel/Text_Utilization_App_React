# ---------- Builder stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (including dev deps if needed for build)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# If you have a build step (TypeScript, Next.js, etc.)
# RUN npm run build


# ---------- Production stage ----------
FROM node:20-alpine

WORKDIR /app

# Copy only what is needed at runtime
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy built app / source from builder
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "start"]
