FROM node:14

WORKDIR /app

COPY . .

RUN ["yarn"]
RUN ["yarn", "build"]

CMD ["yarn", "db:setup"]
CMD ["yarn", "start", "resources/sample-config.json"]
