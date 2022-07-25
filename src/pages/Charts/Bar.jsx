import React from "react";
import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import ChartHeader from "../../components/ChartsHeader";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

const Bar = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl">
      <ChartHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <ChartComponent
        id="bar-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        // background={currentMode === "Dark" ? "#33373E" : "#FFFFFF"}
      >
        <Inject
          services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
