import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail, Star, Users, Award } from 'lucide-react';
import Image from '../Images/Straight (1).jpg';
import Resume from '../Documents/Nixon Raja Resume.pdf';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Nixon_Raja_Resume.pdf'; // You can customize the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          {/* Left side - Content */}
          <div className="lg:col-span-7 text-left">
            <div className="space-y-8">
              {/* Badge */}
              <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  Business Intelligence Expert
                </span>
              </div>

              {/* Main heading */}
              <div className="animate-fade-in-up delay-100">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
                  <span className="block">Transform</span>
                  <span className="block text-gradient">Data Into</span>
                  <span className="block text-gray-900">Success</span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-200 max-w-2xl">
                I turn data into decisions and requirements into results—bridging business needs with tech solutions to drive growth. Expert in analysis, stakeholder collaboration, and process optimization.
              </p>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="btn-primary hover-lift"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Connect
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleDownloadResume}
                  className="btn-secondary hover-lift"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up delay-400">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Award className="w-5 h-5 text-indigo-600 mr-2" />
                    <h3 className="text-3xl font-bold text-gray-900">2+</h3>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Years Experience</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Users className="w-5 h-5 text-cyan-600 mr-2" />
                    <h3 className="text-3xl font-bold text-gray-900">15+</h3>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Projects Completed</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Star className="w-5 h-5 text-emerald-600 mr-2" />
                    <h3 className="text-3xl font-bold text-gray-900">25%</h3>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Avg ROI Boost</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Professional Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-up delay-100">
            <div className="relative">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-primary rounded-2xl shadow-2xl overflow-hidden hover-lift">
                  <img
                    src={Image}
                    alt="Nixon Raja - Business Analyst"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Professional badge */}
              <div className="absolute -top-4 -right-4 card-modern p-4 animate-scale-in delay-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">100%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 card-modern p-4 animate-scale-in delay-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up delay-500">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <span className="text-sm font-medium">Discover More</span>
            <div className="p-2 border border-gray-300 rounded-full hover:border-indigo-400 transition-colors">
              <ArrowDown size={16} className="animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;