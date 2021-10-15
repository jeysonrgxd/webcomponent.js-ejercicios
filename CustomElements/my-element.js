const template = document.createElement("div")
template.innerHTML = `
   <style>
      h1{
         color:red;
      }
   </style>
   <h1>Hola mundo con template afuera</h1>
`

class myElement extends HTMLElement {

   constructor() {
      // aqui bamos a inicializar todo lo que se guardara en memoria para despues agregarlo como nodos al DOM
      super()
      console.log("Hola muendo")
      this.p = document.createElement('p')

   }

   // para poder vizualizar nuestra etiqueta p utilizamos el connectedCallback
   connectedCallback() {
      this.p.textContent = "Hola mundo"
      this.appendChild(template)
      this.appendChild(this.p)
   }

}

// defenimos nuestra etiqueta
customElements.define('my-element', myElement)