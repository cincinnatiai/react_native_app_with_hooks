import axios from "axios";

const statePopulationEndpoint =
  "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest";

const getAllStatesInfo = async () => {
  try {
    let response = await axios.get(statePopulationEndpoint);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching data.");
    return [];
  }
};

export default getAllStatesInfo;
