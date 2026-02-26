import { describe, expect, test } from "vitest";
import axiosMockAdapter from "axios-mock-adapter";
import { getGifsByQueryAction } from "./get-gifs-by-query.action";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../../test/mocks/giphy.response.data";

describe('getGifsByQueryAction',()=>{

    // test('should return a list of gifts', async ()=>{
    //     const gifs = await getGifsByQueryAction('goku');
    //     const [gifs1] = gifs; 
    //     expect(gifs.length).toBe(10);
    //     expect(gifs1).toMatchObject({
    //         id: expect.any(String),  // signifcia esperamos cualquier string
    //         title: expect.any(String),
    //         url: expect.any(String),
    //         width: expect.any(Number),
    //         height: expect.any(Number)
    //     })
    // })

    const mock = new axiosMockAdapter(giphyApi);
    test('should return a list of gifts', async ()=>{
        // npm install axios-mock-adapter --save-dev   -> podemos hacer simulacion de axioss
        mock.onGet('/search').reply(200 ,giphySearchResponseMock )  // estamos sobreescribiendo la peticion a la api
        const gifs = await getGifsByQueryAction('goku');
        expect(gifs.length).toBe(10);

        gifs.forEach(gifs =>{
            expect(typeof gifs.id ).toBe('string')
            expect(typeof gifs.title ).toBe('string')
            expect(typeof gifs.url ).toBe('string')
            expect(typeof gifs.width ).toBe('number')
            expect(typeof gifs.height ).toBe('number')
        })
    })
})