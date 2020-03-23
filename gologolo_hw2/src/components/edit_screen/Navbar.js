import React from 'react'

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <div style={ {cursor: "pointer", 
                position: "absolute",
                left: "85%",
                width: "15%",
                textAlign: "right",
                top: "0%",
                zIndex: 10
              } }
              onClick={this.props.deleteCallback}>&#128465;
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;