import { useEffect,useState } from "react";
import { useFetchJson } from "../utils/util";

export default function Home() {
  // const data = useFetchJson("/index.json");
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch("/data.json")
          .then((response) => response.json())
          .then((result) => setData(result));
          console.log("DDDD",data)
  }, []); // Runs only once on mount
  return (
    <div>
      <h1>Users</h1>
      <ul>{data.map((u) => <li key={u.id}>{u.name} - {u.role}</li>)}</ul>
    </div>
  );
}
