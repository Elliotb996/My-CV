"use client";
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [formState, handleSubmit] = useForm("mldeojog"); // Replace with
const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Expanded work experience data
  const experiences = [
    {
      title: "Finance Specialist",
      company: "Charles & Dean Finance",
      period: "2023 - Present",
      points: [
        "Managing high-value vehicle finance portfolio with average deal size of £80K, ranging from standard vehicles to premium supercars",
        "Analyzing company accounts and financial statements to structure optimal business finance solutions",
        "Writing comprehensive proposals for underwriters on high-end vehicles and complex business cases",
        "Building and maintaining relationships with business owners and key decision makers",
        "Utilizing Salesforce CRM to manage customer relationships and maintain detailed records",
        "Qualifying customers to match appropriate finance products and lenders to their specific needs",
        "Structuring deals from £15K retail finance up to multi-million pound supercar transactions",
        "Recognized as the team's go-to resource for product knowledge and lender expertise"
      ]
    },
    {
      title: "Sales Development Representative",
      company: "Charles & Dean Finance",
      period: "2022 - 2023",
      points: [
        "Generated qualified leads through strategic outbound prospecting campaigns",
        "Managed inbound enquiries and successfully reactivated archived customer data",
        "Consistently exceeded daily call metrics and lead conversion targets",
        "Developed strong product knowledge across vehicle finance solutions",
        "Promoted to Finance Specialist within 6 months due to exceptional performance",
        "Built foundation of understanding in finance products and lending criteria"
      ]
    },
    {
      title: "Sales Executive",
      company: "Volkswagen Peterborough",
      period: "2016 - 2022",
      points: [
        "Achieved consistent sales targets while maintaining 100% FCA compliance standards",
        "Qualified as accredited Volkswagen sales executive within first two years",
        "Selected for elite 8-person central sales team during pandemic, managing sales across 13 dealerships",
        "Maintained 100% customer satisfaction ratings through comprehensive needs analysis",
        "Adapted sales techniques to changing market conditions during pandemic",
        "Managed remote sales processes across multiple brands including VW, Audi, SEAT, and Skoda"
      ]
    }
  ];

  // Education data
  const education = [
    {
      institution: "Peterborough Regional College",
      period: "2013 - 2015",
      qualification: "Level 3 BTEC National Extended Diploma in ICT & Business",
      details: "Focused on business systems, database management, and IT infrastructure"
    },
    {
      institution: "Arthur Mellows Village College",
      period: "2008 - 2013",
      qualification: "GCSE Qualifications",
      grades: [
        "Mathematics (B)",
        "English Language (B)",
        "BTEC Business Diploma (Double Distinction)",
        "Science Double Award (B)",
        "English Literature (C)",
        "History (C)",
        "Religious Studies (B)",
        "Graphics (C)",
        "Physical Education (B)"
      ]
    }
  ];

  // Technical skills data
  const skills = {
    finance: [
      { name: "Financial Analysis", level: "Advanced" },
      { name: "Business Finance", level: "Advanced" },
      { name: "Vehicle Finance", level: "Expert" },
      { name: "Sales Force CRM", level: "Advanced" },
      { name: "Compliance (FCA)", level: "Expert" }
    ],
    web3: [
      { name: "DeFi Protocols", level: "Intermediate" },
      { name: "Crypto Trading", level: "Intermediate" },
      { name: "Community Management", level: "Intermediate" },
      { name: "Market Analysis", level: "Advanced" }
    ],
    technical: [
      { name: "Google Workspace", level: "Advanced" },
      { name: "CRM Systems", level: "Expert" },
      { name: "Data Analysis", level: "Intermediate" },
      { name: "Microsoft Office", level: "Advanced" }
    ]
  };

  // Contact form handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-32">
          <h1 className="text-5xl font-bold mb-6">Elliot Butler</h1>
          <p className="text-2xl mb-8 text-gray-100">Strategic Sales & Web3 Professional</p>
          <div className="flex gap-4">
            <button 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
              onClick={() => setActiveSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </header>
<div className="fixed top-0 left-0 w-full h-1 z-50">
  <motion.div 
    className="h-full bg-blue-600"
    style={{ 
      scaleX: scrollProgress,
      transformOrigin: "0%" 
    }}
  />
</div>
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8 py-4">
            {['Experience', 'Skills', 'Education', 'Web3', 'Contact'].map((section) => (
              <button 
                key={section}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeSection === section.toLowerCase() 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveSection(section.toLowerCase())}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="container mx-auto px-6 py-16">
        {/* Experience Section */}
{activeSection === 'experience' && (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Professional Experience</h2>
            <div className="grid gap-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-blue-600">{exp.title}</h3>
                  <p className="text-gray-600 mb-6">{exp.company} | {exp.period}</p>
                  <ul className="space-y-3">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Finance</h3>
                {skills.finance.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ 
                          width: skill.level === 'Expert' ? '100%' : 
                                 skill.level === 'Advanced' ? '80%' : '60%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Web3</h3>
                {skills.web3.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ 
                          width: skill.level === 'Expert' ? '100%' : 
                                 skill.level === 'Advanced' ? '80%' : '60%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Technical</h3>
                {skills.technical.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ 
                          width: skill.level === 'Expert' ? '100%' : 
                                 skill.level === 'Advanced' ? '80%' : '60%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Education</h2>
            <div className="grid gap-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-blue-600">{edu.institution}</h3>
                  <p className="text-gray-600 mb-4">{edu.period}</p>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">{edu.qualification}</h4>
                  {edu.details && <p className="text-gray-700 mb-4">{edu.details}</p>}
                  {edu.grades && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {edu.grades.map((grade, idx) => (
                        <div key={idx} className="bg-gray-50 p-2 rounded text-gray-700">
                          {grade}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Web3 Section */}
{activeSection === 'web3' && (
  <div>
    <h2 className="text-4xl font-bold text-gray-800 mb-12">Web3 Experience</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Crypto Trading & DeFi</h3>
        <ul className="space-y-3">
          {['Active participant in crypto markets since 2021',
            'Personal experience with various DeFi protocols',
            'Following market trends and macro events',
            'Exploring NFT markets and communities'].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-blue-600 mb-4">Community Engagement</h3>
        <ul className="space-y-3">
          {['Participated in Discord communities for emerging projects',
            'Contributed to community management initiatives',
            'Building knowledge through active participation',
            'Following industry developments and trends'].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}
        {/* Contact Section */}
{activeSection === 'contact' && (
  <div>
    <h2 className="text-4xl font-bold text-gray-800 mb-12">Get In Touch</h2>
    <div className="max-w-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-md"
      >
        {formState.succeeded ? (
          <div className="text-green-600 text-center p-4 bg-green-50 rounded-lg">
            Thank you for your message! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formState.submitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {formState.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  </div>
)}
