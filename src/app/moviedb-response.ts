export interface MoviedbResponse {
  results: {
    title: string;
    overview: string;
    poster_path: string;
  }[];
  total_pages: number;
}
