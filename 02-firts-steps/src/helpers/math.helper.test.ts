import {describe, expect, test} from 'vitest'
import { add } from './math.helper'

//Es una agrupacion de tests
describe('add', ()=>{
    test('should add two positive number',()=>{
        // ! 1. Arrange
    
        const a = 1;
        const b = 3;
    
        // ! 2. Act
        const result = add(a,b);
    
        // ! 3. Assert
        expect(result).toBe(4);
        //No se hace de esta manera, se hace con expect
        // if(result  !== 2){
        //     throw new Error('La suma de 1 y 1 no es 2')
        // }
    })

    test('should add two negative number',()=>{
        const a = -1;
        const b = -3;
        const result = add(a,b);
        expect(result).toBe(-4);
    })

})
