import React from "react";
import useContentful from "./hooks/useContentful";
import Person from "./components/Person";
import Projects from "./components/Projects";
import "./tailwind.output.css";

const query = `
query {
  person(id: "15jwOBqpxqSAOy2eOO4S0m") {
    name
    title
    github
    twitter
    bio {
      json
    }
    image {
      title
      url(transform: {width:200 })
    }
  }
  projectCollection {
    items {
      name
      slug
      company
      stack
			screenshotsCollection {
        items {
          url
        }
      }
    }
  }
}
`;

function App() {
  const { data, errors } = useContentful(query);

  if (errors) {
    return (
      <span style={{ color: "red " }}>
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  }

  if (!data) {
    return <span> Loading ...</span>;
  }

  console.log({ data });

  return (
    <div className="App">
      <h1>React + contentful (Delivery API)- Graphql</h1>
      {data && (
        <>
          <Person person={data.person} />
          <Projects projects={data.projectCollection.items} />
        </>
      )}
    </div>
  );
}

export default App;
