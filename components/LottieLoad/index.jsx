import React from 'react';
import loader from '../../public/loadingLottie.json';
import {useLottie} from 'lottie-react';

const style = {
       height: 150,
};
     
export const LottieLoad = () => {
       const options = {
              animationData: loader,
              loop: false,
              autoplay: true,
       };
       const { View, playSegments } = useLottie(options, style);
     
       return View;
};
