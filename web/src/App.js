import React from 'react';
import './App.css';
function App() {
  return (
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>File Send</title>
      </head>

      <body>
        <p>Choose the file answer.json</p>
        <form
          action="https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=f5789a263b1b2077ac494c5d7a60c4ae744360cd"
          method="post"
          enctype="multipart/form-data"
        >
        <input type="file" name="answer" /><br />
        <button>Send</button><br />
        </form>
      </body>
    </html>
  );
}

export default App;