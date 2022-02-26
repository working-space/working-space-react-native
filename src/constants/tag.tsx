import React from 'react';

import TwentyFourIcon from 'src/assets/icons/icon_24h.svg';
import ChairIcon from 'src/assets/icons/icon_chair.svg';
import ConcentIcon from 'src/assets/icons/icon_concent.svg';
import DessertIcon from 'src/assets/icons/icon_dessert.svg';
import MuteIcon from 'src/assets/icons/icon_mute.svg';
import ParkingIcon from 'src/assets/icons/icon_parking.svg';
import SeatIcon from 'src/assets/icons/icon_seat.svg';
import SmokingIcon from 'src/assets/icons/icon_smoking.svg';
import StudyIcon from 'src/assets/icons/icon_study.svg';
import TimerIcon from 'src/assets/icons/icon_timer.svg';
import ToiletIcon from 'src/assets/icons/icon_toilet.svg';
import WifiIcon from 'src/assets/icons/icon_wifi.svg';
import { TagSet } from 'src/models/tag';

const TAG: TagSet = {
  concent: {
    id: 'concent',
    name: '콘센트가 있는',
    icon: <ConcentIcon width="24" height="24" />,
  },
  mute: {
    id: 'mute',
    name: '분위기가 조용한',
    icon: <MuteIcon width="24" height="24" />,
  },
  parking: {
    id: 'parking',
    name: '주차장이 있는',
    icon: <ParkingIcon width="24" height="24" />,
  },
  toilet: {
    id: 'toilet',
    name: '화장실이 깨끗한',
    icon: <ToiletIcon width="24" height="24" />,
  },
  twentyFour: {
    id: 'twentyFour',
    name: '24시간 열린',
    icon: <TwentyFourIcon width="24" height="24" />,
  },
  study: {
    id: 'study',
    name: '스터디룸이 있는',
    icon: <StudyIcon width="24" height="24" />,
  },
  dessert: {
    id: 'dessert',
    name: '디저트가 다양한',
    icon: <DessertIcon width="24" height="24" />,
  },
  smoking: {
    id: 'smoking',
    name: '흡연구역이 마련된',
    icon: <SmokingIcon width="24" height="24" />,
  },
  timer: {
    id: 'timer',
    name: '시간제한이 있는',
    icon: <TimerIcon width="24" height="24" />,
  },
  seat: {
    id: 'seat',
    name: '빈자리가 많은',
    icon: <SeatIcon width="24" height="24" />,
  },
  wifi: {
    id: 'wifi',
    name: '와이파이가 빠른',
    icon: <WifiIcon width="24" height="24" />,
  },
  chair: {
    id: 'chair',
    name: '의자가 푹신한',
    icon: <ChairIcon width="24" height="24" />,
  },
};

export default TAG;
