import { getGif } from "../../helpers/getGifs";

describe('Pruebas en el helper', () => {
    test('debe de traer 10 objetos', async () => {

        const gif = await getGif("one punch man")

        expect(gif.length).toBe(10)

    })
})