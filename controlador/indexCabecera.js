import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';


export class CompCabecera extends LitElement {

    static styles = css`
        .espacio{
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #5800ff;
            background: linear-gradient(158deg, #5800ff 0%, #005fff 80%);
            background: -webkit-linear-gradient(158deg, #5800ff 0%, #005fff 80%);
            background: -moz-linear-gradient(158deg, #5800ff 0%, #005fff 80%);
        }   
        a{
            color: rgba(3, 202, 216, 0.905);
            text-transform: uppercase;
            text-decoration: none;
        }
        .fondo {
            
            
        }
    `

    constructor() {
        super();

    }

    render() {
        return html`
            <div class ="espacio">
                <div class="fondo">
                    <a href="./menu.html">
                        <h1>Ian</h1>
                    </a>
                </div>
            </div>
        `;
    }
}


customElements.define("comp-cabecera", CompCabecera);