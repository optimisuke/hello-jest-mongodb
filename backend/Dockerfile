FROM node:18-slim

RUN npm i npm@latest -g
RUN mkdir /app && chown node:node /app
WORKDIR /app

USER node
COPY --chown=node:node package.json package-lock.json* ./
RUN npm ci && npm cache clean --force
ENV PATH /app/node_modules/.bin:$PATH
