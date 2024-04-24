import { Link, Square, StarIcon } from "lucide-react";
import { propertiesList } from "./Features";
import Image from "next/image";

type PropertyCardProps = (typeof propertiesList)[0];

export function PropertyCard({
  name,
  baths,
  beds,
  id,
  image,
  price,
  rating,
  sqft,
}: PropertyCardProps) {
  return (
    <div className="border rounded-md overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={420}
          className="w-full transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-6">
        <p className="text-lg font-semibold">{name}</p>
        <div className="grid grid-cols-3 items-center divide-x border-y border-border/50">
          <p className="py-2 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 lucide lucide-box-select"><path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h1"/><path d="M14 3h1"/><path d="M14 21h1"/><path d="M3 9v1"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M21 14v1"/></svg>            {sqft} Sqft
          </p>

          <p className="py-2 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 lucide lucide-bed"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
            {beds} Beds
          </p>

          <p className="py-2 flex items-center gap-2 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 lucide lucide-bath"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/></svg>
            {baths} Baths
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-muted-foreground">Price</p>
            <p className="font-semibold">{price}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Rating</p>
            <div className="flex gap-2 items-center">
              {Array(5)
                .fill(0)
                .map((_, index) => {
                  return (
                    <div key={index}>
                      <StarIcon
                        fill={index < rating ? "orange" : "transparent"}
                        color="orange"
                        size={16}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
