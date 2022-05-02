import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";


export default function BasicTabs() {

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsListUnstyled className="tabs-buttons">
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
