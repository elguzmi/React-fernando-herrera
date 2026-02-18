import { describe, expect, test } from "vitest";
import {CustomHeader} from '../../shared/components/CustomHeader'
import { render , screen  } from "@testing-library/react";

describe("CustomHeader", ()=>{  
    const title = 'Titulo de prueba', desciption = 'descripcion de prueba';

    test("should render the title correctly", async ()=>{
        render(<CustomHeader  title={title} />)
        const h1Node = await screen.findByRole('heading',{level:1})
        expect(h1Node.textContent).toBe(title)
    });

    test('should render the description when provided',async ()=>{
        render(<CustomHeader  title={title}  description={desciption} />)
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').textContent).toBe(desciption)
    });

    test('should not render description when not provided',async ()=>{
        const { container} =  render(<CustomHeader  title={title}  />)
        // Cuando se usa el screen no puede encontrar el p porque no esta renderizado, por eso podemo extraer el container 
        expect(container.getElementsByTagName('p').length).toBe(0)
        // el screen tiene la ventaja que cuando son renderizados y cambian el screen se mantiene actualizado
        // el container si mantiene su original
    })
})