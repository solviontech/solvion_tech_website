import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Cpu, Code, BarChart, Cloud, Smartphone, Shield,
  Search, RotateCcw, Zap, CheckCircle, ArrowRight,
  Clock, X, Mail, Phone, Building, DollarSign, Users
} from 'lucide-react'
import { useState, useEffect } from 'react'
import CustomDropdown from '../components/CustomDropdown'

const Counter = ({ target, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(target)
    if (start === end) return

    let totalMilisecondsStep = Math.abs(Math.floor(duration * 1000 / end))
    let timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, totalMilisecondsStep)

    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{count}{suffix}</span>
}

const Services = () => {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: 'Under 10000'
  })

  const allServices = [
    {
      id: 1,
      title: 'AI Integration & Automation',
      category: 'ai',
      desc: 'Seamlessly integrate cutting-edge AI technologies into your existing systems. From machine learning models to natural language processing, we automate complex workflows and enhance decision-making capabilities.',
      icon: Cpu,
      techStack: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
      timeline: '8-16 weeks',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      title: 'Custom Software Development',
      category: 'development',
      desc: 'Tailored software solutions built with modern technologies to meet your unique business requirements. We deliver scalable, maintainable applications that grow with your business needs.',
      icon: Code,
      techStack: ['React', 'Node.js', 'Python', 'PostgreSQL'],
      timeline: '12-24 weeks',
      image: 'https://images.unsplash.com/photo-1634711853733-9bff20b2639d'
    },
    {
      id: 3,
      title: 'Data Analytics & BI',
      category: 'cloud',
      desc: 'Transform raw data into actionable insights with advanced analytics and visualization tools. We help you make informed decisions through comprehensive business intelligence solutions.',
      icon: BarChart,
      techStack: ['Power BI', 'Tableau', 'Apache Spark', 'Snowflake'],
      timeline: '6-12 weeks',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_122daf91b-1764676753294.png'
    },
    {
      id: 4,
      title: 'Cloud Migration & Optimization',
      category: 'cloud',
      desc: 'Migrate and optimize your infrastructure with secure, scalable cloud solutions. We reduce costs, improve performance, and ensure business continuity with enterprise-grade cloud architecture.',
      icon: Cloud,
      techStack: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
      timeline: '10-20 weeks',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12be1619f-1764648271332.png'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      category: 'development',
      desc: 'Native and cross-platform mobile applications that deliver exceptional user experiences. We build high-performance apps for iOS and Android that engage users and drive business growth.',
      icon: Smartphone,
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      timeline: '14-22 weeks',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11a0236bb-1764651527759.png'
    },
    {
      id: 6,
      title: 'Cybersecurity Solutions',
      category: 'security',
      desc: 'Comprehensive security solutions to protect your digital assets, data, and infrastructure. We implement multi-layered defense strategies against evolving cyber threats and ensure compliance.',
      icon: Shield,
      techStack: ['Fortinet', 'Palo Alto', 'CrowdStrike', 'Splunk'],
      timeline: '8-14 weeks',
      image: 'https://img.rocket.new/generatedImages/rocket_gen_img_18f6b9080-1764670826754.png'
    }
  ]

  const filteredServices = allServices.filter(s => {
    const matchesFilter = filter === 'all' || s.category === filter
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const openQuoteModal = (serviceTitle) => {
    setSelectedService(serviceTitle)
    setIsModalOpen(true)
    setIsSubmitted(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setQuoteFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      budget: 'Under 10000'
    })
  }

  return (
    <div className="pt-20">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full border border-primary-100"
            >
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Comprehensive Service Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Transform Your Business with <span className="gradient-text">Intelligent Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto"
            >
              From intelligent automation to custom-built systems, we engineer next-generation solutions that accelerate growth and redefine competitive advantage.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {[
                { label: 'Projects Delivered', value: '25', suffix: '+' },
                { label: 'Client Satisfaction', value: '98', suffix: '%' },
                { label: 'Industries Served', value: '15', suffix: '+' },
                { label: 'Expert Support', value: '24', suffix: '/7' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-text-secondary font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 py-6 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-12 pr-4 py-3 bg-surface rounded-xl border border-border focus:ring-2 focus:ring-primary/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 text-text-secondary absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All' },
                { id: 'ai', label: 'AI & ML' },
                { id: 'development', label: 'Development' },
                { id: 'cloud', label: 'Cloud & Data' },
                { id: 'security', label: 'Security' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === btn.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-surface text-text-secondary hover:bg-primary/5 hover:text-primary'
                    }`}
                >
                  {btn.label}
                </button>
              ))}
              {(filter !== 'all' || searchQuery !== '') && (
                <button
                  onClick={() => { setFilter('all'); setSearchQuery('') }}
                  className="p-2 text-text-secondary hover:text-primary transition-colors flex items-center gap-1 text-sm font-bold"
                >
                  <RotateCcw size={16} />
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, i) => (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="card group hover:shadow-2xl transition-all border border-border/50 overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {service.category.replace('_', ' ')}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <service.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-text-secondary mb-6 leading-relaxed line-clamp-3">{service.desc}</p>

                    <div className="space-y-6 mt-auto">
                      <div>
                        <p className="text-xs font-bold text-text-primary uppercase tracking-wider mb-3">Core Tech:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.techStack.map(tech => (
                            <span key={tech} className="px-2 py-1 bg-surface text-[10px] font-bold text-text-secondary rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-text-secondary font-medium pb-6 border-b border-border">
                        <Clock size={16} />
                        <span>Timeline: {service.timeline}</span>
                      </div>

                      <button
                        onClick={() => openQuoteModal(service.title)}
                        className="btn-primary w-full py-4 group"
                      >
                        Request Quote
                        <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mx-auto mb-6 text-text-secondary">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">No services found</h3>
              <p className="text-text-secondary mb-8">Try adjusting your filters or search terms.</p>
              <button
                onClick={() => { setFilter('all'); setSearchQuery('') }}
                className="btn-primary px-8"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <section className="section bg-surface overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
            >
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Scale Your Success</span>
            </motion.div>
            <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight">Ready-to-Deploy <span className="gradient-text">Packages</span></h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">Transparent pricing models designed to grow with your business, from startups to enterprises.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                tier: 'Starter',
                price: '₹14999/-',
                desc: 'Basic digital presence for small businesses.',
                features: [
                  { text: '1 Free Domain Name', active: true },
                  { text: '1 Free Web Hosting*', active: true },
                  { text: '10 Page (Static Website)', active: true },
                  { text: 'Business Email id', active: true },
                  { text: 'Limited Images & Videos', active: true },
                  { text: 'SEO Ready Website', active: true },
                  { text: '100% Responsive', active: true },
                  { text: 'Live Chat Integration', active: false },
                  { text: 'Social Media Integration', active: false },
                  { text: 'Payment Gateway', active: false },
                  { text: 'Site Audit', active: false },
                  { text: 'Support 3 Months', active: true },
                ]
              },
              {
                tier: 'Growth',
                price: '₹19999/-',
                desc: 'Enhanced features and dynamic capabilities for scaling.',
                features: [
                  { text: '1 Free Domain Name', active: true },
                  { text: '1 Free Web Hosting*', active: true },
                  { text: '10 Page Dynamic', active: true },
                  { text: 'Business Email id', active: true },
                  { text: 'Unlimited Images & Videos', active: true },
                  { text: 'SEO Ready Website', active: true },
                  { text: '100% Responsive', active: true },
                  { text: 'Live Chat Integration', active: false },
                  { text: 'Social Media Integration', active: true },
                  { text: 'Payment Gateway', active: false },
                  { text: 'Site Audit', active: false },
                  { text: 'Support 6 months', active: true },
                ],
                popular: true
              },
              {
                tier: 'Enterprise',
                price: 'Custom',
                desc: 'Full-scale transformation for large enterprises.',
                features: [
                  { text: 'Strategic consulting', active: true },
                  { text: 'Unlimited support', active: true },
                  { text: 'Business Email id', active: true },
                  { text: 'Unlimited Images & Videos', active: true },
                  { text: 'SEO Ready Website', active: true },
                  { text: '100% Responsive', active: true },
                  { text: 'Live Chat Integration', active: true },
                  { text: 'Social Media Integration', active: true },
                  { text: 'Payment Gateway', active: true },
                  { text: 'Site Audit', active: true },
                  { text: 'Custom SLA', active: true },
                  { text: '24/7 dedicated team', active: true },
                  { text: 'Full AI Integration', active: true },
                ]
              }
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[32px] bg-white border-2 flex flex-col ${pkg.popular ? 'border-primary ring-4 ring-primary/10 shadow-xl' : 'border-border shadow-sm'}`}
              >
                {pkg.popular && (
                  <span className="bg-primary text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full self-start mb-6">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.tier}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                </div>
                <p className="text-text-secondary mb-8">{pkg.desc}</p>
                <div className="space-y-4 mb-10 flex-1">
                  {pkg.features.map(f => (
                    <div key={f.text} className={`flex items-center gap-3 ${!f.active ? 'opacity-50' : ''}`}>
                      {f.active ? (
                        <CheckCircle size={18} className="text-success shrink-0" />
                      ) : (
                        <X size={18} className="text-gray-400 shrink-0" />
                      )}
                      <span className={`text-sm font-medium ${f.active ? 'text-text-primary' : 'text-text-secondary line-through'}`}>
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold transition-all text-center flex items-center justify-center ${pkg.popular ? 'btn-primary' : 'bg-surface hover:bg-primary/5 text-primary border border-primary/20'}`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-border flex items-center justify-between bg-surface/50">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Request Quote</h3>
                  <p className="text-sm text-text-secondary">Discussion for: <span className="text-primary font-bold">{selectedService}</span></p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-white rounded-xl transition-colors text-text-secondary hover:text-gray-900"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-10">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="quote-form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                            <Users size={14} /> Full Name
                          </label>
                          <input 
                            required type="text" 
                            className="w-full p-4 bg-surface rounded-xl border-none ring-0 focus:ring-2 focus:ring-primary/20" 
                            placeholder="John Doe"
                            value={quoteFormData.name}
                            onChange={(e) => setQuoteFormData({...quoteFormData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                            <Mail size={14} /> Email
                          </label>
                          <input 
                            required type="email" 
                            className="w-full p-4 bg-surface rounded-xl border-none ring-0 focus:ring-2 focus:ring-primary/20" 
                            placeholder="john@company.com"
                            value={quoteFormData.email}
                            onChange={(e) => setQuoteFormData({...quoteFormData, email: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                            <Phone size={14} /> Phone
                          </label>
                          <input 
                            required type="tel" 
                            className="w-full p-4 bg-surface rounded-xl border-none ring-0 focus:ring-2 focus:ring-primary/20" 
                            placeholder="+1 (555) 000-0000"
                            value={quoteFormData.phone}
                            onChange={(e) => setQuoteFormData({...quoteFormData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                            <Building size={14} /> Company
                          </label>
                          <input 
                            required type="text" 
                            className="w-full p-4 bg-surface rounded-xl border-none ring-0 focus:ring-2 focus:ring-primary/20" 
                            placeholder="Your Company Inc." 
                            value={quoteFormData.company}
                            onChange={(e) => setQuoteFormData({...quoteFormData, company: e.target.value})}
                          />
                        </div>
                      </div>

                      <CustomDropdown
                        label="Estimated Budget"
                        icon={DollarSign}
                        value={quoteFormData.budget}
                        onChange={(val) => setQuoteFormData({...quoteFormData, budget: val})}
                        options={[
                          'Under 10000',
                          '10000 - 15,000',
                          '15,000 - 20,000',
                          '20,000 - 25,000',
                          'Over 25,000'
                        ]}
                      />

                      <button
                        disabled={isSubmitting}
                        className={`btn-primary w-full py-5 text-lg shadow-xl shadow-primary/20 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <RotateCcw className="animate-spin" size={20} />
                            Sending...
                          </span>
                        ) : 'Submit Request'}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="thank-you"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-6"
                    >
                      <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={48} />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">Thank You!</h3>
                      <p className="text-lg text-text-secondary max-w-md mx-auto">
                        Your request for <span className="text-primary font-bold">{selectedService}</span> has been received. Our team will contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="btn-primary px-10 py-4 mt-8"
                      >
                        Close Modal
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Services
