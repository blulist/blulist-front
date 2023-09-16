FROM node:alpine3.18

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && \
    pnpm install

COPY . ./

RUN pnpm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
