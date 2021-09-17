FROM node:14.17.6-alpine3.11

WORKDIR /app/back

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]