import { beforeEach, describe ,expect,test , vi} from "vitest";
import { useGifs } from "./useGifs";
import { act, renderHook } from "@testing-library/react";
import axiosMockAdapter from 'axios-mock-adapter'  // impota paquete
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../mock-data/gifs.data";
import * as gifActions from "../actions/get-gifs-by-query.action";

describe('useGifs', ()=>{
  let mock = new axiosMockAdapter(giphyApi) // porque vamos a utilizarlo en todo el test
  beforeEach(()=>{
    vi.resetAllMocks()
    mock = new axiosMockAdapter(giphyApi)
  })
  test('should return default values and methods', ()=>{
    //TODO evaluar los valores por defectos
    const {result} = renderHook(()=> useGifs())
    expect(result.current.gifs).toHaveLength(0)  // default value
    expect(result.current.previousSearches).toHaveLength(0) // default value
    expect(result.current.handleSearch).toBeDefined() // default value
    expect(result.current.handledSearchClick).toBeDefined() // default value
  })

  test('should return a list of gifs', async ()=>{
    //TODO evaluar que devuelva los 10 gifs
    mock.onGet('/search').reply(200, giphySearchResponseMock) // sobreescribir las respuestas de la api
    const {result} = renderHook(()=> useGifs())
    await act(async ()=>{
      await result.current.handledSearchClick('spider-man')
    })
    expect(result.current.gifs).toHaveLength(10)
  })

  test('Should return a list of gifs when handledTermClick is called',async()=>{
    mock.onGet('/search').reply(200, giphySearchResponseMock) // sobreescribir las respuestas de la api
    const {result} = renderHook(()=> useGifs())
    await act(async ()=>{
      await result.current.handleSearch('spider-man')
    })
    expect(result.current.gifs).toHaveLength(10)
    expect(result.current.previousSearches).toHaveLength(1)
    expect(result.current.previousSearches[0]).toBe('spider-man')
  })

  test('Should return a list of gifs from cache',async()=>{
    mock.onGet('/search').reply(200, giphySearchResponseMock) // sobreescribir las respuestas de la api
    const {result} = renderHook(()=> useGifs())

    await act(async ()=>{
      // se realiza la busqeuda con spiderman , no esta en cache entonces se realiza la peticion a la api
      await result.current.handleSearch('spider-man')
    })
    expect(result.current.gifs).toHaveLength(10)

    // se espia la funcion getGifsByQueryAction para que devuelva un error ya que no deberia llamarse
    vi.spyOn(gifActions, 'getGifsByQueryAction')
      .mockRejectedValue(new Error('This is my custom error'))

    await act(async ()=>{
      // aqui como se volvio a buscar spiderman debe salir del cache entonces se traen los resultsdos del cache
      await result.current.handleSearch('spider-man')
    })
    expect(result.current.gifs).toHaveLength(10)
  })

  test('Should return no more than 8 previous searches',async()=>{
    mock.onGet('/search').reply(200, giphySearchResponseMock) 
    const {result} = renderHook(()=> useGifs())
    
    for(let i = 0; i < 10; i++){
      await act(async ()=>{
        await result.current.handleSearch(`spider-man-${i}`)
      })
    }
    console.log(result.current.previousSearches)
    expect(result.current.previousSearches).toHaveLength(8)
    expect(result.current.previousSearches).toStrictEqual([
      'spider-man-9',
      'spider-man-8',
      'spider-man-7',
      'spider-man-6',
      'spider-man-5',
      'spider-man-4',
      'spider-man-3',
      'spider-man-2'
    ])

  })
})