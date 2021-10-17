class myElement extends HTMLElement {

   constructor() {
      // aqui bamos a inicializar todo lo que se guardara en memoria para despues agregarlo como nodos al DOM
      super()

   }

   getTemplate() {

      const template = document.createElement("template")

      template.innerHTML = `
         <section>
            <h2>Hola del template</h2>
            <div>
               <p class="parrafo">hola mundo</p>
            </div>
         </section>
         ${this.getStyles()}
      `

      return template
   }

   // creamos estylos para agregarlo en el template
   getStyles() {
      return `
         <style>

            h2{
               color:red
            }

            .parrafo{
               color:gray
            }
         
         </style>
      `
   }

   // hacemos que el contenido del template se clone y agregamos al dom
   render() {
      this.appendChild(this.getTemplate().content.cloneNode(true))
   }


   // inicializes en el dom, como que si inicializamos el metodo render para que genere en el dom en el ciclo de vida especifico
   connectedCallback() {
      this.render()
   }

}

// defenimos nuestra etiqueta
customElements.define('my-element', myElement)