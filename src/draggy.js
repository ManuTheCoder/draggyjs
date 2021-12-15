class Draggy {
  constructor (params) {
    this.params = params;
    let el = params.element;
    let container = params.container;
    el.setAttribute("draggable", true);

    container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    el.addEventListener("dragstart", (ev) => {
    
      params.options.callbacks.DragStart&&params.options.callbacks&&params.options.callbacks.DragStart(ev.target);
      ev.dataTransfer.setData("text", ev.target.id);
    })
    el.addEventListener("dragend", (ev) => params.options.callbacks.DragEnd&&params.options.callbacks&&params.options.callbacks.DragEnd(ev.target))
    el.addEventListener("dragover", (ev) => params.options.callbacks.DragOver&&params.options.callbacks&&params.options.callbacks.DragOver(ev.target))
    el.addEventListener("dragenter", (ev) => params.options.callbacks.DragEnter&&params.options.callbacks&&params.options.callbacks.DragEnter(ev.target))
    el.addEventListener("dragleave", (ev) => params.options.callbacks.DragLeave&&params.options.callbacks&&params.options.callbacks.DragLeave(ev.target))

    el.addEventListener("dragstart", (ev) => {
      container.classList.add(params.containerHoverClass)
    })
    el.addEventListener("dragend", (ev) => {
      container.classList.remove(params.containerHoverClass)
    })
    container.addEventListener("drop", (ev) => {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
      
      params.options.callbacks.DragLeave&&params.options.callbacks&&params.options.callbacks.DragSuccess(document.getElementById(data))
    })
  }
}