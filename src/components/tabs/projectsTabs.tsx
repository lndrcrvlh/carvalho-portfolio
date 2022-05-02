import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";

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
    <TabsUnstyled defaultValue={0}>
      <TabsListUnstyled>
        <TabUnstyled value={0}>One</TabUnstyled>
        <TabUnstyled value={1}>Two</TabUnstyled>
        <TabUnstyled value={2}>Three</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled value={0}>
        <p>Web master at the Behavior Web.</p>
        <p>
          This role involves making sure that we can meet the needs of the
          business through tech. Responsible for making tech related decisions,
          designing and implementing the wordpress website and managing the LMS.
        </p>
      </TabPanelUnstyled>
      <TabPanelUnstyled value={1}>Second page</TabPanelUnstyled>
      <TabPanelUnstyled value={2}>Third page</TabPanelUnstyled>
    </TabsUnstyled>
  );
}
