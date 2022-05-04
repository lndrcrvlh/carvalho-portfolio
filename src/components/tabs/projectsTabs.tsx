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
      <Box sx={{ ...style, borderBottom: 1, borderColor: "primary" }}>
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
        <p>
          I handled the ETL of several inboxes totaling more than 150,000 emails
          using node to parse and transform, SQLite3 to further sanitize, and
          finally load onto an open source CRM.
        </p>
        <p>
          Started development of a command-line tool to drive a manufacturing
          workflow using the camunda engine.
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>
          I started at Dealflow as a QA tester and conducted lots of rigorous
          manual testing. I spent a lot of time pair programming and learning
          essential best practices when programming, as well as navigating the
          Linux terminal.
        </p>{" "}
        <p>
          I eventually moved to the Product Management department where I
          designed and oversaw the implementation of a revamped back-end
          administrator web app. This web app added new features to allow
          greater consistency and a higher rate of productivity for the research
          team.{" "}
        </p>
        <p>
          I implemented the ruby KPI dashboard dashing (succeeded by smashing)
          to have constant insight into how our KBM are performing based on
          results from Mixpanel and GA as well as our own SQL database.
        </p>
        <p>
          I made profiles on the competitors in order to gain insights into what
          areas we could make a greater impact as a business and used those
          insights in designing wireframes and mockups.
        </p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p>I help people get the most out of their online business.</p>
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
