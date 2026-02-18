import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe , expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', ()=>{

    beforeEach(()=>{
        // se ejecuta antes de cada test
        console.log('se ejecuto')
        // se puede utilizar para reinicializar variables
    })
    test('should initialize with default value of 10',()=>{
       // UN hook solo puede ser llamado dentro d eun functional component
       // tenemos que rendrizar el hook sobre algo
       const {result} = renderHook(()=> useCounter())  // el result es todo lo que custom hook retorna
       expect(result.current.counter).toBe(10)
    })

    test('should initialize with default value of 20',()=>{
        // Un hook solo puede ser llamado dentro d eun functional component
        // tenemos que rendrizar el hook sobre algo
        const initialValue = 20
        const {result} = renderHook(()=> useCounter(initialValue))  // el result es todo lo que custom hook retorna
        expect(result.current.counter).toBe(initialValue)
     })

    test('Shloud increment counter when handled add is called', ()=>{
        const {result} = renderHook(()=> useCounter());

        // Cada modificacion de estado debe tener su propio act
        act(()=>{
            result.current.handledAdd();
        })
        expect(result.current.counter).toBe(11);
    })

    test('Should subtract 1 from counter when handled subtract is called', ()=>{
        const { result } = renderHook(()=> useCounter());
        act(()=>{
            result.current.handledSubtract();
        })
        expect(result.current.counter).toBe(9);
    })

    test('Should reset the default value when handled reset is called', ()=>{
        const initialValue = 20;
        // para renderizar un hook
        const { result } = renderHook(()=> useCounter(initialValue));
        act(()=>{
            result.current.handledAdd();
            result.current.handledAdd();
        })
        act(()=>{
            result.current.handledReset()
        }) 
        //preferible hacerlo por partes 
        expect(result.current.counter).toBe(initialValue);
    })
})