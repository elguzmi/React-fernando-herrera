import {describe, expect, test} from 'vitest'
import { MyAwesomeApp } from './MyAwesomeApp'
import { render , screen ,} from '@testing-library/react'

describe('myAwesomeApp',()=>{
  test('should render firts name and lastname' , ()=>{
    // Crea como un dom virtual
    const {container} = render(<MyAwesomeApp />); // el container no se actualiza con eventos por eso se utiliza screen
    //el componente renderizado en el DOM
    //console.log(container.innerHTML);

    const textH1 = container.querySelector('h1'); // regresa el primer h1 que encuentre
    expect(textH1?.innerHTML).toContain('Santiago');

   // Si falla una prueba no se va a ejecutar el siguiente test

    const textH3 = container.querySelector('h3'); 
    expect(textH3?.innerHTML).toContain('Guzman');
  })

  test('should render the firts name and lastname - Screen',()=>{
    render(<MyAwesomeApp />);
    screen.debug();
    //const textH1 = screen.getByRole('heading',{level:1});
    const textH1 = screen.getByTestId('firts-name-title');
    expect(textH1.innerHTML).toContain('Santiago');

    const textH3 = screen.getByRole('heading',{level:3});
    expect(textH3.innerHTML).toContain('Guzman');

  })
  

  test('should match with snapshot',()=>{
    // el snapshot es un caracteristica de vitest
    const {container} = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  })

  test('should match snapshot with screen',()=>{
    render(<MyAwesomeApp />);
    expect(screen.getByTestId('div-app')).toMatchSnapshot();
  })

})