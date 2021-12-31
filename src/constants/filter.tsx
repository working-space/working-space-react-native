import React from 'react';

import AutoFitImage from 'src/components/AutoFitImage/AutoFitImage';

interface Filter {
  NEAREST: FilterItem;
  MANY_COMMENTS: FilterItem;
  MANY_FAVORITES: FilterItem;
}

interface FilterItem {
  id: keyof Filter;
  name: string;
  imageURL: React.ReactNode;
}

const FILTER: Filter = {
  NEAREST: {
    id: 'NEAREST',
    name: '가까운',
    imageURL: <AutoFitImage source={require('src/assets/images/m_nearest_illust.jpg')} />,
  },
  MANY_COMMENTS: {
    id: 'MANY_COMMENTS',
    name: '댓글 많은',
    imageURL: <AutoFitImage source={require('src/assets/images/m_comment_illust.jpg')} />,
  },
  MANY_FAVORITES: {
    id: 'MANY_FAVORITES',
    name: '좋아요 많은',
    imageURL: <AutoFitImage source={require('src/assets/images/m_favorite_illust.jpg')} />,
  },
};

export default FILTER;
