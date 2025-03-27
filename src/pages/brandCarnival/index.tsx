import React, { useEffect, useState } from 'react';
import Carousel from '../../components/carousel'
import DailyPick from './dailyPick';
import HotPick from './hotPick';
import FootPage from './foot';
import './index.css';
import {getHeadCarousel} from '../../api/apiService';
const BrandCarnival: React.FC = () => {
  const [HeadCarousel, setHeadCarousel] = useState<string[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getHeadCarousel();
        setHeadCarousel(result);
        console.log(HeadCarousel);
      } catch (err) {
      }
    };

    getData();
  },[])
  return (
      <div className='brand-carnival'>
        <div className='head'>
          <div className='head-title'></div>
          <div className='Carousel'>
            <div className='carousel'>
              <Carousel images={HeadCarousel}/>
            </div>
          </div>
        </div>
        <DailyPick/>
        <HotPick/>
        <FootPage/>
      </div>
  );
};
export default BrandCarnival;