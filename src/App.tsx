import React from 'react';
import './App.css';

const query = `
query {
  person(id:"15jwOBqpxqSAOy2eOO4S0m") {
    name
    shortBio
  }
  productCollection (where: { price_lte: 40 }) {
    total
    items {
      commonName
      price
    }
  }
}
`

function App() {
  fetch(`https://graphql.contentful.com/content/v1/spaces/u7a44gonzwk8/?access_token=P3vWnkLS98iN1fzTqXRfE_7sh4EKgeOpHJ5arTIQK5Y`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ query })
  })
  .then(response => response.json())
  .then(json => console.log(json.data));

  return (
    <div className="App">
      <h1>React + contentful (Delivery API)- Graphql</h1>
    </div>
  );
}

export default App;
