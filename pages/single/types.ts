interface Thumbnail {
  path: string;
  extension: string;
}

interface Items {
  resourceURI: string;
  name: string;
}

interface Session {
  available: number;
  collectionURI: string;
  items: Items[];
  returned: number;
}

export interface HeroSingle {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Session;
  series: Session;
  stories: Session;
  events: Session;
}
