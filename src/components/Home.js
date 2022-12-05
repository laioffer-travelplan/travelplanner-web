import React, { useState, useEffect } from 'react';
import { Row, Col,message } from 'antd';
import Choice from './Choice';
import PointList from './PointList';
import Map from './Map';
import axios from 'axios';
import {MAPS_API_KEY, BASE_URL} from '../constants';
import {getcity, getCart} from '../utils';


function Home () {
  const [city, setCity] = useState();
  const [interest, setInterest] =useState([])
  

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
  }

    return (
      <Row className='main'>
<<<<<<< Updated upstream
          <Col span={8} className="left-side">
              <Choice/>
              <PointList/>
          </Col>
          <Col span={16} className="right-side">
              <Map/>
          </Col>
=======
        <Col span={8} className="left-side">
          <Choice 
                  CityInfo={city}
                  onShowMap={showMap}
          />
          <PointList 
                  PointInfo ={showMap}
          />
        </Col>
        <Col span={16} className="right-side">
          <Map />

        </Col>
>>>>>>> Stashed changes
      </Row>
    );
  }

export default Home