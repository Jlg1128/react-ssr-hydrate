
import React from "react";
import express from "express";
import { renderToPipeableStream } from 'react-dom/server';
import App from "./api/components/App.js";
const app = new express();
const { Writable } = require('stream');

app.use('/static', express.static('dist'))

app.use('/home', (request, response) => {
  const { pipe, abort } = renderToPipeableStream(<App />, {
    bootstrapScripts: ['/static/main.js'],
    onShellReady() {
      console.log('shell ready');
      response.setHeader('content-type', 'text/html');
      // Create a custom Writable stream to intercept the output
      const writable = new Writable({
        write(chunk, encoding, callback) {
          console.log('chunk☹️☹️☹️☹️', chunk.toString()); // Print chunk data
          response.write(chunk, encoding, callback);
        },
        final(callback) {
          response.end();
          callback();
        }
      });

      // Pipe the response to our custom Writable
      pipe(writable);
    }
  });
});
app.listen(3001, () => { console.log('listening at 3001') })
