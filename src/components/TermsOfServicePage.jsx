import React from 'react';

const TermsOfServicePage = ({ onBack }) => {
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
        <h1>TERMS OF SERVICE</h1>
        <p className="effective-date">Effective Date: July 22, 2026</p>

        <h2>1. ACCEPTANCE OF TERMS</h2>
        <p>
          These Terms of Service (the "Terms" or "Agreement") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you" or "User"), and REPZY ("we," "us," or "our"), concerning your access to and use of the Repzy mobile application as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Service").
        </p>
        <p>
          <strong>BY DOWNLOADING, INSTALLING, OR OTHERWISE ACCESSING OR USING THE SERVICE, YOU AGREE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY ALL OF THESE TERMS OF SERVICE. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
        </p>

        <h2>2. HEALTH AND MEDICAL DISCLAIMER</h2>
        <p>
          <strong>2.1 No Medical Advice.</strong> The Service provides fitness tracking, workout information, and related content for informational and educational purposes only. The Service is not intended to be a substitute for professional medical advice, diagnosis, or treatment. You should always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
        <p>
          <strong>2.2 Assumption of Risk.</strong> You expressly acknowledge and agree that your participation in any fitness program or physical activities tracked or suggested by the Service involves inherent risks, including but not limited to the risk of property damage, bodily injury, or death. <strong>YOU EXPRESSLY AND VOLUNTARILY ASSUME ALL KNOWN AND UNKNOWN RISKS ASSOCIATED WITH YOUR USE OF THE SERVICE. REPZY SHALL NOT BE LIABLE FOR ANY INJURY OR DAMAGE ARISING FROM YOUR RELIANCE ON THE SERVICE OR PARTICIPATION IN ANY PHYSICAL ACTIVITY.</strong>
        </p>

        <h2>3. USER ACCOUNTS AND ELIGIBILITY</h2>
        <p>
          To access certain features of the Service, you may be required to register for an account. You represent and warrant that (a) all registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information; and (c) you are at least thirteen (13) years of age. If you are under eighteen (18) years of age, you represent and warrant that you have obtained the consent of your parent or legal guardian to use the Service. You are entirely responsible for maintaining the confidentiality of your account credentials and for any and all activities that occur under your account.
        </p>

        <h2>4. SUBSCRIPTIONS, BILLING, AND CANCELLATION</h2>
        <p>
          <strong>4.1 Subscriptions.</strong> The Service may offer premium features on a subscription basis ("Premium Subscription"). By purchasing a Premium Subscription, you authorize us (and our third-party payment processors, including Apple App Store and Google Play Store) to charge the applicable recurring subscription fees to your designated payment method.
        </p>
        <p>
          <strong>4.2 Auto-Renewal.</strong> Your Premium Subscription will automatically renew at the end of each billing cycle (e.g., monthly or annually) unless you cancel your subscription at least twenty-four (24) hours prior to the end of the current billing period.
        </p>
        <p>
          <strong>4.3 Cancellation and Refunds.</strong> You may manage or cancel your Premium Subscription at any time through your Apple ID or Google Play account settings. Cancellations will take effect at the end of the current billing cycle. ALL PURCHASES ARE FINAL AND NON-REFUNDABLE, except as required by applicable law or the policies of the respective app store.
        </p>

        <h2>5. THIRD-PARTY INTEGRATIONS (HEALTH DATA)</h2>
        <p>
          The Service may, now or in the future, offer integration with third-party health applications (e.g., Apple HealthKit, Google Fit). Any such integration requires your explicit consent. You acknowledge that REPZY is not responsible for the accuracy, availability, or privacy practices of such third-party applications. Your use of third-party platforms is governed by their respective terms of service and privacy policies.
        </p>

        <h2>6. INTELLECTUAL PROPERTY RIGHTS</h2>
        <p>
          Unless otherwise indicated, the Service is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Service (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights. You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the Service strictly in accordance with these Terms.
        </p>

        <h2>7. USER CONDUCT AND PROHIBITED ACTIVITIES</h2>
        <p>
          You agree not to access or use the Service for any purpose other than that for which we make the Service available. As a user of the Service, you agree not to:
        </p>
        <ul>
          <li>(a) Systematically retrieve data or other content from the Service to create or compile a collection, compilation, database, or directory without written permission from us;</li>
          <li>(b) Circumvent, disable, or otherwise interfere with security-related features of the Service;</li>
          <li>(c) Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Service;</li>
          <li>(d) Use the Service in a manner inconsistent with any applicable laws or regulations.</li>
        </ul>

        <h2>8. DISCLAIMER OF WARRANTIES</h2>
        <p>
          <strong>THE SERVICE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</strong>
        </p>

        <h2>9. LIMITATION OF LIABILITY</h2>
        <p>
          <strong>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</strong>
        </p>

        <h2>10. INDEMNIFICATION</h2>
        <p>
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your use of the Service; (2) your breach of these Terms; or (3) your violation of the rights of a third party, including but not limited to intellectual property rights.
        </p>

        <h2>11. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
        <p>
          These Terms and your use of the Service shall be governed by and construed in accordance with the laws of the jurisdiction in which REPZY is established, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in that jurisdiction, and the parties hereby irrevocably consent to the personal jurisdiction and venue therein.
        </p>

        <h2>12. MISCELLANEOUS</h2>
        <p>
          These Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. If any provision or part of a provision of these Terms is determined to be unlawful, void, or unenforceable, that provision is deemed severable from these Terms and does not affect the validity and enforceability of any remaining provisions.
        </p>

        <h2>13. CONTACT INFORMATION</h2>
        <p>
          In order to resolve a complaint regarding the Service or to receive further information regarding use of the Service, please contact us at:
        </p>
        <p>
          <strong>REPZY</strong><br />
          Email: repzyapp@gmail.com
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
