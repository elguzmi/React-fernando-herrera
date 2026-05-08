import { describe, test  , beforeEach, expect, vi } from "vitest";
import { getGifsByQueryAction } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../mock-data/gifs.data";
import axiosMockAdapter from 'axios-mock-adapter'  // impota paquete
describe('getGifByQueryAction', ()=>{
  let mock = new axiosMockAdapter(giphyApi) // porque vamos a utilizarlo en todo el test
  beforeEach(()=>{
    //vi.resetAllMocks()
    mock = new axiosMockAdapter(giphyApi)
  })
  const query = 'spider-man'
  // test('should return list of gifs', async ()=>{
  //   vi.spyOn(giphyApi , 'get').mockResolvedValueOnce({data:gifsMock}) 
  //   const gifs = await getGifsByQueryAction(query)
  //   const [ firstGif ] = gifs
  //   expect(firstGif).toEqual({
  //     id: expect.any(String),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //     width: expect.any(Number),
  //     height: expect.any(Number),
  //   })
  //   //expect(gifs).toBeDefined()
  // })

  
  test('should return list of gifs', async ()=>{

    // este mock queda expuesto cuando se ejecuta para las proximas peticiones
    mock.onGet('/search').reply(200, giphySearchResponseMock) // sobreescribir las respuestas de la api
    const gifs = await getGifsByQueryAction(query)
    expect(gifs).toHaveLength(10)
    gifs.forEach(gif =>{
      expect(typeof gif.id ).toBe('string')
      expect(typeof gif.title ).toBe('string')
      expect(typeof gif.url ).toBe('string')
      expect(typeof gif.width ).toBe('number')
      expect(typeof gif.height ).toBe('number')
    })

  })

  test('should return an empty list of gifs if query is empty', async ()=>{
    mock.restore()  // restaurar la instancia
    const gifs = await getGifsByQueryAction('')
    expect(gifs).toHaveLength(0)
  })

  test('should handled error when API return error', async ()=>{
    // spy = para espiar el comportamiento de algo
    const consoleErrorSpy = vi.spyOn(console , 'error').mockImplementation(()=>{
      // aqui lo que se va a ejecutar en reemplazo a la funcion
    })
    
    mock.onGet('/search').reply(400, {data:{message:'Bad Request'}}) // 400 bad request
    const gifs = await getGifsByQueryAction(query)
    expect(gifs).toHaveLength(0)
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything()); // espera que sea llamado con algo 

  })
})