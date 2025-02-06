import { useState, useEffect } from "react";

export function useFetchJson(jsonPath) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(jsonPath).then(r => r.json()).then(setData).catch(console.error);
  }, [jsonPath]);

  return data;
}


