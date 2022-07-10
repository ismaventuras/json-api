FROM node:16-alpine

# app directory
WORKDIR /usr/src/app
# copy package json and install dependencies
COPY package*.json ./
RUN npm install

COPY . . 

EXPOSE 3000

cmd ["node","."]