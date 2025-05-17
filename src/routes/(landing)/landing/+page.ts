export const load = async ({ params }) => {
  const res = await fetch("https://wttr.in/Londing?format=j1");
  const weather = await res.json();

  return {
    data: {
      weather: weather
    }
  }
}


