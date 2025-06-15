import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Users, Target, TrendingUp, Award, Lightbulb, Star, CheckCircle, Database, Shield, Zap, Globe, Brain, FileText, Settings, PieChart, Code, Briefcase, TrendingDown, Cpu, MessageSquare, Palette } from 'lucide-react';
import { useState } from 'react';
import Image from '../Images/image (14).png';

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const expertiseCategories = [
    { id: 'all', name: 'All Skills', count: 22 },
    { id: 'technical', name: 'Technical', count: 6 },
    { id: 'business', name: 'Business', count: 11 },
    { id: 'leadership', name: 'Leadership', count: 5 }
  ];

  const highlights = [
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Expert in extracting insights from complex datasets',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      category: 'technical',
      level: 95,
      experience: '2+ years'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Building bridges between technical and business teams',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      category: 'leadership',
      level: 99,
      experience: '1+ years'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Aligning business objectives with actionable strategies',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      category: 'business',
      level: 90,
      experience: '2+ years'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Identifying and implementing efficiency improvements',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      category: 'business',
      level: 85,
      experience: '1.5+ years'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Ensuring highest standards in all deliverables',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      category: 'business',
      level: 98,
      experience: '2+ years'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Creative solutions for complex business challenges',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      category: 'leadership',
      level: 87,
      experience: '3+ years'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing and optimizing database structures',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      category: 'technical',
      level: 82,
      experience: '3+ years'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identifying and mitigating business risks',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      category: 'business',
      level: 80,
      experience: '2+ years'
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamlining workflows with automated solutions',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      category: 'technical',
      level: 78,
      experience: '3+ years'
    },
    {
      icon: Globe,
      title: 'Market Research',
      description: 'Analyzing market trends and competitor insights',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      category: 'business',
      level: 83,
      experience: '2+ years'
    },
    {
      icon: Brain,
      title: 'Requirement Gathering',
      description: 'Listen, analyze, define, deliver—repeat.',
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
      category: 'business',
      level: 75,
      experience: '2+ years'
    },
    {
      icon: FileText,
      title: 'Business Documentation',
      description: 'Creating comprehensive technical documentation',
      color: 'text-slate-600',
      bgColor: 'bg-slate-50',
      category: 'business',
      level: 90,
      experience: '2+ years'
    },
    {
      icon: Palette,
      title: 'Design Thinking',
      description: 'Solving problems through user-centered design frameworks',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      category: 'technical',
      level: 77,
      experience: '4+ years'
    },
    {
      icon: PieChart,
      title: 'Financial Analysis',
      description: 'Budget planning and financial performance tracking',
      color: 'text-lime-600',
      bgColor: 'bg-lime-50',
      category: 'business',
      level: 84,
      experience: '2+ years'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack development and system architecture',
      color: 'text-blue-700',
      bgColor: 'bg-blue-100',
      category: 'technical',
      level: 80,
      experience: '4+ years'
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'Leading cross-functional teams to project success',
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      category: 'leadership',
      level: 89,
      experience: '2+ years'
    },
    {
      icon: TrendingDown,
      title: 'Cost Optimization',
      description: 'Reducing operational expenses through smart strategies',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      category: 'leadership',
      level: 86,
      experience: '1+ years'
    },
   {
  icon: MessageSquare,
  title: 'Stakeholder Communication',
  description: 'Aligning client needs with technical teams through structured dialogue',
  color: 'text-sky-600',
  bgColor: 'bg-sky-50',
  category: 'leadership',
  level: 92,
  experience: '2+ years',
},
    {
      icon: Cpu,
      title: 'Wireframing',
      description: 'Structure before style and code.',
      color: 'text-purple-700',
      bgColor: 'bg-purple-100',
      category: 'technical',
      level: 85,
      experience: '2+ years'
    },
    // {
    //   icon: Users,
    //   title: 'Change Management',
    //   description: 'Leading organizational transformation initiatives',
    //   color: 'text-indigo-700',
    //   bgColor: 'bg-indigo-100',
    //   category: 'leadership',
    //   level: 83,
    //   experience: '5+ years'
    // },
    {
      icon: Users,
      title: 'Client Relations',
      description: 'Translating business goals into actionable technical specs',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      category: 'business',
      level: 88,
      experience: '2+ years'
  // ... (keep other properties)
},
{
  icon: PieChart,
  title: 'Executive Communication',
  description: 'Presenting technical solutions in business-impact terms',
  // ... (keep other properties)
  color: 'text-slate-700',
  bgColor: 'bg-slate-100',
      category: 'business',
      level: 88,
      experience: '3+ years'
},
    {
      icon: Target,
      title: 'Performance Analytics',
      description: 'Measuring and optimizing business performance metrics',
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-100',
      category: 'business',
      level: 88,
      experience: '3+ years'
    }
  ];

  const filteredHighlights = selectedCategory === 'all' 
    ? highlights 
    : highlights.filter(h => h.category === selectedCategory);

  const achievements = [
    'Increased revenue by 40% through strategic data insights',
    'Led 15+ cross-functional teams to successful project completion',
    'Reduced operational costs by 25% across multiple departments',
    'Implemented automation solutions saving 200+ hours monthly'
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Passionate about transforming data into strategic advantage
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Profile Section - Better Alignment */}
          <div className="flex justify-center lg:justify-start animate-slide-in-left">
            <div className="relative max-w-md w-full">
              <div className="card-professional p-8 hover-lift">
                <div className="relative mb-6">
                  <img
                    src={Image}
                    alt="Nixon Raja"
                    className="w-full h-80 rounded-xl object-cover"
                  />
                  <div className="absolute -top-3 -right-3 bg-emerald-500 rounded-full p-2">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Nixon Raja</h3>
                  <p className="text-slate-600">Senior Business Analyst (Team Lead)</p>
                  
                  <div className="flex justify-center space-x-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-slate-600">(4.9/5)</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600">2+</div>
                      <div className="text-xs text-slate-600">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600">15+</div>
                      <div className="text-xs text-slate-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600">10+</div>
                      <div className="text-xs text-slate-600">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section - Better Alignment */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">Driving Business Success Through Analytics</h3>
              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                 I am a detail-oriented Business Analyst with a strong background in requirement gathering, market research, stakeholder communication, critical thinking, and documentation. With a methodical approach to problem-solving, I specialize in analyzing business needs, bridging the gap between technical teams and stakeholders, and delivering structured insights that drive informed decision-making. My expertise lies in translating complex requirements into actionable solutions, ensuring operational efficiency and strategic growth
              </p>
              {/* <p className="text-lg text-slate-600 leading-relaxed">
                I've successfully led cross-functional teams in implementing data-driven strategies that have resulted in measurable improvements in operational efficiency, customer satisfaction, and revenue growth across various industries.
              </p> */}
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900">Key Achievements</h4>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-slate-600">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Core Expertise Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h4 className="text-4xl font-bold text-slate-900 mb-4 animate-fade-in-up">Core Expertise</h4>
            <p className="text-lg text-slate-600 mb-8 animate-fade-in-up delay-100">Building solutions that matter with proven skills</p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up delay-200">
              {expertiseCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card 
                  key={`${highlight.title}-${selectedCategory}`} 
                  className="group relative overflow-hidden bg-white border border-slate-200 hover:border-blue-300 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Skill Level Indicator */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000 ease-out"
                      style={{ width: `${highlight.level}%` }}
                    ></div>
                  </div>

                  <CardContent className="p-6 relative">
                    {/* Header with Icon and Level */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex-shrink-0 w-14 h-14 ${highlight.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-7 w-7 ${highlight.color} group-hover:rotate-6 transition-transform`} />
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">
                          {highlight.level}%
                        </div>
                        <div className="text-xs text-slate-500">{highlight.experience}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h5 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {highlight.title}
                      </h5>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>

                    {/* Category Badge */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium capitalize transform group-hover:scale-105 transition-transform ${
                        highlight.category === 'technical' ? 'bg-blue-50 text-blue-600' :
                        highlight.category === 'business' ? 'bg-green-50 text-green-600' :
                        'bg-purple-50 text-purple-600'
                      }`}>
                        {highlight.category}
                      </span>
                    </div>

                    {/* Hover Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Summary Stats with Animated Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-slate-200">
            <div className="text-center group animate-fade-in-up delay-300">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                20+
              </div>
              <div className="text-sm text-slate-600">Core Skills</div>
            </div>
            <div className="text-center group animate-fade-in-up delay-400">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                85%
              </div>
              <div className="text-sm text-slate-600">Avg. Proficiency</div>
            </div>
            <div className="text-center group animate-fade-in-up delay-500">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                2+
              </div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center group animate-fade-in-up delay-600">
              <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-sm text-slate-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;