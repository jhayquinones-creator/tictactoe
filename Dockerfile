FROM nginx:alpine

COPY tictactoe.html /usr/share/nginx/html/index.html
COPY tictactoe.css tictactoe.js pexels-pok-rie-33563-1432669.jpg /usr/share/nginx/html/

EXPOSE 80
