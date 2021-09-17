FROM node:14.17.6-alpine3.11

WORKDIR /app/front-end

RUN apk update && apk upgrade

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

ENV APP_ENV="development"
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV hostDomain="localhost"

CMD [ "npm" ,"run" ,"dev" ]

