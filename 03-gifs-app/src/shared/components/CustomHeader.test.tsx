import { describe, expect, test } from "vitest";
import {CustomHeader} from '../../shared/components/CustomHeader'
import { render } from "@testing-library/react";

describe("CustomHeader", ()=>{  
    const title = 'Titulo de prueba', desciption = 'descripcion de prueba';

    test("should render the title correctly", async ()=>{
        const {findByRole } = render(<CustomHeader  title={title} />)
        const h1Node =  await findByRole('heading',{level:1})
        console.log(h1Node.textContent)
        expect(h1Node.textContent).toBe(title)
    });

    test('should render the description when provided',async ()=>{
        const { findByRole } =  render(<CustomHeader  title={title}  description={desciption} />)
        const pElement =  await findByRole('paragraph')
        expect(pElement.textContent).toBe(desciption)
    });

    test('should not render description when not provided',async ()=>{
        const { container} =  render(<CustomHeader  title={title}  />)
        expect(container.getElementsByTagName('p').length).toBe(0)
    })
})