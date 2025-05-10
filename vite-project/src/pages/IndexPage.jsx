import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";


export default function IndexPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces([...response.data, ...response.data]); // For demo, load more
    });
  }, []);

  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
      {places.length > 0 &&
        places.map(place => (
          <Link
            key={place._id}
            to={`/place/${place._id}`}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="aspect-square w-full bg-gray-200 relative">
              {place.photos?.[0] && (
                <img
                  className="object-cover w-full h-full"
                  src={`http://localhost:4000/uploads/${place.photos[0]}`}
                  alt={place.title}
                  loading="lazy"
                />
              )}
              <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-full shadow-md">
                SUPERHOST
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-sm truncate">{place.title}</h2>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500" />
                  4.9
                </div>
              </div>
              <h3 className="text-sm text-gray-500 truncate">{place.address}</h3>
              <div className="mt-1 text-sm">
                <span className="font-semibold">${place.price}</span> night
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Check-in: {place.checkIn} · Check-out: {place.checkOut}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
