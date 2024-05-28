import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DetailsScreen = ({ route, navigation }) => {
  const { todo, updateTodo } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.todoDescription}>{todo.description}</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title="Done"
          onPress={() => {
            const updatedTodo = { ...todo, title: `${todo.title} (done)` };
            updateTodo(updatedTodo);
            navigation.navigate("Home");
          }}
        />
      </View>
      <View style={styles.footer}>
        <Text>{new Date().toLocaleDateString()}</Text>
        <FontAwesome
          name="trash"
          size={24}
          onPress={() => {
            updateTodo({ ...todo, deleted: true });
            navigation.navigate("Home");
          }}
          style={styles.trashIcon}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  todoDescription: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  buttons: {
    marginBottom: 16,
  },
  trashIcon: {
    marginLeft: "auto",
  },
  footer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 8,
    alignItems: "center",
  },
});
