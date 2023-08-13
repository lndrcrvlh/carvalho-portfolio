import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./projectsTabs.css";

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
  "&:hover": {
    color: "#fff",
    backgroundColor: "#111",
  },
  "&.Mui-selected": {
    backgroundColor: "#efefef",
    color: "#010401",
    borderBottom: "#010401",
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
      <Box sx={{ ...style }}>
        <Tabs
          sx={{ ...style }}
          className="tabs-buttons"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#010401",
            },
          }}
          allowScrollButtonsMobile
        >
          <Tab sx={{ ...style }} label="AMAC" {...a11yProps(0)} />
          <Tab sx={{ ...style }} label="The Behavior Web" {...a11yProps(1)} />
          <Tab
            sx={{ ...style }}
            label="Recommendation Engines"
            {...a11yProps(2)}
          />
          <Tab sx={{ ...style }} label="Dealflow" {...a11yProps(3)} />
          <Tab sx={{ ...style }} label="Freelance" {...a11yProps(4)} />
          <Tab sx={{ ...style }} label="Personal Projects" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>Full Stack Software Engineer at AMAC.</p>
        <p>
          At AMAC I took ownership over the business reporting and production
          boards - features on our internal dashboard that provided executives
          with key insights into membership conversion and how revenue is being
          generated.
        </p>
        <p>
          I took the iniative to start documentation - not only on terms and
          concepts unique to the business to allow new developers to have an
          easier ramp-up - but to make decisions about what procedures and
          practices we will put into place as a development team. With
          discussions with the team, the documentation solidified our version
          control practices, the particular nuiances of our database design and
          what constraints to keep in mind when adding new features.
        </p>
        <p>
          The bulk of the development at AMAC was either in PHP, with Laravel,
          or in TypeScript, with React. Where we could, we leveraged MUI for
          frontend components or advanced features in Laravel. In 2023, I was
          responsible for upgrading the full dashboard project, with more than
          200 components and dozens of backend Controllers, and this was managed
          with virtually no down time and very few minor bugs thanks to
          collaboration with the devops team.
        </p>
        <p>
          I was also responsible for maintaining dozens of minor WordPress
          websites, this involved implementing custom functions, custom repeater
          fields and leveraging plugins when there was a perfect fit.
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>Full Stack Software Engineer & Web master at the Behavior Web.</p>
        <p>
          This role involved making sure that we met the needs of the business
          through tech. I was responsible for making tech related decisions,
          designing and implementing the wordpress website and managing the LMS.
        </p>
        <p>
          My biggest project here was a custom Dashboard that pulled data from
          the Google Forms API as well as the Thinkific API with Node-JS and
          Axios. The dashboard then provided data visualization using Chart-js
          and React.
        </p>
        <p>
          During my time here I migrated hosting provider, created custom
          designs and wireframes and a unique visual language for the website.
          This includes banners, powerpoint slides, and thumbnails.
        </p>
        <p>
          Web master, I was responsible for knowing about all aspects of the
          business and how it might intersect with technology. From software to
          hardware, I tackled this with a great curiosity and thirst for
          knowledge.
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>
          I handled the ETL of several inboxes totaling more than 150,000 emails
          using node to parse and transform, SQLite3 to further sanitize, and
          finally load onto an open source CRM.
        </p>
        <p>
          Started development of a command-line tool to drive a manufacturing
          workflow using the Camunda engine.
        </p>
      </TabPanel>
      <TabPanel value={value} index={3}>
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
          I implemented the ruby KPI dashboard Dashing (succeeded by{" "}
          <a href="https://smashing.github.io/">Smashing</a>) to have constant
          insight into how our KBM are performing based on results from Mixpanel
          and GA as well as our own SQL database.
        </p>
        <p>
          I made profiles on the competitors in order to gain insights into what
          areas we could make a greater impact as a business and used those
          insights in designing wireframes and mockups.
        </p>
      </TabPanel>
      <TabPanel value={value} index={4}>
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
      <TabPanel value={value} index={5}>
        <p>
          A flashcard app written in ReactJS connecting to a public Kanji API to
          display random kanji and information pertaining to that Kanji, and
          generate random kana, and keep track of the streak of correct answers
          in session storage. Hosted in Google Cloud via Firebase.
        </p>
        <a
          href="https://flashcard-app-3fe63.web.app/"
          className="project-link-button"
        >
          View Flashcard App
        </a>
      </TabPanel>
    </Box>
  );
}
