import {describe, expect, test} from 'vitest'
import { add , substract , multiply} from './math.helper'

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

describe('substract',()=>{
    test('should substract two positive number',()=>{
        const a = 1;
        const b = 3;

        const result = substract(a,b);
        console.log({result})

        expect(result).toBe( a - b );
    })

    test('should substract two negative number',()=>{
        const a = -2;
        const b = -4;

        const result = substract(a,b);
        console.log({result})

        expect(result).toBe( a - b );
    })
})


describe('multiply',()=>{

    test('should multiply two positive numbers',()=>{
        // ! 1. Arrange
        const number1 = 7;
        const number2 = 9;

        // ! 2. Act
        const result = multiply(number1,number2);

        // ! 3. Assert
        expect(result).toBe( number1 * number2 );
    })

    test('Should result be 0 when multiply by 0',()=>{
        // ! 1. Arrange
        const number1 = 0;
        const number2 = 4;

        // ! 2. Act
        const result = multiply(number1, number2);

        // ! 3. Assert
        expect(result).toBe( 0 );
    })

    test('Should result be negative when multiply two negative numbers',()=>{
        // ! 1. Arrange
        const number1 = -10;
        const number2 = 5;

        // ! 2. Act
        const result = multiply(number1, number2);

        // ! 3. Assert
        expect(result).toBeLessThan( 0 );
    })
    
})