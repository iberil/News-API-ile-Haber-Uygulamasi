export interface NewsItem {
  title: string;
  description: string;
  content?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  author?: string;
  source?: {
    name: string;
  };
}
