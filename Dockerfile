FROM node:8.9

WORKDIR /app
COPY . .
RUN npm install -g npm
RUN npm install -g yarn
RUN yarn install

