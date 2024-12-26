export interface Image {
    id: number;
    urls: {
        regular?: string,
        small: string,
    };
  alt_description: string;
}