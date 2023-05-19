function List({ list }) {
  return (
    <ul style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      {list.map((li, i) => (
        <div className="li" key={i}>
          <p>{li.name}</p>
          <p>{li.surname}</p>
          <p> {li.time}</p>
        </div>
      ))}
    </ul>
  );
}

export default List;
