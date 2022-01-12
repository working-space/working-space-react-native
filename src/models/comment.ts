export interface Comment {
  id: string;
  userId: string;
  content: string;
  updatedAt: string;
}

export interface Comments {
  totalCount: number;
  data: Comment[];
}
