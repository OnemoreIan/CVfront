import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

//importamos los diferentes componentes
import "../componentes/comp-mi.js" //datos de mi
import "../componentes/comp-datos.js" // informacion personal
import "../componentes/comp-inter.js" //intereses

export class CompModulos extends LitElement{
    static properties = {
        _activado: {type:Boolean},

    }

    static styles = css`
        .espacio{
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-flow: column wrap;
            gap:2rem;
            align-items: center;
            justify-content: space-around;
            background: #5800ff;
            background: linear-gradient(158deg, #5800ff 0%, #005fff 80%);
            background: -webkit-linear-gradient(158deg, #5800ff 0%, #005fff 80%);
            background: -moz-linear-gradient(158deg, #5800ff 0%, #005fff 80%);
        }   
        .cartaIz{
            min-height: 5rem;
            height: auto;
            width: 40%;
            border: 1px solid rgb(194, 255, 251);
            border-radius: 3rem 3rem 3rem 2px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }   
        .cartaDe{
            border-radius: 3rem 3rem 2px 3rem;
        }
        .ajustew{
            width: 90%;
        }

        .espacioComp{
            height: 90%;
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        @keyframes colorChange {
            0% {
                color: inherit;
            }
            50% {
                color: rgb(138, 227, 252);
            }
            100% {
                color: inherit;
            }
        }

        .nombre:hover {
            animation: colorChange 2s infinite;
            cursor: default;
        }
        
        `;

    constructor(){
        super();
        this._activado = false;
    }

    firstUpdated(){
        
    }

    titulo(){
        return html`
            <div class="cartaIz ">
                <h2 class="nombre">Ian Del Razo Cervantes</h2>
            </div>
        `
    }


    render(){
        return html`
            <div class="espacio">
                ${this.titulo()}

                <div class="cartaIz cartaDe">
                    <comp-mi class="espacioComp"></comp-mi>
                </div>
                
                <div class="cartaIz ">
                    <comp-inter class="espacioComp"></comp-inter>
                </div>
                
                <div class="cartaIz cartaDe">
                    <comp-datos class="espacioComp"></comp-datos>
                </div>
            </div>
        `
    }

    //funcionalidades

    _desplegar(){
        this._activado = !this._activado;
    }
}

customElements.define("comp-modulos",CompModulos);