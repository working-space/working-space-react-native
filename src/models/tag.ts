import React from 'react';

export type TagName =
  | 'concent'
  | 'mute'
  | 'parking'
  | 'toilet'
  | 'twentyFour'
  | 'study'
  | 'dessert'
  | 'smoking'
  | 'timer'
  | 'seat'
  | 'wifi'
  | 'chair';

interface TagItem {
  id: TagName;
  name: string;
  icon: React.ReactNode;
}

export type TagSet = Record<TagName, TagItem>;

export interface Tag {
  id: TagName;
  count: number;
  isSelected: boolean;
}
