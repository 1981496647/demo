import styled from "styled-components";
import { StyledPageContent } from '../../style/common'
export const ScanExplorerStyle = styled.div`

  .ScanExplorer {

      .content{
        position: relative;
        background-color: #fff;
        .banner-img{
            height: 320px;
            background-image: linear-gradient(90deg,rgba(104, 40, 120, 1) , rgba(204, 85, 92, 1));
        }

        .pos-card{
            position: absolute;
            border: none;
            top: 0;
            left: 0;
            right: 0;
            background-color: transparent;
            .title{
                font-size: 24px;
                color: #fff;
                margin-top: 26px;
            }
            .ant-input-group{
                display: flex;
                height: 56px;
                width: 765px;
                .ant-input{
                    border-radius: 0 8px 8px 0;
                }
                .ant-select{
                    border-radius: 8px 0 0 8px;
                }
                .ant-select-selector{
                    border-radius: 8px 0 0 8px;

                    height: 56px;
                    display: flex;
                    align-items: center;
                    .ant-select-selection-item{
                        font-size: 16px;
                        font-weight: 400;

                    }
                }
                .ant-select-open{
                    .ant-select-selection-item{
                        font-size: 16px;
                        font-weight: 400;
                        color:#000;
                    }
                }
            }
        }
        .pic-card{
            width: 1376px;
            height: 192px;
            background-color: #fff;
            z-index: 1;
            margin-top: 64px;
            border-radius: 16px;
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
            display: flex;
            .card-item{
                flex:1;
                border-right:1px solid rgba(228, 228, 228, 1);
            }
            .carditem{
                &:not(:last-of-type) {
                    border-right: 1px solid rgba(228, 228, 228, 1);
                }
                padding: 33px 24px;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                justify-content: space-between;
                .carditem-child{
                    display: flex;
                    
                    img{
                        margin-right:8px ;
                    }
                    .carditem-title{
                        font-size: 14px;
                        color: rgba(128, 129, 145, 1);
                    }
                    .data{
                        .data-one{
                            color: rgba(0, 0, 0, 1);
                            font-weight: 500;
                            padding-right: 10px;
                        }
                        .data-two{
                            color:rgba(128, 129, 145, 1);
                            padding-right: 10px;

                        }
                        .data-three{
                            color: rgba(0, 155, 84, 1);
                        }
                    }
                }
            }
        }
        .div-pos{
            height: 128px;
            background-color: #fff;
        }
        .bottom-card-footer{
            display: flex;
            width: 1440px;
            margin: 0 auto;
            gap: 16px;
            margin-bottom: 100px;
            .bottom-card-item{
                width:680px;
                height: 611px;
                background-color: #fff;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
                border-radius: 16px;
                padding: 0 24px;
                .title{
                    height: 67px;
                    line-height: 67px;
                    border-bottom: 1px solid rgba(228, 228, 228, 1);
                    font-size: 16px;
                    font-weight: 700;
                }
                .finallyList-item{
                    border-bottom: 1px solid rgba(228, 228, 228, 1);
                    padding: 16px 0;
                    display: flex;
                    align-items: center;
                  .finallyList-one{
                      width: 44px;
                      height: 44px;
                      background-color: rgba(228, 228, 228, 1);
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      border-radius: 4px;
                      font-size: 14px;
                      font-weight: 500;
                      margin-right: 16px;
                  } 
                  .finallyList-two{
                      margin-right: 80px;
                      .num{
                          color: rgba(104, 40, 120, 1);
                          font-size: 14px;
                          font-weight: 500;
                      }
                      .timeout{
                          color: rgba(128, 129, 145, 1);
                          font-size: 12px;
                      }
                  }
                  .finallyList-three{
                      flex: 1;
                      .validated{
                          font-weight: 500;
                          padding-right:17px;
                          font-size: 14px;
                      }
                      .encryption{
                          font-size: 14px;
                          color: rgba(104, 40, 120, 1);
                      }
                    .info{
                        color: rgba(104, 40, 120, 1);
                        font-size: 12px;
                        padding-right: 10px;
                    }
                    .min{
                        color: rgba(128, 129, 145, 1);
                        font-size: 12px;
                    }
                  }

                  .finallyList-four{
                      border: 1px solid rgba(104, 40, 120, 1);
                      height: 24px;
                      width: 127px;
                      text-align: center;
                      font-size: 12px;
                      border-radius: 4px;
                  } 
                }
                .finallyList2-item{
                    .finallyList-one{
                      border-radius: 50%;
                    } 
                    .finallyList-three{
                          .info{
                            font-weight: 500;
                            color: #000;
                            display: inline-block;
                            width: 50px;
                          }
                          .min{
                            color: rgba(104, 40, 120, 1);
                           }
                           .validated{

                           }
                          
                    }
                    .finallyList-four{
                      border: 1px solid rgba(104, 40, 120, 1);
                      height: 24px;
                      width: 98px;
                      font-size: 12px;
                      border-radius: 4px;
                  } 
                }
                .btn-item{
                    width: 632px;
                    height: 40px;
                    border-radius: 8px;
                    outline: none;
                    border:none;
                    margin-top: 24px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #fff;
                    background-image:linear-gradient(90deg,rgba(104, 40, 120, 1),rgba(204, 85, 92, 1));
                }
            }
        }
      }
    
  }
`;

export const StyledBanner = styled(StyledPageContent)`

`

// export default ScanExplorerStyle;
