import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [time, setTime] = useState("");
  const [list, setList] = useState([]);

  const formHandler = () => {
    setList((li) => [...li, { name, surname, time }]);
    setSurname("");
    setTime("");
    setName("");
  };

  return (
    <div className="App">
      <h1>Please make doctor's appointment</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Form
          name={name}
          setName={setName}
          surname={surname}
          setSurname={setSurname}
          time={time}
          setList={setList}
          setTime={setTime}
        />
        <button className="btn" onClick={formHandler}>
          Submit
        </button>
      </div>
      <List list={list} />
    </div>
  );
}

export default App;
