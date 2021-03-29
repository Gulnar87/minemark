export interface Root {
  publications: Publications[];
}

export interface Publications {
  id: number;
  title: string;
  descriptions: Descriptions;
  picTop: string;
  picCard: string;
  pictures: Pictures;
}

export interface Descriptions {
  paragraph: string;
}

export interface Pictures {
  carouselPic: string;
  alt: string;
}
