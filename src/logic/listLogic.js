export function sortByPopulationDescending(states) {
  return[...states].sort((a, b) =>
    b.Population - a.Population);
}

export function sortByNameAscending(states) {
  return states.slice().sort((a, b) =>
    a["Slug State"].localeCompare(b["Slug State"]));
}

export function filterByKeyword(states, keyword) {
  return states.filter((state) =>
    state["Slug State"].toLowerCase().startsWith(keyword.toLowerCase()));
}
