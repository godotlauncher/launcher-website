import { FC, JSX } from "react";
import Heading from "@theme/Heading";
import clsx from "clsx";

import styles from "./styles.module.css";

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
        mainEntity: sections.flatMap((section) =>
            section.questions.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            }))
        ),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />

            {sections.map((section) => (
                <section className={clsx("padding-top--md", styles.section)} key={section.title}>
                    <Heading as="h2" id={section.title.toLowerCase()}>{section.title}</Heading>
                    {section.questions.map((faq) => (
                        <div key={faq.question} className={clsx("padding--md", styles.card)}>
                            <h3 className={styles.question}>{faq.question}</h3>
                            <div className={styles.answer}>
                                {faq.answerHTML ?? <p>{faq.answer}</p>}
                            </div>
                        </div>
                    ))}
                </section>
            ))}
        </>
    );
};

export default FAQStructuredData;
