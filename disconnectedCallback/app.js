class MyCustomElement extends HTMLElement {
   constructor() {
      super()
      console.log("hola desde el constructor- memoria")
   }

   connecteCallback() {
      console.log("hola desde el DOM")
   }

   disconnectedCallback() {
      console.log("Adios del DOM")
   }
}

customElements.define("my-custom-element", MyCustomElement)

document.querySelector("my-custom-element").remove()
