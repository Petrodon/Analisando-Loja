import React, { Component } from "react";
import fire from "../config/Fire";

import Product from "../components/Product";

import tenis1 from "../images/tenis1.png";
import tenis2 from "../images/tenis2.png";
import tenis3 from "../images/tenis3.png";
import camisa1 from "../images/camisa1.png";
import camisa2 from "../images/camisa2.png";
import camisa3 from "../images/camisa3.png";
import celular1 from "../images/celular1.png";
import celular2 from "../images/celular2.png";
import celular3 from "../images/celular3.png";
import notebook1 from "../images/notebook1.png";
import notebook2 from "../images/notebook2.png";
import notebook3 from "../images/notebook3.png";
import tv1 from "../images/tv1.png";
import tv2 from "../images/tv2.png";
import tv3 from "../images/tv3.png";

export default class Products extends Component {
  state = {
    user: "",
    products: [
      {
        id: 0,
        category: 1,
        title: 1,
        price: 200.99,
        image: tenis1,
        textTitle: "Tênis 1",
        description: "aaaaaaaaa"
      },
      {
        id: 1,
        category: 1,
        title: 2,
        price: 150.99,
        image: tenis2,
        textTitle: "Tênis 2",
        description: "cvdgdgdgdg"
      },
      {
        id: 2,
        category: 1,
        title: 3,
        price: 99.99,
        image: tenis3,
        textTitle: "Tênis 3",
        description: "sdssdfefwf"
      },
      {
        id: 3,
        category: 2,
        title: 1,
        price: 59.99,
        image: camisa1,
        textTitle: "Camisa 1",
        description: "sdssdfefwf"
      },
      {
        id: 4,
        category: 2,
        title: 2,
        price: 70.99,
        image: camisa2,
        textTitle: "Camisa 2",
        description: "sdssdfefwf"
      },
      {
        id: 5,
        category: 2,
        title: 3,
        price: 120.99,
        image: camisa3,
        textTitle: "Camisa 3",
        description: "sdssdfefwf"
      },
      {
        id: 6,
        category: 3,
        title: 1,
        price: 2220.99,
        image: celular1,
        textTitle: "Celular S9",
        description: "sdssdfefwf"
      },
      {
        id: 7,
        category: 3,
        title: 2,
        price: 1600.99,
        image: celular2,
        textTitle: "Celular Xiomi",
        description: "sdssdfefwf"
      },
      {
        id: 8,
        category: 3,
        title: 3,
        price: 1220.99,
        image: celular3,
        textTitle: "Celular Motorala",
        description: "sdssdfefwf"
      },
      {
        id: 9,
        category: 4,
        title: 1,
        price: 1400.99,
        image: notebook1,
        textTitle: "Notebook Dell",
        description: "sdssdfefwf"
      },
      {
        id: 10,
        category: 4,
        title: 2,
        price: 1820.99,
        image: notebook2,
        textTitle: "Notebook Sansung",
        description: "sdssdfefwf"
      },
      {
        id: 11,
        category: 4,
        title: 3,
        price: 2110.99,
        image: notebook3,
        textTitle: "Notebook Lenovo",
        description: "sdssdfefwf"
      },
      {
        id: 12,
        category: 5,
        title: 1,
        price: 854.99,
        image: tv1,
        textTitle: "Televisão Philco",
        description: "sdssdfefwf"
      },
      {
        id: 13,
        category: 5,
        title: 2,
        price: 2510.99,
        image: tv2,
        textTitle: "Televisão Sansung",
        description: "sdssdfefwf"
      },
      {
        id: 14,
        category: 5,
        title: 3,
        price: 2210.99,
        image: tv3,
        textTitle: "Televisão LG",
        description: "sdssdfefwf"
      }
    ]
  };

  async componentDidMount() {
    const user = fire.auth().currentUser;
    if (user) {
      this.setState({
        user: user.email.split("@")[0]
      });
    } else {
      this.props.history.push("/");
    }
  }

  errorLogin = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container mt-4">
        <h1>Olá {this.state.user}</h1>
        <div className="row">
          {this.state.products.map(product => (
            <Product
              key={product.id}
              product={product}
              errorLogin={this.errorLogin}
            />
          ))}
        </div>
      </div>
    );
  }
}
