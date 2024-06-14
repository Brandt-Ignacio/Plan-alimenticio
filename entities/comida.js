export class Comida{
    nombre;
    tipo;
    descripcion;
    ingredientes;

    constructor(nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
        this.ingredientes =[];
    }

    agregarIngrediente(ingrediente){
        this.ingredientes.push(ingrediente);
    }

    porcentajeDe(componente){
        return this.cantidadDe(componente)*100/this.cantIngredientes();
    }

    cantidadDe(componente){
        return this.ingredientes.filter((i) => i.tipo == componente).length;
    }

    cantIngredientes(){
        return this.ingredientes.length;
    }
}