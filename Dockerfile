# syntax=docker/dockerfile:1
   
FROM node:14.16.0-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

COPY . ./
CMD ["npm", "run", "dev"]
