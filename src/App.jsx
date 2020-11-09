import React from "react";
import useContentful from "./hooks/useContentful";
import Person from "./components/Person";
import Projects from "./components/Projects";
import "./tailwind.output.css";

const query = `
query ($isPreview: Boolean = false) {
  person(id: "15jwOBqpxqSAOy2eOO4S0m", preview: $isPreview) {
    name
    title
    github
    twitter
    bio {
      json
    }
    image {
      title
      url(transform: {width: 200})
    }
  }
  projectCollection(limit: 20) {
    items {
      ...projectFields
    }
  }
}

fragment projectFields on Project {
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
`;

const IS_PREVIEW = true;

function App() {
  const { data, errors } = useContentful(query, IS_PREVIEW);

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
