import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant="h6" color="green" className={classes.grow}>
            <Link to="/">
              <img
                style={{ width: 30, marginTop: 30 }}
                src="https://image.flaticon.com/icons/svg/131/131068.svg"
              />
            </Link>
            <center>
              {" "}
              <img
                tag={Link}
                to="/home"
                style={{ width: 150, marginTop: -50 }}
                src="https://wirodat.files.wordpress.com/2018/02/go-resto-by.png?w=880&h=312&crop=1"
              />
            </center>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
