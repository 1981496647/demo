import React, { memo } from "react";
import ScanExplorerStyle from "./styled";
import { Layout } from "antd";

import cardimg from "../../assets/img/about/cardimg.svg";
const ScanExplorer = memo(() => {
  const { Content, Footer } = Layout;
  return (
    <ScanExplorerStyle>
      <Layout className="ScanExplorer">
        <Content>
          <div>
            <img src={cardimg} alt="" />
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </ScanExplorerStyle>
  );
});

export default ScanExplorer;
