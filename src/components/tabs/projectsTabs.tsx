import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import './projectsTabs.css'

export default function BasicTabs() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsListUnstyled className="tabs-buttons">
        <TabUnstyled className="tab">The Behavior Web</TabUnstyled>
        <TabUnstyled className="tab">Recommendation Engines</TabUnstyled>
        <TabUnstyled className="tab">Dealflow</TabUnstyled>
        <TabUnstyled className="tab">Freelance</TabUnstyled>
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
      <TabPanelUnstyled value={3}>
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
      </TabPanelUnstyled>
    </TabsUnstyled>
  );
}
