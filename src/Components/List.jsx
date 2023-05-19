function List({ list }) {
  return (
    <ul style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      {list.map((li, i) => (
        <li key={i}>
          {li.name}
          {li.surname}
          {li.time}
        </li>
      ))}
    </ul>
  );
}

export default List;
