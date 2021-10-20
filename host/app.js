class MyCustomElemen extends HTMLElement {

   constructor() {
      super()
      this.attachShadow({ mode: 'open' })
   }

   getTemplate() {

      const template = document.createElement("template")

      // alas etiquetas slot le ponemos un name para que en el html podemos agregarle a que slot quiero ponerle contenido

      template.innerHTML = /*html*/`
         <section>
            <h2><slot name="titulo"><slot></h2>
            <div>
               <p class="parrafo"><slot name="parrafo"></slot></p>
            </div>
         </section>
         ${this.getStyles()}
      `

      return template
   }

   // creamos estylos para agregarlo en el template
   getStyles() {
      return /*html*/`
         <style>

            :host{
               background-color:gray;
               display:inline-block;
               color:#000;
               padding:.4em;
               margin:5px;
            }

            :host(.segundo){
               background-color: blue ;
            }

            :host([yellow]){
               background-color: yellow;
            }

            :host([yellow]) h2{
               color:red;
            }

            :host([yellow]) p{
               color:peru;
            }

            :host-context(article.card){
               display:block;
               max-width:100%;
            }

           
         
         </style>
      `
   }

   // Ahora debemos agregarlo en nuestro shadow dom que es otro contexto diferente y ya no el DOM general
   render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
   }

   // inicializes en el dom, como que si inicializamos el metodo render para que genere en el dom en el ciclo de vida especifico
   connectedCallback() {
      this.render()
   }

}

customElements.define("my-custom", MyCustomElemen)