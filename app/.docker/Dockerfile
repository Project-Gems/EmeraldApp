FROM node:20
USER node

COPY --chown=node:node .env /kewi/app/.env
COPY --chown=node:node ./app /kewi/app

WORKDIR /kewi/app

RUN npm install && npm run build