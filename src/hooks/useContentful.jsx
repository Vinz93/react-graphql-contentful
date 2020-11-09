import { useEffect, useState } from "react";

const useContentful = (query) => {
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
    }, [query]);
    
    return { data }
}

export default useContentful;