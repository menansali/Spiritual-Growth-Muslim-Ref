import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  onBack: () => void;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalPageProps> = ({ title, lastUpdated, onBack, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-6">
        <button 
          onClick={(e) => { e.preventDefault(); onBack(); }}
          className="group flex items-center gap-2 text-slate-500 hover:text-brand mb-8 transition-colors font-medium text-sm"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-500 mb-12 font-medium">Last Updated: {lastUpdated}</p>
        
        <div className="space-y-10 text-slate-600 leading-relaxed text-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicy: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <LegalLayout title="Privacy Policy" lastUpdated="December 2024" onBack={onBack}>
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">Introduction</h3>
      <p>Spiritual Growth: Muslim Ref ("we", "our", or "the app") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our spiritual reflection app.</p>
      <p className="mt-4">The app is designed with privacy as a core principle. We do not collect, store, or share any personal information.</p>
    </div>
    
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">Data We Collect</h3>
      <p className="font-bold text-slate-900 mb-2">We do not collect any personal information.</p>
      <p>The app stores the following preferences locally on your device only:</p>
      <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-brand">
        <li>Language preference (Turkish/English)</li>
        <li>Theme selection</li>
        <li>Content refresh interval</li>
        <li>Notification settings (enabled/disabled)</li>
        <li>Favorite content IDs</li>
        <li>Tasbih counter values</li>
        <li>Current content ID for widget synchronization</li>
      </ul>
      <p className="mt-4">This data never leaves your device and is not accessible to us or any third party.</p>
    </div>
    
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">How We Use Data</h3>
      <p>The locally stored preferences are used solely to:</p>
      <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-brand">
        <li>Remember your app settings between sessions</li>
        <li>Display content in your preferred language</li>
        <li>Apply your chosen visual theme</li>
        <li>Synchronize content with the home screen widget</li>
        <li>Maintain your favorites list and tasbih progress</li>
      </ul>
      <p className="mt-4">We do not use this data for any other purpose.</p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">Data Storage</h3>
      <p>All data is stored locally using:</p>
      <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-brand">
        <li>UserDefaults (for app preferences)</li>
        <li>App Group shared container (for widget communication)</li>
      </ul>
      <p className="mt-4">Your data remains on your device and under your control. Uninstalling the app will remove all stored data.</p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">Third-Party Services</h3>
      <p>The app may include Firebase SDK for potential future anonymous usage analytics. If enabled, this would only collect:</p>
      <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-brand">
        <li>Anonymous, aggregated usage statistics</li>
        <li>App crash reports (without personal identifiers)</li>
      </ul>
      <p className="mt-4">No advertising networks or tracking services are used. We do not sell or share any data with third parties.</p>
      <p className="mt-4">We also use Apple iCloud to synchronize your statistics (streaks, read counts) across your devices. This data is stored in your personal Apple iCloud account and is encrypted.</p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">Children's Privacy</h3>
      <p>Spiritual Growth: Muslim Ref does not collect personal information from anyone, including children. The app is safe for users of all ages.</p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">Changes to This Policy</h3>
      <p>We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last Updated" date above. We encourage you to review this policy periodically.</p>
    </div>
    
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">Contact</h3>
      <p>If you have any questions about this Privacy Policy, please contact us through the App Store listing or leave a review with your question.</p>
    </div>
  </LegalLayout>
);

export const TermsOfUse: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <LegalLayout title="Terms of Use" lastUpdated="December 2024" onBack={onBack}>
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">1. Acceptance of Terms</h3>
      <p>By downloading, accessing, and using Spiritual Growth: Muslim Ref ("the Application"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Application.</p>
    </div>
    
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">2. Intellectual Property</h3>
      <p>All content included in the Application, such as text, graphics, logos, images, and software, is the property of Spiritual Growth: Muslim Ref or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of the developer.</p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">3. Subscriptions & Billing</h3>
      <p>The app offers optional "Pro" subscriptions (Monthly, Yearly, or Lifetime).</p>
      <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-brand">
        <li><strong>Payment:</strong> Payment will be charged to your iTunes Account at confirmation of purchase.</li>
        <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24-hours before the end of the current period.</li>
        <li><strong>Cancellation:</strong> You can manage and cancel your subscriptions by going to your Account Settings on the App Store after purchase.</li>
        <li><strong>Refunds:</strong> All refund requests are handled directly by Apple according to their policy.</li>
      </ul>
    </div>
    
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">4. User Conduct</h3>
      <p>You agree not to use the Application for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Application in any way that could damage the Application, the services, or the general business of the developer.</p>
    </div>
    
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">5. Disclaimer</h3>
      <p>The materials on Spiritual Growth: Muslim Ref are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
    </div>
    
    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">6. Limitation of Liability</h3>
      <p>In no event shall the developer be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on the Application.</p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">7. Governing Law</h3>
      <p>Any claim relating to the Application shall be governed by the laws of the operating country without regard to its conflict of law provisions.</p>
    </div>
  </LegalLayout>
);