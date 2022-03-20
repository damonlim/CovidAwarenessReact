/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

const TEST_IDS = {
  nameInputId: "name",
  tempInputId: "temperature",
  addBtnId: "submitBtn",
  reportTODOId: "reportTODOId",
};

describe("Covid-19 Awareness Test", () => {
  let getByTestId;
  let nameInput;
  let tempInput;
  let addButton;
  let list;

  beforeEach(() => {
    // const view = render(<App />);
    // getByTestId = view.getByTestId;
    // nameInput = getByTestId(TEST_IDS.nameInputId);
    // tempInput = getByTestId(TEST_IDS.tempInputId);
    // addButton = getByTestId(TEST_IDS.addBtnId);
    // list = getByTestId(TEST_IDS.reportTODOId);
  });

  afterEach(() => {
    cleanup();
  });

  it("should add valid patient in covid 19 registration process", () => {
    // fireEvent.change(nameInput, { target: { value: "Damon" } });
    // fireEvent.change(tempInput, { target: { value: "36.5" } });
    // fireEvent.click(addButton, { button: "0" });
    // expect report list to contain Damon
  });
});
