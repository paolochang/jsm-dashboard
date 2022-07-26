import React from "react";
import {
  CandleSeries,
  ChartComponent,
  Crosshair,
  DateTime,
  Inject,
  Logarithmic,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  Zoom,
} from "@syncfusion/ej2-react-charts";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import { ChartsHeader } from "../../components";

const Financial = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financial" title="Apple Historical" />
      <div className="w-full"></div>
      <ChartComponent
        id="charts"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{
          enable: true,
          shared: true,
          textStyle: {
            fontFamily: "Open Sans",
          },
        }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
        // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject
          services={[
            CandleSeries,
            Tooltip,
            DateTime,
            Logarithmic,
            Crosshair,
            Zoom,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={financialChartData}
            xName="x"
            yName="low"
            name="Apple Inc"
            type="Candle"
            low="low"
            high="high"
            open="open"
            close="close"
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
