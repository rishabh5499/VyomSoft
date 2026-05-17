import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

const NotiPrivacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">
            Privacy Policy - Noti
          </h1>
          
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6 prose-headings:text-slate-800 prose-a:text-blue-600">
            <p className="text-sm text-slate-500">
              Last updated: May 17, 2026
            </p>

            <p>
              Vyomsoft (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the <strong>Noti</strong> mobile application (the &ldquo;App&rdquo;). 
              This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your 
              information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              1. Information We Collect
            </h2>
            <p>
              We collect information to provide a synchronized, seamless task management experience. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Your registered email address, name, and credentials used during registration, password reset requests, or login procedures.</li>
              <li><strong>Application Data:</strong> Title groups, custom sub-task names, completion markers, notes text, and timestamps that you explicitly input into the application for daily routine tracking.</li>
              <li><strong>Device and Network Logs:</strong> Basic structural connection data, including request headers, IP addresses parsed via our secure network proxies, routing logs, and response status behaviors.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information purely to operate, maintain, and improve the core application logic, specifically to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Authenticate your identity and securely manage password verification loops.</li>
              <li>Provide real-time server-side synchronization of your tasks, notes, and completions across your active devices.</li>
              <li>Monitor network proxy performance and API structural reliability to prevent performance degradation or endpoint delivery drops.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">
              3. Data Synchronization &amp; Infrastructure
            </h2>
            <p>
              Your data is processed through our secure Nginx reverse-proxy deployment layered behind Cloudflare&apos;s firewall network edge. 
              This infrastructure ensures encrypted data transit (HTTPS) directly to our custom Tomcat application container architecture, 
              securely storing persistent entities within our dedicated cloud-hosted database schemas.
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              4. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, rent, or lease your personal information or application data to third parties. Data is only processed on 
              our server infrastructure to carry out your programmatic actions or when explicitly forced by legal authorities adhering strictly 
              to operational compliance mandates.
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              5. Security of Your Information
            </h2>
            <p>
              We implement industry-standard security architectures to maintain data integrity. External connections use Cloudflare-managed edge 
              encryption filters terminating to Nginx over SSL, safeguarding raw inputs against third-party extraction or cross-site parameter 
              injection attacks. However, no electronic transmission or cloud-storage model can guarantee absolute 100% security.
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              6. Your Data Rights
            </h2>
            <p>
              You maintain full control over your active task configurations. You can add, modify, or permanently delete items, task lists, 
              and associated structures directly through the application interface. Programmatic delete hooks instantly execute synchronous 
              cleanup sweeps across our storage database schemas.
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or your data lifecycle handling, You can contact us:
            </p>
            <ul className="list-none space-y-2 pl-0">
              <li>
                <strong>By email:</strong>{" "}
                <a href="mailto:support@vyomsoft.in">
                  support@vyomsoft.in
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://api.vyomsoft.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  api.vyomsoft.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotiPrivacy