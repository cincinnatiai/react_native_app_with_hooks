import { Text, View } from "react-native";
import styles from "../styles";

export const ListItem = ({ stateName, population }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.h1}>{stateName}</Text>
      <Text style={styles.h2}>Population: {population}</Text>
    </View>
  );
};
