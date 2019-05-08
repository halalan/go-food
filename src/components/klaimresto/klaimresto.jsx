import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default class Klaimresto extends Component {
  render() {
    const { id, nama, lokasi, gambar } = this.props.item;

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
            <p>{lokasi}</p>
            <Link tag={Link} to={`/resto/${id}`}>
              <Button style={{ backgroundColor: "green", marginTop: "15%" }}>
                pesan Makanan
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}
