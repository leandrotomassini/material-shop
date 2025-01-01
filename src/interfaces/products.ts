
export interface IProduct {
  _id:         string;
  title:       string;
  description: string;
  inStock:     number;
  price:       number;
  slug:        string;
  type:        ITypes;
  sizes:       ISizes[];
  images:      string[];
  tags:        string[];
  gender:      'men' | 'women' | 'kid' | 'unisex';
}

export type ISizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ITypes = 'shirts'|'pants'|'hoodies'|'hats';