
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: 'SQL & Database Management', level: 75 },
    { name: 'Excel & Advanced Analytics', level: 90 },
    { name: 'React', level: 85 },
    { name: 'AI Tools & Git', level: 95 },
    { name: 'Java & NodeJS', level: 68 },
    { name: 'Figma & Canva', level: 90 },
  ];

  const businessSkills = [
    { name: 'Requirements Gathering', level: 95 },
    { name: 'Stakeholder Management', level: 92 },
    { name: 'Project Management', level: 87 },
    { name: 'Strategic Planning', level: 85 },
    { name: 'Risk Assessment', level: 80 },
    { name: 'Business Documentation', level: 98 },
  ];

  const tools = [
    'Microsoft 365',
    'Figma',
    'Git',
    'AI Tools',
    'Microsoft Teams',
    'ReactJs',
    'Java & NodeJs',
    'Draw.io',
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Skills & Expertise</h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning technical analysis, business strategy, and project management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="card-professional hover-lift animate-fade-in-up">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-bold text-slate-900">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-900">{skill.name}</span>
                    <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3 rounded-full" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="card-professional hover-lift animate-fade-in-up delay-200">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-bold text-slate-900">Business Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {businessSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-900">{skill.name}</span>
                    <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3 rounded-full" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Improved Tools & Technologies Design */}
        <Card className="card-professional hover-lift animate-fade-in-up delay-400">
          <CardHeader className="pb-8">
            <CardTitle className="text-3xl font-bold text-slate-900 text-center">Tools & Technologies</CardTitle>
            <p className="text-center text-slate-600 mt-4">Technologies I work with daily</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 p-4 rounded-lg text-center font-semibold text-slate-700 hover:text-blue-700 transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  <div className="relative z-10">{tool}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
