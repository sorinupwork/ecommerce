import styled from "styled-components";

const ListItem = (props) => {
  console.log("props are", props);
  const { itemTitle, rawTitle } = props;
  return (
    <StyledItem>
      <div className="menuSubmenu">
        <div className="noBrandItem">
          <p>{itemTitle}</p>
        </div>
      </div>
    </StyledItem>
  );
};

export default ListItem;

const StyledItem = styled.div``;
