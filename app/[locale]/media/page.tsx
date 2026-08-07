import MediaGallery from "@/components/MediaGallery";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-center text-5xl font-bold">
          Media Gallery
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          Highlights from conferences, workshops,
          presentations and professional activities.
        </p>

        <div className="mt-16">
          <MediaGallery />
        </div>

      </section>

    </main>
  );
}