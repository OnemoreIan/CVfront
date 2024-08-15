import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class CompInter extends LitElement {

    static properties = {
        visibleTecno:{state:true},
        visibleExper:{state:true},
    }

    static styles = css`
        .contenedor{
            width: 100%;
            height: auto;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            align-items: center;
            padding:1rem;
        }
        .listaTecs{
            min-height: 9rem;
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 5px;
            padding: 10px 5px;
            list-style: none;
        }
        .listaTecs > li {   
            text-transform: capitalize;
            color: beige;
        }
        .listaTecs > li:hover {
            cursor: context-menu;
            border-left: 1px solid rgb(76, 248, 64);
            border-right: 1px solid rgb(76, 248, 64);
            border-bottom: 1px solid rgb(76, 248, 64);
            border-radius: 0 0 5px 5px;
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

        .lados{
            width: 50%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }



        .empleosCarta{
            background: yellow;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }

        .exper{
            display: flex;
            flex-flow: column;
            justify-content: center;
            gap: 5px;
            align-items: center;
            color: beige;
            margin-top: 5px;
            border-right: 2px solid salmon;
            border-radius: 5px;
        }
        
        .actividades{
            font-size: 1rem;
            color: beige;
        }
        
        

    `;


    constructor(){
        super();
        
        this.visibleTecno = false;
        this.visibleExper = false;
        
    }
    

    _cambiarVisibilidadVentanas(elemento){
        console.log(elemento);
        (elemento == true)? elemento = false : elemento = true;
        console.log(elemento);
        console.log(this.visibleTecno);
        

    }
    _visibilidadTec(){
        (this.visibleTecno)? this.visibleTecno = false : this.visibleTecno = true;
        console.log(this.visibleTecno);
        
    }
    _visibilidadExp(){
        (this.visibleExper)? this.visibleExper = false : this.visibleExper = true;
        console.log(this.visibleExper);
    }

    tecnologias(){
        return html`
                <div>
                    <button class="boton" @click="${() => this._visibilidadTec()}">
                        <h3>Tecnologias</h3>
                    </button>
                </div>

                <div ?hidden=${!this.visibleTecno}>
                    <ul class="listaTecs">
                        <li>Tecnologias web standar:  html,js y css</li>
                        <li>Frameworks front: Vue y Angular</li>
                        <li>Frameworks back: Express</li>
                        <li>Framework estilos: Sass y Bootstrap</li>
                        <li>Libreria: Jquery</li>
                        <li>Bases de datos no sql</li>
                        <li>Bases de datos sql: Postgress</li>
                    </ul>
                </div>
        `;
    }

    experiencia(){
        return html`
                <div>
                    <button class="boton" @click="${() => this._visibilidadExp()}">
                        <h3>Experiencia ?</h3>
                    </button>
                </div>

                <div class="" ?hidden=${!this.visibleExper}>
                    <div class="exper">   
                        <div>
                            <h3>Puesto: Desarrollador Font end</h3>
                        </div>
                        <div>
                            <p>Empresa: SAT</p>
                        </div>
                        
                        <div class="actividades">
                            Desarrollo de interfaz, planificacion de interactividad,
                            desarrollo de modulos y componentes, 
                        </div>
                    </div>

                    <div class="exper">   
                        <div>
                            <h3>Puesto: Desarrollador WEB</h3>
                        </div>
                        <div>
                            <p>Empresa: Swyti</p>
                        </div>
                        
                        <div class="actividades">
                            Desarrollo de interfaz, planificacion de interactividad,
                            desarrollo de modulos y componentes, 
                        </div>
                    </div>
                    
                </div>
        `;
    }

    render() {
        return html`

            <div class="contenedor">

                <div class="lados">
                    ${this.tecnologias()}
                </div>

                <div class="lados">
                    ${this.experiencia()}
                </div>
            
            </div>
        `;
    }
}

customElements.define("comp-inter",CompInter);
