  
FROM node:12.18.3-alpine3.9

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . ./

EXPOSE 4000

CMD [ "npm", "start" ]