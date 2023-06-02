class PreguntaComponent extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        const question = this.getAttribute('question')
        const id = this.getAttribute('fakeid')
        const answer = this.getAttribute('answer')

        this.innerHTML=`
<style>
.casilla-pregunta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid #ccc;
    padding: 4px;
    margin-bottom: 10px;
    background-color: #dac0fd;
    cursor: pointer;
    
    border-radius: 1em;
    text-align: center;
  }
  
  .pregunta {
    font-family: Arial, Helvetica, sans-serif;
    max-height:100px;
    color: #333;
    font-size:1.25rem;
  }
  
  .respuesta {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;

  }
  
  .cara-1,
  .cara-2 {
    

    color: #333;

    position:relative;
    display: none;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 1em;
    padding:3%;
  }
  
  .casilla-pregunta.mostrar-cara-2 .cara-1 {
    display: none;
  }
  
  .casilla-pregunta.mostrar-cara-2 .cara-2 {
    display: block;
  }
  
  .casilla-pregunta.mostrar-cara-1 .cara-1 {
    display: block;
  }
  
  .casilla-pregunta.mostrar-cara-1 .cara-2 {
    display: none;
  }
  .cara-1, .txtPregunta{
    padding:10px;
    background-color: #e2f0f6;
    border-radius: 1em;

  }
  .txtPregunta{
    border:1px solid black;

  }
  .txtRespuesta{
    border:1px solid black;
    border-radius: 1em;

    padding:10px;
    background-color: #d6fbc8;
    font-size:20px;
  }
</style>

        <div class="casilla-pregunta mostrar-cara-1" id="`+id+`" >
            
            <div class="cara-1" id="cara1"><label class="pregunta">`+question+`</label>
            </div>
            <div class="cara-2" id="cara2"><p class="txtRespuesta">Respuesta: <b>`+answer+`</b></p>
              <p class="txtPregunta">Pregunta  <b>`+question+`</b</div>
          </div>

          `
        
        this.addEventListener("click",  (event) => {
            const casilla = document.getElementById(id)
            console.log(event);
                casilla.classList.toggle("mostrar-cara-2");
                casilla.classList.toggle("mostrar-cara-1");
              
        })
    }
    getRootElement() {
        // Verificar si el componente utiliza shadow DOM
        if (this.shadowRoot) {
          // Si utiliza shadow DOM, se obtiene el elemento raíz desde shadowRoot
          return this.shadowRoot;
        } else {
          // Si no utiliza shadow DOM, se obtiene el elemento raíz desde getRootNode()
          return this.getRootNode();
        }
      }
    
}

window.customElements.define('pregunta-component', PreguntaComponent)