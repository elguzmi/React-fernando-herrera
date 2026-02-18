import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render ,screen} from "@testing-library/react";

const handleAddMock = vi.fn();
const handledSubtract = vi.fn();
const handleReset = vi.fn();

// simulacion de este path
vi.mock('../hooks/useCounter', ()=>({
  useCounter: ()=>({
    counter: 20,
    handledAdd: handleAddMock,
    handledSubtract: handledSubtract, // es una funcion especial de vitest , que permite saber cunaod fue llamada con que argumentos etc..
    handledReset: handleReset,
  })
}))

describe('MyCounterApp2', ()=>{
  test('Should render the component', ()=>{
    render(<MyCounterApp />)
    screen.debug();
    expect(screen.getByRole('heading',{level:1}).innerHTML).toContain('Counter: 20')
    expect(screen.getByRole('button',{name: '+1' })).toBeDefined()
    expect(screen.getByRole('button',{name: '-1' })).toBeDefined()
    expect(screen.getByRole('button',{name: 'Reset' })).toBeDefined()
  })

  test('Should call hanldle Add if button is clicked', ()=>{
    render(<MyCounterApp />)

    const button = screen.getByRole('button',{name: '+1' })
    fireEvent.click(button);
    expect(handleAddMock).toHaveBeenCalled();  // saber que esa funcion fue llamada
  })
})