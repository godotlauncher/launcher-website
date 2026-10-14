import Layout from "@theme/Layout";
import { ReactNode } from "react";
import FAQStructuredData from "../../components/FAQStructuredData";
import { faqSections } from "@site/src/data/faqs";

export default function Faqs(): ReactNode {
  return (
    <Layout
      title="FAQs"
      description="Find answers about Godot Launcher: move and share Godot export templates, manage editors and projects, install the app and troubleshoot problems."
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
