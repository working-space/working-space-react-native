import TAG from 'src/constants/tag';

interface Cafe {
  id: string;
  title: string;
  distance?: string;
  address: string;
  tags: (keyof typeof TAG)[];
  badges: string[];
  favoriteCount?: number;
  commentCount?: number;
}

export default Cafe;
