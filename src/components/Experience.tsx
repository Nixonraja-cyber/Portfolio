import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, GraduationCap, Award, MapPin } from 'lucide-react';

interface Achievement {
  title: string;
  details: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: Achievement[];
  skills: string[];
  tools?: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Business Analyst",
      company: "Aastra Technologies Pvt Ltd",
      period: "2023 - Present",
      location: "Chennai, India",
      description: "Bridge business objectives with technology solutions by analyzing complex requirements and designing scalable systems. Drive digital transformation initiatives through cross-functional collaboration to optimize processes, enhance efficiency, and align IT deliverables with strategic goals.",
      achievements: [
        // {
        //   title: "Digital Transformation Leadership",
        //   details: "Led $2M enterprise modernization project, achieving 30% operational efficiency through system automation and process redesign"
        // },
        // {
        //   title: "Process Automation",
        //   details: "Developed BI reporting solutions that reduced manual work by 60% and improved decision-making speed by 40%"
        // },
        {
          title: "Team Development",
          details: "Mentored 2+ junior analysts in requirements gathering techniques and Agile documentation standards (BRD/FRD)"
        },
        {
          title: "Stakeholder Alignment",
          details: "Facilitated workshops across 10+ departments to harmonize business needs into technical specifications"
        }
      ],
      skills: [
        "Strategic Leadership",
        // "Digital Transformation",
        "Stakeholder Management",
        "Process Automation",
        "Agile Methodologies",
        // "Business Intelligence",
        "Requirements Analysis",
        "Scrum Master"
      ],
      tools: [
        "Aastra People",
        "Excel",
        "SQL",
        "Figma",
        "Microsoft365",
        "AI Tools",
        "Git",
        // "Confluence"
      ]
    }
  ];

  const certifications = [
    'Business Analyst',
    'Project Management',
    'Business Communication',
    'Fundamental Networking',
    'UI & UX Design',
    // 'Agile Analysis Certification',
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Professional Journey</h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A progressive career journey showcasing growth in analytical expertise and leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-professional hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-2xl font-bold mb-3 text-slate-900">{exp.title}</CardTitle>
                      <div className="flex items-center text-blue-600 font-semibold mb-3">
                        <Briefcase className="mr-2 h-5 w-5 flex-shrink-0" />
                        <span className="truncate">{exp.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-600">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="hidden sm:inline text-slate-400">•</span>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-bold mb-4 text-slate-900">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-600 flex items-start leading-relaxed">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <div>
                            <strong className="font-medium text-slate-900">{achievement.title}: </strong>
                            {achievement.details}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="px-3 py-1 rounded-full font-medium border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {exp.tools && (
                    <div>
                      <h4 className="font-bold mb-4 text-slate-900">Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, toolIndex) => (
                          <Badge 
                            key={toolIndex} 
                            variant="outline" 
                            className="px-3 py-1 rounded-full font-medium border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8">
            <Card className="card-professional hover-lift animate-fade-in-up delay-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-slate-900">
                  <GraduationCap className="mr-3 h-6 w-6 text-blue-600" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <h4 className="font-bold text-slate-900">BE (Computer Science)</h4>
                  <p className="text-blue-600 font-semibold">St. Joseph's College of Engineering</p>
                  <p className="text-sm text-slate-600">2019 - 2023</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional hover-lift animate-fade-in-up delay-400">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-slate-900">
                  <Award className="mr-3 h-6 w-6 text-blue-600" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start p-3 rounded-lg bg-slate-50 border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0 mt-2"></span>
                      <span className="text-sm font-medium text-slate-900">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;