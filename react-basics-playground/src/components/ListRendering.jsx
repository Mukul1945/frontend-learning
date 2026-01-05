const ListRendering = () => {
  const items = ["React", "Vue", "Angular"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default ListRendering;
