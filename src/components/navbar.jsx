import React, { Component } from "react";

// stateless functional component - Can use SFC or class, personal pereference
// must add props as a parameter
// remove any instances of `this` from within the return()

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Shopping Cart{" "}
          <span className="badge badge-pill badge-success">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar bg-light">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   };

export default NavBar;
