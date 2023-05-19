import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [time, setTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [list, setList] = useState([]);

  const formHandler = () => {
    setList((li) => [...li, { name, surname, time, purpose }]);
    setSurname("");
    setTime("");
    setName("");
    setPurpose("");
  };

  return (
    <div className="App">
      <h1 style={{ margin: "50px" }}>Please make doctor's appointment</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        <Form
          name={name}
          setName={setName}
          surname={surname}
          setSurname={setSurname}
          time={time}
          setList={setList}
          setTime={setTime}
          purpose={purpose}
          setPurpose={setPurpose}
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
