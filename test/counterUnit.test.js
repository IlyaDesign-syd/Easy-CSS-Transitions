import {render, fireEvent, screen} from  "@testing-library/react"
import CounterComp from "../comps/counterComp"
import { React } from 'react';

test("assert counter test", () => {
    console.log('testing...')
    render(<CounterComp />);

    const counter = screen.getByTestId("counterElem");
    const increment = screen.getByTestId("buttonIncr");

    expect(counter).toHaveTextContext("0")
    fireEvent.click(increment);
    expect(counter).toHaveTextContext("1")

})  