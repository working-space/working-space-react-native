import React from 'react';

import AutoFitImage from 'src/components/AutoFitImage/AutoFitImage';

type FilterName = 'NEAREST' | 'MANY_COMMENTS' | 'MANY_FAVORITES';

interface FilterItem {
  id: keyof Filter;
  name: string;
  imageURL: React.ReactNode;
}

type Filter = Record<FilterName, FilterItem>;

const FILTER: Filter = {
  NEAREST: {
    id: 'NEAREST',
    name: '가까운',
    imageURL: <AutoFitImage source={require('src/assets/images/image_illust_nearest.jpg')} />,
  },
  MANY_COMMENTS: {
    id: 'MANY_COMMENTS',
    name: '댓글 많은',
    imageURL: <AutoFitImage source={require('src/assets/images/image_illust_comment.jpg')} />,
  },
  MANY_FAVORITES: {
    id: 'MANY_FAVORITES',
    name: '좋아요 많은',
    imageURL: <AutoFitImage source={require('src/assets/images/image_illust_favorite.jpg')} />,
  },
};

export default FILTER;
