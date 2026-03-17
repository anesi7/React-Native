import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView
} from "react-native";

// LISTA E QYTETEVE TE KOSOVES
const cities = [
  "Prishtina",
  "Prizren",
  "Peja",
  "Gjakova",
  "Ferizaj",
  "Gjilan",
  "Mitrovica",
  "Podujeva",
  "Vushtrri",
  "Suhareka"
];

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "YOUR_API_KEY_HERE";

  const getWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      // CURRENT WEATHER
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        throw new Error("City not found");
      }

      setWeather(data);

      // FORECAST (5 dite)
      const res2 = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data2 = await res2.json();

      setForecast(data2.list.slice(0, 5));
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Kosovo 🇽🇰</Text>

      {/* QYTETET */}
      <ScrollView horizontal style={{ marginBottom: 20 }}>
        {cities.map((c, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => getWeather(c)}
            style={styles.cityButton}
          >
            <Text>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {loading && <ActivityIndicator size="large" color="#fff" />}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* CURRENT WEATHER */}
      {weather && (
        <View style={styles.card}>
          <Text style={styles.city}>{weather.name}</Text>

          <Image
            source={{
              uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
            }}
            style={{ width: 100, height: 100 }}
          />

          <Text style={styles.temp}>{weather.main.temp}°C</Text>
          <Text style={styles.desc}>{weather.weather[0].description}</Text>
          <Text style={styles.info}>Humidity: {weather.main.humidity}%</Text>
          <Text style={styles.info}>Wind: {weather.wind.speed} m/s</Text>
        </View>
      )}

      {/* FORECAST */}
      {forecast.length > 0 && (
        <View style={{ marginTop: 20, width: "100%" }}>
          <Text style={{ color: "white", marginBottom: 10 }}>
            Forecast:
          </Text>

          {forecast.map((item, index) => (
            <View key={index} style={styles.forecastItem}>
              <Text style={{ color: "white" }}>{item.dt_txt}</Text>
              <Text style={{ color: "#ccc" }}>
                Temp: {item.main.temp}°C
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 28,
    color: "white",
    marginBottom: 20
  },
  cityButton: {
    backgroundColor: "#38bdf8",
    padding: 10,
    marginRight: 10,
    borderRadius: 10
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    width: "100%"
  },
  city: {
    fontSize: 22,
    color: "white",
    marginBottom: 10
  },
  temp: {
    fontSize: 30,
    color: "white"
  },
  desc: {
    color: "#ccc",
    marginBottom: 10
  },
  info: {
    color: "#ccc"
  },
  forecastItem: {
    backgroundColor: "#1e293b",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  error: {
    color: "red",
    marginBottom: 10
  }
});
