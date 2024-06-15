export class PlanAlimenticio{
    pesoInicial;
    objetivos = [];
    comidas = [];
    colaciones = [];
    bebidas = [];

    agregarComida(comida){
        this.comidas.push(comida);
    }

    agregarObjetivo(objetivo){
        this.objetivos.push(objetivo);
    }

    agregarBebida(bebida){
        this.bebidas.push(bebida);
    }

    agregarColacion(colacion){
        this.colaciones.push(colacion);
    }

    cantComidas(){
        return this.comidas.length;
    }

    generarEvaluacion(){
        let calificacion = this.objetivosCumplidos().length*100/this.objetivos.length;
        let nota;
        if(calificacion == 100) nota = "Excelente";
        else if(calificacion > 60) nota = "Muy buena";
        else if(calificacion > 50) nota = "Buena";
        else if(calificacion < 50) nota = "Regular";
        return nota;
    }

    objetivosCumplidos(){
        return this.objetivos.filter((o) => o.estaCumplido == true);
    }

    cantComidasDe(tipo){
        return this.comidas.filter((c) => c.tipo == tipo).length;
    }

    esFuerteEn(componente,porcentaje){
        return this.comidas.every((c) => c.porcentajeDe(componente) >= porcentaje);
    }

    cantDeColaciones(){
        return this.colaciones.length;
    }

    cantDeBebidas(){
        return this.bebidas.length;
    }

}
