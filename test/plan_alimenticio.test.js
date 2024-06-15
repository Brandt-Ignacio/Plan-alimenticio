import { PlanAlimenticio } from "../entities/plan_alimenticio";
import { Objetivo } from "../entities/objetivo";
import { Comida } from "../entities/comida";
import { Ingrediente } from "../entities/ingrediente";
import {Colacion} from "../entities/colacion";

test("Ingreso 10 objetivos y tiene que devolverme la calificacion Excelente", () =>{
    const planAlimentacion = new PlanAlimenticio();

    const objetivo1 = new Objetivo(null,true);
    const objetivo2 = new Objetivo(null,true);
    const objetivo3 = new Objetivo(null,true);
    const objetivo4 = new Objetivo(null,true);
    const objetivo5 = new Objetivo(null,true);
    const objetivo6 = new Objetivo(null,true);
    const objetivo7 = new Objetivo(null,true);
    const objetivo8 = new Objetivo(null,true);
    const objetivo9 = new Objetivo(null,true);
    const objetivo10 = new Objetivo(null,true);


    planAlimentacion.agregarObjetivo(objetivo1);
    planAlimentacion.agregarObjetivo(objetivo2);
    planAlimentacion.agregarObjetivo(objetivo3);
    planAlimentacion.agregarObjetivo(objetivo4);
    planAlimentacion.agregarObjetivo(objetivo5);
    planAlimentacion.agregarObjetivo(objetivo6);
    planAlimentacion.agregarObjetivo(objetivo7);
    planAlimentacion.agregarObjetivo(objetivo8);
    planAlimentacion.agregarObjetivo(objetivo9);
    planAlimentacion.agregarObjetivo(objetivo10);
  
    expect(planAlimentacion.generarEvaluacion()).toBe("Excelente")
});

test("Ingreso 10 objetivos y tiene que devolverme la calificacion Muy buena", () =>{
    const planAlimentacion = new PlanAlimenticio();

    const objetivo1 = new Objetivo(null,true);
    const objetivo2 = new Objetivo(null,true);
    const objetivo3 = new Objetivo(null,true);
    const objetivo4 = new Objetivo(null,true);
    const objetivo5 = new Objetivo(null,true);
    const objetivo6 = new Objetivo(null,true);
    const objetivo7 = new Objetivo(null,true);
    const objetivo8 = new Objetivo(null,true);
    const objetivo9 = new Objetivo(null,true);
    const objetivo10 = new Objetivo(null,false);


    planAlimentacion.agregarObjetivo(objetivo1);
    planAlimentacion.agregarObjetivo(objetivo2);
    planAlimentacion.agregarObjetivo(objetivo3);
    planAlimentacion.agregarObjetivo(objetivo4);
    planAlimentacion.agregarObjetivo(objetivo5);
    planAlimentacion.agregarObjetivo(objetivo6);
    planAlimentacion.agregarObjetivo(objetivo7);
    planAlimentacion.agregarObjetivo(objetivo8);
    planAlimentacion.agregarObjetivo(objetivo9);
    planAlimentacion.agregarObjetivo(objetivo10);
  
    expect(planAlimentacion.generarEvaluacion()).toBe("Muy buena")
});

test("Ingreso 10 objetivos y tiene que devolverme la calificacion Buena", () =>{
    const planAlimentacion = new PlanAlimenticio();

    const objetivo1 = new Objetivo(null,true);
    const objetivo2 = new Objetivo(null,true);
    const objetivo3 = new Objetivo(null,true);
    const objetivo4 = new Objetivo(null,true);
    const objetivo5 = new Objetivo(null,true);
    const objetivo6 = new Objetivo(null,true);
    const objetivo7 = new Objetivo(null,false);
    const objetivo8 = new Objetivo(null,false);
    const objetivo9 = new Objetivo(null,false);
    const objetivo10 = new Objetivo(null,false);


    planAlimentacion.agregarObjetivo(objetivo1);
    planAlimentacion.agregarObjetivo(objetivo2);
    planAlimentacion.agregarObjetivo(objetivo3);
    planAlimentacion.agregarObjetivo(objetivo4);
    planAlimentacion.agregarObjetivo(objetivo5);
    planAlimentacion.agregarObjetivo(objetivo6);
    planAlimentacion.agregarObjetivo(objetivo7);
    planAlimentacion.agregarObjetivo(objetivo8);
    planAlimentacion.agregarObjetivo(objetivo9);
    planAlimentacion.agregarObjetivo(objetivo10);
  
    expect(planAlimentacion.generarEvaluacion()).toBe("Buena")
});

test("Ingreso 10 objetivos y tiene que devolverme la calificacion Regular", () =>{
    const planAlimentacion = new PlanAlimenticio();

    const objetivo1 = new Objetivo(null,false);
    const objetivo2 = new Objetivo(null,false);
    const objetivo3 = new Objetivo(null,false);
    const objetivo4 = new Objetivo(null,false);
    const objetivo5 = new Objetivo(null,false);
    const objetivo6 = new Objetivo(null,false);
    const objetivo7 = new Objetivo(null,false);
    const objetivo8 = new Objetivo(null,false);
    const objetivo9 = new Objetivo(null,false);
    const objetivo10 = new Objetivo(null,false);


    planAlimentacion.agregarObjetivo(objetivo1);
    planAlimentacion.agregarObjetivo(objetivo2);
    planAlimentacion.agregarObjetivo(objetivo3);
    planAlimentacion.agregarObjetivo(objetivo4);
    planAlimentacion.agregarObjetivo(objetivo5);
    planAlimentacion.agregarObjetivo(objetivo6);
    planAlimentacion.agregarObjetivo(objetivo7);
    planAlimentacion.agregarObjetivo(objetivo8);
    planAlimentacion.agregarObjetivo(objetivo9);
    planAlimentacion.agregarObjetivo(objetivo10);
  
    expect(planAlimentacion.generarEvaluacion()).toBe("Regular");
});

test("Ingreso un plan alimenticio con 4 comidas y me tiene que devolver la cantidad, 4", () =>{
    const planAlimenticion = new PlanAlimenticio();

    const comida1 = new Comida(null,null);
    const comida2 = new Comida(null,null);
    const comida3 = new Comida(null,null);
    const comida4 = new Comida(null,null);

    planAlimenticion.agregarComida(comida1);
    planAlimenticion.agregarComida(comida2);
    planAlimenticion.agregarComida(comida3);
    planAlimenticion.agregarComida(comida4);

    expect(planAlimenticion.cantComidas()).toBe(4);
});

test("2 comidas DM de un plan alimenticio y me tiene que devolver 2", ()=>{
    const planAlimentacion = new PlanAlimenticio();

    const comida1 = new Comida(null,"DM");
    const comida2 = new Comida(null,"DM");
    const comida3 = new Comida(null,"AC");

    planAlimentacion.agregarComida(comida1);
    planAlimentacion.agregarComida(comida2);
    planAlimentacion.agregarComida(comida3);

    expect(planAlimentacion.cantComidasDe("DM")).toBe(2);
});

test("2 comidas AC de un plan alimenticio y me tiene que devolver 2", ()=>{
    const planAlimentacion = new PlanAlimenticio();

    const comida1 = new Comida(null,"AC");
    const comida2 = new Comida(null,"AC");
    const comida3 = new Comida(null,"DM");

    planAlimentacion.agregarComida(comida1);
    planAlimentacion.agregarComida(comida2);
    planAlimentacion.agregarComida(comida3);

    expect(planAlimentacion.cantComidasDe("AC")).toBe(2);
});

test("Le mando un plan alimenticio con 3 comidas del tipo proteinas y me tiene que decir que es fuerte en proteinas (devuelve true)", ()=>{
    const planAlimentacion = new PlanAlimenticio();

    const ingrediente = new Ingrediente(null,"proteinas")

    const comida1 = new Comida(null,null);
    const comida2 = new Comida(null,null);
    const comida3 = new Comida(null,null);
    comida1.agregarIngrediente(ingrediente);
    comida2.agregarIngrediente(ingrediente);
    comida3.agregarIngrediente(ingrediente);

    planAlimentacion.agregarComida(comida1);
    planAlimentacion.agregarComida(comida2);
    planAlimentacion.agregarComida(comida3);

    expect(planAlimentacion.esFuerteEn("proteinas",50)).toBe(true);
});

test("Le mando un plan alimenticio con 2 comidas y me tiene que decir que es debil en proteinas (devuelve false)", ()=>{
    const planAlimentacion = new PlanAlimenticio();

    const ingrediente1 = new Ingrediente(null,"proteinas");
    const ingrediente2 = new Ingrediente(null,"minerales");

    const comida1 = new Comida(null,null);
    const comida2 = new Comida(null,null);

    comida1.agregarIngrediente(ingrediente1);

    comida2.agregarIngrediente(ingrediente2);
    comida2.agregarIngrediente(ingrediente2);

    planAlimentacion.agregarComida(comida1);
    planAlimentacion.agregarComida(comida2);

    expect(planAlimentacion.esFuerteEn("proteinas",50)).toBe(false);
});

test("Le mando un plan alimenticio con 2 comidas y me tiene que decir que es bien verde (true)", ()=>{
    const planAlimentacion = new PlanAlimenticio();

    const ingrediente1 = new Ingrediente(null,"vegetal");
    const ingrediente2 = new Ingrediente(null,"proteinas");

    const comida1 = new Comida(null,null);
    const comida2 = new Comida(null,null);

    comida1.agregarIngrediente(ingrediente1);
    comida1.agregarIngrediente(ingrediente2);

    comida2.agregarIngrediente(ingrediente1);


    planAlimentacion.agregarComida(comida1);
    planAlimentacion.agregarComida(comida2);



    expect(planAlimentacion.esFuerteEn("vegetal",35)).toBe(true);
});

test("Le mando un plan alimenticio con 2 comidas y me tiene que decir que NO es bien verde (false)", ()=>{
    const planAlimentacion = new PlanAlimenticio();

    const ingrediente1 = new Ingrediente(null,"vegetal");
    const ingrediente2 = new Ingrediente(null,"proteinas");

    const comida1 = new Comida(null,null);
    const comida2 = new Comida(null,null);

    comida1.agregarIngrediente(ingrediente2);
    comida1.agregarIngrediente(ingrediente2);

    comida2.agregarIngrediente(ingrediente1);


    planAlimentacion.agregarComida(comida1);
    planAlimentacion.agregarComida(comida2);



    expect(planAlimentacion.esFuerteEn("vegetal",35)).toBe(false);
});

test("Le paso un plan alimenticio con 3 colaciones y me tiene que devolver 3", () =>{
    const planAlimentacion = new PlanAlimenticio();

    const colacion1 = new Colacion("Manzana");
    const colacion2 = new Colacion("Cafe");
    const colacion3 = new Colacion("Gelatina");

    planAlimentacion.agregarColacion(colacion1);
    planAlimentacion.agregarColacion(colacion2);
    planAlimentacion.agregarColacion(colacion3);

    expect(planAlimentacion.cantDeColaciones()).toBe(3);
});