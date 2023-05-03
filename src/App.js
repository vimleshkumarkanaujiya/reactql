import github from "./db";
import query from "./Query";
import { useEffect, useState } from "react";

function App() {
let [userName, setUserName] = useState("");
useEffect(()=>{
  fetch(github.baseURL, {
    method: "POST",
    headers: github.headers,
    body: JSON.stringify(query)
  })
  .then((response)=>response.json())
  .then((data)=>{
    setUserName(data.data.viewer.name);
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  });
});


  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill">Repos</i>
      </h1>
      <p>
        Hey there, {userName}
      </p>
      </div>
  );
}

export default App;
