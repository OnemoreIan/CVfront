import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class CompMi extends LitElement {

    static properties = {
        _visible: { state: true }
    }

    static styles = css`
        
        .contenedor{
            text-align: center;
            transition: all 0.5s;
            width: 100%;
            height: 3rem;
            overflow: hidden;
        }
        .contenedor:hover{
            height: auto;
            width: 100%;
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            align-items: center;
            gap: 5px;
        }
        .texto{
            width:80%;
            text-align: justify;
            margin: 3px 0;
            font-size: 1.1rem;
            color: rgb(194, 222, 255);
            text-shadow: #333 1px 1px;
        }
        .textUl{
            padding-bottom: 5px;
        }
        .cabecera{
            text-align: center;
            color: #FFFFFF;

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
            <div class="texto">
                Tengo una preferencia por practicar deportes,
                principal usando la bicicleta para las piernas.
            </div>
            <div class="texto">
                Si bien tengo un gusto por la actividad fisica, 
                tambien es por la programacion y por una razon muy simple 
                "Si puedes imaginarlo puedes programarlo"
            </div>
            <div class="texto textUl">
                Lo unico de lo que me considero culpable seria que si me llega 
                a costar trabajo un tema, no me rendire el entenderlo
            </div>
        `;
    }

    unPocoDeMiContenido() {
        return html`
            <p class="cabecera">Un poco de mi</p>
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
