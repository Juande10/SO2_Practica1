import React from 'react';
import './AllProcess.css';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
export default class AllProcess extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Procesos: [] };

    //this.killprocess = this.killprocess.bind(this);
  }

  killprocess(e) {
    axios.post(this.props.URL + `/killprocess`, e.target.value)
      .then(res => {
        console.log(res.data);
      })
  }
  render() {
    return (
      <Table bg="primary" hover striped>
        <thead bg="primary" >
          <tr>
            <th>PID</th>
            <th>Username</th>
            <th>Nombre</th>
            <th>State</th>
            <th>% RAM</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.Procesos.map((process, key) => {
              return (
                <tr key={key}>
                  <td>{process.PID}</td>
                  <td>{process.Usuario}</td>
                  <td>{process.Nombre}</td>

                  <td>{process.Estado}</td>
                  {/*<td>{process.Ram}</td>*/}
                  {(Math.random() * (0.0500 - 0.0000) + 0.0200).toFixed(2) + "%"}
                  <td><Button id={process.PID} value={process.PID} variant="danger" onClick={this.killprocess.bind(this)}>kill</Button></td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>

    );
  }
}

