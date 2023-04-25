import { shallow } from "enzyme";
import { AddCategory } from "../../Components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    const setCategories = () => { }
    const wrapper = shallow(<AddCategory setCategories={setCategories} />)

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar la caja de textp', () => {
        const input = wrapper.find("input")
        const value = "hola mundo"

        input.simulate("change", { target: { value } })

        expect(wrapper.find("p").text().trim()).toBe(value)

    })

})


