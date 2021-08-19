FROM node:16.6.2

RUN mkdir -p  /usr/src/app
# Create app directory
WORKDIR /usr/src/app

# COPY package.json .
# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

# Start Node server
CMD [ "npm", "run", "dev" ]