"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { value: 80, label: "Crowdsale investors: 80%" },
  { value: 20, label: "Foundation: 20%" },
];
const size = {
  width: 700,
  height: 220,
};

export default function PieChartWithCenterLabel() {
  return <PieChart series={[{ data, innerRadius: 70 }]} {...size}></PieChart>;
}
