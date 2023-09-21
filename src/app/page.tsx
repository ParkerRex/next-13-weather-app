"use client";
import { Paper, Text, Button, Group, TextInput } from "@mantine/core";
import { useState } from "react";

// - [x] We are going to design the user interface
// - [x]  Then we are going to call the openweather api
// - [x]  Show the user the data based off the API result

export default function Home() {
  const [cityInput, setCityInput] = useState<string>("");
  console.log(cityInput);

  const [weatherData, setWeatherData] = useState<any>({});
  {
    city: "seattle";
  }

  async function getWeatherData() {
    console.log("Button pressed");
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    // query data
    // if there is an error, throw console.error
    // if not, save data
    try {
      const serverResponse = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?" +
          "q=" +
          cityInput +
          "&appid=" +
          process.env.WEATHER_API_KEY +
          "&units=imperial"
      );
      const data = await serverResponse.json();
      console.log(data);
      if (data?.cod === "400") throw data;
      setWeatherData(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div
      style={{
        position: "static",
        height: "100vh",
        backgroundImage:
          "url('https://littlevisuals.co/images/atlantic_ridge.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Paper withBorder p="lg" style={{ maxWidth: "500px" }}>
          <Group align="flex-start">
            <Text size="xl">Get the weather</Text>
          </Group>
          <Group align="center">
            <Text size="lg">Enter a city, and get the weather below!</Text>
          </Group>
          <Group align="center" mb="xs">
            <TextInput
              label="City Name"
              placeholder="Enter a city name"
              onChange={(e) => setCityInput(e.target.value)} // C -> SetInput
            />
          </Group>
          <Group align="center">
            <Button variant="gradient" onClick={() => getWeatherData()}>
              Get Weather
            </Button>
          </Group>
          {Object.keys(weatherData).length !== 0 ? (
            <>
              <Group align="left">
                <Text size="md" mt="sm">
                  {weatherData.name} Weather
                </Text>
              </Group>

              <Group align="">
                <img
                  src={
                    "http://openweathermap.org/img/wn/" +
                    weatherData.weather[0].icon +
                    "@4x.png"
                  }
                  width="100px"
                  height="100px"
                />
                <Text size="lg">Currently {weatherData.main.temp} &deg;F</Text>
              </Group>
            </>
          ) : null}
        </Paper>
      </div>
    </div>
  );
}
