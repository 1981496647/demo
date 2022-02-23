import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  .logo {
    margin-left: 32px;
  }
  .select {
    display: flex;
    align-items: center;
    margin-right: 100px;
    .first-child {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
    }
    .select-item {
      margin-left: 35px;
      font-size: 16px;
      font-weight: 600;
      color: #747070;
      .ant-select-selection-item {
        font-size: 16px;
        font-weight: 600;
        color: #747070;
      }
    }
    .ant-select-open {
      .ant-select-selection-item {
        font-size: 16px;
        font-weight: 600;
        color: #893869;
      }
    }
  }
`;

export default HeaderStyle;
