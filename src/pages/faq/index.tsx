import Layout from "@theme/Layout";
import { ReactNode } from "react";
import FAQStructuredData from "../../components/FAQStructuredData";
import { faqSections } from "@site/src/data/faqs";

export default function Faqs(): ReactNode {
  return (
    <Layout
      title="FAQs"
      description="Find answers to frequently asked questions about Godot Launcher, including features, installation, troubleshooting, and more. Learn how this open source tool supports Godot project management."
    >
      <div className="container padding-top--lg padding-bottom-lg">
        <main>
          <h1>Frequently Asked Questions (FAQs)</h1>

          <div className="">
            <FAQStructuredData
              sections={faqSections}
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
