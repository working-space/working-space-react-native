import { useCallback, useState } from 'react';

import { Tag } from 'src/models/tag';

export default function useSelectedTags(initialTags: Tag[]) {
  const [selectedTags, setSelectedTags] = useState(initialTags);

  const toggleTag = useCallback((tag) => {
    setSelectedTags((prevSelectedTagIds) => {
      const ids = [...prevSelectedTagIds];
      const index = ids.findIndex((id) => tag.id === id);
      if (index > -1) {
        ids.splice(index, 1);
      } else {
        ids.push(tag.id);
      }
      return ids;
    });
  }, []);

  return {
    selectedTags,
    setSelectedTags,
    toggleTag,
  };
}
