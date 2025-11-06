import type { GiphyResponse } from "../interfaces/giphy.response"
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQueryAction = async (query: string): Promise<Gif[]> => {
  const response  = await giphyApi.get<GiphyResponse>('/search' , {
    params : {
      q:query,
      limit :10
    }
  })
  // retorna un array de gifs con la estructura de la interfaz Gif
  return response.data.data.map(gif=>({
    id:gif.id,
    title:gif.title,
    url:gif.images.original.url,
    width:parseInt(gif.images.original.width),
    height:parseInt(gif.images.original.height)
  }))
}