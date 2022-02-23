import React, { memo } from "react";
import { ScanExplorerStyle, StyledBanner } from "./styled";

import { Layout, Input, Select } from "antd";
import { list, cardList, finallyList, finallyListTwo } from './ScanExplorerList'
import { xiala, cardimg } from '../../assets/img/about'

const ScanExplorer = memo(() => {
  const { Content } = Layout;
  const { Option } = Select
  const changeCardList = (cardList) => {
    const arr = Object.keys(cardList)
    return arr.map((item, index) => {
      return <div
        key={item} className="carditem"
      >
        {
          cardList[item].map((ite) => {
            return <div key={ite.title} className="carditem-child" >
              <img src={ite.icon} alt="" />
              <div>
                <div className="carditem-title">{ite.title}</div>
                <div className="data">
                  <span className="data-one">{ite.price}</span>
                  <span className="data-two">{ite.btc}</span>
                  <span className="data-three">{ite.num}</span>
                </div>
              </div>
            </div>
          })
        }
      </div>
    })
  }
  return (
    <ScanExplorerStyle>
      <Layout className="ScanExplorer">
        <Content className="content">
          <div className="banner-img">
            <img src={cardimg} alt="" />
          </div>

          <StyledBanner className="pos-card">
            <p className="title">Mammoth Chain Testnet Explorer</p>
            {/* input */}
            <Input.Group>
              <Select defaultValue={list[0].name} suffixIcon={<img src={xiala} alt=""></img>}>
                {
                  list.map(item => {
                    return <Option key={item.value} value={item.value}>
                      {item.name}
                    </Option>
                  })
                }
              </Select>
              <Input></Input>
            </Input.Group>
            {/* input下面的card */}
            <div className="pic-card">
              {changeCardList(cardList)}
            </div>
          </StyledBanner>
          {/* 占位元素 */}
          <div className="div-pos"> </div>
          {/* 底部内容 */}
          <div className="bottom-card-footer">
            <div className="bottom-card-item">
              <div className="title">Latest Blocks</div>
              {
                finallyList.map(item => {
                  return <div key={item.key} className="finallyList-item">
                    <div className="finallyList-one">
                      BK
                    </div>
                    <div className="finallyList-two">
                      <div className="num">{item.num}</div>
                      <div className="timeout">{item.timeout}</div>
                    </div>
                    <div className="finallyList-three">
                      <div className="top">
                        <span className="validated">{item.validated}</span>
                        <span className="encryption">{item.encryption}</span>
                      </div>
                      <div className="bottom">
                        <span className="info">{item.info}</span>
                        <span className="min">{item.min}</span>
                      </div>
                    </div>
                    <div className="finallyList-four">
                      {item.btninfo}
                    </div>
                  </div>
                })
              }
              <button className="btn-item">View all blocks</button>
            </div>
            <div className="bottom-card-item">
              <div className="title">Latest Transactions</div>
              {
                finallyListTwo.map(item => {
                  return <div key={item.key} className="finallyList-item finallyList2-item">
                    <div className="finallyList-one">
                        Tx
                    </div>
                    <div className="finallyList-two">
                      <div className="num">{item.num}</div>
                      <div className="timeout">{item.timeout}</div>
                    </div>
                    <div className="finallyList-three">
                      <div className="top">
                        <span className="validated">{item.validated}</span>
                        <span className="encryption">{item.from}</span>
                      </div>
                      <div className="bottom">
                        <span className="info">{item.end}</span>
                        <span className="min">{item.to}</span>
                      </div>
                    </div>
                    <div className="finallyList-four">
                      {item.btninfo}
                    </div>
                  </div>
                })
              }
              <button className="btn-item">View all blocks</button>

            </div>
          </div>
        </Content>
      </Layout>
    </ScanExplorerStyle>
  );
});

export default ScanExplorer;
