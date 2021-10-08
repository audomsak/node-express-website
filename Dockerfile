FROM node:16-alpine
COPY . /usr/src/app
EXPOSE 8080

WORKDIR /usr/src/app
RUN ["npm", "install"]
ENTRYPOINT ["npm", "start"]
