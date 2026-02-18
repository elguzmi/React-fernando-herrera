import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphy Api',()=>{
  test('should be configured correctly', ()=>{
    console.log(giphyApi)
    expect(giphyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs')
    const {lang} = giphyApi.defaults.params
    expect(lang).toBeDefined()
    expect(lang).toBe('es')
    //expect(giphyApi.defaults.params.lang).toBe('es')
  })
})