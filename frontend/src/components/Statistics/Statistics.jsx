import React from 'react';
import './Statistics.css';
import { Container, Row, Col, Tab, Nav, Badge } from 'react-bootstrap';
import axios from 'axios';
export default class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Total: 0, Running: 0, Suspend: 0, Stop: 0, Zombie: 0 };
    /*axios.get(this.props.URL + `/statistics`)
      .then(res => {
        this.setState({ Total: res.data.Total, Running: res.data.Running, Suspend: res.data.Suspend, Stop: res.data.Stop, Zombie: res.data.Zombie });
      })*/

  }
  componentDidMount() {
    this.interval = setInterval(() => {
      /*axios.get(this.props.URL + `/statistics`)
        .then(res => {
          this.setState({ Total: res.data.Total, Running: res.data.Running, Suspend: res.data.Suspend, Stop: res.data.Stop, Zombie: res.data.Zombie });
        })*/

      let running = this.props.Procesos.filter((proces) => proces.Estado === 0).length;
      let stop = this.props.Procesos.filter((proces) => proces.Estado > 0 && proces !== 1026).length;
      let zombie = this.props.Procesos.filter((proces) => proces.Estado < 0).length;
      let suspend = this.props.Procesos.filter((proces) => proces.Estado === 1026).length;
      this.setState({
        Total: this.props.Procesos.length,
        Running: running,
        Stop: stop,
        Suspend: suspend,
        Zombie: zombie
      });
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={5}>
          </Col>
          <Col>
            <h1>
              Procesos
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
          </Col>
          <Col>
            <h4>
              Total de Procesos
            </h4>
          </Col>
          <Col>
            <h4>
              <Badge variant="secondary">{this.state.Total}</Badge>
            </h4>

          </Col>
        </Row>
        <Row>
          <Col md={4}>
          </Col>
          <Col>
            <h4>
              Procesos en Ejecucion
            </h4>
          </Col>
          <Col>
            <h4>
              <Badge variant="secondary">{this.state.Running}</Badge>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
          </Col>
          <Col>
            <h4>
              Procesos Suspendidos
            </h4>
          </Col>
          <Col>
            <h4>
              <Badge variant="secondary">{this.state.Suspend}</Badge>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
          </Col>
          <Col>
            <h4>
              Procesos Detenidos
            </h4>
          </Col>
          <Col>
            <h4>
              <Badge variant="secondary">{this.state.Stop}</Badge>
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
          </Col>
          <Col>
            <h4>
              Procesos Zombie
            </h4>
          </Col>
          <Col>
            <h4>
              <Badge variant="secondary">{this.state.Zombie}</Badge>
            </h4>
          </Col>
        </Row>
      </div>
    );
  }
}

