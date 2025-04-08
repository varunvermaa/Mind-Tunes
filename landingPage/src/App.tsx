import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import TestimonialCard from './components/TestimonialCard';
import { ArrowRight, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

function App() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollTestimonials = () => {
      if (testimonialRef.current) {
        testimonialRef.current.scrollLeft += 1;
        if (
          testimonialRef.current.scrollLeft >=
          testimonialRef.current.scrollWidth - testimonialRef.current.clientWidth
        ) {
          testimonialRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scrollTestimonials, 50);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Clinical Psychologist",
      content: "Mindtunes' CBT-based approach has revolutionized how I connect with my patients. The AI-driven insights help create more effective treatment plans.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Michael Chen",
      role: "Mental Health Researcher",
      content: "The integration of research-backed CBT techniques with modern technology makes mental health support more accessible and effective.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Emma Williams",
      role: "CBT Specialist",
      content: "Finally, a platform that combines evidence-based therapy with AI insights. My clients show remarkable progress using Mindtunes.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <VideoBackground
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
        />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Your Journey to Mental Well-being</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Research-backed CBT therapy combined with AI insights for personalized mental health support
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105">
            Begin Your Healing Journey
          </button>
        </div>
      </section>

      <hr className="border-white/10" />

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center">
        <VideoBackground
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-forest-on-a-sunny-afternoon-40647-large.mp4"
        />
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Evidence-Based Mental Health Support</h2>
            <p className="text-xl leading-relaxed mb-8">
              Mindtunes is your digital space for mental well-being, using CBT to guide you toward peace, 
              healing, and self-discovery. Our AI-driven platform combines research-based insights with 
              professional support to help you overcome challenges and build resilience.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-white/10" />

      {/* How It Works Section */}
      <section id="how-it-works" className="relative min-h-screen flex items-center">
        <VideoBackground
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-white-sand-beach-and-palm-trees-1564-large.mp4"
        />
        <div className="relative container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Your Path to Healing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: 1,
                title: "Assessment",
                description: "Complete our research-backed CBT questionnaire for personalized insights"
              },
              {
                step: 2,
                title: "AI Analysis",
                description: "Receive data-driven insights about your mental health patterns"
              },
              {
                step: 3,
                title: "Expert Support",
                description: "Connect with qualified therapists and access personalized CBT techniques"
              }
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-white text-center transform hover:scale-105 transition-all"
              >
                <div className="text-3xl font-bold mb-4">Step {item.step}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
                <ArrowRight className="mx-auto mt-6 text-green-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-white/10" />

      {/* Professional Support Section */}
      <section id="support" className="relative min-h-screen flex items-center">
        <VideoBackground
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4"
        />
        <div className="relative container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Professional Support</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">AI-Driven CBT Insights</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Research-backed assessment tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Personalized therapy recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Progress tracking and insights</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Expert Therapist Network</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Licensed CBT specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Secure video sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Ongoing support and guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-white/10" />

      {/* Testimonials Section */}
      <section id="testimonials" className="relative min-h-screen flex items-center">
        <VideoBackground
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4"
        />
        <div className="relative container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Success Stories</h2>
          <div
            ref={testimonialRef}
            className="flex overflow-x-hidden space-x-6 pb-8"
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-white/10" />

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center">
        <VideoBackground
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-sunset-over-a-lake-1529-large.mp4"
        />
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Get Support</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-6">24/7 Support Available</h3>
                <p className="mb-4">Our team of mental health professionals is here to help you on your journey to well-being.</p>
                <div className="mt-8 space-y-4">
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">📞</span>
                    Crisis Helpline: 1-800-273-8255
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">💬</span>
                    Text Support: Text HOME to 741741
                  </p>
                </div>
                <div className="flex space-x-4 mt-8">
                  <a href="#" className="text-white hover:text-green-400 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-green-400 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-green-400 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-green-400 transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-green-400"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-green-400"
                ></textarea>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Request Support
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">About Mindtunes</h3>
              <p className="text-gray-300 mb-4">
                Research-backed CBT therapy platform combining AI insights with professional support for your mental well-being journey.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#how-it-works" className="text-gray-300 hover:text-green-400 transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-green-400 transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Find a Therapist</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Mental Health Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact & Support</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">📞</span>
                  24/7 Crisis Support: 1-800-273-8255
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">💬</span>
                  Text Support: Text HOME to 741741
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">📧</span>
                  Email: support@mindtunes.com
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">🌐</span>
                  Available Worldwide
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2024 Mindtunes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;