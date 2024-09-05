export const Search = ({ toggleModal }) => {
  const handleChange = e => {
    this.props.handleFilter(e.target.value);
  };

  return (
    <>
      <button type="button" onClick={toggleModal}>
        Додати
      </button>

      <form>
        <input type="text" onChange={handleChange} />
      </form>
    </>
  );
};
