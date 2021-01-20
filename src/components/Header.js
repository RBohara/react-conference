import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderSectionStyle>
      <h1>Future of react conference</h1>
      <p>Let's dive into React and what the future of react holds.</p>
      <p>With amazing line of speakers!!!</p>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </HeaderSectionStyle>
  );
};

const HeaderSectionStyle = styled.section`
  margin-top: 1.5rem;
  background-color: #282c34;
  text-align: center;
  color: #fff;
  padding: 2rem;
  font-size: 25px;
  border-radius: 10px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  h1 {
    margin: auto;
    color: #61dafb;
  }
  p {
    margin-top: 1.5rem;
  }
  button {
    background-color: #61dafb;
    margin-top: 3rem;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    font-size: 30px;
    transform: scale(1.1);
    transition: transform 0.3s ease-out;
    outline: none;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default Header;
