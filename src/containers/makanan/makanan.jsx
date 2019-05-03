import React, { Component } from "react";
import PageResto from "../../components/pageresto";
import Cardmenu from "../../components/cardfood";
import Restorant from "../../utils/restorant";
import { Row, Col } from "reactstrap";

export default class Makanan extends Component {
  componentWillMount() {
    const data = Restorant.find(item => item.id === this.props.match.params.id);
    const datafood = data.food;
    this.setState({
      foods: datafood
    });
  }
  state = {
    foods: []
  };
  render() {
    return (
      <div>
        <PageResto />
        <Row>
          {this.state.foods.map(item => {
            return (
              <Col sm>
                <Cardmenu item={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
