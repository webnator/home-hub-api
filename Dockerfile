FROM node:8.2
WORKDIR /usr/src/app
# COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json .
RUN npm install
COPY . .
EXPOSE 9000
CMD [ "npm", "start" ]