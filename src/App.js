import './App.css';
import PhotosGallery from './PhotosGallery';
import CommentsSection from './CommentsSection';

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>🌐 Consommation d'API avec React</h1>
        <p>Découverte de fetch() et axios</p>
      </header>
      
      <PhotosGallery />
      <hr className="divider" />
      <CommentsSection />
    </div>
  );
}

export default App;