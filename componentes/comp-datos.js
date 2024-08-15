import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class CompDatos extends LitElement {

    static properties = {
        urlPerro: {type:String}
    }

    static styles = css`

        *{
            color: beige;
        }

        .espacio{
            text-align: center;
            width: 100%;
            transition: all 0.5s;
            height: 3rem;
            overflow: hidden;
        }
        .espacio:hover{
            height: auto;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            overflow: auto;
        }

        .img{
            heigth: 1.5rem;
            width: 1.5rem;
        }
        
    `;

    constructor(){
        super();
        
    }

    firstUpdated(){
        this.urlPerro = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2FGce3OKSXeQIAAAAC%2Fperro-bailando.gif&f=1&nofb=1&ipt=e30220acbcc9259aa31652122b5612a19fc10c6decc8b6071f74730e60571201&ipo=images";
        fetch("https://api-blue-archive.vercel.app/api/characters")
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
            })
            .catch(e => {console.log(e);
            })
    }



    datosGenerales(){
        return html`
            <p>Mi contacto</p>
            <p>Numero de empleado: </p>
            <p>Correo empresarial: idelrazo@emal.nttdata.com</p>
            <p>Animal favorito: dogos ${this.perro()}</p>
        `;
    }

    perro(){
        return html`
            <img class="img" src="${this.urlPerro}" alt="perro" >
        `
    }

    render() {
        return html`
            <div class="espacio">
                ${this.datosGenerales()}
            </div>
        `;
    }
}

customElements.define("comp-datos",CompDatos);
