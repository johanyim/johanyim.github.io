export const load = async ({ params }) => {
  // const res = await fetch("https://wttr.in/London?format=j1");
  // const data = await res.json();
  //
  // let current_condition = ( ({
  //   FeelsLikeC,
  //   temp_C,
  //   weatherCode,
  //   weatherDesc,
  // }) => ({
  //     FeelsLikeC,
  //     temp_C,
  //     weatherCode,
  //     weatherDesc,
  //   }) )(data.current_condition[0])
  //
  //
  // let weather = data.weather.map((d) => {
  //   return {
  //     date: d.date,
  //     minTemp: d.mintempC,
  //     maxTemp: d.maxtempC,
  //     hourly: d.hourly.map((h) => 
  //     {return {
  //         forecast: (({
  //           FeelsLikeC,
  //           chanceofrain,
  //           tempC,
  //           time,
  //           weatherCode,
  //         }) => ({
  //             FeelsLikeC,
  //             chanceofrain,
  //             tempC,
  //             time,
  //             weatherCode,
  //           }))(h)
  //       }}
  //     ),
  //   } 
  //
  // })
  //
  // return {
  //     current_condition,
  //     weather,
  //   // .weather
  //       // .map((d) => d.hourly
  //       //   // .map((h, i) => {return {
  //       //   //   time: i * 300, 
  //       //   //   desc: h.weatherDesc[0].value
  //       //   // }})
  //       // )
  //
  // }
}
//
//
// {
//     "weather": {
//         "current_condition": [
//             {
//                 "FeelsLikeC": "17",
//                 "temp_C": "17",
//                 "weatherCode": "113",
//                 "weatherDesc": [
//                     {
//                         "value": "Sunny"
//                     }
//                 ],
//             }
//         ],
//         "weather": [
//             {
//                 "hourly": [
//                     {
//                         "FeelsLikeC": "7",
//                         "chanceofrain": "0",
//                         "tempC": "9",
//                         "time": "0",
//                         "weatherCode": "113",
//                     },
//                 ],
//                 "maxtempC": "21",
//                 "mintempC": "7",
//             },
//         ]
//     }
// }
//
//
