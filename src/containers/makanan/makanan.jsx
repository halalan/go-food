import React, { Component } from "react";
import PageResto from "../../components/pageresto";
import Cardmenu from "../../components/cardfood";
import restorant from "../../utils/restorant";
import { Row, Col, Table, Jumbotron, Container } from "reactstrap";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Makanan extends Component {
  componentWillMount() {
    const data = restorant.find(o => o.id === this.props.match.params.id);
    const tambahqty = data.food.forEach(o => (o.qty = 0));
    console.log(data);
    this.setState({
      foods: data.food
    });
  }

  componentDidMount() {
    console.log(this.state.foods);
  }
  tambah = id => {
    const { foods, orderan } = this.state;
    const fillOrder = orderan.find(item => item.id === id);
    const foodss = foods.find(item => item.id === id);
    this.addPrice(foodss.harga);
    foods.map(o => {
      if (o.id === foodss.id) {
        const updateIntern = (o.qty = foodss.qty + 1);
      }
    });
    if (fillOrder === undefined) {
      const update = {
        ...foodss,
        qty: 1,
        price: foodss.harga
      };
      this.setState({
        orderan: [...orderan, update]
      });

      return;
    }
    if (foodss.id === fillOrder.id) {
      const update = {
        ...fillOrder,
        qty: fillOrder.qty + 1,
        price: fillOrder.price + fillOrder.harga
      };
      this.setState({
        orderan: orderan.map(o => (o.id === fillOrder.id ? update : o))
      });
      return;
    }
  };
  kurang = id => {
    const { orderan, foods } = this.state;
    const fillOrder = orderan.find(item => item.id === id);
    const fillFods = foods.find(item => item.id === id);
    if (fillFods.qty === 0) {
      return;
    } else {
      if (fillOrder.qty === 1) {
        const updateFoods = { ...fillFods, qty: fillFods.qty - 1 };
        this.setState({
          foods: foods.map(o => (o.id === fillFods.id ? updateFoods : o))
        });
        const filterOrder = orderan.filter(item => item.id !== id);
        this.setState({
          orderan: filterOrder
        });
      } else {
        const updateOrders = {
          ...fillOrder,
          qty: fillOrder.qty - 1,
          price: fillOrder.price - fillOrder.harga
        };
        const updateFoods = { ...fillFods, qty: fillFods.qty - 1 };
        this.setState({
          foods: foods.map(o => (o.id === fillFods.id ? updateFoods : o)),
          orderan: orderan.map(o => (o.id === fillOrder.id ? updateOrders : o))
        });
      }
      this.kurangPrice(fillFods.harga);
    }
  };
  addPrice = harga => {
    this.setState({
      total: this.state.total + harga
    });
  };

  kurangPrice = harga => {
    this.setState({
      total: this.state.total - harga
    });
  };

  state = {
    foods: [],
    orderan: [],
    total: 0
  };

  render() {
    return (
      <div>
        <PageResto />
        <Row>
          {this.state.foods.map(item => {
            return (
              <Col sm>
                <Cardmenu
                  nama={item.nama}
                  gambar={item.gambar}
                  harga={item.harga}
                  qty={item.qty}
                  kurang={() => this.kurang(item.id)}
                  tambah={() => this.tambah(item.id)}
                />
              </Col>
            );
          })}
        </Row>
        <div>
          <Jumbotron style={{ marginTop: 30, height: 340 }}>
            <Container fluid>
              <Table>
                <thead>
                  <tr>
                    <th>Makanan</th>
                    <th>Jumlah</th>
                    <th>Total : {this.state.total} </th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.orderan.map(orders => (
                    <tr>
                      <td>{orders.nama}</td>
                      <td>{orders.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button
                style={{ backgroundColor: "green", color: "white" }}
                component={Link}
                to="/terimakasih"
                onClick={this.bayar}
              >
                Bayar Sekarang
              </Button>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
