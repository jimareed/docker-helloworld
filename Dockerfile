FROM node
ADD . /src
RUN cd /src; npm install
EXPOSE 8080
CMD ["node", "/src/index.js"]