import Image from "next/image";
import { mediaItems } from "@/data/media";

export default function MediaGallery() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {mediaItems.map((item) => (
        <div
          key={item.title}
          className="overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl"
        >
          <div className="relative h-72">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4">
            <span className="text-sm text-blue-600">
              {item.category}
            </span>

            <h3 className="mt-2 font-semibold">
              {item.title}
            </h3>
          </div>
        </div>
      ))}

    </div>
  );
}