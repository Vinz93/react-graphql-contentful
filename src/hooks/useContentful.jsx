import { useEffect, useState } from "react";

const useContentful = (query, isPreview) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    const {
      REACT_APP_ACCESS_TOKEN,
      REACT_APP_SPACE_ID,
      REACT_APP_PREVIEW_TOKEN,
    } = process.env;
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${
            isPreview ? REACT_APP_PREVIEW_TOKEN : REACT_APP_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query, variables: { isPreview } }),
      }
    )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) setErrors(errors);
        if (data) setData(data);
      })
      .catch((error) => setErrors([error]));
  }, [query, isPreview]);

  return { data, errors };
};

export default useContentful;
