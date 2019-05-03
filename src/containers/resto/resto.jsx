import React, { Component } from "react";
import Klaimresto from "../../components/klaimresto/klaimresto";
import PageResto from "../../components/pageresto";
import Restorant from "../../utils/restorant";
import { Row, Col } from "reactstrap";

export default class Resto extends Component {
  state = {
    makanan: []
  };

  componentDidMount() {
    this.setState({
      makanan: Restorant
    });
  }

  render() {
    return (
      <div>
        <PageResto />
        <Row>
          {this.state.makanan.map(item => {
            return (
              <Col sm>
                {""}
                <Klaimresto item={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
