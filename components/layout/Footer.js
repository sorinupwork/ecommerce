import styled from "styled-components";

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <FooterStyled>
      <p> 🐈 🐶 Pet Shop &copy; {date}</p>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  background-color: #004594;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: auto;

  p {
    color: #e9edf2;
  }
`;
