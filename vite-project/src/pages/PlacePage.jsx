import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) return;
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return '';

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen overflow-y-auto z-50">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl">Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="flex gap-1 py-2 px-4 rounded-2xl shadow bg-white text-black hover:bg-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
              </svg>
              Close photos
            </button>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {place?.photos?.map(photo => (
              <div key={photo}>
                <img
                  src={`http://localhost:4000/uploads/${photo}`}
                  alt={`Photo of ${place.title}`}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 py-8">
      <h1 className="text-2xl font-semibold">{place.title}</h1>

      <a
        className="flex gap-1 my-3 block font-semibold underline"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://maps.google.com/?q=${encodeURIComponent(place.address)}`}
      >
        {place.address}
      </a>

      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
          <div>
            {place.photos?.[0] && (
              <img
                className="aspect-square object-cover"
                src={`http://localhost:4000/uploads/${place.photos[0]}`}
                alt=""
              />
            )}
          </div>
          <div className="grid">
            {place.photos?.[1] && (
              <img
                className="aspect-square object-cover"
                src={`http://localhost:4000/uploads/${place.photos[1]}`}
                alt=""
              />
            )}
            {place.photos?.[2] && (
              <img
                className="aspect-square object-cover"
                src={`http://localhost:4000/uploads/${place.photos[2]}`}
                alt=""
              />
            )}
          </div>
        </div>

        {/* ✅ Description */}
        {place.description && (
          <div className="mt-6 text-gray-700 leading-relaxed text-md">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p>{place.description}</p>
          </div>
        )}

        {/* ✅ Check-in/out & Price */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-800 text-sm">
          <div>
            <h3 className="font-semibold">Check-in</h3>
            <p>{place.checkIn}</p>
          </div>
          <div>
            <h3 className="font-semibold">Check-out</h3>
            <p>{place.checkOut}</p>
          </div>
          <div>
            <h3 className="font-semibold">Price per night</h3>
            <p>${place.price}</p>
          </div>
        </div>

        {/* ✅ Extra Info */}
        {place.extraInfo && (
          <div className="mt-6 text-gray-700">
            <h2 className="text-xl font-semibold mb-2">Extra Information</h2>
            <p>{place.extraInfo}</p>
          </div>
        )}

        {/* Show More Button */}
        <button
          onClick={() => setShowAllPhotos(true)}
          className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md hover:bg-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
            <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
          </svg>
          Show More
        </button>
      </div>
    </div>
  );
}
