import React, { useState, useLayoutEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddScreen = ({ route, navigation }) => {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const { addTodo } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Done"
          onPress={() => {
            addTodo(todos);
            navigation.goBack();
          }}
        />
      ),
    });
  }, [navigation, todos, addTodo]);

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      const newTodo = { id: Date.now(), title: todo, description: description };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodo("");
      setDescription("");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TextInput
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        multiline={true}
        numberOfLines={4}
        height={100}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    marginTop: 40,
    textAlign: "center",
    borderRadius: 10,
  },
});
