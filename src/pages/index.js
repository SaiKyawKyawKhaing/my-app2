import { useEffect,useState } from "react";
import { useFetchJson } from "../utils/util";

export default function Home() {
  // const data = useFetchJson("/index.json");
  const [data, setData] = useState([]);

  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""; // Needed for GitHub Pages
    fetch(`${basePath}/data.json`) // Use the correct path
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch(console.error);
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>123456789</li>
      </ul>
      <ul>{data.map((u) => <h1 key={u.id}>{u.name} - {u.role}</h1>)}</ul>
    </div>
  );
}
