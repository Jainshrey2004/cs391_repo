import { useState, useEffect } from "react";
import type { ArtworksProps } from "../types";
import ArtworkPreview from "./ArtworkPreview";

export default function ArtworksListContent() {
  const [numArtworks, setNumArtworks] = useState (5);
   const [artworks, setArtworks] = useState<ArtworksProps[]>([]);

    useEffect(() => {
      async function getArtworks() {
        const res = await fetch(
          `https://api.artic.edu/api/v1/artworks?limit=${numArtworks}`
        );
        const jsonRes = await res.json();
        setArtworks(jsonRes.data);
      }
      getArtworks().catch((e) => console.error(e));
    }, [numArtworks]);

    return (
    <div>
      <h2>Artworks</h2>
      <input
        type="number"
        placeholder="Number of Artworks"
        value={numArtworks}
        min={1}
        onChange={(e) => setNumArtworks(Number(e.target.value))}
      />
      <p>Number of Artworks: {numArtworks}</p>
      <div>
        {artworks.map((a) => {
          return <ArtworkPreview key={a.id ?? a.title} artwork={a} />;
        })}
      </div>
    </div>
  );
}
