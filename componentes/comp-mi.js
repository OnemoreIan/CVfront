import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class CompMi extends LitElement {

    static properties = {
        _visible: { type: Boolean }
    }

    static styles = css`
        .contenedor{
            height: 100%;
            width: 100%;
            background-color: green;
            display: flex;
            flex-flow: column;
            align-items: center;
        }
        .texto{
            text-align: justify;
            width: 80%;
            margin: 3px 0;
            color: rgb(194, 222, 255);
            text-shadow: #333 1px 1px;
        }
        .boton{
            cursor: pointer; 
            background-color: transparent;
            color: #FFFFFF;
            border: none;
        }
        .boton:active{
            background-color: transparent;
            box-shadow: none;
            color: #949090;
        }

    `;

    constructor() {
        super();
        this._visible = true;
    }

    _saludar() {
        console.log("holi");
    }

    misGustos(){
        return html`
            <div class="texto" ?hidden=${!this._visible}>
                Tengo una preferencia por practicar deportes,
                principal usando la bicicleta para las piernas.
            </div>
            <div class="texto" ?hidden=${!this._visible}>
                Si bien tengo un gusto por la actividad fisica, 
                tambien es por la programacion y por una razon muy simple 
                "Si puedes imaginarlo puedes programarlo"
            </div>
            <div class="texto" ?hidden=${!this._visible}>
                Lo unico de lo que me considero culpable seria que si me llega 
                a costar trabajo un tema, no me rendire el entenderlo
            </div>
        `;
    }

    unPocoDeMiContenido() {
        return html`
                <button class="boton" @click="${() => (this._visible) ? this._visible = false : this._visible = true}">
                    <h3>Un poco de mi</h3>
                </button>
                ${this.misGustos()}
        `;
    }


    render() {
        return html`
            <div class="contenedor">
            ${this.unPocoDeMiContenido()}
            </div>
        `;
    }
}

customElements.define("comp-mi", CompMi);
