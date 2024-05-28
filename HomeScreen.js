import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodos) => {
    setTodos((prevTodos) => [...prevTodos, ...newTodos]);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { todo: item, updateTodo })}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.arrow}>&gt;</Text>
      </View>
    </TouchableOpacity>
  );

  const updateTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos
        .map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
        .filter((todo) => !todo.deleted)
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Add"
          onPress={() => navigation.navigate("Add", { addTodo })}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item, index) => item?.id?.toString() ?? index.toString()}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    flex: 1,
  },
  arrow: {
    marginLeft: 10,
  },
});
