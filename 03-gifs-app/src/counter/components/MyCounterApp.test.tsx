import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', ()=>{
    test('should render the component', ()=>{
        render(<MyCounterApp />)
        screen.debug()
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain('Counter: 10')

        expect(screen.getByRole('button',{name: '+1' })).toBeDefined()
        expect(screen.getByRole('button',{name: '-1' })).toBeDefined()
        expect(screen.getByRole('button',{name: 'Reset' })).toBeDefined()
    })

    test('Should increment the counter ',()=>{
      render(<MyCounterApp />)
      const labelH1 = screen.getByRole('heading', {level:1})
      const buttonIncrement = screen.getByRole('button', {name: '+1'})
      fireEvent.click(buttonIncrement);
      expect(labelH1.innerHTML).toContain('Counter: 11')
    })

    test('Should decrement the counter ',()=>{
      render(<MyCounterApp />)
      const labelH1 = screen.getByRole('heading', {level:1})
      const buttonIncrement = screen.getByRole('button', {name: '-1'})
      fireEvent.click(buttonIncrement);
      expect(labelH1.innerHTML).toContain('Counter: 9')
    })
})