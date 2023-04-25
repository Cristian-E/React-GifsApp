import { shallow } from "enzyme"
import { GifGridItem } from "../../Components/GifGridItem"
import React from 'react'


describe('Pruebas en <GifGridItem />', () => {

    const url = "https://localhost/img.jsp"
    const title = "Soy un titulo"
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('debe renderizar el componente', () => {


        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar el title', () => {

        const p = wrapper.find("p")
        expect(p.text().trim()).toBe(title)

    })

    test('debe de tener el url y alt de los props', () => {

        const img = wrapper.find("img")

        expect(img.prop("src")).toBe(url)
        expect(img.prop("alt")).toBe(title)
    })

    test('debe de tener animate__bounce', () => {
        const div = wrapper.find("div")

        expect(div.prop("className").includes("animate__bounce")).toBe(true)


    })




})