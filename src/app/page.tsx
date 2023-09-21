import { Paper } from "@mantine/core";

export default function Home() {
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
      <Paper withBorder p="lg"></Paper>
    </div>
  );
}

// We are going to design the user interface
// Then we are going to call the openweather api
// Show the user the data based off the API result
