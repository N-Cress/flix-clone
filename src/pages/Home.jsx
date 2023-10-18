import React from 'react'
import Main from '../components/Main'
import Requests from '../Requests'
import Row from '../components/Row'

export default function Home() {
  return (
    <div className='text-white'>
        <Main /> 
        <Row keyID="1" title="Popular" fetchURL={Requests.requestPopular} />
        <Row keyID="2" title="Upcoming" fetchURL={Requests.requestUpcoming} />
        <Row keyID="3" title="Top Rated" fetchURL={Requests.requestTopRated} />
        <Row keyID="4" title="Now Playing" fetchURL={Requests.requestNow} />
        <Row keyID="5" title="Trending" fetchURL={Requests.requestTrending} />
    </div>
  )
}
