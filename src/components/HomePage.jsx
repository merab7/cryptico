import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
const HomePage = () => {

    const {data, isFetching}= useGetCryptosQuery()
    const globalStats = data ?.data?.stats;
    console.log(data)
    if(isFetching) return 'Loading...'
    
  return (
    <div  >
      <h1 className='text-2xl font-bold font-serif mb-16  ' >Global Crypto Stats</h1>
      <Row>
        <Col span={12} ><Statistic title="Total Cryptocurrencies" value={globalStats.total}  /></Col>
        <Col span={12} ><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}  /></Col>
        <Col span={12} ><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}  /></Col>
        <Col span={12} ><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12} ><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
    </div>
  )
}

export default HomePage
