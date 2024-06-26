import { PropertyCard } from "./PropertyCard";

export const propertiesList = [
  {
    id: "pro__1",
    name: "123 Main St, Anytown, USA",
    price: 400,
    rating: 4,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image-1.jpg",
  },
  {
    id: "pro__2",
    name: "456 Oak St, Another City, USA",
    price: 300,
    rating: 4,
    sqft: 500,
    beds: 2,
    baths: 2,
    image: "/image-2.jpg",
  },
  {
    id: "pro__3",
    name: "789 Pine St, Yet Another City, USA",
    price: 200,
    rating: 3,
    sqft: 600,
    beds: 4,
    baths: 3,
    image: "/image-3.jpg",
  },
  {
    id: "pro__4",
    name: "321 Elm St, Somewhere, USA",
    price: 600,
    rating: 5,
    sqft: 350,
    beds: 2,
    baths: 1,
    image: "/image-4.jpg",
  },
  {
    id: "pro__5",
    name: "654 Birch St, Nowhere, USA",
    price: 100,
    rating: 3,
    sqft: 450,
    beds: 3,
    baths: 2,
    image: "/image-6.jpg",
  },
  {
    id: "pro__6",
    name: "987 Maple St, Anytown, USA",
    price: 200,
    rating: 4,
    sqft: 550,
    beds: 4,
    baths: 3,
    image: "/image-7.jpg",
  },
  {
    id: "pro__7",
    name: "246 Cedar St, Another City, USA",
    price: 500,
    rating: 5,
    sqft: 400,
    beds: 2,
    baths: 2,
    image: "/image-8.jpg",
  },
  {
    id: "pro__8",
    name: "135 Walnut St, Yet Another City, USA",
    price: 300,
    rating: 3,
    sqft: 600,
    beds: 3,
    baths: 2,
    image: "/image-9.jpg",
  },
  {
    id: "pro__9",
    name: "864 Oakwood St, Somewhere, USA",
    price: 800,
    rating: 4,
    sqft: 500,
    beds: 4,
    baths: 3,
    image: "/image-10.jpg",
  },
];

export function Features() {
  return (
    <div className="container pb-20">
      <h3 id="propertycard" className="text-4xl text-center mb-2">Featured & Pricing</h3>
      <p className="text-center text-muted-foreground">
        Explore our exquisite featured properties showcasing unparalleled charm,
        luxurious amenities, and prime locations
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {propertiesList.map((property) => (
          <PropertyCard key={property.id}{...property} />
        ))}
      </div>
    </div>
  );
}
