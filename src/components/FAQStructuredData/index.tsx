import { FC, Fragment, JSX } from "react";
import Heading from "@theme/Heading";

interface FAQStructuredDataProps {
    sections: {
        title: string;
        questions: {
            question: string;
            answer: string;
            answerHTML?: JSX.Element;
        }[];
    }[];
}

interface FAQQuestionStructuredData {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
        '@type': 'Answer';
        text: string;
    };
}

interface FAQStructuredData {
    '@context': string;
    '@type': string;
    mainEntity: FAQQuestionStructuredData[];
}

const FAQStructuredData: FC<FAQStructuredDataProps> = ({ sections }) => {

    const faqStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: sections.map((section) => section.questions.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />

            {sections.map((section) => (
                <section className="padding-top--md faq-section" key={section.title}>
                    <Heading as="h2" id={section.title.toLowerCase()}>{section.title}</Heading>
                    {section.questions.map((faq) => (
                        <div key={faq.question} className="padding--md">
                            <h3 className="faq-section__question">{faq.question}</h3>
                            <p className="faq-section__answer">{faq.answerHTML || faq.answer}</p>
                        </div>
                    ))}
                </section>
            ))}
        </>
    );
};

export default FAQStructuredData;