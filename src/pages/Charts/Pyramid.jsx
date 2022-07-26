import React from "react";
import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSelection,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PyramidSeries,
} from "@syncfusion/ej2-react-charts";

import { ChartsHeader } from "../../components";
import { PyramidData } from "../../data/dummy";

const Pyramid = () => {
  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{
            background: "white", // currentMode === "Dark" ? "#33373E" : "#fff",
            textStyle: {
              // color: currentMode === "Dark" ? "#fff" : "#33373E",
              fontFamily: "Open Sans",
            },
          }}
          tooltip={{
            enable: true,
            textStyle: {
              fontFamily: "Open Sans",
            },
          }}
          // background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
                font: {
                  fontFamily: "Open Sans",
                },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
