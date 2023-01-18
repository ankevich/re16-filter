const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <>
      {filters.map((filter) => (
        <button>{filter}</button>
      ))}
    </>
  );
};

export default Toolbar;
