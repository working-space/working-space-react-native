import { Comment } from './comment';
import { Tag } from './tag';

export interface Cafe {
  id: string;
  name: string;
  distance?: string | null;
  address: string | null;
  tags: Tag[];
  likeCount: number;
  comments: { totalCount: number; data: Comment[] };
}

export interface CafeDetail extends Cafe {
  location: { latitude: number; longitude: number };
  hours: string[];
  closed: string | null;
  phone: string | null;
  homepage: string | null;
  imageURLs: string[];
}
