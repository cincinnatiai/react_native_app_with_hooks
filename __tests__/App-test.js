import "react-native";
import React from "react";
import App from "../App";
import fetchStates from "../src/network/apiService";
import renderer, { act } from "react-test-renderer";

jest.mock("../src/network/apiService");

describe("App", () => {
  it("should render app without crashing", async () => {
    fetchStates.mockRejectedValueOnce("Error");
    await act(() => {
      renderer.create(<App />);
    });
  });
});
