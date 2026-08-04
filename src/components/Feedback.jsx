import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right');

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, Shell Nigeria",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
      quote: "ZigoBiz has transformed our data infrastructure. Their AI solutions have increased our operational efficiency by 40%. The team's expertise and dedication to excellence is unmatched.",
      rating: 5,
      company: "Shell"
    },
    {
      id: 2,
      name: "Michael Okonkwo",
      position: "Head of Digital Transformation, MTN",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
      quote: "The cloud migration strategy provided by ZigoBiz was seamless. We've seen significant cost savings and improved scalability across our operations. Highly recommended!",
      rating: 5,
      company: "MTN"
    },
    {
      id: 3,
      name: "Dr. Amina Mohammed",
      position: "Director of Innovation, Ericsson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80",
      quote: "Working with ZigoBiz has been transformative. Their cybersecurity solutions gave us the confidence to expand our digital footprint. A true partner in innovation.",
      rating: 5,
      company: "Ericsson"
    },
    {
      id: 4,
      name: "James Ogunleye",
      position: "IT Director, Nestle Nigeria",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
      quote: "The data analytics platform developed by ZigoBiz has revolutionized how we understand our supply chain. Real-time insights have improved decision-making across all levels.",
      rating: 5,
      company: "Nestle"
    },
    {
      id: 5,
      name: "Grace Muthoni",
      position: "VP Technology, Coca-Cola",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80",
      quote: "ZigoBiz delivered beyond our expectations. Their innovative approach to digital transformation has positioned us as industry leaders. The ROI has been exceptional.",
      rating: 5,
      company: "Coca-Cola"
    }
  ];

  const goToNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  // Animation handler
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#7D582E' }}>
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
            What Our Clients Say
            <br />
            <span className="font-bold" style={{ color: '#7D582E' }}>About Us</span>
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Real feedback from global enterprises we've partnered with.
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:shadow-xl transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
          </button>

          {/* Slide Container */}
          <div className="overflow-hidden rounded-3xl bg-gray-50/50 border border-gray-100 p-8 lg:p-12">
            <div className="relative min-h-[300px] lg:min-h-[250px]">
              {/* Animated Slide */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isAnimating
                    ? direction === 'right'
                      ? 'opacity-0 translate-x-8 scale-95'
                      : 'opacity-0 -translate-x-8 scale-95'
                    : 'opacity-100 translate-x-0 scale-100'
                }`}
                onTransitionEnd={handleAnimationEnd}
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                  {/* Avatar and Info */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div className="relative">
                      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4" style={{ borderColor: '#ECD5AB' }}>
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Quote Icon */}
                      <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-white shadow-lg">
                        <Quote className="w-5 h-5" style={{ color: '#7D582E' }} strokeWidth={1.5} />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mt-4">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {currentTestimonial.position}
                    </p>
                    <div className="flex justify-center lg:justify-start gap-1 mt-2">
                      {renderStars(currentTestimonial.rating)}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <div className="relative">
                      <Quote
                        className="absolute -top-2 -left-2 w-8 h-8 opacity-10"
                        style={{ color: '#7D582E' }}
                        strokeWidth={1}
                      />
                      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light pl-6">
                        "{currentTestimonial.quote}"
                      </p>
                    </div>
                    <div className="mt-4 pl-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#ECD5AB', color: '#7D582E' }}>
                        {currentTestimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8'
                    : 'w-2 hover:w-4'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#7D582E' : '#ECD5AB'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-sm text-gray-400">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;