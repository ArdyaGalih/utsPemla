import Image from "next/image";
import { Button } from "./ui/button";

export function OurStory() {
  return (
    <div className="container pt-20 pb-32 grid lg:grid-cols-2 gap-10">
      <div>
        <div className="relative h-fit w-fit">
          <Image
            src="/home.jpg"
            alt="a picture of room"
            width={400}
            height={400}
            className="object-cover"
          />
          <Image
            src="/image-2.jpg"
            alt="a picture of room"
            width={250}
            height={259}
            className="absolute top-1/2 left-1/2 border-4 object cover hidden lg:block"
          />
        </div>
      </div>
      <div>
        <p className="font-semibold mb-1">Our Story</p>
        <p className="text-3xl mb-2">Efficiency. Transparancy. Control</p>
        <p className="text-muted-foreground mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          quae, repellat tempore mollitia commodi in nobis delectus corrupti
          porro. Qui quibusdam animi eius hic eum in error facere repellat
          corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet accusamus expedita ipsum voluptatem, numquam nobis animi iure
          corrupti sequi! Consectetur quaerat adipisci itaque fugiat officia
          nulla repudiandae, alias reprehenderit et?
        </p>
        <Button>Read More</Button>
      </div>
    </div>
  );
}
