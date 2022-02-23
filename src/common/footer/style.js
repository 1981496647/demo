import styled from "styled-components";

const FooterStyle = styled.div`
  background-image: linear-gradient(90deg, #682878, #cc555c);
  position: relative;
  padding: 0 32px;
  padding-top:16px;
  padding-bottom: 12px;
  .img-logo {
    position: absolute;
    right: 0;
    opacity: 0.5;
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 26px;
    span {
      color: #fff;
      font-size: 16px;
    }
    img {
      margin-right: 15px;
      z-index: 1;
    }
  }
  .section-footer {
    font-size: 10px;
    width: 245px;
    color: #fff;
    margin-bottom: 22px;
  }
  .bottom-footer {
    display: flex;
    justify-content: space-between;
    .text {
      flex: 1;
      color: #fff;
    }
    .imglist {
      display: flex;
      .img-item {
        width: 22px;
        background-color: rgb(199, 115, 132);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 22px;
      }
    }
  }
.line{
    height:2px;
    background-color: rgba(255,255,255,0.3);
    margin-bottom:18px ;
}
`;
export default FooterStyle;
