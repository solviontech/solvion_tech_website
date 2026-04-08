import { motion, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, MapPin, Clock, ChevronDown, CheckCircle2, 
  Cpu, Rocket, GraduationCap, Heart, Users, Globe,
  ArrowRight, X, FileText, Send
} from 'lucide-react'
import { useState } from 'react'

const Careers = () => {
  const [filter, setFilter] = useState('all')
  const [expandedJob, setExpandedJob] = useState(null)
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)

  const benefits = [
    {
      icon: Cpu,
      title: "AI-Powered Systems",
      desc: "Work with the latest AI technologies and stay ahead of the curve with premium resources.",
      theme: "blue"
    },
    {
      icon: Rocket,
      title: "Competitive Pay",
      desc: "Industry-leading salaries, performance bonuses, and equity options for excellence.",
      theme: "blue"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      desc: "Dedicated learning budgets, certifications, and mentorship programs for your growth.",
      theme: "blue"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      desc: "Flexible hours, remote-first options, and unlimited PTO for sustainable productivity.",
      theme: "blue"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      desc: "A supportive environment with regular team events and open, honest communication.",
      theme: "blue"
    },
    {
      icon: Globe,
      title: "Health & Wellness",
      desc: "Comprehensive health insurance and mental health support for your total well-being.",
      theme: "blue"
    }
  ]

  const jobs = [
    {
      id: 1,
      title: "Expert AI Engineer",
      category: "engineering",
      type: "Full-time",
      location: "Remote",
      posted: "2 days ago",
      desc: "Lead the development of cutting-edge AI solutions using deep learning and neural networks.",
      requirements: [
        "3+ years experience in AI/ML development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Strong understanding of deep learning architectures",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ],
      responsibilities: [
        "Design and implement AI/ML solutions",
        "Lead technical architecture decisions",
        "Mentor junior team members",
        "Collaborate with cross-functional teams"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      category: "engineering",
      type: "Full-time",
      location: "Hybrid / Bhubaneswar",
      posted: "5 days ago",
      desc: "Build scalable web applications using modern frameworks and cutting-edge tech.",
      requirements: [
        "3+ years of full-stack development experience",
        "Proficiency in React, Node.js, and databases",
        "Experience with RESTful APIs and microservices",
        "Strong problem-solving and debugging skills"
      ],
      responsibilities: [
        "Develop and maintain web applications",
        "Write clean, maintainable code",
        "Participate in code reviews",
        "Optimize application performance"
      ]
    },
    {
      id: 3,
      title: "Senior UX/UI Designer",
      category: "design",
      type: "Full-time",
      location: "Remote",
      posted: "1 week ago",
      desc: "Create exceptional user experiences for AI-driven products and lead design initiatives.",
      requirements: [
        "5+ years of UX/UI design experience",
        "Expert in Figma and Adobe Creative Suite",
        "Strong portfolio showcasing design thinking",
        "Experience with design systems and accessibility"
      ],
      responsibilities: [
        "Lead end-to-end design processes",
        "Create wireframes and high-fidelity prototypes",
        "Conduct user research and usability testing",
        "Maintain and evolve design systems"
      ]
    },
    {
      id: 4,
      title: "BDA Manager",
      category: "business",
      type: "Full-time",
      location: "Bhubaneswar",
      posted: "3 days ago",
      desc: "Drive product strategy and execution for AI-powered business solutions.",
      requirements: [
        "4+ years of product management experience",
        "Strong understanding of AI/ML technologies",
        "Excellent communication and leadership skills",
        "Data-driven decision making approach"
      ],
      responsibilities: [
        "Define product vision and roadmap",
        "Gather and prioritize requirements",
        "Coordinate cross-functional teams",
        "Analyze metrics and user feedback"
      ]
    },

    {
      id: 5,
      title: "Developer Intern",
      category: "engineering",
      type: "Internship",
      location: "Bhubaneswar",
      posted: "Just now",
      desc: "Assist in developing modern web applications and AI-integrated features.",
      requirements: [
        "Knowledge of HTML, CSS, and JavaScript",
        "Understanding of React and UI/UX principles",
        "Strong problem-solving attitude",
        "Good communication and teamwork skills"
      ],
      responsibilities: [
        "Assist senior developers with coding tasks",
        "Learn and apply new development technologies",
        "Fix bugs and improve application performance",
        "Help maintain the SolvionTech website"
      ]
    }
  ]

  const filteredJobs = jobs.filter(j => filter === 'all' || j.category === filter)

  const handleApply = (job) => {
    setSelectedJob(job)
    setShowApplyModal(true)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full border border-primary-100 mb-8"
          >
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Join Our Growing Team</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Build Your Future with <span className="gradient-text">SolvionTech</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Join a team that's shaping the future of AI-driven business solutions. We're looking for passionate innovators who want to make a real impact.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Team Members', val: '50+' },
              { label: 'Open Positions', val: '15+' },
              { label: 'Employee Rating', val: '4.8/5' },
              { label: 'Remote Friendly', val: '100%' },
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-white shadow-xl shadow-primary/5"
              >
                <div className="text-3xl font-black text-primary mb-1">{s.val}</div>
                <p className="text-sm font-bold text-text-secondary uppercase tracking-widest">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Why <span className="gradient-text">Work With Us</span></h2>
            <p className="text-xl text-text-secondary">We believe in creating an environment where innovation thrives and careers flourish.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-10 bg-white rounded-[40px] border border-border hover:shadow-2xl transition-all duration-500
                          ${b.theme === 'indigo' ? 'hover:border-indigo-200 hover:bg-gradient-to-b hover:from-white hover:to-indigo-50/20' : 
                            b.theme === 'sky' ? 'hover:border-sky-200 hover:bg-gradient-to-b hover:from-white hover:to-sky-50/20' : 
                            'hover:border-blue-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20'}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-md
                                ${b.theme === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 
                                  b.theme === 'sky' ? 'bg-sky-50 text-sky-600' : 
                                  'bg-blue-50 text-blue-600'}`}>
                  <b.icon className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors
                                ${b.theme === 'indigo' ? 'group-hover:text-indigo-700' : 
                                  b.theme === 'sky' ? 'group-hover:text-sky-700' : 
                                  'group-hover:text-blue-700'}`}>
                  {b.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="section bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Open <span className="gradient-text">Positions</span></h2>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { id: 'all', label: 'All Roles' },
                { id: 'engineering', label: 'Engineering' },
                { id: 'design', label: 'Design' },
                { id: 'business', label: 'Business' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all ${
                    filter === cat.id 
                    ? 'bg-primary text-white shadow-xl shadow-primary/30' 
                    : 'bg-white text-text-secondary hover:bg-primary/5 hover:text-primary'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.div 
                  layout
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-[32px] border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <div 
                    className="p-8 lg:p-10 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  >
                    <div className="space-y-4 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{job.type}</span>
                        <span className="px-3 py-1 bg-accent/5 text-accent text-[10px] font-black uppercase tracking-widest rounded-full">{job.location}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-text-secondary uppercase tracking-widest">
                        <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> {job.location}</span>
                        <span className="flex items-center gap-2"><Clock size={16} className="text-primary" /> {job.posted}</span>
                      </div>
                      <p className="text-text-secondary leading-relaxed max-w-2xl">{job.desc}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleApply(job); }}
                        className="btn-primary px-8 py-4 hidden lg:flex"
                      >
                        Apply Now
                      </button>
                      <motion.div 
                        animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                        className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-text-secondary"
                      >
                        <ChevronDown size={24} />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-border bg-surface/30"
                      >
                        <div className="p-8 lg:p-10">
                          <div className="grid md:grid-cols-2 gap-12 mb-10">
                            <div className="space-y-6">
                              <h4 className="text-xl font-bold flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-primary rounded-full" />
                                Requirements
                              </h4>
                              <ul className="space-y-4">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                                    <CheckCircle2 size={20} className="text-success mt-0.5 flex-shrink-0" />
                                    <span className="font-medium">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-6">
                              <h4 className="text-xl font-bold flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-accent rounded-full" />
                                Responsibilities
                              </h4>
                              <ul className="space-y-4">
                                {job.responsibilities.map((res, i) => (
                                  <li key={i} className="flex items-start gap-3 text-text-secondary">
                                    <ArrowRight size={20} className="text-primary mt-0.5 flex-shrink-0" />
                                    <span className="font-medium">{res}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="text-center lg:hidden">
                            <button 
                              onClick={() => handleApply(job)}
                              className="btn-primary w-full py-4"
                            >
                              Apply for this Position
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {showApplyModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-secondary/80 backdrop-blur-md"
              onClick={() => setShowApplyModal(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl p-8 lg:p-12 overflow-hidden"
            >
              <button 
                onClick={() => setShowApplyModal(false)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-surface flex items-center justify-center text-text-secondary hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Apply for <span className="text-primary">{selectedJob?.title}</span></h2>
                  <p className="text-text-secondary">Fill out the form below and we'll get back to you soon.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowApplyModal(false); alert('Application submitted successfully!'); }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-text-primary ml-1">Full Name</label>
                      <input type="text" required className="w-full p-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary/20" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-text-primary ml-1">Email Address</label>
                      <input type="email" required className="w-full p-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary/20" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-primary ml-1">GitHub / Portfolio URL</label>
                    <input type="url" className="w-full p-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary/20" placeholder="https://github.com/johndoe" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-primary ml-1">Upload Resume (PDF)</label>
                    <div className="relative group">
                      <input type="file" required className="absolute inset-0 opacity-0 cursor-pointer z-10" accept=".pdf" />
                      <div className="w-full p-8 border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center gap-4 group-hover:border-primary/30 transition-all bg-surface/50">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-all">
                          <FileText size={24} />
                        </div>
                        <p className="font-bold text-text-secondary">Click to upload or drag & drop</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-primary ml-1">Why should we hire you?</label>
                    <textarea className="w-full p-4 bg-surface rounded-2xl border-none focus:ring-2 focus:ring-primary/20 h-32" placeholder="Tell us about yourself..." />
                  </div>

                  <button type="submit" className="btn-primary w-full py-5 text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                    Submit Application <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Careers
