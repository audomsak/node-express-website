FROM node:16-alpine
COPY . /usr/src/app
EXPOSE 8080

RUN addgroup -g 1001 appuser \
    && adduser -G appuser -u 1001 -D appuser \
    && chown -R appuser:appuser /usr/src
    
WORKDIR /usr/src/app
RUN ["npm", "install"]
ENTRYPOINT ["npm", "start"]
