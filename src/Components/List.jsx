function List({ list }) {
  return (
    <div>
      <ul>
        {list.map((li, i) => (
          <li key={i}>
            {li.name}
            {li.surname}
            {li.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
