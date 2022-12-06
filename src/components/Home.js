<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Row, Col,message } from 'antd';
=======
import React, { Component } from 'react';
import { Row, Col } from 'antd';
>>>>>>> 53214a21db3af415f75ab207cd5d523da773a0a1
import Choice from './Choice';
import PointList from './PointList';
import Map from './Map';
import axios from 'axios';
import {MAPS_API_KEY, BASE_URL} from '../constants';
<<<<<<< HEAD
import {getcity, getCart} from '../utils';


function Home () {
  const [city, setCity] = useState();
  const [interest, setInterest] =useState([])
  const pointList = useState([])

  useEffect(() => {
    getcity()
    .then((data) => {
      setCity(data)
      // console.log(data)
    })
    .catch((err) => {
      message.error(err.message);
    })
}, []);

  useEffect(() => {
    getCart()
        .then((data) => {
          setInterest(data);
        })
        .catch((err) => {
          message.error(err.message);
        })
  }, []);
  
  const showMap = (data) => {
    console.log('show on the map -> ', data);
    this.setState(preState => ({
      ...preState,
      pointList: [...data]
  }))
  }

    return (
      <Row className='main'>
        <Col span={8} className="left-side">
          <Choice 
                  CityInfo={city}
                  onShowMap={pointList}
          />
          <PointList 
                  PointInfo ={showMap}
          />
        </Col>
        <Col span={16} className="right-side">
          <Map />
        </Col>
=======


class Home extends Component {
  showPointofInterest = setting =>{
    console.log("setting -> ", setting);
  }
  render() {
    return (
      <Row className='main'>
          <Col span={8} className="left-side">
              <Choice/>
              <PointList/>
          </Col>
          <Col span={16} className="right-side">
              <Map/>
          </Col>
>>>>>>> 53214a21db3af415f75ab207cd5d523da773a0a1
      </Row>
    );
  }

export default Home