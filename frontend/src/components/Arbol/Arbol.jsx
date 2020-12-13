import React from 'react';
import './Arbol.css';
import axios from 'axios';
import Tree from '@naisutech/react-tree'
export default class Arbol extends React.Component {
  constructor(props) {
    super(props);

    this.state = { Procesos: [] };

  }


  /*
    componentDidMount() {
      this.interval = setInterval(() => {
        axios.get(this.props.URL + `/leercpu`)
          .then(res => {
  
            let arbol = res.data.arbol;
  
            console.log(arbol)
            arbol.map((proc) => { })
  
            let data = [
    {
      "id": 1,
      "parentId": null,
      "label": "My parent node",
      "items": [
        {
          "id": 87654321,
          "label": "My file",
          "parentId": 1,
          "items": []
        }
      ]
    },
    {
      "id": 56789012,
      "parentId": 1,
      "label": "My child node",
      "items": []
    }
    , {
      "id": 567890121,
      "parentId": 1,
      "label": "My child node",
      "items": []
    }
  ];
  //console.log(data)
  this.setState({ Procesos: arbol });
          })
      }, 4000)
    }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }*/


  render() {
    return (

      <div>
        <Tree
          nodes={this.props.Arbol} // see data format
          //onSelect={(a) => { a }} // fired every click of node or leaf with selected item as argument
          //        size={"full"} // full (default), half, narrow
          id="tree"
        />
      </div>
    );
  }
}

