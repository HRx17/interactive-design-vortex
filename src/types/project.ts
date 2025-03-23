
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  behanceUrl: string;
  images: string[];
  overview?: string[];
  challenges?: string[];
  outcomes?: string[];
}
