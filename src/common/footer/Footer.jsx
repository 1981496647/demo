import React, { memo } from "react";
import FooterStyle from "./style";
import logo from "../../assets/img/footer/logo.svg";
import title from "../../assets/img/footer/title.svg";
import { list } from "./footerList";
import { StyledPageContent} from '../../style/common'
const Footer = memo(() => {
  return (
    <FooterStyle>
      <StyledPageContent>
      <img src={logo} alt="" className="img-logo" />
      <div className="title">
        <img src={title} alt="" />
        <span>Powered by Mammoth Chain</span>
      </div>
      <div className="section-footer">
        MMTScan is a Block Explorer and Analytics Platform for Mammoth Chain
      </div>
      <div className="line" />
      <div className="bottom-footer">
        <div className="text">
          MMTScan © 2022 (MMT-A) | ⛏ Built by the team mmtchain.io
        </div>
        <div className="imglist">
          {list.map((item) => {
            return (
              <div key={item.key} className="img-item">
                <img src={item.icon} alt=""></img>
              </div>
            );
          })}
        </div>
      </div>
      </StyledPageContent>
      
    </FooterStyle>
  );
});

export default Footer;
