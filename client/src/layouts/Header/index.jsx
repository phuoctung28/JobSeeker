import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";
import classes from "./Header.module.scss";
export const Header = () => {
  let navigate = useNavigate();
    const { user } = useContext(AuthContext);
  const onLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {!!user ? (
        <header>
          <Navbar expand="lg" className={classes.header}>
            <Container>
              <Navbar.Brand href="/">
                {" "}
                <img
                  src="/logo-fpt-login.png"
                  width="339px"
                  height="75px"
                  className="d-inline-block align-middle"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-center">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/job">Jobs</Nav.Link>
                  <Nav.Link href="/company">Company</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Brand className={classes.dropdown}>
                <img
                  src="/icons8-circled-user-male-skin-type-4-48.png"
                  alt=""
                />
                <div className={classes.content}>
                  <div onClick={onLogout}>Log out</div>
                </div>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
      ) : <></>}
    </>
  );
};
