import React, { Component } from "react";
import './conversor.css'

class Conversor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    };

    this.converter = this.converter.bind(this);
  }

    converter() {
        let de_para = `${this.props.moedaA}-${this.props.moedaB}`;
        let moeda = `${this.props.moedaA}${this.props.moedaB}`


        let url = `https://economia.awesomeapi.com.br/json/last/${de_para}`;
        fetch(url)
            .then(res => {
                return res.json()
            })

            .then(json => {
            let cotacao = json[moeda].bid;
            let moedaB_valor = (
                parseFloat(this.state.moedaA_valor) * cotacao
            ).toFixed(2);
            this.setState({ moedaB_valor });
            })
        }
        render() {
            return (
            <div className="conversor">
                <h2>
                {this.props.moedaA} para {this.props.moedaB}
                </h2>
                <input
                type="text"
                onChange={(evento) =>
                    this.setState({ moedaA_valor: evento.target.value })
                }
                ></input>
                <input type="button" value="Conveter" onClick={this.converter}></input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
            );
        }
    }

export default Conversor;
