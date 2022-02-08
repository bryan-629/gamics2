import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, {useState,useEffect} from 'react';
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default function Chart({userData}) {
  let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, killsValue: 0, deathsValue:0,kdValue:0,index:0 }); //Aqui se rellenara el valor de las variables que se mostraran en el tooltip
  const [dataKills, setDataKills] = useState([]);
  const [dataDeaths, setDataDeaths] = useState([]);
  const [dataKd, setDataKd] = useState([]);
  


  useEffect(() => {

    var dataKills = [];
    var dataDeaths = [];
    var dataKd = [];
    userData.map((item, index) => {
  
      if(item.all){
        dataKills.unshift(item.all.kills);
        dataDeaths.unshift(item.all.deaths);
        dataKd.unshift(Math.round(item.all.kdRatio * 100) / 100);
      }else{
        dataKills.unshift(0);
        dataDeaths.unshift(0);
        dataKd.unshift(0);
      };
    });
    setDataKills(dataKills);
    setDataDeaths(dataDeaths);
    setDataKd(dataKd);

  }, [])
  

  return (
    
    <View style={{ marginBottom: 30}}>
      {dataKd.length == 7 ?
      (      <LineChart
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
                  <Rect x={ tooltipPos.index == 6? tooltipPos.x - 65 : tooltipPos.x -15} 
                      y={70} 
                      width="100" 
                      height="30"
                      fill="black" />
                      <TextSVG
                          x={tooltipPos.index == 6? tooltipPos.x - 55 : tooltipPos.x -5}
                          y={90}
                          fill="white"
                          fontSize="12"
                          fontWeight="bold"
                          textAnchor="left">
                          {`KD: ${tooltipPos.kdValue}`}
                      </TextSVG>
                      <Rect x={tooltipPos.index == 6? tooltipPos.x - 65 : tooltipPos.x -15} 
                      y={100} 
                      width="100" 
                      height="30"
                      fill="black" />
                      <TextSVG
                          x={tooltipPos.index == 6? tooltipPos.x - 55 : tooltipPos.x -5}
                          y={120}
                          fill="white"
                          fontSize="12"
                          fontWeight="bold"
                          textAnchor="left">
                          {`Kills: ${tooltipPos.killsValue}`}
                      </TextSVG>
                      <Rect x={tooltipPos.index == 6? tooltipPos.x - 65 : tooltipPos.x -15} 
                      y={130} 
                      width="100" 
                      height="35"
                      fill="black" />
                      
                      <TextSVG
                          x={tooltipPos.index == 6? tooltipPos.x - 55 : tooltipPos.x -5}
                          y={150}
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

        let isSamePoint = (tooltipPos.x === data.x && tooltipPos.y === data.y)
        isSamePoint ? setTooltipPos((previousState) => {
            return { 
                    ...previousState,
                    value: data.value,
                    visible: !previousState.visible
                }
        })
            : 
        setTooltipPos({ x: data.x, killsValue: dataKills[data.index], deathsValue: dataDeaths[data.index] ,kdValue: dataDeaths[data.index] != 0 ? (Math.round(dataKills[data.index]/ dataDeaths[data.index]*100)/100): (0) , y: data.y, visible: true,index: data.index });

    }}
        bezier
        style={{
          borderRadius: 16
        }}
      />) : (null)}

    </View>
  );
};




