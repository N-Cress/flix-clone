import React from 'react'
import Main from '../components/Main'
import Requests from '../Requests'
import Row from '../components/Row'

export default function Home() {
  return (
    <div className='text-white'>
        <Main /> 
        <Row title="Popular" fetchURL={Requests.requestPopular} />
        <Row title="Upcoming" fetchURL={Requests.requestUpcoming} />
        <Row title="Trending" fetchURL={Requests.requestTrending} />
        <Row title="Top Rated" fetchURL={Requests.requestTopRated} />
        <Row title="Now Playing" fetchURL={Requests.requestNow} />
    </div>
  )
}
