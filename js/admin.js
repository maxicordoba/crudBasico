import {
  validarCampoRequerido,
  validarCodigo,
  validarNumeros,
  validarURL,
  validarGeneral,
} from "./validaciones.js";

import { Producto } from "./productoClass.js";

//declarar variables
let listaProductos = [];

//este archivo tendra toda la logica de ABM o CRUD
let producto = document.querySelector("#producto");
let cantidad = document.querySelector("#cantidad");
let codigo = document.querySelector("#codigo");
let descripcion = document.querySelector("#descripcion");
let url = document.querySelector("#url");
let formulario = document.querySelector("#formProducto");
//console.log(formulario);

producto.addEventListener("blur", () => {
  validarCampoRequerido(producto);
});
cantidad.addEventListener("blur", () => {
  validarNumeros(cantidad);
});
descripcion.addEventListener("blur", () => {
  validarCampoRequerido(descripcion);
});
codigo.addEventListener("blur", () => {
  validarCampoRequerido(codigo);
});
url.addEventListener("blur", () => {
  validarCampoRequerido(url);
});
formulario.addEventListener("submit", guardarProducto);

cargaInicial();

function guardarProducto(e) {
  e.preventDefault();
  // validar los datos del formulario
  if (validarGeneral()) {
    //crear un nuevo producto
    console.log("aqui deberia crear un producto");
    agregarProducto();
  } else {
    console.log("aqui solo mostrar el cartel del error");
  }
}

function agregarProducto() {
  let productoNuevo = new Producto(
    codigo.value,
    producto.value,
    descripcion.value,
    cantidad.value,
    url.value
  );
  //console.log(productoNuevo);
  //guardar el producto en el arreglo
  listaProductos.push(productoNuevo);
  console.log(listaProductos);
  //guardar en el localstorage
  localStorage.setItem('listaProductosKey', JSON.stringify(listaProductos));
  //limpiar el formulario
  //Dibujar fila en la tabla
}

function cargaInicial(){
    listaProductos = JSON.parse(localStorage.getItem('listaProductosKey')) || [];
    console.log(listaProductos)
}
