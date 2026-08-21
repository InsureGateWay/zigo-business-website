import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! 👋 I'm ZigoBot, your AI assistant. How can I help you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();
    
    // Service-related responses
    if (lowerMsg.includes('service') || lowerMsg.includes('services')) {
      return "We offer a wide range of IT services including:\n• Data Services\n• AI Services\n• Infrastructure Services\n• Applications Services\n• Platforms Services\n• IT Consulting & Advisory\n\nWould you like to learn more about any specific service?";
    }
    
    // Data Services
    if (lowerMsg.includes('data') || lowerMsg.includes('database') || lowerMsg.includes('warehouse')) {
      return "Our Data Services include:\n• Data Integration & Ingestion\n• Data Modeling\n• Data Warehousing & Storage\n• Data Processing\n\nWe help you unlock the power of your data with end-to-end solutions. Would you like to schedule a consultation?";
    }
    
    // AI Services
    if (lowerMsg.includes('ai') || lowerMsg.includes('artificial intelligence') || lowerMsg.includes('machine learning')) {
      return "Our AI Services include:\n• AI Strategy & Consulting\n• AI-Powered Analytics\n• AI Platform Implementation\n• Data Engineering for AI\n\nWe empower businesses with cutting-edge AI solutions. Ready to transform your business with AI?";
    }
    
    // Cloud Services
    if (lowerMsg.includes('cloud') || lowerMsg.includes('infrastructure')) {
      return "Our Cloud & Infrastructure Services include:\n• Cloud Migration & Management\n• Data Center Solutions\n• Network Infrastructure\n• Server & Storage Solutions\n\nWe help you build robust, scalable infrastructure. Interested in learning more?";
    }
    
    // Products
    if (lowerMsg.includes('product') || lowerMsg.includes('platform') || lowerMsg.includes('solution')) {
      return "Our Product Portfolio includes:\n• Data Platforms\n• AI Solutions\n• Cloud Products\n• Security Suite\n• Analytics Tools\n\nWhich product category interests you most?";
    }
    
    // Contact/Consultation
    if (lowerMsg.includes('contact') || lowerMsg.includes('consult') || lowerMsg.includes('schedule') || lowerMsg.includes('meeting')) {
      return "You can schedule a free consultation by:\n• Clicking the 'Get Started' button in the navigation\n• Visiting our Contact page\n• Email us at admin@zigoservices.com\n\nWould you like me to connect you with our sales team?";
    }
    
    // About
    if (lowerMsg.includes('about') || lowerMsg.includes('who') || lowerMsg.includes('company')) {
      return "ZigoBiz is Africa's Premier IT Firm. We are a pan-African IT company committed to transforming businesses through innovative technology solutions. With 18 years of experience, we've helped over 50 corporate customers across 9 countries achieve their digital ambitions.";
    }
    
    // Industries
    if (lowerMsg.includes('industry') || lowerMsg.includes('industries') || lowerMsg.includes('sector')) {
      return "We serve diverse industries including:\n• Banking & Financial Services\n• Oil & Gas\n• Telecommunications\n• Healthcare\n• Manufacturing\n• Public Sector\n\nWe have deep expertise across all these sectors.";
    }
    
    // Pricing
    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('pricing')) {
      return "Our pricing is tailored to each client's specific needs. We offer flexible engagement models including:\n• Project-based pricing\n• Monthly retainer\n• Managed services\n\nContact us for a customized quote!";
    }
    
    // General greeting
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey') || lowerMsg.includes('good morning') || lowerMsg.includes('good afternoon')) {
      return "Hello! 👋 Great to see you. How can I assist you today? Feel free to ask about our services, products, or anything else!";
    }
    
    // Thank you
    if (lowerMsg.includes('thank')) {
      return "You're welcome! 😊 I'm here to help. Do you have any other questions?";
    }
    
    // Default response
    return "Thank you for your question! I'd be happy to help you with that. Could you please provide more details about what you're looking for? You can ask me about:\n\n• Our Services\n• Products\n• Industries We Serve\n• Company Information\n• How to Contact Us\n\nI'm here to assist you! 😊";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: botResponse
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Quick reply buttons
  const quickReplies = [
    { label: "Services", action: "Tell me about your services" },
    { label: "Products", action: "What products do you offer?" },
    { label: "Contact", action: "How can I contact you?" }
  ];

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-[#7D582E] text-white p-4 rounded-full shadow-2xl hover:shadow-[#7D582E]/50 hover:scale-110 transition-all duration-300 group"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)]">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#7D582E] to-[#a87a4a] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">ZigoBot</h3>
              <p className="text-white/70 text-xs">AI Assistant • Online</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleMinimize}
              className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleChat}
              className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 bg-gray-50 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-[#7D582E] text-white rounded-br-none'
                        : 'bg-white text-gray-800 shadow-sm rounded-bl-none border border-gray-100'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.type === 'bot' && (
                        <Bot className="w-4 h-4 text-[#7D582E] flex-shrink-0 mt-0.5" />
                      )}
                      <div className="text-sm whitespace-pre-wrap leading-relaxed">
                        {message.text}
                      </div>
                      {message.type === 'user' && (
                        <User className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <div className="flex gap-2 overflow-x-auto">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputValue(reply.action);
                      setTimeout(handleSendMessage, 100);
                    }}
                    className="flex-shrink-0 px-3 py-1.5 text-xs bg-white border border-[#7D582E]/20 text-[#7D582E] rounded-full hover:bg-[#ECD5AB] hover:border-[#7D582E] transition-all duration-200"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-100 bg-white">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#7D582E] focus:ring-2 focus:ring-[#7D582E]/20 transition-all"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className={`p-2.5 rounded-xl transition-all ${
                    inputValue.trim()
                      ? 'bg-[#7D582E] text-white hover:bg-[#6a4a26] hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-1.5 text-center">
                AI-powered assistant • Responses are automated
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ChatBot;
