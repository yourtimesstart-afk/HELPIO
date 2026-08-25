import type { ReactNode } from "react";

export const LAST_UPDATED = "February 15, 2026";

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-8 text-lg font-extrabold text-slate-900 first:mt-0">{children}</h2>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-slate-600">{children}</p>;
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

export function AboutContent() {
  return (
    <div>
      <P>
        <strong>Helpio</strong> is a free public-service website dedicated to helping people around
        the world find the right helpline, hotline, crisis line, text service, chat or email —
        quickly, privately and in their own language.
      </P>

      <H2>Our Mission</H2>
      <P>
        Every year, millions of people need help but don't know where to turn. We exist to close
        that gap. We organize the world's most important support services — from the 988 Suicide &
        Crisis Lifeline in North America and Samaritans in the UK & Europe to domestic violence
        hotlines, veterans' services, LGBTQ+ support and mental health lines in 50+ countries — into
        one clean, searchable directory.
      </P>

      <H2>How We Verify Information</H2>
      <P>
        All helpline numbers, text keywords, emails and websites listed on this site are researched
        and cross-checked against official government and organization sources. However, contact
        details can change. We encourage every visitor to confirm details on the official website of
        the organization before relying on them.
      </P>

      <H2>Who Publishes This Site</H2>
      <UL
        items={[
          "Website: Helpio",
          "Publisher / Owner: Cropzeq Technologies",
          "Publisher Name: Mr. Mukeshkumar Parmar",
          "Contact Email: yourtimesstart@gmail.com",
        ]}
      />

      <H2>Editorial Independence</H2>
      <P>
        This website is an independent public-service directory. We are not affiliated with, endorsed
        by, or connected to any government agency or any of the organizations listed, unless explicitly
        stated. Listing on this site does not constitute an endorsement.
      </P>

      <H2>Our Commitment</H2>
      <P>
        If you or someone you know is in crisis, please reach out — you are not alone. Our hope is that
        this directory makes it just a little easier to find the help you deserve.
      </P>
    </div>
  );
}

export function TermsContent() {
  return (
    <div>
      <P>
        Welcome to Helpio. By accessing or using this website, you agree to be bound by these
        Terms and Conditions. If you do not agree with any part of these terms, please do not use the
        website.
      </P>

      <H2>1. Informational Purpose Only</H2>
      <P>
        Helpio provides general information about helplines, hotlines and support services around the
        world. The content is provided "as is" for informational purposes only and is not a
        substitute for professional medical, psychological, legal, financial or emergency advice.
      </P>

      <H2>2. No Professional Advice</H2>
      <P>
        Nothing on this website constitutes professional advice of any kind. Always consult a qualified
        professional for advice tailored to your situation. In an emergency, always call 911
        immediately.
      </P>

      <H2>3. Accuracy of Information</H2>
      <P>
        We strive to keep all information accurate and up to date, but we do not warrant that the
        information on this site is complete, accurate or current at all times. Helpline numbers,
        hours and services may change without notice. You are responsible for verifying details with
        the relevant organization.
      </P>

      <H2>4. Third-Party Links & Services</H2>
      <P>
        This website links to external websites and third-party services for your convenience. We do
        not control and are not responsible for the content, privacy practices or availability of
        those external sites. Clicking external links is at your own risk.
      </P>

      <H2>5. Acceptable Use</H2>
      <UL
        items={[
          "You agree not to misuse this website, attempt to gain unauthorized access, or interfere with its operation.",
          "You agree not to copy, reproduce or republish substantial portions of this site without written permission.",
          "You agree not to use this site for any unlawful purpose.",
        ]}
      />

      <H2>6. Limitation of Liability</H2>
      <P>
        To the maximum extent permitted by law, Helpio, Cropzeq Technologies and Mr.
        Mukeshkumar Parmar shall not be liable for any direct, indirect, incidental, consequential or
        special damages arising out of or in connection with your use of, or inability to use, this
        website or the information provided.
      </P>

      <H2>7. Changes to These Terms</H2>
      <P>
        We may update these Terms and Conditions from time to time. Continued use of the website after
        changes are posted constitutes acceptance of the revised terms.
      </P>

      <H2>8. Contact</H2>
      <P>
        Questions about these terms? Contact us at{" "}
        <a href="mailto:yourtimesstart@gmail.com" className="font-semibold text-blue-600">
          yourtimesstart@gmail.com
        </a>
        .
      </P>
    </div>
  );
}

export function DisclaimerContent() {
  return (
    <div>
      <P>
        <strong>Important:</strong> Helpio is a directory and informational website. Please
        read this disclaimer carefully before using the site.
      </P>

      <H2>Not an Emergency Service</H2>
      <P>
        This website is NOT an emergency service and does not provide crisis counseling directly. If
        you or someone else is in immediate danger, call your local emergency number (911 in the US,
        112 in Europe, 999 in the UK) right now. For emotional crisis support, call or text{" "}
        <strong>988</strong> (US & Canada), <strong>116 123</strong> (UK & Europe) or your country's
        national crisis line — free, confidential, 24/7.
      </P>

      <H2>No Professional Relationship</H2>
      <P>
        Using this website does not create a doctor-patient, attorney-client, counselor-client or any
        other professional relationship. The information provided is general and must not be relied
        upon as professional advice.
      </P>

      <H2>Medical, Legal & Financial Disclaimer</H2>
      <P>
        Content on this site related to health, mental health, legal matters or finances is for
        general information only. It is not medical advice, a diagnosis, legal advice or financial
        advice. Always consult a qualified professional for your specific circumstances.
      </P>

      <H2>Accuracy & Third-Party Services</H2>
      <P>
        While we work hard to keep listings accurate and current, we make no representations or
        warranties of any kind, express or implied, about the completeness, accuracy, reliability,
        suitability or availability of the information, products, services or related graphics
        contained on this website for any purpose. Any reliance you place on such information is
        strictly at your own risk.
      </P>

      <H2>External Links</H2>
      <P>
        This site contains links to external websites that are not under our control. We have no
        control over the nature, content and availability of those sites and accept no responsibility
        for them.
      </P>

      <H2>Limitation of Liability</H2>
      <P>
        In no event will Helpio, Cropzeq Technologies or Mr. Mukeshkumar Parmar be liable for
        any loss or damage including, without limitation, indirect or consequential loss or damage, or
        any loss or damage whatsoever arising from loss of data or profits arising out of, or in
        connection with, the use of this website.
      </P>
    </div>
  );
}

export function PrivacyContent() {
  return (
    <div>
      <P>
        At Helpio, your privacy matters. This Privacy Policy explains what information we
        collect, how we use it, and the choices you have. We keep things simple: we collect as little
        as possible.
      </P>

      <H2>1. Information We Collect</H2>
      <UL
        items={[
          "Language preference: we store your chosen language in your browser's local storage so the site can appear in your language on your next visit.",
          "Basic technical data: like most websites, our hosting provider may automatically log standard server data such as IP address, browser type and pages visited for security and analytics.",
          "Contact information you choose to send us: if you email us, we receive your email address and message.",
        ]}
      />

      <H2>2. How We Use Information</H2>
      <UL
        items={[
          "To display the website in your preferred language.",
          "To improve website content, structure and performance.",
          "To respond to your inquiries if you contact us.",
          "To maintain security and prevent abuse.",
        ]}
      />

      <H2>3. No Selling of Data</H2>
      <P>
        We do not sell, rent or trade your personal information to third parties. Ever.
      </P>

      <H2>4. Cookies & Local Storage</H2>
      <P>
        We use local storage (not tracking cookies) to remember your language preference. See our{" "}
        <a href="#/cookies" className="font-semibold text-blue-600">Cookie Policy</a> for details. We
        do not use advertising cookies or cross-site tracking.
      </P>

      <H2>5. Third-Party Services</H2>
      <P>
        We may use a geo-IP lookup service to detect your country and automatically offer the site in
        an appropriate language. This service processes your IP address but we do not store or share
        it.
      </P>

      <H2>6. Children's Privacy</H2>
      <P>
        This website is intended for general audiences. We do not knowingly collect personal
        information from children under 13. If you believe a child has provided us personal
        information, contact us and we will delete it.
      </P>

      <H2>7. Your Rights & Choices</H2>
      <UL
        items={[
          "You can change or reset your language preference at any time using the language menu.",
          "You can clear your browser's local storage and cookies to remove your preference.",
          "You can contact us to ask what data we hold about you or to request deletion.",
        ]}
      />

      <H2>8. Changes to This Policy</H2>
      <P>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with
        an updated revision date.
      </P>

      <H2>9. Contact</H2>
      <P>
        Privacy questions? Email us at{" "}
        <a href="mailto:yourtimesstart@gmail.com" className="font-semibold text-blue-600">
          yourtimesstart@gmail.com
        </a>
        .
      </P>
    </div>
  );
}

export function CookiesContent() {
  return (
    <div>
      <P>
        This Cookie Policy explains how Helpio uses cookies and similar technologies, and the
        choices you have. We use minimal tracking — respecting your privacy is a core value.
      </P>

      <H2>1. What Are Cookies?</H2>
      <P>
        Cookies are small text files stored on your device by your browser. They help websites
        remember your preferences and understand how the site is used.
      </P>

      <H2>2. Cookies & Storage We Use</H2>
      <UL
        items={[
          "Language preference (local storage): remembers which language you chose so you don't have to select it every visit. No advertising or profiling.",
          "Strictly necessary technical data: standard server logs that help us keep the site secure and functioning.",
          "Geo-IP detection: a one-time lookup of your country (based on IP address) to automatically show the site in a relevant language. This is not stored on your device.",
        ]}
      />

      <H2>3. Cookies We Do NOT Use</H2>
      <UL
        items={[
          "No advertising / tracking cookies from ad networks.",
          "No cross-site tracking or fingerprinting.",
          "No third-party analytics cookies by default.",
        ]}
      />

      <H2>4. How to Manage Cookies</H2>
      <P>
        You can control cookies through your browser settings — most browsers let you block or delete
        cookies and site data. Note that blocking all storage may reset your language preference each
        visit. Instructions are available in your browser's help menu (Chrome, Firefox, Safari, Edge).
      </P>

      <H2>5. Changes to This Policy</H2>
      <P>
        We may update this policy from time to time. Any changes will be reflected on this page.
      </P>

      <H2>6. Contact</H2>
      <P>
        Questions about cookies? Email{" "}
        <a href="mailto:yourtimesstart@gmail.com" className="font-semibold text-blue-600">
          yourtimesstart@gmail.com
        </a>
        .
      </P>
    </div>
  );
}
