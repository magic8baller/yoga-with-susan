/** @jsx jsx */
import React, {Component} from "react";
import { Styled, jsx} from 'theme-ui'
import ToogleMode from './ToggleMode'
import { Link } from 'gatsby'



class NavMenu extends Component {

  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }


  navOnScroll = () => { 
    if (window.scrollY > 30 ) {
      this.setState({scrolled: true})
    } else {
      this.setState({scrolled: false})
    }
  }
  
  render() {
    const { scrolled } = this.state
    // const { menuLinks } = 
    const { siteTitle } = this.props
    const menuLinks = [
      {
        name: "Bio",
        url: "/about"
      },
      {
        name: "Classes",
        url: "/schedule"
      },
      {
        name: "Blog",
        url: "/blog"
      },
      {
        name: "Contact",
        url: "/contact"
      }
    ];

    let shadow = `none`;
    if( scrolled === true ) { 
      shadow = `1px 2px 10px rgba(0, 0, 0, 0.4)`
    }

    return (
      <nav>
        <Styled
          sx={{
            position: `fixed`,
            width: "100%",
            top: 0,
            left: 0,
            height: `60px`,
            backgroundColor: `background`,
            boxShadow: shadow,
            m: `auto`,
            zIndex: 100,
          }}
        >
          <div
            sx={{
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `center`,
              maxWidth: 710,
              m: "auto",
              mt: `18px`,
              px: 2
            }}
          >
            <Link to="/" sx={{textDecoration: `none`, color: `primary`}}>
              <div>Yoga with Susan Turis</div>
            </Link>
            <div style={{ display: `flex`, alignItems: `center` }}>
              {menuLinks.map(link => {
                return (
                  <Styled.h3
                    key={link.url}
                    as={Link}
                    to={link.url}
                    sx={{ mr: "10px", textDecoration: `none`, color: `primary` }}
                  >
                    {link.name}
                  </Styled.h3>
                );
              })}
              <ToogleMode />
            </div>
          </div>
        </Styled>
      </nav>
    );
  }
}

export default NavMenu;
