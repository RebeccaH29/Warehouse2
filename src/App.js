import React, { Component } from 'react';
import './App.css';

const data = 
  [
    {
      "level":1,
      "locations":[
        {
          "name":"VZ-01-01",
          "stock":[
            {
              "product":"Left door",
              "qty":100,
              "replenishment":"slow"
            }
          ]
        }
      ]
    },
    {
      "level":2,
      "locations":[
        {
          "name":"VZ-01-02",
          "stock":[
            {
              "product":" ",
              "qty":0,
              "replenishment":" "
            }
          ]
        },
        {
          "name":"VZ-02-02",
          "stock":[
            {
              "product":"Rear brake disk",
              "qty":3,
              "replenishment":"fast"
            }
          ]
        }
      ]
    },
    {
      "level":3,
      "locations":[
        {
          "name":"VZ-01-03",
          "stock":[
            {
              "product":"Front brake disk",
              "qty":2,
              "replenishment":"standard"
            }
          ]
        },
        {
          "name":"VZ-01-04",
          "stock":[
            {
              "product":"Shock",
              "qty":10,
              "replenishment":"standard"
            }
          ]
        }
      ]
    }
  ];



class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data,
      category: 'display',
    };

    this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({category: event.target.value});
      }

  
  render() {

    const {category} = this.state;
    return (
      <div className="App">
        <header className="App-header">
         Stock Table
        </header>
        <Checkbox
          value={category}
          onChange={this.handleChange}
        ></Checkbox>
        <Table
          data={data}
          ></Table>
      </div>
    );
  }
}

class Table extends Component {
  render() {
      const { data, value } = this.props;
      if (value===('display')) {


      }
      return (
       
        <div>
          <table>
            <tbody>
            <tr>
              <td>Label:</td> 
            </tr>
            <tr>
              <td>Level</td>
                {data.map(item =>
                <td className="levels" key={item.level}>{item.level}</td>)}
            </tr>
            <tr>
              <td>Location</td>
                {data.map(item =>
                item.locations.map(loc =>
                <td>{loc.name}</td>))}
            </tr>
            <tr>
              <td>Stock</td>
                {data.map(item =>
                item.locations.map(loc =>
                loc.stock.map(goods =>
                <td>{goods.product}</td>)))}
                  
                
            </tr>
            <tr>
              <td>Quantity</td>
                {data.map(item =>
                item.locations.map(loc =>
                loc.stock.map(goods =>
                <td>{goods.qty}</td>)))}
            </tr>
            <tr>
              <td>Replenishment</td>
                {data.map(item =>
                item.locations.map(loc =>
                loc.stock.map(goods =>
                <td>{goods.replenishment}</td>)))}
              </tr>
            </tbody>
          </table>
        </div>
      )    
  }
}

class Checkbox extends Component {
  render() {
    return (
      <div>
      <input type="checkbox" name="showstock" value="display"></input> <p>Display stock information</p>
      </div>
    )
  }
  
}


export default App;
