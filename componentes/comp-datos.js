import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class CompDatos extends LitElement {

    static properties = {
        urlPerro: {type:String}
    }

    static styles = css`
        .img{
            heigth: 10px;
            width: 10px;
        }
    `;

    constructor(){
        super();
        
    }

    firstUpdated(){
        this.urlPerro = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2FGce3OKSXeQIAAAAC%2Fperro-bailando.gif&f=1&nofb=1&ipt=e30220acbcc9259aa31652122b5612a19fc10c6decc8b6071f74730e60571201&ipo=images";
    }

    datosGenerales(){
        return html`
            <div>
                <p>numero de empleado: </p>
                <p>correo: </p>
                <p>Animal favorito: perro</p>

            </div>
        `;
    }

    despedida(){
        return html`
            
            <img class="img" src="${this.urlPerro}" alt="perro" >
        `
    }

    render() {
        return html`
            ${this.datosGenerales()}
            Soy los datos
        `;
    }
}

customElements.define("comp-datos",CompDatos);
