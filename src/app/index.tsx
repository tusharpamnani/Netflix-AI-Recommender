// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";

// internal import
import MovieItem from "../components/MovieItem";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const { data: movies } = await supabase
        .from("movies")
        .select("*")
        .range(0, 24);
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  const onPress = () => {
    setQuery("");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            placeholder="Search for movies"
            placeholderTextColor={"gray"}
            style={styles.input}
            value={query}
            onChangeText={setQuery}
          />
          <Button title="Search" onPress={onPress} />
        </View>
        <FlatList data={movies} renderItem={MovieItem} />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181413",
  },
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    padding: 15,
    margin: 10,
    borderRadius: 15,
    color: "white",
  },
});
