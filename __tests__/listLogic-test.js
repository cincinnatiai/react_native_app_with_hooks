import { filterByKeyword, sortByNameAscending, sortByPopulationDescending } from "../src/logic/listLogic";
import {
  mockFilteredByKeywordList,
  mockSortedByAscendingNameList,
  mockSortedByDescendingPopulationList,
  mockStatesList,
} from "../src/model/mocks";

describe("List logic helper functions", () => {

  it("should sort list by population descending", () => {
    let result = sortByPopulationDescending(mockStatesList);
    expect(result).toEqual(mockSortedByDescendingPopulationList);
  });

  it("should sort list by name ascending", () => {
    let result = sortByNameAscending(mockStatesList);
    expect(result).toEqual(mockSortedByAscendingNameList);
  });

  it("should filter list by keyword typed", () => {
    let mockKeyword = "Al";
    let result = filterByKeyword(mockStatesList, mockKeyword);
    expect(result).toEqual(mockFilteredByKeywordList);
  });
});
