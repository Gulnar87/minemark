export interface Root {
  works: Publication[];
}

export interface Publication {
  id: number;
  title: string;
  descriptions?: Descriptions;
  picTop: string;
  picCard: string;
  pictures?: Pictures;
  body?: string;
}

export interface Descriptions {
  paragraph: string;
}

export interface Pictures {
  carouselPic: string;
  alt: string;
}
