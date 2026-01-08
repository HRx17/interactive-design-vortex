import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { createPortal } from 'react-dom';
import { X, Printer, Palette } from 'lucide-react';

import figureFront from '@/assets/makers-studio/3d-figure-front.jpg';
import figureBack from '@/assets/makers-studio/3d-figure-back.jpg';
import mechanismCube from '@/assets/makers-studio/3d-mechanism-cube.jpg';

interface GalleryItem {
  id: string;
  image: string;
  category: '3d-printing' | 'art';
  caption: string;
  span?: 'tall' | 'wide' | 'normal';
}

const galleryItems: GalleryItem[] = [
  {
    id: '3d-1',
    image: figureFront,
    category: '3d-printing',
    caption: 'Articulated Figure - Front View',
    span: 'tall',
  },
  {
    id: '3d-2',
    image: mechanismCube,
    category: '3d-printing',
    caption: 'Print-in-Place Mechanism Cube',
    span: 'normal',
  },
  {
    id: '3d-3',
    image: figureBack,
    category: '3d-printing',
    caption: 'Articulated Figure - Back View',
    span: 'normal',
  },
  // Placeholder for art items - will be added when images are uploaded
];

export const MakersStudio = () => {
  const [expandedImage, setExpandedImage] = useState<GalleryItem | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const printingItems = galleryItems.filter(item => item.category === '3d-printing');
  const artItems = galleryItems.filter(item => item.category === 'art');

  return (
    <section className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Maker's Studio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of creativity and fabrication—from 3D printers to canvas.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* 3D Printing Section */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary/10">
                <Printer className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Precision 3D Fabrication</h3>
                <p className="text-sm text-muted-foreground">Rapid Prototyping & Assembly</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Exploring kinematics, print-in-place mechanisms, and tolerance testing with FDM printing. 
              These projects help me understand physical constraints in product design.
            </p>

            {/* 3D Printing Gallery - Masonry Style */}
            <div className="grid grid-cols-2 gap-3">
              {printingItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                    item.span === 'tall' ? 'row-span-2' : ''
                  } ${item.span === 'wide' ? 'col-span-2' : ''}`}
                  onClick={() => setExpandedImage(item)}
                >
                  <div className={`${item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square'} w-full`}>
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Art Section */}
          <div className={`transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-accent/20">
                <Palette className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Acrylic Arts</h3>
                <p className="text-sm text-muted-foreground">Visual Arts</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Expressing abstract concepts through acrylics on canvas. A break from the digital world 
              to sharpen my eye for color and composition.
            </p>

            {/* Art Gallery - Placeholder */}
            {artItems.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {artItems.map((item) => (
                  <div
                    key={item.id}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                      item.span === 'tall' ? 'row-span-2' : ''
                    } ${item.span === 'wide' ? 'col-span-2' : ''}`}
                    onClick={() => setExpandedImage(item)}
                  >
                    <div className={`${item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square'} w-full`}>
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-xs font-medium">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-64 rounded-2xl border-2 border-dashed border-border/50 flex items-center justify-center bg-muted/30">
                <div className="text-center text-muted-foreground">
                  <Palette className="h-10 w-10 mx-auto mb-3 opacity-40" />
                  <p className="text-sm font-medium">Art Gallery Coming Soon</p>
                  <p className="text-xs mt-1">Paintings will be added here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Portal */}
      {expandedImage && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
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
    </section>
  );
};
