export class Ship {
  _id?: number;
  name?: string;
  destination?: string;
  departure_day?: string;
  capacity?: number;
  price?: number;
  image_url?: string;

  constructor(name: string, destination: string, departure_day: string, capacity: number, price: number, image_url: string ) {
      this.name = name;
      this.destination = destination;
      this.departure_day = departure_day;
      this.capacity = capacity;
      this.price = price;
      this.image_url = image_url;
  }
}
