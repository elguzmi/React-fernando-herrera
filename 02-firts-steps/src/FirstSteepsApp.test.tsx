import { render , screen } from "@testing-library/react";
import { describe, test,  expect, vi, afterEach } from "vitest";
import { FirstSteepsApp } from "./FirstSteepsApp";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn( (props: unknown)=>{
  return (
    <div data-testid="item-counter" ></div>
  )
})

vi.mock('./shopping-cart/ItemCounter', ()=>({
  ItemCounter : (props : unknown)=> mockItemCounter(props)
}))

// vi.mock('./shopping-cart/ItemCounter', ()=>({
//   ItemCounter : (props : unknown)=> 
//   <div data-testid="item-counter" 
//     name={props.name} 
//     quantity={props.quantity}>
//     </div>
// }));

describe('FirstSteepsApp',()=>{
   //Pasos del ciclo de vida de un test

   afterEach(()=>{
      vi.clearAllMocks(); // Limpiar los mocks
   })

    test('should match snapchot',()=>{
        const {container} = render(<FirstSteepsApp />)
        expect(container).toMatchSnapshot();
        screen.debug();
    })

    test('should render the correct number of item counter components',()=>{
      render(<FirstSteepsApp />)
      screen.debug();
      const itemsCounterComponents = screen.getAllByTestId('item-counter')
      expect(itemsCounterComponents.length).toBe(3);
    })

    test('should render item counter with correct properties',()=>{
      render(<FirstSteepsApp />)

      expect(mockItemCounter).toHaveBeenCalledTimes(3);

      // esos son los parametros que se le pasan al mockItemCounter
      expect(mockItemCounter).toHaveBeenCalledWith(
        {name: 'Nintendo switch 2', quantity: 1}
      );
      expect(mockItemCounter).toHaveBeenCalledWith(
        {name: 'Playstation 5', quantity: 2}
      );
      expect(mockItemCounter).toHaveBeenCalledWith(
        {name: 'Xbox Series X', quantity: 3}
      );
    })
})