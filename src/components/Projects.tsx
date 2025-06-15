import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Award, Star, Eye, Download, Code } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

const statusColors = {
  completed: 'bg-green-50 text-green-700 border-green-200',
  progress: 'bg-blue-50 text-blue-700 border-blue-200',
  default: 'bg-gray-50 text-gray-700 border-gray-200'
};

const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projectCategories = [
    { id: 'all', name: 'All Projects', count: 13 },
    { id: 'analytics', name: 'Analytics & IOT', count: 3 },
    // { id: 'automation', name: 'Process Automation', count: 2 },
    { id: 'web', name: 'Web Applications', count: 6 },
    { id: 'mobile', name: 'Mobile Solutions', count: 3 },
    { id: 'ai', name: 'AI & Machine Learning', count: 1 },
  ];

  const projects = [
    {
      id: 1,
      title: 'Asset Management System',
      category: 'analytics',
      technologies: ['RFID', 'MVC', 'Dot Net', 'Flutter', 'Tag Reader', 'Tags', 'Android App'],
      image: 'https://strapi.aurumproptech.in/uploads/Real_Estate_Asset_Management_46e11df3a3.webp',
      description: 'Leverage IoT-powered asset tracking for real-time insights, optimized utilization, and seamless lifecycle management.',
      challenge: 'Difficulty in tracking asset usage and optimizing lifecycle management. Manual processes result in errors and increased operational costs.',
      solution: 'Implement IoT-powered tracking for real-time asset monitoring. Automate asset tracking workflows to reduce errors and enhance efficiency.',
      impact: '70% Cost savings',
      results: ['Minimizes manual errors, enhancing accuracy- (80%)', 'Real-time tracking- (90%)', 'Automated reporting processes- (98%)'],
      team: 8,
      duration: '4 months',
      status: 'completed',
      clientType: 'Asset Life cycle Management',
      rating: 5
    },
    {
      id: 2,
      title: 'Adhan Mosque Application',
      category: 'analytics',
      technologies: ['Raspery pi', 'Antena & Receiver', 'Cloud Storage', 'ReactJs', 'Dot Net'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/The_Kabah_in_the_Grand_Mosque_of_Makkah_from_the_second_floor%2C_Saudi_Arabia_%288%29_%2852501956308%29.jpg',
      description: 'Experience real-time mosque prayers with Aadhan’s IoT-powered live audio subscription.',
      challenge: 'Limited real-time prayer accessibility and connectivity issues hinder seamless listening. IoT integration ensures uninterrupted, high-quality live prayer streaming.',
      solution: 'Aadhan brings live mosque prayers to you—seamless, real-time, IoT-powered streaming.',
      impact: '95% IoT-powered connectivity',
      results: ['Increased forecast accuracy- (94%)', 'Enhanced reach- (40%)', 'High-quality audio- (80%)'],
      team: 6,
      duration: '3 months',
      status: 'completed',
      clientType: 'Live Audio Stream',
      rating: 5
    },
    {
      id: 3,
      title: 'Aastra People',
      category: 'web',
      technologies: ['Google Analytics', 'ReactJs', 'Dot Net', 'Cloud', 'MS-SQL'],
      image: 'https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw=',
      description: 'Streamline workforce operations with an all-in-one solution for holiday requests, task management, projects, employee tracking, and attendance monitoring.',
      challenge: 'Managing workforce operations efficiently is complex, requiring seamless coordination across tasks, attendance, and employee tracking.',
      solution: 'An integrated platform streamlining workforce operations, enhancing efficiency across projects, tasks, attendance, and employee management.',
      impact: '85% Enhanced employee productivity',
      results: ['Optimized resource allocation- (80%)', 'Reduced administrative workload- (82%)', 'Improved operational efficiency- (90%)'],
      team: 4,
      duration: '2 months',
      status: 'completed',
      clientType: 'Task Management',
      rating: 5
    },
    {
      id: 4,
      title: 'EFolio',
      category: 'web',
      technologies: ['Opera Service', 'ReactJs', 'MSSQL', 'Azure', 'Flutter'],
      image: 'https://t4.ftcdn.net/jpg/13/21/63/73/360_F_1321637342_gnLlIaJInAdwQeaCjyaBIHwprl5hSoXZ.jpg',
      description: 'Efolio empowers global transactions with intelligent, precision-tuned currency conversion—seamlessly customized to your Opera ecosystem. Experience adaptive, real-time rate management built for clarity and control.',
      challenge: 'Fluctuating exchange rates between Sri Lanka and the Philippines challenge accurate invoicing and unified group communication.',
      solution: 'Implement a dynamic currency engine in Efolio to auto-adjust rates for Sri Lanka and the Philippines, ensuring accurate invoicing and real-time group-wide updates.',
      impact: '75% faster billing cycles',
      results: ['Invoicing accuracy improved- (95%)', 'Cross-border financial alignment enhanced- (85%)', 'Manual workload reduced- (90%)'],
      team: 5,
      duration: '5 months',
      status: 'completed',
      clientType: 'Currency Converter',
      rating: 5
    },
    {
      id: 5,
      title: 'Aastra HRM',
      category: 'web',
      technologies: ['Figma', 'Lovable', 'Cloud', 'DotNet', 'ReactJs'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      description: 'A smart recruitment solution designed to streamline hiring—from job posting to candidate onboarding.',
      challenge: 'Fragmented hiring processes and manual screening slow down recruitment, reduce candidate quality, and burden HR teams.',
      solution: 'Centralize and automate recruitment workflows with a streamlined platform—accelerating hiring while enhancing candidate quality.',
      impact: '70% Accelerated hiring cycles',
      results: ['Improved candidate quality- (65%)', 'Cut manual HR effort- (60%)', 'Boosted recruiter collaboration- (75%)'],
      team: 6,
      duration: '2 months',
      status: 'Progress',
      clientType: 'HR Recruitment',
      rating: 5
    },
    {
      id: 6,
      title: 'Order Management System',
      category: 'web',
      technologies: ['MVC', 'Dot Net', 'MS SQL', 'Azure'],
      image: 'https://img.freepik.com/free-photo/friends-restaurant-side-view_23-2149930140.jpg',
      description: 'A unified solution to track, process, and fulfill orders efficiently—ensuring accuracy from placement to delivery.',
      challenge: 'Disconnected workflows, inventory mismatches, and delayed fulfillment lead to inefficiencies and customer dissatisfaction.',
      solution: 'A centralized system that streamlines order processing, syncs inventory in real time, and ensures seamless fulfillment for faster, more accurate deliveries.',
      impact: '200% faster order fulfillment',
      results: ['Improved order accuracy- (90%)', 'Decrease manual process- (70%)', 'Boost customer engagement- (75%)'],
      team: 7,
      duration: '7 months',
      status: 'completed',
      clientType: 'E-Commerce',
      rating: 5
    },
    {
      id: 7,
      title: 'Point Of Sale',
      category: 'web',
      technologies: ['ReactJS', 'DotNet', 'Cloud', 'Flutter', 'Figma'],
      image: 'https://t3.ftcdn.net/jpg/02/27/62/24/360_F_227622470_sJ3yEaz44RK7UrWNaGdSn7azgeRu9UDs.jpg',
      description: 'A seamless Point of Sale system that streamlines transactions, manages inventory, and enhances customer experiences—fast, efficient, and reliable.',
      challenge: 'Fragmented payment processing, inventory mismatches, and slow transaction speeds hinder efficiency and customer experience.',
      solution: 'Streamlined payments, real-time inventory, and fast transactions—all in one powerful POS system.',
      impact: '70% rise customer satisfaction',
      results: ['faster transactions- (90%)', 'Improved inventory tracking- (80%)', 'minimizing stock discrepancies- (90%)'],
      team: 6,
      duration: '5 months',
      status: 'Progress',
      clientType: 'Billing application',
      rating: 5
    },
    {
      id: 8,
      title: 'Inventory Management',
      category: 'analytics',
      technologies: ['React', 'Dot Net', 'MSSQL', 'Cloud', 'Flutter'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop',
      description: 'A smart Inventory Management System that optimizes stock tracking, reduces waste, and ensures seamless supply chain control—all in real time.',
      challenge: 'Stock discrepancies, inefficient tracking, and supply chain delays lead to overstocking, shortages, and lost revenue.',
      solution: 'A real-time Inventory Management System that minimizes stock discrepancies, optimizes tracking, and streamlines supply chain operations for seamless efficiency.',
      impact: '99.9% Real-time stock tracking',
      results: ['Reduces stockouts- (85%)', 'Analytics & reporting- (98.5%)', 'Automated of queries- (70%)'],
      team: 5,
      duration: '4 months',
      status: 'Progress',
      clientType: 'Warehouses & logistics',
      rating: 5
    },
    // {
    //   id: 9,
    //   title: 'Adhan Mosque Application',
    //   category: 'mobile',
    //   technologies: ['React', 'GraphQL', 'MySQL', 'Redis', 'Elasticsearch'],
    //   image: 'https://media.istockphoto.com/id/1011940756/photo/muslim-men-praying-during-ramadan.jpg?s=612x612&w=0&k=20&c=x65o1NcQ2DlsITPFt--_jeCU44GlGzv0zI5HwHYjWiw=',
    //   description: 'Comprehensive customer portal enabling self-service support and account management.',
    //   challenge: 'High support ticket volume (500+ daily) overwhelming customer service team.',
    //   solution: 'Created intuitive self-service portal with knowledge base, ticket tracking, and automated responses.',
    //   impact: '60% reduction in support tickets',
    //   results: ['Improved customer satisfaction by 45%', 'Reduced response time by 80%', 'Automated 70% of queries'],
    //   team: 5,
    //   duration: '4 months',
    //   status: 'completed',
    //   clientType: 'SaaS Platform',
    //   rating: 5
    // },
    {
      id: 10,
      title: 'Hotel Booking Application',
      category: 'mobile',
      technologies: ['React', 'Cloud', 'MS SQL', 'Flutter', 'Figma', 'Bolt','Lovable'],
      image: 'https://media.istockphoto.com/id/1469919334/photo/a-happy-receptionist-is-talking-with-hotel-guest-and-making-a-reservation-on-a-tablet.jpg?b=1&s=612x612&w=0&k=20&c=uFIyKcnO8SleYmsRD0LZVktY1DpHCds_0UDrWVhRxjE=',
      description: 'Seamless hotel management in one powerful platform—bookings, billing, and guest care made effortless.',
      challenge: 'Manual operations, fragmented systems, and lack of real-time insights hinder guest satisfaction and operational efficiency.',
      solution: 'A unified platform that digitizes hotel operations—automating bookings, streamlining billing, and elevating guest service for smooth, efficient stays.',
      impact: '80% reduction manual errors',
      results: ['faster guest service- (75%)', 'improvement operational efficiency- (85%)', 'Boost booking conversions- (65%)'],
      team: 5,
      duration: '4 months',
      status: 'Progress',
      clientType: 'Customer Booking',
      rating: 5
    },
    {
      id: 11,
      title: 'End-User Customer App',
      category: 'mobile',
      technologies: ['Flutter', 'FireBase', 'MS SQL', 'Azure', 'React'],
      image: 'https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303524.jpg?semt=ais_hybrid&w=740',
      description: 'A fast, intuitive booking app that connects customers with services seamlessly—effortless reservations at your fingertips',
      challenge: 'Slow response times, unclear availability, and cumbersome booking flows frustrate users and reduce conversions.',
      solution: 'An easy-to-use booking app that simplifies reservations, enhances accessibility, and ensures a seamless customer experience—all in one place',
      impact: '95% faster guest service',
      results: ['increase customer satisfaction- (70%)', 'improvement operational efficiency- (85%)', 'Enhanced customer relationships (89%)'],
      team: 5,
      duration: '5 months',
      status: 'completed',
      clientType: 'Ecommerce',
      rating: 5
    },
    {
      "id": 12,
      "title": "Intelligence Core AI",
      "category": "ai",
      "technologies": ["React", "Dot Net", "Azure", "MS SQL", "Flutter"],
      "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      "description": "Experience lightning-fast, AI-powered voice-to-text conversion with 99.9% accuracy. Perfect for meetings, interviews, lectures, and content creation.",
      "challenge": "Slow manual transcription, inaccurate results, language barriers, service interruptions, unstructured outputs, and team inefficiencies hinder productivity.",
      "solution": "Infinia delivers real-time, 99.9% accurate transcriptions across 50+ languages with 24/7 availability. Its AI auto-formats content and enables live collaboration, eliminating these workflow bottlenecks.",
      "impact": "99% increase in user engagement",
      "results": [
        "Meeting Transcript Generation – (99.9%) Precision",
        "Real-Time Processing – (100%) Speed",
        "Automated Summarization – (98%) Accuracy"
      ],
      "team": 4,
      "duration": "7 months",
      "status": "Progress",
      "clientType": "Transcript AI Tool",
      "rating": 4
    },
    // {
    //   "id": 13,
    //   "title": "Ticket Management",
    //   "category": "web",
    //   "technologies": ["React", "Dot Net", "Azure", "MS SQL", "Flutter"],
    //   "image": "https://cdn.prod.website-files.com/624fdc5e82dc83514cd9d166/644a4a223da8ac14bb26eb1a_ticket-managementhelpdesk.jpeg",
    //   "description": "Ticket Management System (TMS) is a software tool that organizes, tracks, and resolves customer or internal support requests efficiently",
    //   "challenge": "Cloud-native AI ticketing system with auto-resolution, real-time dashboards, and Kubernetes scaling for 10K+ daily tickets at 99.9% SLA.",
    //   "solution": "AI-driven ticket system with auto-routing, real-time analytics, and cloud scaling to handle 10K+ daily tickets at 99.9% reliability.",
    //   "impact": "99% increase in user engagement",
    //   "results": [
    //     "Meeting Transcript generation",
    //     "99.9% Precision",
    //     "Real-Time Processing"
    //   ],
    //   "team": 4,
    //   "duration": "7 months",
    //   "status": "Progress",
    //   "clientType": "IT Support & Helpdesk",
    //   "rating": 4
    // },
    {
      "id": 14,
      "title": "Fleet Management",
      "category": "mobile",
      "technologies": ["React", "Dot Net", "Azure", "MS SQL", "Flutter"],
      "image": "https://t4.ftcdn.net/jpg/04/48/93/89/360_F_448938910_WRtijsyMlLN5zN8kkkfsY8CKoMoXlQwv.jpg",
      "description": "A smart Fleet Management system that optimizes vehicle tracking, maintenance, and fuel efficiency—boosting productivity and reducing costs",
      "challenge": "High operational costs, inefficient route planning, and vehicle downtime reduce productivity and profitability.",
      "solution": "A smart Fleet Management system that optimizes vehicle tracking, route planning, and predictive maintenance—reducing costs, minimizing downtime, and enhancing efficiency.",
      "impact": "99% decrease in operational costs",
      "results": [
        "improvement in route optimization- (90%)",
        "Precision- (99.9%)",
        "Real-Time Processing- (100%)"
      ],
      "team": 4,
      "duration": "7 months",
      "status": "Progress",
      "clientType": "Logistics & Transportation Companies",
      "rating": 4
    },
    {
      "id": 15,
      "title": "Hospital Management",
      "category": "web",
      "technologies": ["React", "Dot Net", "Azure", "MS SQL", "Flutter"],
      "image": "https://t4.ftcdn.net/jpg/08/24/43/81/360_F_824438174_wIkm2w7Uam7bfuDsFKy7cpuTADpyR1xJ.jpg",
      "description": "Smart hospital management—streamlined care, seamless workflows, better efficiency.",
      "challenge": "Fragmented patient records, inefficient workflows, and administrative overload hinder quality care and operational efficiency.",
      "solution": "Effortless hospital management—integrated care, optimized operations, and smarter efficiency.",
      "impact": "99% faster patient service",
      "results": [
        "Enhancement patient satisfaction- (70%)",
        "Reduction administrative workload- (85%)",
        "Increase telemedicine adoption- (80%)"
      ],
      "team": 4,
      "duration": "7 months",
      "status": "Progress",
      "clientType": "Healthcare Networks ",
      "rating": 4
    },
    // {
    //   "id": 16,
    //   "title": "Hotel Back-Office Application",
    //   "category": "web",
    //   "technologies": ["React", "Dot Net", "Azure", "MS SQL", "Flutter"],
    //   "image": "https://media.istockphoto.com/id/2093530578/photo/happy-receptionists-cooperating-while-working-on-a-computer-at-hotel-front-desk.jpg?b=1&s=612x612&w=0&k=20&c=-j9Q22sQl5BxLbbHyKZWx0Ku0zXwvcZ6SF3PylswZXo=",
    //   "description": "Experience lightning-fast, AI-powered voice-to-text conversion with 99.9% accuracy. Perfect for meetings, interviews, lectures, and content creation.",
    //   "challenge": "Slow manual transcription, inaccurate results, language barriers, service interruptions, unstructured outputs, and team inefficiencies hinder productivity.",
    //   "solution": "Infinia delivers real-time, 99.9% accurate transcriptions across 50+ languages with 24/7 availability. Its AI auto-formats content and enables live collaboration, eliminating these workflow bottlenecks.",
    //   "impact": "99% increase in user engagement",
    //   "results": [
    //     "Meeting Transcript generation",
    //     "99.9% Precision",
    //     "Real-Time Processing"
    //   ],
    //   "team": 4,
    //   "duration": "7 months",
    //   "status": "Progress",
    //   "clientType": "Transcript AI Tool",
    //   "rating": 4
    // },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 animate-fade-in-up">
            Featured <span className="text-gradient">Project Portfolio</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8 rounded-full animate-fade-in-up delay-100"></div>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Showcasing <span className="font-bold text-blue-600">{projects.length}</span> transformative projects that delivered 
            measurable business impact across Fortune 500 companies and innovative startups
          </p>
        </div>

        {/* Project Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up delay-300">
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="group hover-lift transition-all duration-300 hover:shadow-lg"
            >
              {category.name}
              <span className="ml-2 text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full group-hover:bg-white transition-colors">
                {category.count}
              </span>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="group overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in-up" style={{ animationDelay: `${400 + index * 100}ms` }}>
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700 font-medium">
                    {projectCategories.find(c => c.id === project.category)?.name}
                  </Badge>
                  <div className="flex items-center bg-white/90 px-2 py-1 rounded-md">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-sm text-blue-600 font-medium">{project.clientType}</div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${statusColors[project.status.toLowerCase() as keyof typeof statusColors] || statusColors.default}`}
                  >
                    <Award className="h-3 w-3 mr-1" />
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors leading-tight">
                  {project.title}
                </CardTitle>
                <p className="text-slate-600 leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                    <p className="text-red-700 text-sm">{project.challenge}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Solution</h4>
                    <p className="text-blue-700 text-sm">{project.solution}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-slate-100 hover:bg-slate-200 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Results */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                    Key Results
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-slate-600 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Highlight */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    <span className="font-bold text-green-800 text-lg">{project.impact}</span>
                  </div>
                </div>

                {/* Project Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-xs text-slate-500 mb-1">
                      <Users className="h-3 w-3 mr-1" />
                      Team
                    </div>
                    <div className="font-bold text-slate-800">
                      {project.team}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-xs text-slate-500 mb-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      Duration
                    </div>
                    <div className="font-bold text-slate-800">{project.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-xs text-slate-500 mb-1">
                      <Download className="h-3 w-3 mr-1" />
                      Impact
                    </div>
                    <div className="font-bold text-green-600">High</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-200">
          <div className="text-center group animate-fade-in-up delay-700">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              15+
            </div>
            <div className="text-sm text-slate-600 font-medium">Featured Projects</div>
          </div>
          <div className="text-center group animate-fade-in-up delay-800">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              100%
            </div>
            <div className="text-sm text-slate-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center group animate-fade-in-up delay-900">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              10+
            </div>
            <div className="text-sm text-slate-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center group animate-fade-in-up delay-1000">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Star className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">
              2+
            </div>
            <div className="text-sm text-slate-600 font-medium">Years Experience</div>
          </div>
        </div>

        {/* Updated Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up delay-1100">
          <div className="card-modern bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Innovation Starts with a Conversation
              </h3>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Empowering businesses to harness technology for measurable success. Let's collaborate to streamline operations, enhance efficiency, and fuel sustainable growth
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 font-bold shadow-lg hover:shadow-xl transition-all duration-300 px-12"
                  onClick={scrollToContact}
                >
                  Contact Me
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 mt-8">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-300 mr-2" />
                  <span className="text-blue-100">Industry Recognized</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-300 mr-2" />
                  <span className="text-blue-100">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-blue-300 mr-2" />
                  <span className="text-blue-100">Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;