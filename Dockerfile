FROM node:12
COPY . /usr/src/app
EXPOSE 80

WORKDIR /usr/src/app
RUN ["npm", "install"]
ENTRYPOINT ["npm", "start"]
