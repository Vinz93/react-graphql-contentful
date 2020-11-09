import React from "react";
import useContentful from "./hooks/useContentful";
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
  const { data } = useContentful(query);
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
