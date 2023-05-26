import styled from "styled-components";

export const StyledNavbar = styled.div`
  width: 100%;
  position: fixed;
  background-color: ${(props) => (props.navbarBackground ? "white" : "none")};

  .navbarContent {
    display: flex;
    padding: 24px 7.5px;
    align-items: center;
    justify-content: space-between;
  }

  .navbar_btns {
    gap: 15px;
    display: flex;
    align-items: center;
  }
`