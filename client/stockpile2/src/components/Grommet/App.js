import React, { Component } from 'react';
import Header from './Header';
import {Text} from "grommet";

const theme = {
  global: {
    colors:{
      brand:'#A4C93A'
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const DATA = [
  {
    id: 1,
    name: "Chicken",
    type: "Protein",
    count: 12
  },
  {
    id: 2,
    name: "Apple",
    type: "Fruit",
    count: 4
  },
  {
    id: 3,
    name: "Broccoli",
    type: "Vegetables",
    count: 10
  }
];

const COLUMNS = [
  {
    property: "name",
    label: "Name",
    dataScope: "row",
    format: datum => <Text weight="bold">{datum.name}</Text>
  },
  {
    property: "type",
    label: "Type"
  },
  {
    property: "count",
    label: "Amount",
    align: "end",
  }
];





class App extends Component {
  state = {
     showSidebar: false,
     showTopbar: false
  }
  render() {
    
    return (
      <Header />
      

    )
  }
}

export default App;
