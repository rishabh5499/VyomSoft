import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">Contact Us</h1>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
            <p className="text-xl">
              We'd love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out to us.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-slate-800">Email</h3>
                </div>
                <p className="text-slate-600 mb-3">
                  Send us an email for general inquiries, support, or feedback.
                </p>
                <a 
                  href="mailto:suryanarayan9071@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                >
                  suryanarayan9071@gmail.com
                </a>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-slate-800">Phone</h3>
                </div>
                <p className="text-slate-600 mb-3">
                  Call us for urgent support or direct assistance.
                </p>
                <a 
                  href="tel:+919513192506"
                  className="text-green-600 hover:text-green-700 font-medium text-lg"
                >
                  +91 95131 92506
                </a>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-slate-800">What can we help you with?</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Product support and troubleshooting</li>
                <li>Feature requests and suggestions</li>
                <li>Business inquiries and partnerships</li>
                <li>Technical questions about our apps</li>
                <li>General feedback about our services</li>
              </ul>
            </div>

            <div className="text-center bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">We value your feedback</h3>
              <p className="text-slate-600 mb-6">
                Your input helps us improve our products and create better experiences for all users. 
                We typically respond to all inquiries within 24-48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:suryanarayan9071@gmail.com"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Send us an Email
                </a>
                <a 
                  href="tel:+919513192506"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Call us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
