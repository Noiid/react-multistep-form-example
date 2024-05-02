export interface ItemNews {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
}

export interface PageNews {
  status: string;
  totalResults: number;
  articles: ItemNews[];
}
