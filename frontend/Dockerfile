FROM node

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install
# RUN yarn install

EXPOSE 3000
CMD ["npm", "start"]
