"use client";

import Link from "next/link";
import {
  GraduationCap,
  Users,
  Zap,
  CheckCircle,
  Star,
  Smartphone,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setMessage("Thank you! We'll get back to you soon.");
    setEmail("");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/Logo.png"
                alt="Holookor"
                className="h-8 sm:h-10 w-auto"
              />
            </div>

            {/* Menu */}
            <div className="hidden md:flex gap-8 items-center text-sm">
              <a
                href="#features"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-green-600 transition"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition"
              >
                Contact
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-3">
              <Link
                href="/auth/signin"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition"
              >
                Log In
              </Link>
              <Link
                href="/auth/signup"
                className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Unlock Your Potential with Expert Tutors
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Get personalized learning sessions from verified tutors. Achieve
              your academic goals faster with flexible scheduling and real-time
              progress tracking.
            </motion.p>
            <motion.div
              className="flex gap-4 flex-col sm:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                href="/auth/signup"
                className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2"
              >
                Find Your Tutor <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#features"
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-600 hover:text-green-600 transition font-medium"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-96 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <GraduationCap className="w-32 h-32 text-green-600 mx-auto mb-4 opacity-80" />
              </motion.div>
              <p className="text-gray-600 font-medium">
                Personalized Learning Journey
              </p>
            </div>
              </motion.div>
          </div>
        
      </section>

      {/* Why Holookor Section */}
      <section id="features" className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Holookor
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Tutors</h3>
              <p className="text-gray-600">
                All our educators are thoroughly screened and verified. Browse
                profiles, check ratings, and find the perfect fit for your
                learning needs.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Personalized Learning
              </h3>
              <p className="text-gray-600">
                Lessons tailored to your pace and goals. From test prep to
                subject mastery, get customized guidance every step of the way.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600">
                Learn at your own pace. Book sessions whenever it works best for
                you, with options for one-time sessions or recurring lessons.
              </p>
            </div>
          </div>
       
      </section>
       

      {/* Get Started Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Get Started in 3 Easy Steps
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Find Your Tutor</h3>
            <p className="text-gray-600">
              Browse our database of verified tutors. Filter by subject,
              expertise, and availability to find your perfect match.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Book a Session</h3>
            <p className="text-gray-600">
              Choose your preferred time and duration. Our platform makes
              scheduling easy with instant confirmations and reminders.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Start Learning</h3>
            <p className="text-gray-600">
              Join your session, track progress in real-time, and get
              personalized feedback. Watch your grades improve!
            </p>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            For Everyone
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Students */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">For Students</h3>
              <p className="text-gray-600 mb-6">
                Find the perfect tutor to help you excel in school. Get help
                with homework, prepare for exams, or master a new subject.
              </p>
              <Link
                href="/auth/signup"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
              >
                Find a Tutor
              </Link>
            </div>

            {/* Parents/Tutors */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">For Tutors</h3>
              <p className="text-gray-600 mb-6">
                Join our community of educators. Share your expertise, set your
                own schedule, and grow your tutoring business.
              </p>
              <button className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
                Become a Tutor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic */}
          <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-green-600 transition">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-gray-600 mb-6">For occasional learners</p>
            <div className="mb-6">
              <span className="text-3xl font-bold">$25</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Pay as you go</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Up to 5 sessions</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Basic support</span>
              </li>
            </ul>
            <button className="w-full py-2 border-2 border-gray-300 rounded-lg hover:border-green-600 transition font-medium">
              Get Started
            </button>
          </div>

          {/* Pro */}
          <div className="border-2 border-green-600 rounded-xl p-8 bg-green-50">
            <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Most Popular
            </span>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-600 mb-6">For serious learners</p>
            <div className="mb-6">
              <span className="text-3xl font-bold">$80</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Up to 8 sessions</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Priority booking</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>24/7 support</span>
              </li>
            </ul>
            <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium">
              Choose Plan
            </button>
          </div>

          {/* Premium */}
          <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-green-600 transition">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-gray-600 mb-6">For dedicated learners</p>
            <div className="mb-6">
              <span className="text-3xl font-bold">$180</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Unlimited sessions</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Personal mentor</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Priority support</span>
              </li>
            </ul>
            <button className="w-full py-2 border-2 border-gray-300 rounded-lg hover:border-green-600 transition font-medium">
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Students Say
          </motion.h2>
          <motion.div
            className="overflow-x-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -2500, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex-shrink-0 w-80 hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Holookor helped me improve my math grades by 20 points in just
                  3 months. The tutors are patient and knowledgeable!"
                </p>
                <div>
                  <p className="font-semibold">Sarah J.</p>
                  <p className="text-sm text-gray-500">High School Student</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex-shrink-0 w-80 hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "As a parent, I love how transparent the platform is. I can see
                  my son's progress and communicate with his tutor easily."
                </p>
                <div>
                  <p className="font-semibold">Michael B.</p>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex-shrink-0 w-80 hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Being a tutor on Holookor gave me the flexibility I needed
                  while earning a great income. Highly recommended!"
                </p>
                <div>
                  <p className="font-semibold">Emily K.</p>
                  <p className="text-sm text-gray-500">Tutor</p>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex-shrink-0 w-80 hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I struggled with English until I found my tutor here. Now I'm
                  getting straight A's! This platform changed my life!"
                </p>
                <div>
                  <p className="font-semibold">James T.</p>
                  <p className="text-sm text-gray-500">College Student</p>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex-shrink-0 w-80 hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The variety of tutors available is amazing. I switched between
                  three different tutors and found my perfect match!"
                </p>
                <div>
                  <p className="font-semibold">Lisa M.</p>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex-shrink-0 w-80 hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Affordable, reliable, and effective. Holookor exceeded all my
                  expectations. Worth every penny!"
                </p>
                <div>
                  <p className="font-semibold">David R.</p>
                  <p className="text-sm text-gray-500">Parent</p>
                </div>
              </div>

              {/* Testimonial 7 */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex-shrink-0 w-80 hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The platform is so easy to use. Booking sessions is seamless
                  and the sessions are always professional!"
                </p>
                <div>
                  <p className="font-semibold">Anna S.</p>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>

              {/* Testimonial 8 */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex-shrink-0 w-80 hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I've been tutoring for 10 years and Holookor is the best
                  platform I've worked with. Truly amazing!"
                </p>
                <div>
                  <p className="font-semibold">Robert C.</p>
                  <p className="text-sm text-gray-500">Tutor</p>
                </div>
              </div>

              {/* Repeat testimonials for continuous scroll */}
              <div className="bg-white p-8 rounded-xl shadow-sm flex-shrink-0 w-80 hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Holookor helped me improve my math grades by 20 points in just
                  3 months. The tutors are patient and knowledgeable!"
                </p>
                <div>
                  <p className="font-semibold">Sarah J.</p>
                  <p className="text-sm text-gray-500">High School Student</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          <motion.details
            className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-green-600 transition group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
          >
            <summary className="font-semibold flex items-center justify-between">
              What age groups do you tutor?
              <span className="group-open:rotate-180 transition">
                <ArrowRight className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-gray-600 mt-4">
              We tutor students from elementary school through college. Our
              tutors have expertise across various subjects and age groups.
            </p>
          </motion.details>

          <motion.details
            className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-green-600 transition group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <summary className="font-semibold flex items-center justify-between">
              How do I book my first session?
              <span className="group-open:rotate-180 transition">
                <ArrowRight className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-gray-600 mt-4">
              Simply sign up, browse available tutors, and book a session at
              your preferred time. You can start learning within 24 hours.
            </p>
          </motion.details>

          <motion.details
            className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-green-600 transition group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <summary className="font-semibold flex items-center justify-between">
              What if I'm not satisfied with a session?
              <span className="group-open:rotate-180 transition">
                <ArrowRight className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-gray-600 mt-4">
              We offer a 100% satisfaction guarantee. If you're not happy, we'll
              help match you with a different tutor at no extra cost.
            </p>
          </motion.details>

          <motion.details
            className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-green-600 transition group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <summary className="font-semibold flex items-center justify-between">
              Do you offer group sessions?
              <span className="group-open:rotate-180 transition">
                <ArrowRight className="w-5 h-5" />
              </span>
            </summary>
            <p className="text-gray-600 mt-4">
              Yes! We offer both one-on-one and small group sessions. Group
              rates are available for 2-4 students learning together.
            </p>
          </motion.details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16 sm:py-24">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Learning?
          </motion.h2>
          <motion.p
            className="text-lg opacity-90 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of students achieving their academic goals with
            Holookor.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/auth/signup"
              className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Email:</strong> support@holookor.com
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 123 Learning Street, Education City,
                EC 12345
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 outline-none transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
            >
              Send Message
            </button>
            {message && (
              <p className="text-green-600 text-sm text-center">{message}</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/Logo.png" alt="Holookor" className="h-8 mb-4" />
              <p className="text-sm text-gray-400">
                Empowering students and tutors worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p className="text-sm text-gray-400">
                support@holookor.com
                <br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Holookor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
