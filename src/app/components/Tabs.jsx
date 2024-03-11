"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Overview from "./Overview";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "10px 0px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "15px" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
          >
            <Tab
              className="capitalize font-bold text-zinc-900 "
              label="Overview"
              {...a11yProps(0)}
            />
            <Tab
              className="capitalize font-bold text-zinc-900 "
              label="Fundamentals"
              {...a11yProps(1)}
            />
            <Tab
              className="capitalize font-bold text-zinc-900 "
              label="News Insights"
              {...a11yProps(2)}
            />
            <Tab
              className="capitalize font-bold text-zinc-900 "
              label="Sentiments"
              {...a11yProps(3)}
            />
            <Tab
              className="capitalize font-bold text-zinc-900 "
              label="Team"
              {...a11yProps(4)}
            />
            <Tab
              className="capitalize font-bold text-zinc-900 "
              label="Technicals"
              {...a11yProps(5)}
            />
            <Tab
              className="capitalize font-bold text-zinc-900 "
              label="Tokenomics"
              {...a11yProps(6)}
            />
          </Tabs>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="bg-white text-black rounded-lg">
          <Overview />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Five
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Item Six
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Item Seven
      </CustomTabPanel>
    </Box>
  );
}
