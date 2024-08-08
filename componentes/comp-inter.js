import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class CompInter extends LitElement {

    static properties = {
        visibleTecno:{state:Boolean},
        visibleExper:{state:Boolean},
    }

    static styles = css`
        .contenedor{
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            background-color: #033e5a;
        }
    `;


    constructor(){
        super();
        
        this.visibleTecno = true;
        this.visibleExper = true;
        
    }
    

    _cambiarVisibilidadVentanas(elemento){
        console.log(elemento);
        (elemento == true)? elemento = false : elemento = true;
        console.log(elemento);
        console.log(this.visibleTecno);
        

    }
    _visibilidadTec(){
        (this.visibleTecno)? this.visibleTecno = false:this.visibleTecno = true;
        console.log(this.visibleTecno);
        
    }
    _visibilidadExp(){
        (this.visibleExper)? this.visibleExper = false:this.visibleExper = true;
        console.log(this.visibleExper);
    }

    tecnologias(){
        return html`
            <div>
                <div>
                    <button @click="${() => this._visibilidadTec()}">Tecnologias ?</button>
                </div>

                <div ?hidden=${!this.visibleTecno}>
                    <ul>
                        <li>Lenguaje de programacion</li>
                        <li>templates</li>
                        <li>estilos</li>
                        <li>framework</li>
                        <li>modelos</li>
                    </ul>
                </div>
            </div>
        `;
    }

    experiencia(){
        return html`
            <div>
                <div>
                    <button @click="${() => this._visibilidadExp()}">Experiencia ?</button>
                </div>

                <div ?hidden=${!this.visibleExper}>
                    <div>   
                        <div>
                            <p>Puesto: Desarrollador Font end</p>
                        </div>
                        <div>
                            <p>Empresa: SAT</p>
                        </div>
                        
                        <div>
                            Desarrollo de interfaz, planificacion de interactividad,
                            desarrollo de modulos y componentes, 
                        </div>
                    </div>

                    <div>   
                        <div>
                            <p>Puesto: Desarrollador WEB</p>
                        </div>
                        <div>
                            <p>Empresa: Swyti</p>
                        </div>
                        
                        <div>
                            Desarrollo de interfaz, planificacion de interactividad,
                            desarrollo de modulos y componentes, 
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
    }

    render() {
        return html`

            <div class="contenedor">

                <div>
                    ${this.tecnologias()}
                </div>

                <div>
                    ${this.experiencia()}
                </div>
            
            </div>
        `;
    }
}

customElements.define("comp-inter",CompInter);
