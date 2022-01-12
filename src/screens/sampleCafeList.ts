import { CafeDetail } from 'src/models/cafe';

const sampleCafeList: CafeDetail[] = [
  {
    id: 'daum-1173977014',
    hours: ['평일 10:00 ~ 21:00', '주말 10:00 ~ 18:00'],
    closed: null,
    location: {
      latitude: 130.6612856923875,
      longitude: 43.5896766328793,
    },
    name: '하이드앤시크',
    phone: null,
    address: '서울 중구 퇴계로8길 70',
    homepage: 'http://www.instagram.com/cafe_hideandseek',
    imageURLs: [
      'https://cdn.inflearn.com/wp-content/uploads/web3-1.png',
      'https://cdn.inflearn.com/wp-content/uploads/web3-1.png',
      'https://cdn.inflearn.com/wp-content/uploads/web3-1.png',
      'https://cdn.inflearn.com/wp-content/uploads/web3-1.png',
      'https://cdn.inflearn.com/wp-content/uploads/web3-1.png',
      'https://cdn.inflearn.com/wp-content/uploads/web3-1.png',
    ],
    tags: [
      { id: 'chair', count: 24, isSelected: false },
      { id: 'wifi', count: 13, isSelected: false },
      { id: 'seat', count: 11, isSelected: false },
      { id: 'timer', count: 19, isSelected: false },
      { id: 'concent', count: 8, isSelected: false },
      { id: 'mute', count: 21, isSelected: false },
      { id: 'twentyFour', count: 7, isSelected: false },
      { id: 'parking', count: 6, isSelected: false },
      { id: 'toilet', count: 16, isSelected: false },
      { id: 'study', count: 5, isSelected: false },
      { id: 'dessert', count: 13, isSelected: false },
      { id: 'smoking', count: 9, isSelected: false },
    ],
    comments: { totalCount: 0, data: [] },
    distance: '10m',
    likeCount: 0,
  },
];

export default sampleCafeList;
