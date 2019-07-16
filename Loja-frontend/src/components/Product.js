import React, { Component } from "react";
import styles from "./master.css";
import fire from "../config/Fire";
import swal from "sweetalert";

export default class Product extends Component {
  state = {
    showModal1: false,
    showModal2: false,
    finalPassword: "",
    user: ""
  };

  async componentDidMount() {
    var user = await fire.auth().currentUser;
    if (user) {
      this.setState({
        user: user.email
      });
    } else {
      this.props.errorLogin();
    }
  }

  handleChangeInput = e => {
    this.setState({
      finalPassword: e.target.value
    });
  };

  handleShowModal1 = () => {
    this.setState({ showModal1: true });
  };

  handleCloseModal1 = () => {
    this.setState({
      showModal1: false
    });
    var db = fire.firestore(fire);
    db.collection("compras").add({
      usuario: this.state.user,
      produto: this.props.product.title,
      categoria: this.props.product.category,
      cancelamento: 1
    });
  };

  handleCloseModal2 = () => {
    this.setState({
      showModal2: false
    });

    var db = fire.firestore(fire);
    db.collection("compras").add({
      usuario: this.state.user,
      produto: this.props.product.title,
      categoria: this.props.product.category,
      cancelamento: 2
    });
  };

  handleNextModal = () => {
    this.setState({
      showModal1: false,
      showModal2: true
    });
  };

  handleComprar = async () => {
    const passwordC = await localStorage.getItem("password");
    const finalPassword = this.state.finalPassword;

    if (finalPassword === passwordC) {
      swal(
        "Compra Efetuada",
        "Adquira outros produtos na nossa loja",
        "success"
      );

      this.setState({
        showModal1: false,
        showModal2: false
      });
      var db = fire.firestore(fire);
      db.collection("compras").add({
        usuario: this.state.user,
        produto: this.props.product.title,
        categoria: this.props.product.category,
        cancelamento: 0
      });
    } else {
      swal(
        "Digite sua Senha",
        "Coloque sua senha para realizar a compra",
        "success"
      );
    }
  };

  render() {
    return (
      <div>
        <div className="col col-lg-4 my-2">
          <div className="card p-3" style={{ width: 330 }}>
            <img className="card-img-top" src={this.props.product.image} />
            <div className="card-body">
              <h5 className="card-title">{this.props.product.textTitle}</h5>
              <p className="card-text">R${this.props.product.price}</p>
              <button
                onClick={this.handleShowModal1}
                className="btn btn-primary"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
        {this.state.showModal1 ? (
          <div>
            <div className="modal-mask">
              <div className="modal-wrapper">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        {this.props.product.textTitle}
                      </h5>
                    </div>
                    <div className="modal-body">
                      <p>{this.props.product.description}</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={this.handleCloseModal1}
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleNextModal}
                      >
                        Próximo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
        {this.state.showModal2 ? (
          <div>
            <div className="modal-mask">
              <div className="modal-wrapper">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Efetuar Compra</h5>
                    </div>
                    <div className="modal-body">
                      <p>
                        <img
                          className="img-fluid"
                          src={this.props.product.image}
                        />
                        <p className="mt-1">R${this.props.product.price}</p>
                      </p>
                    </div>
                    <div className="modal-footer">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Digite sua Senha"
                        name="finalPassword"
                        value={this.state.finalPassword}
                        onChange={this.handleChangeInput}
                      />
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={this.handleCloseModal2}
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleComprar}
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
