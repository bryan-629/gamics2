import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, {useState} from 'react';
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default function Chart() {
  let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, killsValue: 0, deathsValue:0,kdValue:0 })

  const  dataKills= [
    60,
    50,
    55,
    63,
    34,
    35

  ];
  const dataDeaths = [
    66,
    57,
    52,
    63,
   38,
    60
  ];
  return (
    <View style={{ marginBottom: 30}}>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data:dataKills,
              color: (opacity = 1) => `rgba(0, 180, 216, ${opacity})`,
            },
            {
              data: dataDeaths,
              color: (opacity = 1) => `rgba(220, 49, 49, ${opacity})`,
            }
          ]
        }}
        width={Dimensions.get("window").width * 1.1} // from react-native
        height={240}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#313638",
          backgroundGradientFrom: "#313638",
          backgroundGradientTo: "#313638",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

          style: {
            borderRadius: 16,
            marginHorizontal: 100,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",

          }
        }}
        decorator={() => {
          return tooltipPos.visible ? <View>
              <Svg>
                  <Rect x={tooltipPos.x - 15} 
                      y={tooltipPos.y + 10} 
                      width="100" 
                      height="30"
                      fill="black" />
                      <TextSVG
                          x={tooltipPos.x + 5}
                          y={tooltipPos.y + 30}
                          fill="white"
                          fontSize="12"
                          fontWeight="bold"
                          textAnchor="left">
                          {`KD: ${tooltipPos.kdValue}`}
                      </TextSVG>
                      <Rect x={tooltipPos.x - 15} 
                      y={tooltipPos.y + 40} 
                      width="100" 
                      height="30"
                      fill="black" />
                      <TextSVG
                          x={tooltipPos.x + 5}
                          y={tooltipPos.y + 60}
                          fill="white"
                          fontSize="12"
                          fontWeight="bold"
                          textAnchor="left">
                          {`Kills: ${tooltipPos.killsValue}`}
                      </TextSVG>
                      <Rect x={tooltipPos.x - 15} 
                      y={tooltipPos.y + 70} 
                      width="100" 
                      height="35"
                      fill="black" />
                      
                      <TextSVG
                          x={tooltipPos.x + 5}
                          y={tooltipPos.y + 90}
                          fill="white"
                          fontSize="12"
                          fontWeight="bold"
                          textAnchor="left">
                          {`Deaths: ${tooltipPos.deathsValue}`}
                      </TextSVG>
              </Svg>
          </View> : null
      }}
      onDataPointClick={(data) => {
        console.log(data)
        let isSamePoint = (tooltipPos.x === data.x && tooltipPos.y === data.y)
        isSamePoint ? setTooltipPos((previousState) => {
            return { 
                    ...previousState,
                    value: data.value,
                    visible: !previousState.visible
                }
        })
            : 
            console.log(data)
        setTooltipPos({ x: data.x, killsValue: dataKills[data.index], deathsValue: dataDeaths[data.index] ,kdValue: dataDeaths[data.index] != 0 ? (Math.round(dataKills[data.index]/ dataDeaths[data.index]*100)/100): (0) , y: data.y, visible: true });

    }}
        bezier
        style={{
          borderRadius: 16
        }}
      />
    </View>
  );
};




