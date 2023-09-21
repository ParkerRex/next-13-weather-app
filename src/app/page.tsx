"use client";
import { Paper, Text, Button, Group, TextInput } from "@mantine/core";
import { useState } from "react";

// - [x] We are going to design the user interface
// - [ ]  Then we are going to call the openweather api
// - [ ]  Show the user the data based off the API result

export default function Home() {
  const [cityInput, setCityInput] = useState<string>("");

  async function getWeatherData() {
    console.log("Button pressed");
  }

  console.log(cityInput);

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
        </Paper>
      </div>
    </div>
  );
}
