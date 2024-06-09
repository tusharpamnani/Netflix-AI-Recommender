// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar } from "react-native";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";

// internal import
import MovieItem from "../components/MovieItem";

export default function App() {
  const [movies, setMovies] = useState([]);

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

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.AndroidSafeArea}>
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
