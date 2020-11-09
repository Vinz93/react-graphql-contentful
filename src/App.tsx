import React, { useEffect, useState } from "react";
import "./App.css";

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
`;

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const { REACT_APP_ACCESS_TOKEN, REACT_APP_SPACE_ID } = process.env;
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${REACT_APP_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    )
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }, []);

  if (!data) {
    return <span> Loading ...</span>;
  }

  return (
    <div className="App">
      <h1>React + contentful (Delivery API)- Graphql</h1>
      {data && (
        <div>
          {/* @ts-ignore */}
          <p>{data?.person?.name}</p>
          {/* @ts-ignore */}
          <p>{data.person.shortBio}</p>
        </div>
      )}
    </div>
  );
}

export default App;
