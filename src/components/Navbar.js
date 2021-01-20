import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavlayoutStyle>
      <h1>future of react</h1>
      <LinkStyle>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <Link to="/register">
            <RegisterNowButtonStyle>Register</RegisterNowButtonStyle>
          </Link>
        </ul>
      </LinkStyle>
    </NavlayoutStyle>
  );
};

const NavlayoutStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  h1 {
    font-family: "Dancing Script", cursive;
    background-color: #61dafb;
    transform: rotate(-4deg);
  }
`;

const LinkStyle = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    li {
      padding: 0 1rem;
    }
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;

const RegisterNowButtonStyle = styled.button`
  margin-left: 2rem;
  background-color: #61dafb;
  color: #000;
  padding: 0.8rem 1.2rem;
  font-size: 25px;
  border-radius: 10px;
  transition: transform 0.2s ease;
  border: 0;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Navbar;
