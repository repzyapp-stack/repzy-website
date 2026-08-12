import React from 'react';

const PrivacyPolicyPage = ({ onBack }) => {
  return (
    <div className="legal-page-container">
      <div className="legal-nav">
        <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="legal-back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </a>
        <div className="legal-logo">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Repzy Logo" />
          <span>REPZY</span>
        </div>
        <div style={{ width: '100px' }}></div> {/* Spacer for centering */}
      </div>

      <div className="legal-content animate-fade-in-up">
        <h1>PRIVACY POLICY</h1>
        <p className="effective-date">Effective Date: July 22, 2026</p>

        <h2>1. INTRODUCTION</h2>
        <p>
          Welcome to Repzy ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or use the Repzy mobile application (the "App").
        </p>
        <p>
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
        </p>

        <h2>2. INFORMATION WE COLLECT</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect via the App includes:</p>
        
        <p>
          <strong>2.1 Personal Data</strong><br />
          Personally identifiable information, such as your name and email address, that you voluntarily give to us when you register with the App.
        </p>

        <p>
          <strong>2.2 Health and Fitness Data</strong><br />
          Information related to your physical characteristics (such as age, gender, and weight) and workout data (exercises, reps, sets, routines) that you log in the App. <strong>This data is considered sensitive and is treated with the highest level of security.</strong>
        </p>

        <p>
          <strong>2.3 Automatically Collected Data</strong><br />
          Information our servers automatically collect when you access the App, such as your native actions that are integral to the App, your device type, operating system, and basic usage statistics.
        </p>

        <h2>3. HOW WE USE YOUR INFORMATION</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:
        </p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Provide personalized fitness tracking and workout analytics.</li>
          <li>Process payments and manage subscriptions.</li>
          <li>Send you administrative information, such as updates to our terms, conditions, and policies.</li>
          <li><strong>Send you marketing and promotional emails</strong> regarding new features, updates, or offers (you may opt out of these at any time).</li>
          <li>Resolve disputes and troubleshoot problems.</li>
          <li>Analyze usage and trends to improve your experience with the App.</li>
        </ul>

        <h2>4. DISCLOSURE OF YOUR INFORMATION</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share information we have collected about you in certain situations:</p>
        
        <p>
          <strong>4.1 Third-Party Service Providers</strong><br />
          We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service. Notably, we utilize <strong>Supabase</strong> for secure database hosting and backend infrastructure.
        </p>

        <p>
          <strong>4.2 Legal Obligations</strong><br />
          If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
        </p>

        <h2>5. THIRD-PARTY INTEGRATIONS (HEALTH DATA)</h2>
        <p>
          In the future, the App may offer integrations with third-party health platforms such as Apple HealthKit or Google Fit. If you choose to enable these integrations, we will request your explicit permission to read or write data to those services. We will only use this data to provide health and fitness tracking features within the App and will not use it for marketing or advertising purposes. You may revoke these permissions at any time via your device settings.
        </p>

        <h2>6. DATA SECURITY AND RETENTION</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information (including utilizing encrypted cloud infrastructure via Supabase). While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
        </p>
        <p>
          We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. When you delete your account, your personal data will be permanently deleted from our active databases.
        </p>

        <h2>7. YOUR PRIVACY RIGHTS</h2>
        <p>
          Depending on your location (such as the EEA, UK, or California), you may have certain rights regarding your personal data, including the right to:
        </p>
        <ul>
          <li>Request access and obtain a copy of your personal information.</li>
          <li>Request rectification or erasure of your personal information.</li>
          <li>Restrict the processing of your personal information.</li>
          <li>Opt-out of marketing communications by clicking the "Unsubscribe" link in any email we send you.</li>
        </ul>
        <p>
          You can delete your account and all associated data directly within the App's settings at any time.
        </p>

        <h2>8. POLICY FOR CHILDREN</h2>
        <p>
          We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
        </p>

        <h2>9. CHANGES TO THIS PRIVACY POLICY</h2>
        <p>
          We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Effective Date" of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
        </p>

        <h2>10. CONTACT US</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>REPZY</strong><br />
          Email: repzyapp@gmail.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
