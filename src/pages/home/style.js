import styled from "styled-components";

const HomeStyle = styled.div`    
    .home-layout{
        height: 100vh;
        
        .ant-layout-content{
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .ant-card-bordered{
                border: none;
            }
        }
        .title{
            font-size: 42px;
            font-weight: 700;
            text-align: center;
        }
        .input-group{
            display: flex;
            border-radius: 10px;
            width: 910px;
            margin: 0 auto;
            box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);

            .ant-input{
                    height: 50px;
                    border-radius: 10px 0 0 10px;
            }
            .ant-select{
                height: 50px;
                .ant-select-arrow{
                    width: 25px;
                    height: 25px;
                    top: 50%;
                    transform: translateY(-50%);
                    margin: 0;
                    right: 5px;
                   img{
                       width: 100%;
                   }
                    
                }
                .ant-select-selector{
                    height: 100%;
                    display: flex;
                    align-items: center;
                    .ant-select-selection-item{
                        font-size: 18px;
                    }
                }
            }
            .ant-select-open{
                
                .ant-select-selector{
                    background-color: rgba(230, 230, 230, 1);
                    .ant-select-selection-item{
                        color: rgba(0,0,0,1);
                    }
                }
            }
            .radius-option{
                border-radius: 0 10px 10px 0;
                .ant-select-selector {

                    border-radius: 0 10px 10px 0;
                }
            }
        }
        .rectangle{
            display: flex;
            width: 813px;
            height: 58px;   
            margin: 0 auto;
            margin-top: 44px;
            box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);
            border-radius: 8px;
            .rectangle-item{
                flex: 1;
                line-height: 58px;
                text-align: center;
                img{
                    margin-right: 14px;
                }
            }
        }
    }

    .select0{
        box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);

    }
`

export default HomeStyle