import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { supabase } from "./src/lib/supabase";
import { useEffect, useState } from "react";

// internal import
import MovieItem from "./src/components/MovieItem";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let { data: movies, error } = await supabase
        .from("movies")
        .select("*")
        .range(0, 24);

      // console.log(error)
      // console.log(JSON.stringify(movies, null, 2))

      if (movies) {
        setMovies(movies);
      }
    };
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
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
    paddingTop: 50,
  },
});
