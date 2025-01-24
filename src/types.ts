export type URL = {
  regular: string;
  small: string;
};

export type Image = {
  id: string;
  alt_description: string;
  urls: URL;
};

export type Response = {
  total: number;
  total_pages: number;
  results: Array<Image>;
};
