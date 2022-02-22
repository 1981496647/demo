import React, { memo } from "react";
import HomeStyle from './style'

import { Layout, Card, Input, Select, } from 'antd';

import { OptionList, OptionList2, dorpdown } from './homeListData'
import home_1 from '../../assets/img/home/home_1.svg'
const Home = memo(() => {
  const { Content } = Layout
  const { Option } = Select


  return (
    <HomeStyle>
      <Layout className="home-layout">
        <Content>
          <Card>
            <p className="title">MMT Smart Chain Faucet</p>
            <Input.Group className="input-group">
              <Input defaultValue="Iput your MMT smart chain address..." />
              <Select
                defaultValue={OptionList[0].name}
                dropdownStyle={{ boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)' }}
                suffixIcon={<img src={home_1} alt=""></img>}
              >
                {
                  OptionList.map(item => <Option key={item.value} value={item.value}>{item.name}</Option>)
                }
              </Select>
              <Select
                defaultValue="Peggy tokens"
                dropdownStyle={{ boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)' }}
                className="radius-option"
                suffixIcon={<img src={home_1} alt=""></img>}
              >
                {
                  OptionList2.map(item => <Option key={item.value} value={item.value}>{item.name}</Option>)
                }
              </Select>
            </Input.Group>
            <div className="rectangle">
              {
                dorpdown.map(item => {
                  return (
                    <div key={item.name} className="rectangle-item">
                      <img src={item.icon} alt="" />
                      <span>{item.name}</span>
                    </div>
                  )
                })
              }
            </div>
          </Card>
        </Content>
      </Layout>
    </HomeStyle>
  );
});

export default Home;
