import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, image }) => {
  return (
    <div className="glass-card p-6 min-w-[300px] max-w-[400px] mx-4 hover:border-emerald-400/50 transition-all duration-300">
      <Quote className="text-emerald-400 h-8 w-8 mb-4" />
      <p className="text-white/90 mb-4 leading-relaxed">{content}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-emerald-400/30"
        />
        <div>
          <h4 className="text-white font-medium">{name}</h4>
          <p className="text-emerald-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;