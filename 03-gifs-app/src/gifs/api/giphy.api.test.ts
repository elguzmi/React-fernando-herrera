import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphy Api',()=>{
  test('should be configured correctly', ()=>{
    expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs')
    const {lang , api_key} = giphyApi.defaults.params
    expect(lang).toBeDefined()
    expect(lang).toBe('es')
    expect(api_key).toBeDefined()
    expect(api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY)

    //toStrictEqual para evaluar el objeto completo en profundidad
    expect(giphyApi.defaults.params).toStrictEqual({
      lang:'es',
      api_key:import.meta.env.VITE_GIPHY_API_KEY
    })
    //expect(giphyApi.defaults.params.lang).toBe('es')
  })
})