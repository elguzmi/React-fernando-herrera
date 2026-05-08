import { describe, expect ,test, vi} from "vitest";
import { SearchInput } from "./SearchInput";
import { fireEvent, render ,screen, waitFor} from "@testing-library/react";

describe('SearchInput', ()=>{
  // la primera prueba debe ser algo que verifique como esta el objeto
    test('should render the component', ()=>{
        const {container} = render(<SearchInput onSearch={()=>{}}  />)
        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined()
        expect(screen.getByRole('button')).toBeDefined()
    })

    test('should call onSearch with correct value after 700ms', async ()=>{
      const onSearch = vi.fn((query:string)=>{console.log(query)})
      const {container} = render(<SearchInput onSearch={onSearch}  />)
      const input = container.querySelector('input') as HTMLInputElement
      fireEvent.change(input, {target: {value: 'spider-man'}})
      expect(input.value).toBe('spider-man')

      await waitFor(()=>{
        expect(onSearch).toHaveBeenCalledTimes(1)
        expect(onSearch).toHaveBeenCalledWith('spider-man')
      },{timeout: 800, onTimeout: (error: Error) => {
        console.log(error) 
        return new Error('Se ha desfasado el tiempo de espera')
      },})
    })
    
    test('Should call only once with the last value (debounce)', async ()=>{
      const onSearch = vi.fn((query:string)=>{console.log(query)})
      const {container} = render(<SearchInput onSearch={onSearch}  />)
      const input = container.querySelector('input') as HTMLInputElement
      fireEvent.change(input, {target: {value: 's'}})
      fireEvent.change(input, {target: {value: 'w'}})
      fireEvent.change(input, {target: {value: 'sx'}})

      await waitFor(()=>{
        expect(onSearch).toHaveBeenCalledTimes(1)
        expect(onSearch).toHaveBeenCalledWith('sx')
      })
    })

    test('Should call onSearch when the button is clicked', async ()=>{
      const onSearch = vi.fn((query:string)=>{console.log(query)})
      const {container} = render(<SearchInput onSearch={onSearch}  />)
      const input = container.querySelector('input') as HTMLInputElement
      fireEvent.change(input, {target: {value: 's'}})
      const button = screen.getByRole('button')
      fireEvent.click(button)
      expect(onSearch).toHaveBeenCalledTimes(1)
      expect(onSearch).toHaveBeenCalledWith('s')
    })

    test('Should the input has the correct placeholder value ', ()=>{
      render(<SearchInput placeholder="Buscar Gifs" onSearch={()=>{}}></SearchInput>)
      screen.debug();
      expect(screen.getByPlaceholderText('Buscar Gifs')).toBeDefined()
    })
})