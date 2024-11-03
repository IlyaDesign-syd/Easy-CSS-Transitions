import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages";
import store from '../redux/store';
import { Provider } from 'react-redux'
import "jest-canvas-mock";

import MyApp from "../pages/_app";

describe("Animation App", () => {
    it("renders the title", () => {
        render(<Provider store={store}><Home/></Provider>);
        // check if all components are rendered
        expect(screen.queryByTestId("main-title")).toBeInTheDocument();
        expect(screen.queryByTestId("frame-hover")).toBeInTheDocument();
    }),
    it("renders the stage", () => {
        render(<Provider store={store}><Home/></Provider>);
        // check if all components are rendered
        expect(screen.queryByTestId("Stage")).toBeInTheDocument();
    }),
    it("renders the timeline", () => {
        render(<Provider store={store}><Home/></Provider>);
        // check if all components are rendered
        expect(screen.queryByTestId("Timeline")).toBeInTheDocument();
    })
});