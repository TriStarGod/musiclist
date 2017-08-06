import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// export default function Header({ username }) {
//   return (
//     <header>
//       <h1>Music List</h1>
//       <div className="user-menu">
//         <h2>Welcome { username }</h2>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/account/profile/da">Profile</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

export default class Header extends React.Component {
  constructor(props) {
    // super is similar to this.props = props; needed to call 'this' properly
    // in the component
    super(props);
    // Without binding the function, a new version of toggleNavbar is created 
    // every time react re-renders, yet calling toggleNavbar will run an old
    // version of toggleNavbar which no longer exists, throwing an error
    this.toggleNavbar = this.toggleNavbar.bind(this);
    // app state is different from compoent state
    // app state is available to the entire app (ie database)
    // component state is only available to the component (ie nav collapse)
    this.state = { // only place to set state for component
      isOpen: false,
    };
  }
  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <header className="wrapper">
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <NavbarBrand tag={Link} to="/">Music List</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/account/login">Log In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

