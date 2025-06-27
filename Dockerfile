# syntax=docker/dockerfile:1
   
# FROM node:14.16.0-alpine

# WORKDIR /app

# COPY package.json ./
# COPY package-lock.json ./

# RUN npm install --silent
# RUN npm install react-scripts@5.0.1 -g --silent

# COPY . ./
# CMD ["npm", "run", "dev"]


##$## Multi stage docker container
FROM node:22-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install --silent

COPY . ./
RUN npm run build

# ---------- Final Stage ----------
FROM node:22-alpine

WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve --silent

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
