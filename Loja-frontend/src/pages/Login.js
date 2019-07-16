import React, { Component } from "react";
import fire from "../config/Fire";
import swal from "sweetalert";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    var errorCode = null;
    await fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function() {
        swal("Logado!", "Seja Bem Vindo", "success");
      })
      .catch(function(error) {
        errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          swal("Usuário não encontrado", "Digite um email válido", "error");
        } else if (errorCode === "auth/wrong-password") {
          swal("Senha incorreta", "Digite uma senha válida", "error");
        }
      });
    if (errorCode == null) {
      localStorage.setItem("password", password);
      this.props.history.push("/produtos");
    }
    errorCode = null;
  };

  onTelaSignUp = e => {
    this.props.history.push("/registrar");
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row justify-content-md-center">
          <div className="col col-lg-4 pt-2 text-center border border-success rounded">
            <h1>SignIn</h1>
            <form onSubmit={this.handleLoginSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Seu email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Sua senha"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
              </div>
              <button type="submit" className="mb-4 btn btn-success">
                Entrar
              </button>
            </form>
            <form onSubmit={this.onTelaSignUp}>
              <button className="btn btn-link float-left" type="submit">
                <h6>Criar uma Conta.</h6>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
