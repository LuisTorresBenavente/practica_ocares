FROM node:18-slim
WORKDIR /app
RUN npm install express cors
COPY app.js .
EXPOSE 8080
CMD ["node", "app.js"]
