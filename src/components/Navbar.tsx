import { Fragment } from "react";
import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ position: "relative", width: "3rem", height: "3rem" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            {" "}
            <img
              src="/cart.svg"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                top: 0,
                left: 0,
                transform: "translate(-20%, -10%)",
              }}
            />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.0rem",
                height: "1.0rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, -10%)",
                fontSize: '0.5em'
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}


export function ResponsiveNavbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return <Fragment>
    <div className="container">
      <div className="">All</div>
    </div>
  </Fragment>
}
