import React, { memo, useState } from "react";
import homeLogo from "../../assets/img/common/headerLogo.svg";
import HeaderStyle from "./style";
import { list } from "./headerList";
import { Select } from "antd";

import header_2 from "../../assets/img/header/header_2.svg";
import header_3 from "../../assets/img/header/header_3.svg";
const Header = memo(() => {
  const { Option } = Select;
  const [icon, setIcon] = useState(header_2);
  const onDropdownVisibleChange = (open) => {
    if (open) {
      setIcon(header_3);
    } else {
      setIcon(header_2);
    }
  };
  const dropdownStyle = {
    boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
  };
  const selectList = (list) => {
    return list.map((item, index) => {
      return index === 0 ? (
        <div className="select-item first-child" key={item.name}>
          <img src={item.icon} alt="" />
          <div>{item.name}</div>
        </div>
      ) : (
        <Select
          key={item.name}
          defaultValue={item.name}
          className="select-item"
          bordered={false}
          suffixIcon={<img src={icon} alt=""></img>}
          onDropdownVisibleChange={onDropdownVisibleChange}
          dropdownStyle={dropdownStyle}
        >
          {item.arr.map((ite) => {
            return (
              <Option key={ite.name} value={ite.value}>
                {ite.name}
              </Option>
            );
          })}
        </Select>
      );
    });
  };

  return (
    <HeaderStyle>
      <img src={homeLogo} alt="" className="logo" />
      <div className="select">{selectList(list)}</div>
    </HeaderStyle>
  );
});

export default Header;
