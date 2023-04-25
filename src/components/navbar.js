import './navbar.css'
const { Component } = require("react");

class Navbar extends Component {
  state = {clicked: false};
  render() {

const handleclick=()=>{
   this.setState({clicked: !this.state.clicked});
}
   
    const navicons = [
      {
        name: "Home",
        icon: "fa fa-home",
        cssclass: "navmenu"
      },
      {
        name: "About",
        icon: "fa fa-info-circle",
        cssclass: "navmenu"
      },
      {
        name: "Services",
        icon: "fa fa-suitcase",
        cssclass: "navmenu"
      },
      {
        name: "Contact us",
        icon: "fa fa-phone",
        cssclass: "navmenu"
      },

      {
        name: "Sign-up",
        icon: "fa fa-phone",
        cssclass: "navmenu"
      }


    ];

    return (
      <div className="navbarbox">
        <h1 >Ticket-Easy</h1>
        <div className='hamburger' onClick={handleclick}>
          <i className={this.state.clicked? "fa fa-times":"fa fa-bars"}>

          </i>
        </div>
        <ul className={this.state.clicked? "navitems active":"navitems"}>
          {navicons.map((info, index) => {
            return (
              <>
                <li key={index} className={info.cssclass}>
                  <a href='#'>

                  <i className={info.icon} aria-hidden="true"></i>
                  {info.name}
                  </a>
                </li>
              </>
            );
          })}
    
        </ul>
      </div>
    )
  }
}

export default Navbar;
