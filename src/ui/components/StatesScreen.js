import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, Text, TextInput, View, Button } from "react-native";
import { ListItem } from "./ListItem";
import styles from "../styles";
import { Status } from "../../model/status";
import useApi from "../../hooks/useApi";
import { filterByKeyword, sortByNameAscending, sortByPopulationDescending } from "../../logic/listLogic";

const StatesScreen = () => {

  const [filterBy, setFilterBy] = useState("");
  const [states, setStates] = useState(data);

  const { data, status, fetchApiData } = useApi("https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest");

  useMemo(() => {
    if (filterBy === "") {
      setStates(sortByPopulationDescending(data));
    } else {
      let filteredStates = filterByKeyword(data, filterBy);
      setStates(sortByNameAscending(filteredStates));
    }

  }, [data, filterBy]);

  useEffect(() => {
    if (status === Status.NONE) {
      fetchApiData();
    }
  }, [status]);

  return (
    <View style={styles.frame}>
      <Text style={styles.debug} testID={"statusHeader"}>Data status is: {status}</Text>
      <Text style={styles.h3}>Filter</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type a US state:"
        onChangeText={(newInput) => {
          setFilterBy(newInput);
        }}
        value={filterBy}
      />
      {status === Status.LOADING &&
        <ActivityIndicator
          size="large"
          color="gray"
          style={styles.indicator} />}
      {status === Status.SUCCESS && (
        <FlatList
          data={states}
          renderItem={({ item }) => (
            <ListItem
              stateName={item["Slug State"]}
              population={item["Population"]} />
          )}
          ListFooterComponent={
            <View style={{ height: 40 }} />
          }
        />
      )}
      {status === Status.FAILURE &&
        <Button title="Refresh" onPress={fetchApiData} />
      }
    </View>
  );
};

export default StatesScreen;
