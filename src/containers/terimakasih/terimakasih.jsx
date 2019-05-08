import React, { Component } from "react";
import Pageresto from "../../components/pageresto";
import CardSelesai from "../../components/selesai/cardSelesai";
import { Row, Col } from "reactstrap";

export default class dashselesai extends Component {
  componentWillMount() {
    const getTotal = sessionStorage.getItem("total");
    const getOrder = sessionStorage.getItem("order");
    const convertTotal = JSON.parse(getTotal);
    const convertOrder = JSON.parse(getOrder);
    console.log(convertOrder);
    this.setState({
      order: convertOrder,
      total: convertTotal
    });
  }

  state = {
    order: [],
    total: 0
  };
  render() {
    const { total } = this.props;
    return (
      <div>
        <Pageresto />
        <div>
          <Row>
            {this.state.order.map(item => {
              return (
                <Col sm>
                  <CardSelesai
                    nama={item.nama}
                    harga={item.harga}
                    gambar={item.gambar}
                    qty={item.qty}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}
