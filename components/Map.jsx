"use client";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = ({ className = "", latitude, longitude, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAGZNXH35c8AGHER4c9cPOCAdstqA6DJnY",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={zoom}
      center={{ lat: latitude, lng: longitude }}
      mapContainerClassName={`max-w-[1240px] min-h-[400px] p-4 mt-4 mb-6 ${className}`}
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  );
};

export default Map;
