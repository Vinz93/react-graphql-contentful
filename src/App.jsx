import React from "react";
import useContentful from "./hooks/useContentful";
import Person from "./components/Person";
import "./tailwind.output.css";

const query = `
query {
  person(id: "15jwOBqpxqSAOy2eOO4S0m") {
    name
    title
    github
    twitter
    image {
      title
      url(transform: {width:300 })
    }
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
  const { data, errors } = useContentful(query);

  if (errors) {
  return <span style={{ color: "red " }}>{errors.map(error => error.message).join(",")}</span>
  }

  if (!data) {
    return <span> Loading ...</span>;
  }

  return (
    <div className="App">
      <h1>React + contentful (Delivery API)- Graphql</h1>
      {data && (
        <Person person={data.person}/>
      )}
    </div>
  );
}

export default App;
