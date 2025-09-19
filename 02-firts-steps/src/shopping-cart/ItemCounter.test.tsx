import { fireEvent, render, screen } from "@testing-library/react";
import { describe , test , expect, } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter',()=>{
    // primera prueba - montar el componente con lo minimo necesario

    test('should render the component with the initial values',()=>{


        // ! 1. Arrange
        const name = 'Nintendo switch 2'
        render(<ItemCounter name={name} />)
       // screen.debug();

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

    test('Should increase the quantity when the button +1 is clicked',()=>{
        render(<ItemCounter name="Test item" quantity={1} />)  // renderizar el componente
        const [ buttonAdd ] = screen.getAllByRole('button');
       // console.log(buttonAdd.innerHTML);
        fireEvent.click(buttonAdd);

        expect(screen.getByText(2)).toBeDefined();
    })

    test('should decrease count when -1 buttons is pressed', ()=>{
        // quantity inition  = 5
        render(<ItemCounter name="Test item"  quantity={5}/>)

        const [ , buttonSubtract ] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText(4)).toBeDefined();
    })

    test('Should not decrease count when -1 buttons is pressed and quantity is 1',()=>{
        const quantity = 1;
        render(<ItemCounter name="test item" quantity={quantity}/>)

        const buttonSubtract = screen.getByText('-1');
        console.log(buttonSubtract.innerHTML , 'hola');
        fireEvent.click(buttonSubtract);

        expect(screen.getByText(quantity)).toBeDefined();
    })

    test('should be red when quantity is 1',()=>{
        const quantity = 1;
        const name = 'test item';
        render(<ItemCounter name={name} quantity={quantity}/>)

        const itemText = screen.getByText(name);
        //console.log(itemText.style)  // cuando se hace con style
        console.log(itemText.className)
        expect(itemText.className).toContain('color-red')
    })

    test('should be black when quantity is greater than 1',()=>{
        const quantity = 4;
        const name = 'test item';
        render(<ItemCounter name={name} quantity={quantity}/>)

        const itemText = screen.getByText(name);
        //console.log(itemText.style)  // cuando se hace con style
        console.log(itemText.className)
        expect(itemText.className).not.toContain('color-red')
    })
})