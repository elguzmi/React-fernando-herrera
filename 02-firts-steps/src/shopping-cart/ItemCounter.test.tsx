import { render, screen } from "@testing-library/react";
import { describe , test , expect, } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter',()=>{
    // primera prueba - montar el componente con lo minimo necesario

    test('should render the component with the initial values',()=>{


        // ! 1. Arrange
        const name = 'Nintendo switch 2'
        render(<ItemCounter name={name} />)
        screen.debug();

        const buttons = screen.getAllByRole('button')
        //console.log(buttons.length)
        expect(buttons.length).toBe(2);  // espero que hayan dos botonos uno de agregar y otro de disminuir

        expect(screen.getAllByText(name)).toBeDefined()  // que este definido
        expect(screen.getAllByText(name)).not.toBeNull()  // que no sea null
    })

    test('Should render with custom quantity',()=>{
        const name = 'Nintendo switch 2';
        const quantity = 10;
        render(<ItemCounter name={name} quantity={quantity} />)

        expect(screen.getByText(quantity)).toBeDefined()  
    })
})