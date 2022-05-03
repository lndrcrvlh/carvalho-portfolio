import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import "./projectsTabs.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const style = {
  backgroundColor: "#010401",
  color: "#efefef",
  border: "none",
  fontFamily: "fira code",
  ":hover": {
    color: "#fff",
    backgroundColor: "#111",
  },
  ".Mui-selected": {
    backgroundColor: "#efefef",
    color: "#010401",
    borderBottomColor: "#010401",
  },
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{...style, borderBottom: 1, borderColor: "primary" }}>
        <Tabs
          sx={{ ...style }}
          className="tabs-buttons"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          scrollButtons={true}
          allowScrollButtonsMobile
          centered
        >
          <Tab sx={{ ...style }} label="The Behavior Web" {...a11yProps(0)} />
          <Tab
            sx={{ ...style }}
            label="Recommendation Engines"
            {...a11yProps(1)}
          />
          <Tab sx={{ ...style }} label="Dealflow" {...a11yProps(2)} />
          <Tab sx={{ ...style }} label="Freelance" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>Web master at the Behavior Web.</p>
        <p>
          This role involves making sure that we can meet the needs of the
          business through tech. Responsible for making tech related decisions,
          designing and implementing the wordpress website and managing the LMS.
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Freelance projects I help people get the most out of their online
        business.
        <ul>
          Janoo
          <li>UX/UI adjustments to the online cart experience with CSS</li>
          <li>
            Implementing custom PHP shortcode to redirect users to different
            pages based on the device used.
          </li>
        </ul>
        <ul>
          NYCCBTp
          <li>CSS customizations on the shopify liquid theme</li>
          <li>
            Integration of Brillium into Thinkific to allow custom functionality
            in quizzes.
          </li>
        </ul>
      </TabPanel>
    </Box>
  );
}
