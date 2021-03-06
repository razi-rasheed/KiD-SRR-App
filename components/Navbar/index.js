import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

// const opener = () => {
//   console.log("hit at navBar");
//   this.props.toggleOpenDrawer(true);
// };

const NavBar = props => (
  <div className={props.classes.root}>

    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={props.classes.menuButton}
          color="secondary"
          aria-label="Menu"
          onClick={() => {
            props.toggleOpenDrawer(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="title"
          color="secondary"
          className={props.classes.flex}
        >
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(NavBar);
