"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Shield,
  Database,
  Lock,
  Phone,
  FileText,
  Calendar,
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const tableOfContents = [
    { id: "overview", title: "Privacy Overview", icon: Shield },
    { id: "data-collection", title: "Data Collection", icon: Database },
    { id: "data-usage", title: "How We Use Your Data", icon: FileText },
    { id: "data-storage", title: "Data Storage", icon: Lock },
    { id: "data-sharing", title: "Data Sharing", icon: Phone },
    { id: "user-rights", title: "Your Rights", icon: FileText },
    { id: "security", title: "Security Measures", icon: Shield },
    { id: "changes", title: "Policy Changes", icon: Calendar },
    { id: "contact", title: "Contact Information", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Simple Expense
              </h1>
              <p className="text-gray-600">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {tableOfContents.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 group hover:bg-blue-50 ${
                        activeSection === item.id
                          ? "bg-blue-100 text-blue-800"
                          : "text-gray-700 hover:text-blue-800"
                      }`}
                    >
                      <Icon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">{item.title}</span>
                      <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              {/* Last Updated */}
              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <strong>Last Updated:</strong> September 25, 2025
              </div>

              {/* Privacy Overview */}
              <section id="overview" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-blue-600" />
                  Privacy Overview
                </h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                  <h3 className="font-semibold text-green-800 mb-2">
                    🎉 Your Privacy is 100% Protected
                  </h3>
                  <p className="text-green-700">
                    Simple Expense is designed with privacy at its core. We
                    don't collect, store, transmit, or share any of your
                    personal data. Your expense information stays completely on
                    your device.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  This Privacy Policy explains how Simple Expense handles your
                  data and protects your privacy. As an offline-first expense
                  tracking application, we are committed to ensuring your
                  financial information remains private and secure on your
                  device.
                </p>
              </section>

              {/* Data Collection */}
              <section id="data-collection" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="h-6 w-6 mr-3 text-blue-600" />
                  Data Collection
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-800 mb-3">
                    What We DON'T Collect:
                  </h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Personal information (name, email, phone number)</li>
                    <li>• Financial account information</li>
                    <li>• Location data</li>
                    <li>• Device identifiers</li>
                    <li>• Usage analytics or crash reports</li>
                    <li>• Any data that could identify you personally</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Simple Expense operates entirely offline and does not have any
                  data collection mechanisms. We have no servers, databases, or
                  analytics tools that could collect your information.
                </p>
              </section>

              {/* Data Usage */}
              <section id="data-usage" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-blue-600" />
                  How We Use Your Data
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Since we don't collect any data, there's nothing for us to
                  use! Your expense data is created, stored, and managed
                  entirely on your device for your personal use.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Your Data is Used Only By You For:
                  </h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Tracking your personal expenses</li>
                    <li>• Generating expense reports</li>
                    <li>• Managing your budget and categories</li>
                    <li>• Any other features within the app</li>
                  </ul>
                </div>
              </section>

              {/* Data Storage */}
              <section id="data-storage" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="h-6 w-6 mr-3 text-blue-600" />
                  Data Storage
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All your expense data is stored locally on your device using
                  secure internal storage mechanisms. This means:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">
                      ✅ What Happens
                    </h3>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Data stays on your device only</li>
                      <li>• Encrypted local storage</li>
                      <li>• No cloud synchronization</li>
                      <li>• You have complete control</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-2">
                      ❌ What Doesn't Happen
                    </h3>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• No remote server storage</li>
                      <li>• No cloud backups by us</li>
                      <li>• No data transmission</li>
                      <li>• No third-party access</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Sharing */}
              <section id="data-sharing" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-blue-600" />
                  Data Sharing
                </h2>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <h3 className="font-semibold text-indigo-800 mb-2 text-lg">
                    Simple Answer: We Don't Share Anything
                  </h3>
                  <p className="text-indigo-700">
                    Since we don't collect your data, we have nothing to share
                    with third parties, advertisers, or anyone else. Your
                    information never leaves your device through our app.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not have partnerships, integrations, or agreements with
                  any third-party services that would involve data sharing.
                  Simple Expense operates as a completely standalone
                  application.
                </p>
              </section>

              {/* User Rights */}
              <section id="user-rights" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-blue-600" />
                  Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Since all your data remains on your device, you have complete
                  control over it:
                </p>
                <div className="space-y-3">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800">
                      📱 Right to Access
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      All your data is accessible through the app interface at
                      any time.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800">
                      ✏️ Right to Modify
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Edit or update your expense records whenever you want.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800">
                      🗑️ Right to Delete
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Delete individual records or uninstall the app to remove
                      all data.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800">
                      📤 Right to Export
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Export your data in standard formats if supported by the
                      app.
                    </p>
                  </div>
                </div>
              </section>

              {/* Security */}
              <section id="security" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 mr-3 text-blue-600" />
                  Security Measures
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we don't handle your data on our servers, we've designed
                  Simple Expense with security best practices:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                    <Lock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-purple-800">
                      Local Encryption
                    </h3>
                    <p className="text-purple-700 text-sm mt-1">
                      Data is encrypted on your device
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                    <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-purple-800">
                      Secure Storage
                    </h3>
                    <p className="text-purple-700 text-sm mt-1">
                      Uses device's secure storage APIs
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                    <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-purple-800">
                      No Network Risk
                    </h3>
                    <p className="text-purple-700 text-sm mt-1">
                      Offline operation eliminates data breaches
                    </p>
                  </div>
                </div>
              </section>

              {/* Changes */}
              <section id="changes" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-blue-600" />
                  Policy Changes
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If we ever make changes to this privacy policy, we will update
                  the "Last Updated" date at the top of this page. Any changes
                  will be communicated through app store updates or in-app
                  notifications. However, our core commitment to not collecting
                  your data will remain unchanged.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-yellow-800 font-medium">
                    💡 Note: If we ever decide to add features that require data
                    collection, we will ask for your explicit consent first.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="scroll-mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-blue-600" />
                  Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or Simple
                  Expense, please feel free to contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-2">
                    <p className="text-gray-800">
                      <strong>App:</strong> Simple Expense
                    </p>
                    <p className="text-gray-800">
                      <strong>Email:</strong> bandarathemiya33@gmail.com
                    </p>
                    <p className="text-gray-800">
                      <strong>Support:</strong> bandarathemiya33@gmail.com
                    </p>
                    <p className="text-gray-800">
                      <strong>Version:</strong> 1.0.0
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  This privacy policy is effective as of the date listed above
                  and applies to all users of Simple Expense.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-gray-500">
            <p>&copy; 2025 Simple Expense. Your privacy is our priority.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
