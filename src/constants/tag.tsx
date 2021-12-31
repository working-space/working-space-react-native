import React from 'react';

import TwentyFourIcon from 'src/assets/icons/icon_24h.svg';
import ChairIcon from 'src/assets/icons/icon_chair.svg';
import ConcentIcon from 'src/assets/icons/icon_concent.svg';
import DessertIcon from 'src/assets/icons/icon_dessert.svg';
import ParkingLotIcon from 'src/assets/icons/icon_parking_lot.svg';
import QuietIcon from 'src/assets/icons/icon_quite.svg';
import SeatIcon from 'src/assets/icons/icon_seat.svg';
import SmokingIcon from 'src/assets/icons/icon_smoking.svg';
import StudyIcon from 'src/assets/icons/icon_study.svg';
import TimerIcon from 'src/assets/icons/icon_timer.svg';
import ToiletIcon from 'src/assets/icons/icon_toilet.svg';
import WifiIcon from 'src/assets/icons/icon_wifi.svg';

interface Tag {
  concent: TagItem;
  mute: TagItem;
  parking: TagItem;
  toilet: TagItem;
  twentyFour: TagItem;
  study: TagItem;
  dessert: TagItem;
  smoking: TagItem;
  timer: TagItem;
  seat: TagItem;
  wifi: TagItem;
  chair: TagItem;
}

interface TagItem {
  id: keyof Tag;
  name: string;
  icon: React.ReactNode;
}

const TAG: Tag = {
  concent: {
    id: 'concent',
    name: '콘센트가 있는',
    icon: <ConcentIcon />,
  },
  mute: {
    id: 'mute',
    name: '분위기가 조용한',
    icon: <QuietIcon />,
  },
  parking: {
    id: 'parking',
    name: '주차장이 있는',
    icon: <ParkingLotIcon />,
  },
  toilet: {
    id: 'toilet',
    name: '화장실이 깨끗한',
    icon: <ToiletIcon />,
  },
  twentyFour: {
    id: 'twentyFour',
    name: '24시간 열린',
    icon: <TwentyFourIcon />,
  },
  study: {
    id: 'study',
    name: '스터디룸이 있는',
    icon: <StudyIcon />,
  },
  dessert: {
    id: 'dessert',
    name: '디저트가 다양한',
    icon: <DessertIcon />,
  },
  smoking: {
    id: 'smoking',
    name: '흡연구역이 마련된',
    icon: <SmokingIcon />,
  },
  timer: {
    id: 'timer',
    name: '시간제한이 있는',
    icon: <TimerIcon />,
  },
  seat: {
    id: 'seat',
    name: '빈자리가 많은',
    icon: <SeatIcon />,
  },
  wifi: {
    id: 'wifi',
    name: '와이파이가 빠른',
    icon: <WifiIcon />,
  },
  chair: {
    id: 'chair',
    name: '의자가 푹신한',
    icon: <ChairIcon />,
  },
};

export default TAG;
