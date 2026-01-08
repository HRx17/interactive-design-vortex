import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { createPortal } from 'react-dom';
import { X, Printer, Palette, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// 3D Printing images
import figureFront from '@/assets/makers-studio/3d-figure-front.jpg';
import figureBack from '@/assets/makers-studio/3d-figure-back.jpg';
import mechanismCube from '@/assets/makers-studio/3d-mechanism-cube.jpg';

// Art images
import artJarLandscape from '@/assets/makers-studio/art-jar-landscape.jpg';
import artLuffy from '@/assets/makers-studio/art-luffy.jpeg';
import artPaintingsDisplay from '@/assets/makers-studio/art-paintings-display.jpg';
import artCanvasCollection from '@/assets/makers-studio/art-canvas-collection.jpg';
import artCitySketch from '@/assets/makers-studio/art-city-sketch.jpeg';
import artShiva from '@/assets/makers-studio/art-shiva.jpeg';
import artColony from '@/assets/makers-studio/art-colony.jpg';
import artMountains from '@/assets/makers-studio/art-mountains.jpeg';
import artDeku from '@/assets/makers-studio/art-deku.jpeg';
import artCraft1 from '@/assets/makers-studio/art-craft-1.jpg';
import artCraft2 from '@/assets/makers-studio/art-craft-2.jpeg';
import artCraft3 from '@/assets/makers-studio/art-craft-3.webp';
import artCraft4 from '@/assets/makers-studio/art-craft-4.jpg';
import artCraft5 from '@/assets/makers-studio/art-craft-5.webp';
import artCraft6 from '@/assets/makers-studio/art-craft-6.webp';
import artCraft7 from '@/assets/makers-studio/art-craft-7.jpeg';

interface GalleryItem {
  id: string;
  image: string;
  category: '3d-printing' | 'art';
  caption: string;
  span?: 'tall' | 'wide' | 'normal';
}

const printingItems: GalleryItem[] = [
  { id: '3d-1', image: figureFront, category: '3d-printing', caption: 'Articulated Figure - Front View', span: 'tall' },
  { id: '3d-2', image: mechanismCube, category: '3d-printing', caption: 'Print-in-Place Mechanism Cube', span: 'normal' },
  { id: '3d-3', image: figureBack, category: '3d-printing', caption: 'Articulated Figure - Back View', span: 'normal' },
];

const artItems: GalleryItem[] = [
  { id: 'art-1', image: artJarLandscape, category: 'art', caption: 'Landscape in a Jar - Digital Art', span: 'tall' },
  { id: 'art-2', image: artCanvasCollection, category: 'art', caption: 'Canvas Collection with Painted Bottle', span: 'wide' },
  { id: 'art-3', image: artColony, category: 'art', caption: 'Colony 1BK08 - Ink Drawing', span: 'normal' },
  { id: 'art-4', image: artMountains, category: 'art', caption: 'Mountain Landscape - Pencil', span: 'normal' },
  { id: 'art-5', image: artShiva, category: 'art', caption: 'Lord Shiva - Pencil Sketch', span: 'tall' },
  { id: 'art-6', image: artPaintingsDisplay, category: 'art', caption: 'Acrylic Paintings Display', span: 'normal' },
  { id: 'art-7', image: artLuffy, category: 'art', caption: 'Luffy - Anime Sketch', span: 'normal' },
  { id: 'art-8', image: artDeku, category: 'art', caption: 'Deku - Anime Sketch', span: 'normal' },
  { id: 'art-9', image: artCitySketch, category: 'art', caption: 'City Street - Pencil Sketch', span: 'normal' },
  { id: 'art-10', image: artCraft1, category: 'art', caption: 'Mountain Sunset - Acrylic', span: 'normal' },
  { id: 'art-11', image: artCraft2, category: 'art', caption: 'Portrait Sketch', span: 'tall' },
  { id: 'art-12', image: artCraft3, category: 'art', caption: 'Canvas Art Collection', span: 'wide' },
  { id: 'art-13', image: artCraft4, category: 'art', caption: 'Bottle Art - Acrylic', span: 'normal' },
  { id: 'art-14', image: artCraft5, category: 'art', caption: 'Creative Craft Work', span: 'normal' },
  { id: 'art-15', image: artCraft6, category: 'art', caption: 'Handmade Craft', span: 'normal' },
  { id: 'art-16', image: artCraft7, category: 'art', caption: 'Portrait Study', span: 'normal' },
];

const GalleryGrid = ({ 
  items, 
  onImageClick 
}: { 
  items: GalleryItem[]; 
  onImageClick: (item: GalleryItem) => void;
}) => {
  return (
    <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-0">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-2xl cursor-pointer mb-3 md:mb-4 break-inside-avoid"
          onClick={() => onImageClick(item)}
        >
          <img
            src={item.image}
            alt={item.caption}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-xs md:text-sm font-medium">{item.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const MakersStudioPage = () => {
  const [expandedImage, setExpandedImage] = useState<GalleryItem | null>(null);
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: printingRef, inView: printingInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: artRef, inView: artInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Maker's Studio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring the intersection of creativity and fabrication—from 3D printers to canvas.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Printing Section */}
      <section className="py-16 md:py-24" ref={printingRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className={`max-w-6xl mx-auto transition-all duration-700 ${printingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-primary/10">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Precision 3D Fabrication</h2>
                <p className="text-muted-foreground">Rapid Prototyping & Assembly</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Exploring kinematics, print-in-place mechanisms, and tolerance testing with FDM printing. 
              These projects help me understand physical constraints in product design and bridge the gap 
              between digital prototypes and tangible products.
            </p>

            <GalleryGrid items={printingItems} onImageClick={setExpandedImage} />
          </div>
        </div>
      </section>

      {/* Art Section */}
      <section className="py-16 md:py-24 bg-secondary/30" ref={artRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className={`max-w-6xl mx-auto transition-all duration-700 delay-200 ${artInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-accent/20">
                <Palette className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Visual Arts</h2>
                <p className="text-muted-foreground">Pencil, Ink & Acrylics</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Expressing concepts through various mediums—from detailed pencil sketches to vibrant acrylic paintings. 
              A break from the digital world to sharpen my eye for color, composition, and form.
            </p>

            <GalleryGrid items={artItems} onImageClick={setExpandedImage} />
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox Portal */}
      {expandedImage && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <img
              src={expandedImage.image}
              alt={expandedImage.caption}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm text-sm text-foreground">
                {expandedImage.caption}
              </span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-secondary transition-colors z-10"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default MakersStudioPage;
