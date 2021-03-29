export interface Root {
  publications: Publication[];
}

export interface Publication {
  id: string;
  titleid?: string;
  title: string;
  descriptions?: Descriptions;
  picTop?: string;
  picCard?: string;
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
