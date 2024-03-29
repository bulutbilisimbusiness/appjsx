import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md" className="mb-5"> 
                    <NavbarBrand tag={Link} to="/" style={{ fontWeight: 'bold' }}>Sepet App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ms-auto" navbar> 
                            <NavItem>
                                <NavLink tag={Link} to="/saveproduct" style={{ fontWeight: 'bold' }}>Ürün Ekle</NavLink>
                            </NavItem>
                            
                            <CartSummary />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
