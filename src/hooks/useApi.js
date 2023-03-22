import axios from "axios";
import { useState } from "react";
import { Status } from "../model/status";

function useApi(url) {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState(Status.NONE);

    async function fetchApiData() {
        try {
            let response = await axios.get(url);
            console.log(response.data.data);
            setData(response.data.data);
            setStatus(Status.SUCCESS);
        } catch (error) {
            console.log("Error fetching data.");
            setData(null);
            setStatus(Status.FAILURE);
        }
    }
    return { data, status, fetchApiData }
}

export default useApi;