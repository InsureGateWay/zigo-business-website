import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  Clock, 
  Tag, 
  User,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  Briefcase,
  Globe,
  Zap,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  X,
  Heart,
  Send,
  Link2,
  ChevronDown
} from 'lucide-react';

function News() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Company', 'Technology', 'Innovation', 'Partnerships', 'Awards'];

  const newsArticles = [
    {
      id: 1,
      title: "ZigoBiz Launches Next-Generation AI Platform for African Enterprises",
      excerpt: "The new AI platform promises to revolutionize how businesses leverage data analytics and machine learning across the continent.",
      content: "ZigoBiz has unveiled its most ambitious AI platform to date, designed specifically for African enterprises. The platform leverages cutting-edge machine learning algorithms and big data analytics to provide businesses with unprecedented insights into their operations. This launch marks a significant milestone in Africa's digital transformation journey, positioning ZigoBiz as a leader in enterprise AI solutions across the continent. The platform features advanced natural language processing capabilities, predictive analytics, and automated decision-making tools that will help businesses optimize their operations and drive growth.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80",
      category: "Technology",
      date: "December 15, 2024",
      readTime: "5 min read",
      author: "Chioma Okafor",
      authorRole: "Head of AI Solutions",
      likes: 234,
      comments: 45,
      featured: true
    },
    {
      id: 2,
      title: "ZigoBiz Named Africa's Best IT Services Provider 2024",
      excerpt: "The prestigious award recognizes ZigoBiz's commitment to excellence and innovation in delivering IT solutions across the continent.",
      content: "ZigoBiz has been awarded the prestigious 'Africa's Best IT Services Provider' award for 2024. This recognition comes after a comprehensive evaluation of the company's performance, innovation, and customer satisfaction across the continent. The award highlights ZigoBiz's exceptional track record in delivering innovative IT solutions, its commitment to customer success, and its significant contributions to Africa's digital transformation. This achievement reflects the hard work and dedication of the entire ZigoBiz team.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop&q=80",
      category: "Awards",
      date: "December 10, 2024",
      readTime: "3 min read",
      author: "Michael Adebayo",
      authorRole: "Director of Operations",
      likes: 567,
      comments: 89,
      featured: true
    },
    {
      id: 3,
      title: "Strategic Partnership with Microsoft to Accelerate Cloud Adoption",
      excerpt: "The partnership will bring advanced cloud solutions to African businesses, enabling digital transformation at scale.",
      content: "ZigoBiz has announced a strategic partnership with Microsoft to accelerate cloud adoption across Africa. This collaboration will bring Microsoft's advanced cloud solutions, including Azure and Microsoft 365, to African businesses at scale. The partnership aims to empower organizations with the tools and expertise needed to drive digital transformation, improve operational efficiency, and enhance customer experiences. Through this partnership, ZigoBiz will provide comprehensive cloud migration services, managed services, and ongoing support.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop&q=80",
      category: "Partnerships",
      date: "December 5, 2024",
      readTime: "4 min read",
      author: "Sarah Johnson",
      authorRole: "VP of Partnerships",
      likes: 345,
      comments: 67,
      featured: false
    },
    {
      id: 4,
      title: "Innovation Hub Launches in Lagos to Nurture Tech Talent",
      excerpt: "The hub aims to train 1,000 young developers in AI, cloud computing, and cybersecurity over the next two years.",
      content: "ZigoBiz has launched a state-of-the-art Innovation Hub in Lagos, Nigeria, aimed at nurturing the next generation of tech talent in Africa. The hub will provide training programs, mentorship, and resources for young developers interested in AI, cloud computing, and cybersecurity. Over the next two years, the hub aims to train 1,000 developers, creating a pipeline of skilled professionals who can drive Africa's digital economy forward. The hub also features co-working spaces, innovation labs, and networking opportunities.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&q=80",
      category: "Innovation",
      date: "December 1, 2024",
      readTime: "6 min read",
      author: "Tunde Balogun",
      authorRole: "Head of Innovation",
      likes: 789,
      comments: 123,
      featured: false
    },
    {
      id: 5,
      title: "ZigoBiz Celebrates 18 Years of Technology Excellence",
      excerpt: "A look back at 18 years of transforming businesses and driving digital innovation across Africa.",
      content: "ZigoBiz marks 18 years of technology excellence, celebrating a journey of transformation and innovation across Africa. Since its founding in 2006, the company has grown from a small IT consultancy to a pan-African technology leader serving over 50 corporate customers across 9 countries. This anniversary reflects the company's commitment to innovation, customer success, and sustainable growth. As ZigoBiz looks to the future, it remains dedicated to driving digital transformation and creating value for businesses across the continent.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop&q=80",
      category: "Company",
      date: "November 25, 2024",
      readTime: "4 min read",
      author: "Grace Muthoni",
      authorRole: "Chief Marketing Officer",
      likes: 456,
      comments: 78,
      featured: false
    },
    {
      id: 6,
      title: "New Cybersecurity Framework Launched to Protect African Businesses",
      excerpt: "The comprehensive framework addresses the growing cybersecurity threats facing enterprises across the continent.",
      content: "ZigoBiz has launched a comprehensive cybersecurity framework designed to protect African businesses from evolving cyber threats. The framework addresses key areas including network security, data protection, threat detection, and compliance. With cyber attacks on the rise across the continent, this framework provides organizations with the tools and strategies needed to safeguard their digital assets and maintain business continuity. The framework is tailored to meet the specific needs and regulatory requirements of African businesses.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop&q=80",
      category: "Technology",
      date: "November 20, 2024",
      readTime: "5 min read",
      author: "Kenneth Ibe",
      authorRole: "Cybersecurity Lead",
      likes: 234,
      comments: 45,
      featured: false
    },
    {
      id: 7,
      title: "ZigoBiz Expands Operations to East Africa",
      excerpt: "New offices in Nairobi and Kigali mark the company's continued commitment to pan-African growth and innovation.",
      content: "ZigoBiz has expanded its operations to East Africa with new offices in Nairobi, Kenya and Kigali, Rwanda. This expansion marks a significant milestone in the company's pan-African growth strategy, bringing its innovative IT solutions to more businesses across the continent. The new offices will serve as regional hubs, providing local support and expertise to customers in East Africa. This expansion reflects ZigoBiz's commitment to driving digital transformation across all of Africa.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80",
      category: "Company",
      date: "November 15, 2024",
      readTime: "3 min read",
      author: "James Okafor",
      authorRole: "Regional Director",
      likes: 678,
      comments: 134,
      featured: false
    },
    {
      id: 8,
      title: "AI Summit 2024: Shaping the Future of African Technology",
      excerpt: "ZigoBiz hosts the continent's largest AI summit, bringing together industry leaders and innovators.",
      content: "ZigoBiz hosted the continent's largest AI summit, bringing together over 500 industry leaders, innovators, and technology enthusiasts. The summit featured keynote speeches from global AI experts, panel discussions on the future of AI in Africa, and workshops on practical AI applications. The event highlighted Africa's growing role in the global AI landscape and showcased the innovative work being done by ZigoBiz and its partners to advance AI capabilities across the continent.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&q=80",
      category: "Innovation",
      date: "November 10, 2024",
      readTime: "7 min read",
      author: "Amara Eze",
      authorRole: "Head of Events",
      likes: 890,
      comments: 156,
      featured: false
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const articlesPerPage = 6;
  const totalPages = Math.ceil(regularArticles.length / articlesPerPage);
  const paginatedArticles = regularArticles.slice(
    currentPage * articlesPerPage,
    (currentPage + 1) * articlesPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Main Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-full" style={{ backgroundColor: '#ECD5AB', color: '#7D582E' }}>
                News & Updates
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-4 leading-tight">
              Latest <span className="font-bold" style={{ color: '#7D582E' }}>Stories</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Stay updated with the latest news, innovations, and achievements from ZigoBiz.
            </p>
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-12 group cursor-pointer" onClick={() => openModal(featuredArticle)}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6 bg-[#7D582E] text-white text-xs font-bold px-4 py-2 rounded-full">
                  Featured Story
                </div>

                {/* Read More Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 border border-white/30">
                    <span className="text-white font-semibold flex items-center gap-2">
                      Read Full Story <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: '#ECD5AB', color: '#7D582E' }}>
                      {featuredArticle.category}
                    </span>
                    <span className="text-xs text-white/60 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {featuredArticle.date}
                    </span>
                    <span className="text-xs text-white/60 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-white/70 text-lg max-w-2xl mb-4">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 text-white/50 text-sm">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredArticle.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {featuredArticle.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(0);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'text-gray-600 hover:text-[#7D582E] bg-gray-100 hover:bg-[#ECD5AB]/30'
                }`}
                style={selectedCategory === category ? { backgroundColor: '#7D582E' } : {}}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid - Professional Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedArticles.map((article, index) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredCard(article.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => openModal(article)}
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: '#ECD5AB', color: '#7D582E' }}>
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium flex items-center gap-2">
                      Click to read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#7D582E] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#ECD5AB] flex items-center justify-center text-[#7D582E] font-bold text-xs">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-700">{article.author}</p>
                        <p className="text-[10px] text-gray-400">{article.authorRole}</p>
                      </div>
                    </div>
                    <button 
                      className="text-gray-400 hover:text-[#7D582E] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                onClick={() => goToPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className={`p-2 rounded-xl transition-all ${
                  currentPage === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-[#ECD5AB] hover:text-[#7D582E]'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-10 h-10 rounded-xl font-medium transition-all ${
                    currentPage === index
                      ? 'text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={currentPage === index ? { backgroundColor: '#7D582E' } : {}}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => goToPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className={`p-2 rounded-xl transition-all ${
                  currentPage === totalPages - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-[#ECD5AB] hover:text-[#7D582E]'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal - Full Article Popup */}
      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all hover:scale-110"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Hero Image */}
              <div className="relative h-72 md:h-96">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: '#ECD5AB', color: '#7D582E' }}>
                    {selectedArticle.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedArticle.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {selectedArticle.likes} views
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {selectedArticle.title}
                </h2>

                {/* Author */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#ECD5AB] flex items-center justify-center text-[#7D582E] font-bold text-lg">
                    {selectedArticle.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{selectedArticle.author}</p>
                    <p className="text-sm text-gray-500">{selectedArticle.authorRole}</p>
                  </div>
                </div>

                {/* Full Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {selectedArticle.content}
                  </p>
                </div>

                {/* Share & Actions */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">Share:</span>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-[#ECD5AB] transition-all">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-[#ECD5AB] transition-all">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-[#ECD5AB] transition-all">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-[#ECD5AB] transition-all">
                      <Link2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-[#ECD5AB] transition-all">
                      <Heart className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-600">{selectedArticle.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-[#ECD5AB] transition-all">
                      <MessageCircle className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-600">{selectedArticle.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA - FULL WIDTH */}
      <div className="w-full" style={{ backgroundColor: 'rgb(236, 213, 171)' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#7D582E' }}>
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-700 text-sm mt-2">
                Get the latest news, updates, and insights delivered to your inbox weekly.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7D582E]/50 border-0 shadow-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl font-semibold text-white hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                  style={{ backgroundColor: '#7D582E' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#6a4a26';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#7D582E';
                  }}
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2 text-right">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
}

export default News;