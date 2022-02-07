# First Stage
FROM node:alpine as build
WORKDIR /app/frontend
COPY /frontend/package*.json .
RUN npm install
COPY /frontend .
RUN npm run build

#Second Stage
#Server
FROM node:latest
WORKDIR /app/backend

COPY --from=build /app/frontend /app/frontend
COPY /backend .
EXPOSE 3001
RUN npm install

CMD ["node", "Server.js"]



