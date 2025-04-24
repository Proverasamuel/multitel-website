export interface ServiceOption {
  id: string;
  name: string;
  description: string;
  price: number;
  selected: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  options: ServiceOption[];
  addons?: ServiceOption[];
}
