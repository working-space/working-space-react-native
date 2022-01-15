import React from 'react';

import TagItem from 'src/components/TagItem/TagItem';
import { Tag, TagName } from 'src/models/tag';
import { AllTags, EditTags } from './SetTags.styles';

interface Props {
  preferTags: TagName[];
  onToggleTag: (tag: Tag) => void;
}

const SetTags = ({ preferTags, onToggleTag }: Props) => {
  const allTags: Tag[][] = [
    [
      { id: 'chair', count: 0, isSelected: false },
      { id: 'wifi', count: 0, isSelected: false },
      { id: 'seat', count: 0, isSelected: false },
      { id: 'timer', count: 0, isSelected: false },
    ],
    [
      { id: 'concent', count: 0, isSelected: false },
      { id: 'mute', count: 0, isSelected: false },
      { id: 'twentyFour', count: 0, isSelected: false },
      { id: 'parking', count: 0, isSelected: false },
    ],
    [
      { id: 'toilet', count: 0, isSelected: false },
      { id: 'study', count: 0, isSelected: false },
      { id: 'dessert', count: 0, isSelected: false },
      { id: 'smoking', count: 0, isSelected: false },
    ],
  ];

  return (
    <AllTags>
      {allTags.map((rowTags, index) => {
        return (
          <EditTags index={index} allLength={allTags.length} key={index}>
            {rowTags.map((tag) => {
              return (
                <TagItem
                  key={tag.id}
                  showCount={false}
                  tag={tag}
                  selected={preferTags.includes(tag.id)}
                  onPress={onToggleTag}
                />
              );
            })}
          </EditTags>
        );
      })}
    </AllTags>
  );
};

export default SetTags;
