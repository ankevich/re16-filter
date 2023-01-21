import styled from "styled-components";

const Toolbar = ({ filters, selectedFilterName, onSelectFilter }) => {
  return (
    <>
      {filters.map((filter) => (
        <Button selected={filter === selectedFilterName}>{filter}</Button>
      ))}
    </>
  );
};

const Button = styled.button`
  background: ${(props) => (props.selected ? "#708090" : "transparent")};
  border: 1px solid #708090;
  color: ${(props) => (props.selected ? "#fff" : "#4f5f6f")};
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #708090;
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.95);
  }

  &:last-child {
    margin-right: 0;
  }

  &.active {
    background: #000;
    color: #fff;
  }
`;

export default Toolbar;
