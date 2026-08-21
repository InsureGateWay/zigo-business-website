import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, X, Briefcase, MapPin, Clock, ArrowRight, Upload, Check, ChevronLeft, ChevronRight, Send, User, Phone, Mail, Briefcase as BriefcaseIcon, Award, FileText, Globe, Linkedin } from 'lucide-react';

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    type: 'Full-time',
    description: '',
    applyLink: '',
  });

  // --- Application Modal State ---
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentRole: '',
    experience: '',
    skills: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Load jobs from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('zigobiz_jobs');
    if (stored) {
      setJobs(JSON.parse(stored));
    } else {
      const sampleJobs = [
        {
          id: 1,
          title: 'Senior Software Engineer',
          location: 'Lagos, Nigeria',
          type: 'Full-time',
          description: 'We are looking for a skilled software engineer to lead our development team. You will design, develop, and maintain high-quality software solutions.',
          applyLink: 'mailto:careers@zigobiz.com',
          postedAt: new Date().toISOString(),
        },
        {
          id: 2,
          title: 'Data Scientist',
          location: 'Accra, Ghana',
          type: 'Full-time',
          description: 'Join our data team to build predictive models and drive data-driven decisions for our clients. Strong Python and ML skills required.',
          applyLink: 'mailto:careers@zigobiz.com',
          postedAt: new Date().toISOString(),
        },
        {
          id: 3,
          title: 'Cloud Infrastructure Engineer',
          location: 'Remote (Africa)',
          type: 'Contract',
          description: 'Manage and scale cloud infrastructure on AWS/Azure. Experience with Terraform, Kubernetes, and CI/CD pipelines is a must.',
          applyLink: 'mailto:careers@zigobiz.com',
          postedAt: new Date().toISOString(),
        },
      ];
      setJobs(sampleJobs);
      localStorage.setItem('zigobiz_jobs', JSON.stringify(sampleJobs));
    }
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      localStorage.setItem('zigobiz_jobs', JSON.stringify(jobs));
    }
  }, [jobs]);

  // --- Application Handlers ---
  const openApplicationModal = (job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
    setCurrentStep(0);
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      currentRole: '',
      experience: '',
      skills: '',
      resume: null,
      coverLetter: '',
      portfolio: '',
      linkedin: '',
    });
    setSubmitSuccess(false);
    setIsSubmitting(false);
  };

  const closeApplicationModal = () => {
    setShowApplicationModal(false);
    setSelectedJob(null);
    setCurrentStep(0);
  };

  const handleAppInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplicationData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setApplicationData((prev) => ({ ...prev, resume: file }));
    }
  };

  const nextStep = () => {
    // Basic validation per step
    if (currentStep === 0) {
      if (!applicationData.fullName || !applicationData.email || !applicationData.phone) {
        alert('Please fill in all required fields.');
        return;
      }
    }
    if (currentStep === 1) {
      if (!applicationData.currentRole || !applicationData.experience || !applicationData.skills) {
        alert('Please fill in all required fields.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!applicationData.resume) {
        alert('Please upload your resume.');
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmitApplication = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Application submitted:', applicationData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      // Optionally close after a delay
      setTimeout(() => {
        closeApplicationModal();
      }, 3000);
    }, 1500);
  };

  // --- Admin Handlers (unchanged) ---
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'admin123') {
      setIsAuthenticated(true);
      setShowAdmin(false);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const handleAddJob = () => {
    const newJob = {
      id: Date.now(),
      ...formData,
      postedAt: new Date().toISOString(),
    };
    setJobs([newJob, ...jobs]);
    resetForm();
  };

  const handleEditJob = (job) => {
    setEditingJob(job.id);
    setFormData({
      title: job.title,
      location: job.location,
      type: job.type,
      description: job.description,
      applyLink: job.applyLink,
    });
  };

  const handleUpdateJob = () => {
    const updatedJobs = jobs.map((job) =>
      job.id === editingJob ? { ...job, ...formData } : job
    );
    setJobs(updatedJobs);
    resetForm();
  };

  const handleDeleteJob = (id) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      setJobs(jobs.filter((job) => job.id !== id));
    }
  };

  const resetForm = () => {
    setEditingJob(null);
    setFormData({
      title: '',
      location: '',
      type: 'Full-time',
      description: '',
      applyLink: '',
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Step definitions for the modal
  const steps = [
    { icon: <User className="w-5 h-5" />, label: 'Personal' },
    { icon: <BriefcaseIcon className="w-5 h-5" />, label: 'Professional' },
    { icon: <Upload className="w-5 h-5" />, label: 'Resume' },
    { icon: <FileText className="w-5 h-5" />, label: 'Additional' },
    { icon: <Check className="w-5 h-5" />, label: 'Review' },
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Join Our <span className="font-bold" style={{ color: '#7D582E' }}>Team</span>
          </h1>
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Explore exciting career opportunities at ZigoBiz. We're always looking for talented individuals to help us drive innovation across Africa.
          </p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setShowAdmin(true)}
              className="px-5 py-2 bg-[#7D582E] text-white rounded-lg text-sm font-semibold hover:bg-[#6a4a26] transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Manage Jobs (Admin)
            </button>
          </div>
        </div>

        {/* Admin Login Modal */}
        {showAdmin && !isAuthenticated && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Admin Access</h3>
                <button onClick={() => setShowAdmin(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleAdminLogin}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter Password</label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="submit"
                  className="w-full mt-4 bg-[#7D582E] text-white py-2 rounded-lg font-semibold hover:bg-[#6a4a26] transition-colors"
                >
                  Login
                </button>
                <p className="text-xs text-gray-400 mt-2 text-center">Default: admin123</p>
              </form>
            </div>
          </div>
        )}

        {/* Admin Panel */}
        {isAuthenticated && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Job Management</h2>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  resetForm();
                }}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {editingJob ? 'Edit Job' : 'Add New Job'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Apply Link/Email</label>
                  <input
                    type="text"
                    name="applyLink"
                    value={formData.applyLink}
                    onChange={handleFormChange}
                    placeholder="mailto:careers@zigobiz.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none resize-none"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={editingJob ? handleUpdateJob : handleAddJob}
                  className="px-6 py-2 bg-[#7D582E] text-white rounded-lg font-semibold hover:bg-[#6a4a26] transition-colors"
                >
                  {editingJob ? 'Update Job' : 'Add Job'}
                </button>
                {editingJob && (
                  <button
                    onClick={resetForm}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Current Openings</h3>
              {jobs.length === 0 ? (
                <p className="text-gray-500">No jobs posted yet.</p>
              ) : (
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <div key={job.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800">{job.title}</h4>
                        <p className="text-sm text-gray-500">
                          {job.location} · {job.type}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditJob(job)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Public Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.type}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  Posted {new Date(job.postedAt).toLocaleDateString()}
                </span>
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                {job.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => openApplicationModal(job)}
                  className="inline-flex items-center gap-2 text-[#7D582E] font-medium hover:underline"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
                <button className="text-xs text-gray-400 hover:text-[#7D582E]">View Details</button>
              </div>
            </div>
          ))}
        </div>

        {jobs.length === 0 && !isAuthenticated && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-500">No open positions right now</h3>
            <p className="text-gray-400">Check back later or follow us on social media for updates.</p>
          </div>
        )}
      </div>

      {/* --- APPLICATION MODAL --- */}
      {showApplicationModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Close button */}
            <button
              onClick={closeApplicationModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#7D582E] transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8">
              {/* Header with job title */}
              <h2 className="text-2xl font-light text-[#7D582E] mb-1">
                Apply for <span className="font-bold">{selectedJob.title}</span>
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                {selectedJob.location} · {selectedJob.type}
              </p>

              {/* Step indicators */}
              <div className="flex justify-between items-center mb-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                        index <= currentStep
                          ? 'bg-[#7D582E] text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {index < currentStep ? <Check className="w-4 h-4" /> : step.icon}
                    </div>
                    <span className="text-xs text-gray-500 mt-1 hidden sm:block">{step.label}</span>
                  </div>
                ))}
              </div>

              {/* Form content */}
              {!submitSuccess ? (
                <div className="mt-2">
                  {currentStep === 0 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={applicationData.fullName}
                          onChange={handleAppInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={applicationData.email}
                          onChange={handleAppInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={applicationData.phone}
                          onChange={handleAppInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Professional Details</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Job Title / Role *</label>
                        <input
                          type="text"
                          name="currentRole"
                          value={applicationData.currentRole}
                          onChange={handleAppInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                        <select
                          name="experience"
                          value={applicationData.experience}
                          onChange={handleAppInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                          required
                        >
                          <option value="">Select...</option>
                          <option value="0-1">0-1 years</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Key Skills (comma separated) *</label>
                        <input
                          type="text"
                          name="skills"
                          value={applicationData.skills}
                          onChange={handleAppInputChange}
                          placeholder="React, Python, AWS, etc."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Upload Resume</h3>
                      <div
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#7D582E] transition-colors cursor-pointer"
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        onClick={() => document.getElementById('resumeInput').click()}
                      >
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-sm text-gray-500">
                          {applicationData.resume ? applicationData.resume.name : 'Drag & drop your resume here, or click to browse'}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Supports PDF, DOC, DOCX (Max 5MB)</p>
                        <input
                          id="resumeInput"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>
                      {applicationData.resume && (
                        <p className="text-sm text-green-600 flex items-center gap-1">
                          <Check className="w-4 h-4" /> {applicationData.resume.name}
                        </p>
                      )}
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Additional Information</h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                        <textarea
                          name="coverLetter"
                          value={applicationData.coverLetter}
                          onChange={handleAppInputChange}
                          rows="4"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none resize-none"
                          placeholder="Tell us why you're a great fit..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio / Website (optional)</label>
                        <input
                          type="url"
                          name="portfolio"
                          value={applicationData.portfolio}
                          onChange={handleAppInputChange}
                          placeholder="https://yourportfolio.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile (optional)</label>
                        <input
                          type="url"
                          name="linkedin"
                          value={applicationData.linkedin}
                          onChange={handleAppInputChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ECD5AB] focus:border-[#7D582E] outline-none"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800">Review Your Application</h3>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                        <p><strong>Full Name:</strong> {applicationData.fullName}</p>
                        <p><strong>Email:</strong> {applicationData.email}</p>
                        <p><strong>Phone:</strong> {applicationData.phone}</p>
                        <p><strong>Current Role:</strong> {applicationData.currentRole}</p>
                        <p><strong>Experience:</strong> {applicationData.experience}</p>
                        <p><strong>Skills:</strong> {applicationData.skills}</p>
                        <p><strong>Resume:</strong> {applicationData.resume ? applicationData.resume.name : 'Not uploaded'}</p>
                        {applicationData.coverLetter && <p><strong>Cover Letter:</strong> {applicationData.coverLetter}</p>}
                        {applicationData.portfolio && <p><strong>Portfolio:</strong> {applicationData.portfolio}</p>}
                        {applicationData.linkedin && <p><strong>LinkedIn:</strong> {applicationData.linkedin}</p>}
                      </div>
                      <p className="text-xs text-gray-400">Please review your details before submitting.</p>
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentStep === 0
                          ? 'text-gray-300 cursor-not-allowed'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    {currentStep === 4 ? (
                      <button
                        onClick={handleSubmitApplication}
                        disabled={isSubmitting}
                        className="flex items-center gap-2 px-6 py-2 bg-[#7D582E] text-white rounded-lg font-semibold hover:bg-[#6a4a26] transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : (
                          <>
                            Submit Application <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    ) : (
                      <button
                        onClick={nextStep}
                        className="flex items-center gap-2 px-6 py-2 bg-[#7D582E] text-white rounded-lg font-semibold hover:bg-[#6a4a26] transition-colors"
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">Application Submitted!</h3>
                  <p className="text-gray-500 mt-2">Thank you for applying to <strong>{selectedJob.title}</strong>. We'll be in touch soon.</p>
                  <button
                    onClick={closeApplicationModal}
                    className="mt-6 px-6 py-2 bg-[#7D582E] text-white rounded-lg font-semibold hover:bg-[#6a4a26] transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;