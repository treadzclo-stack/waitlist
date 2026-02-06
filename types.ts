
export interface ProductTeaser {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
