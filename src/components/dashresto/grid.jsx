import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid style={{ marginTop: 50 }} container spacing={40}>
        <Grid style={{ marginLeft: 22 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ height: 150, width: 250 }}
              src="http://images1.prokal.co/websampit/files/berita/2016/09/06/malas-keluar-rumah-panggil-gofood-saja.jpg"
            />
            <br />
            <Link to="/resto">
              <Button style={{ marginTop: 70, backgroundColor: "green" }}>
                klaim Restoran
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ height: 150, width: 250 }}
              src="https://cms.dailysocial.id/wp-content/uploads/2019/03/e09ef8ef15db5e4af348cff0c5873ef6_5cc4a0a8254cc196fa21a0d0523b4c70_Gojek.jpg"
            />
            <br />
            <Link to="/resto">
              <Button style={{ marginTop: 70, backgroundColor: "green" }}>
                klaim Restoran
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid style={{ marginLeft: 22 }}>
          <Paper style={{ height: 300 }} className={classes.paper}>
            <img
              style={{ height: 150, width: 250 }}
              src="https://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/C7402FAC6A5143758F0C82FB7B319336/grabfood-feature-image.jpg"
            />
            <br />
            <Link to="/resto">
              <Button style={{ marginTop: 70, backgroundColor: "green" }}>
                klaim Restoran
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
