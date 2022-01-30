import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

export default function ChartPie() {
  const chartConfig={
        backgroundColor: "#313638",
        backgroundGradientFrom: "#313638",
        backgroundGradientTo: "#313638",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
       
        
      }
    const data = [
        {
          name: "Kills",
          population: 140,
          color: "rgba(0, 180, 216, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
          
        },
        {
          name: "Toronto",
          population: 120,
          color: "#DC3131",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];
    return (
        <View style={{marginTop:-20}}>
            <PieChart
                data={data}
                width={Dimensions.get("window").width} 
                height={200}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                hasLegend={false}
                center={[Dimensions.get("window").width/4, 20]}
                absolute
            />
        </View>
    );
}

const styles = StyleSheet.create({});
