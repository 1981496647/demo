import React, { memo } from 'react'
import ScanExplorerStyle from './styled'
import { Layout } from 'antd'

import headerLogo from '../../assets/img/about/headerLogo.svg'
import cardimg from '../../assets/img/about/cardimg.svg'
const ScanExplorer = memo(() => {

    const { Content, Header, Footer } = Layout
    return (
        <ScanExplorerStyle>
            <Layout className='ScanExplorer'>
                <Header className=''>
                    <div>
                        <img src={headerLogo} alt="" />
                    </div>
                </Header>
                <Content>
                    <div>
                        <img src={cardimg} alt="" />
                    </div>
                </Content>
                <Footer></Footer>
            </Layout>

        </ScanExplorerStyle>
    )
})

export default ScanExplorer