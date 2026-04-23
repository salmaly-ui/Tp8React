import { useState, useEffect } from 'react';

function PhotosGallery() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    // API publique Unsplash (pas besoin de clé pour quelques requêtes)
    fetch('https://api.unsplash.com/photos?per_page=9&client_id=demo')
      .then((res) => {
        if (!res.ok) {
          // Si l'API Unsplash ne marche pas, utiliser des photos de remplacement
          throw new Error('Utilisation de photos de remplacement');
        }
        return res.json();
      })
      .then((data) => {
        const formattedPhotos = data.map((photo) => ({
          id: photo.id,
          title: photo.description || photo.alt_description || 'Belle photo',
          url: photo.urls.regular,
          author: photo.user.name
        }));
        setPhotos(formattedPhotos);
      })
      .catch((error) => {
        // Photos de secours avec Lorem Picsum
        const backupPhotos = [
          { id: 1, title: 'Paysage montagneux', url: 'https://picsum.photos/600/400?random=1' },
          { id: 2, title: 'Architecture moderne', url: 'https://picsum.photos/600/400?random=2' },
          { id: 3, title: 'Nature sauvage', url: 'https://picsum.photos/600/400?random=3' },
          { id: 4, title: 'Ville nocturne', url: 'https://picsum.photos/600/400?random=4' },
          { id: 5, title: 'Plage tropicale', url: 'https://picsum.photos/600/400?random=5' },
          { id: 6, title: 'Forêt dense', url: 'https://picsum.photos/600/400?random=6' },
          { id: 7, title: 'Coucher de soleil', url: 'https://picsum.photos/600/400?random=7' },
          { id: 8, title: 'Animaux sauvages', url: 'https://picsum.photos/600/400?random=8' },
          { id: 9, title: 'Océan bleu', url: 'https://picsum.photos/600/400?random=9' }
        ];
        setPhotos(backupPhotos);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div className="loading-message">⏳ Chargement des photos...</div>;
  if (errorMsg) return <div className="error-message">❌ Erreur : {errorMsg}</div>;

  return (
    <div className="photos-section">
      <h2 className="section-title">🖼️ Galerie de photos</h2>
      <div className="photos-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img 
              src={photo.url} 
              alt={photo.title} 
              className="photo-card-image"
              loading="lazy"
              onError={(e) => {
                // Image de secours si le chargement échoue
                e.target.src = 'https://via.placeholder.com/600x400/667eea/ffffff?text=Image+Indisponible';
              }}
            />
            <div className="photo-card-content">
              <p className="photo-card-title">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotosGallery;