import renderer from "react-test-renderer";
import fetchStates from "../src/network/apiService";
import StatesScreen from "../src/ui/components/StatesScreen";
import { Status } from "../src/model/status";
import { render, waitFor } from "@testing-library/react-native";
import { mockStatesList } from "../src/model/mocks";

jest.mock("../src/network/apiService");

afterEach(() => {
  jest.resetAllMocks();
});


describe("StatesScreen", () => {

  it("should render states screen with data", async () => {
    fetchStates.mockResolvedValue(mockStatesList);
    await waitFor(async () => {
      renderer.create(<StatesScreen />);
    });
  });

  it("should render states screen with error", async () => {
    fetchStates.mockRejectedValueOnce("Error");
    await waitFor(() => {
      renderer.create(<StatesScreen />);
    });
  });
});

describe("Status", () => {
  it(
    "should render a loading status on unresolved promise",
    async () => {
      fetchStates.mockImplementation(() =>
        new Promise(() => {
        }), // Never resolve to keep loading state
      );

      const { getByTestId } = render(<StatesScreen />);

      await waitFor(async () => {
        const header = getByTestId("statusHeader").children;
        expect(header).toEqual(["Data status is: ", Status.LOADING]);
      });
    });

  it("should render a success status on data received", async () => {
    fetchStates.mockResolvedValue(mockStatesList);

    const { getByTestId } = render(<StatesScreen />);

    await waitFor(async () => {
      const header = getByTestId("statusHeader").children;
      expect(header).toEqual(["Data status is: ", Status.SUCCESS]);
    });
  });


  it("should render a failure status on error received", async () => {
    fetchStates.mockRejectedValueOnce("Error");

    const { getByTestId } = render(<StatesScreen />);

    await waitFor(async () => {
      const header = getByTestId("statusHeader").children;
      expect(header).toEqual(["Data status is: ", Status.FAILURE]);
    });
  });
});
