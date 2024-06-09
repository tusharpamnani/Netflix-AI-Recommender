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
import { useLocalSearchParams } from "expo-router";

// internal import
import MovieItem from "../components/MovieItem";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      let { data: movies, error } = await supabase
        .from("movies")
        .select("*")
        .range(0, 50);

      if (movies) {
        setMovies(movies);
      }
    };
    fetchMovies();
  }, []);

  const onPress = async () => {
    const {data} = await supabase.functions.invoke("embed", {
      body: { input: query },
    });
    console.log(data.embedding);

    const {data: movies} = await supabase.rpc('match_movies',{
      query_embedding: data.embedding,
      match_threshold: 0.78,
      match_count: 20,
    });
    setMovies(movies);
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
      <StatusBar />
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
