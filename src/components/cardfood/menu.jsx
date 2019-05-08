import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Button } from "@material-ui/core";

export default class Klaimresto extends Component {
  render() {
    const { id, nama, harga, gambar, jumlah, qty } = this.props;
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
            <p> Harga:{harga}</p>
            <h1>{qty}</h1>
            <h1>{jumlah}</h1>

            <Button
              onClick={this.props.kurang}
              style={{
                backgroundColor: "green",

                marginTop: "2% "
              }}
            >
              -
            </Button>
            <Button
              onClick={this.props.tambah}
              style={{
                backgroundColor: "green",
                marginTop: "2% ",
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
