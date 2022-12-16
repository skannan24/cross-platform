export interface Post {
  id?: number;
  is_ad: boolean;
  like: number;
  comment: PostComment[];
  price: number;
  category: string;
  user: PostUser;
  media_url: string;
  media_thumbnail: string;
  media_type: string;
  description: string;
  rating: number;
  created_date: string;
  is_liked?: boolean;
}

export interface PostUser {
  user_id: number;
  user_name: string;
  location?: string;
  phone_number?: number;
  rating?: number;
  is_spam?: boolean;
  is_seller?: boolean;
  earnings?: number;
}

export interface PostComment {
  user_id: number;
  user_name: string;
  comment: string;
}
