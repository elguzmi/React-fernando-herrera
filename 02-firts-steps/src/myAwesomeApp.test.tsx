import {describe, expect, test} from 'vitest'
import { MyAwesomeApp } from './MyAwesomeApp'
import { render , screen ,} from '@testing-library/react'

describe('myAwesomeApp',()=>{
  test('should render firts name and lastname' , ()=>{
    // Crea como un dom virtual
    const {container} = render(<MyAwesomeApp />);
    screen.debug();
    //el componente renderizado en el DOM
    //console.log(container.innerHTML);

    const textH1 = container.querySelector('h1');
    console.log(textH1?.innerHTML);
  })
})