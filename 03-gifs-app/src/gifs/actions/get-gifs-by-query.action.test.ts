import { describe, test , vi , beforeEach, expect } from "vitest";
import { getGifsByQueryAction } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { gifsMock } from "../../mock-data/gifs.data";
import axiosMockAdapter from 'axios-mock-adapter'  // impota paquete
describe('getGifByQueryAction', ()=>{
  beforeEach(()=>{
    vi.resetAllMocks()
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

  const mock = new axiosMockAdapter(giphyApi) // porque vamos a utilizarlo en todo el test
  test('should return list of gifs', async ()=>{
    mock.onGet('/search').reply(200, gifsMock)
    const gifs = await getGifsByQueryAction(query)
    console.log(gifs)

  })
})