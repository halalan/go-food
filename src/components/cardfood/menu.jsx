import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Button } from "@material-ui/core";

export default class Klaimresto extends Component {
  render() {
    const { nama, harga, gambar } = this.props.item;
    return (
      <div>
        <Card style={{ width: 280, marginTop: 20, height: 400 }}>
          <CardImg
            top
            width="100%"
            height="200px"
            src={gambar}
            alt="Card image cap"
          />
          <CardBody>
            <h5>{nama}</h5>
            <p>{harga}</p>
            <Button
              style={{
                backgroundColor: "green",

                marginTop: "10% "
              }}
            >
              -
            </Button>
            <Button
              style={{
                backgroundColor: "green",
                marginTop: "10% ",
                marginLeft: "10%"
              }}
            >
              +
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
