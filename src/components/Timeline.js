import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled-components for layout and styling
const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
`;

const SectionTitle = styled.h2`

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const PeriodTitle = styled.h3`

  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #34495e;
  margin: 1.5rem 0;
`;

const EventCard = styled(motion.div)`

  background-color: #fff;
  width: 97%;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const EventYear = styled.h4`
  font-size: 1.5rem;
  color: #2980b9;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;
`;

const EventDescription = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  font-family: 'Poppins', sans-serif;
  margin: 0
`;

// Data extracted from the document
const dataPrivacyTimeline = [
  {
    period: 'Ancient Times to Early Modern Period',
    events: [
      { year: 'Prehistory', description: 'Data sharing was primarily verbal, with knowledge passed down through generations by storytelling. There was no concept of data privacy as information was shared within tightly-knit communities.' },
      { year: 'c. 3200 BCE', description: 'The first writing systems, developed in Mesopotamia and Egypt, allowed information to be recorded and stored. Privacy concerns were minimal as literacy was limited to elites.' },
      { year: 'c. 550 BCE', description: 'The Persian Empire established one of the earliest organized postal systems, where messages were delivered over long distances. While there was some expectation of confidentiality, there were no formal privacy protections.' },
      { year: '1440', description: 'Johannes Gutenbergs invention revolutionized information dissemination, making it possible to share ideas widely. However, the printed word could be copied and shared without the originators consent, marking early concerns about intellectual property rather than personal privacy.' },
    ]
  },
  {
    period: '19th Century: Beginnings of Modern Privacy Concerns',
    events: [
      { year: '1837', description: 'Samuel Morse’s telegraph enabled long-distance communication. Privacy concerns began to emerge as messages could potentially be intercepted.' },
      { year: '1844', description: 'The completion of the first telegraph line between Washington, D.C., and Baltimore brought about the first debates on the confidentiality of electronic communications.' },
      { year: '1888', description: 'Kodak cameras made photography accessible, introducing concerns over unauthorized photos.' },
    
    ]
  },
  {
    period: '20th Century: The Birth of Data Privacy Regulations',
    events: [
    { year: '1920s', description: 'The rise of radio broadcasting began to influence public opinion on a large scale, raising questions about the control of information and privacy of listeners.' },

    { year: '1970', description: 'The U.S. enacts the Fair Credit Reporting Act (FCRA) to regulate the collection of consumer information.' },
    { year: '1973', description: 'Sweden becomes the first country to enact a national data protection law, focusing on the use of personal data in automated systems.' },
  
    { year: '1980', description: 'The Organisation for Economic Co-operation and Development issues guidelines on the protection of privacy and transborder flows of personal data, influencing future data privacy regulations globally.' },
    { year: '1986', description: 'The U.S. extends restrictions on government wiretaps to include electronic data transmissions, reflecting growing concerns over digital privacy.' },
    
]
  },
  {
    period: '1990s: The Internet Era Begins',
    events: [
      { year: '1995', description: 'The European Union adopts the Data Protection Directive, establishing a comprehensive regulatory framework for personal data processing.' },
      { year: '1998', description: 'The U.S. enacts COPPA, requiring online services aimed at children to obtain parental consent before collecting personal information.' },
    ]
  },
  {
    period: '2000s: Rise of Social Media and Major Breaches',
    events: [
      { year: '2004', description: 'Facebook is launched, marking the start of large-scale personal data collection by social media.' },
      { year: '2006', description: 'The MySpace data breach exposes millions of accounts, highlighting the vulnerabilities of online platforms.' },
      { year: '2007', description: 'The iPhone’s release revolutionizes mobile internet access, greatly increasing personal data collection.' },
      { year: '2008', description: 'Google launches Street View, leading to privacy concerns as individuals and their properties are photographed and published online without consent.' },

    ]
  },
  {
    period: '2010s: Scandals and Stricter Regulations',
    events: [
    { year: '2011', description: 'Google faces an FTC settlement over privacy violations, marking one of the first major regulatory actions against a social media platform.' },
    { year: '2013', description: 'Edward Snowden’s revelations expose the extent of government surveillance on social media.' },
    { year: '2014', description: 'Facebook manipulates user newsfeeds without consent to study emotional responses, raising ethical concerns about data use.' },
    { year: '2016', description: 'It’s revealed that Cambridge Analytica harvested data from millions of Facebook users without their consent, influencing political outcomes like the U.S. presidential election and Brexit.' },
    { year: '2018', description: 'The EU’s GDPR comes into force, setting a new global standard for data privacy.' },
    ]
  },
  {
    period: '2020s: Modern Challenges and Advances',
    events: [
      { year: '2020', description: 'COVID-19 accelerates digital services, raising concerns about health and location data privacy.' },
      { year: '2021', description: 'Whistleblower Frances Haugen leaks internal documents revealing Facebook’s knowledge of its platforms harmful effects, intensifying scrutiny over social media data practices.' },
      { year: '2022', description: 'Reports raise alarms about TikTok’s data practices, particularly regarding user data being accessed by Chinese authorities, leading to global security concerns.' },
      { year: '2023', description: 'Meta agrees to a $725 million settlement for the Cambridge Analytica scandal, marking a significant financial repercussion for privacy violations.' },
    ]
  },
  {
    period: '2024: Heightened Focus on Data Privacy and Regulation',
    events: [
      { year: 'Global Push for Comprehensive Data Privacy Laws', description: 'In the United States, the proposed American Data Privacy Protection Act (ADPPA) gains momentum as lawmakers seek to establish a comprehensive federal data privacy law. This law aims to harmonize privacy protections across states, offering consumers greater control over their personal information and imposing stricter obligations on companies handling data. If passed, it would represent one of the most significant privacy regulations in the U.S. since the introduction of the California Consumer Privacy Act (CCPA).' },
      { year: 'Artificial Intelligence and Privacy', description: 'The widespread adoption of generative AI models like ChatGPT continues to raise concerns about privacy. In 2024, there is an increased focus on the ethical use of AI, particularly in how these models process and store user data. Regulators are pushing for more transparency in AI operations, including clearer disclosures on data usage and the implementation of stronger safeguards to prevent unauthorized access to personal information.' },
      { year: 'Quantum Computing', description: 'As quantum computing technologies advance, there are growing concerns about the potential for these powerful systems to break traditional encryption methods. In response, governments and private sector entities accelerate research into quantum-resistant encryption techniques to protect sensitive data from future threats.' },
      { year: 'Data Localization Laws', description: 'Countries around the world continue to enact and enforce data localization laws, requiring that data collected from citizens be stored and processed within national borders. These laws are driven by concerns over data sovereignty and the desire to protect sensitive information from foreign surveillance. In 2024, this trend leads to increased tension between multinational companies and governments, as businesses struggle to comply with varying regulatory requirements across different jurisdictions.' },
      { year: 'New EU-U.S. Data Transfer Agreement: ', description: 'Following the invalidation of the EU-U.S. Privacy Shield in 2020, a new data transfer framework is finalized in 2024. This agreement aims to provide a more robust legal basis for transatlantic data flows while ensuring that European citizens data is adequately protected when transferred to the United States.' },
      { year: 'Privacy-Centric Social Media Platforms', description: 'In response to growing public demand for better privacy protections, several new social media platforms emerge in 2024, emphasizing privacy and data security as core features. These platforms offer encrypted messaging, anonymous browsing, and user-controlled data management, setting a new standard for social media privacy.' },
      { year: 'Ongoing Scrutiny of Major Platforms', description: 'Existing social media giants like Meta (formerly Facebook), Twitter, and TikTok continue to face regulatory scrutiny and legal challenges over their data practices. In 2024, these platforms are pressured to implement more transparent data handling policies and provide users with greater control over their personal information. Significant fines and penalties are levied against companies that fail to comply with new privacy regulations.' },
      { year: 'High-Profile Data Breaches', description: 'Despite advances in cybersecurity, 2024 sees several high-profile data breaches, affecting major corporations and government institutions. These incidents underscore the ongoing challenges of securing vast amounts of personal data in an increasingly digital world. The breaches lead to renewed calls for stronger encryption, better incident response strategies, and more robust cybersecurity frameworks.' },
      { year: 'Zero Trust Architecture Adoption', description: 'In response to the persistent threat of data breaches, organizations increasingly adopt Zero Trust Architecture (ZTA) in 2024. This security model assumes that threats could exist both inside and outside the network, requiring continuous verification of the identities of all entities trying to access resources. The adoption of ZTA helps mitigate risks by enforcing strict access controls and monitoring user activity.' },
      { year: 'Increased Consumer Awareness', description: 'Public awareness of data privacy issues reaches new heights in 2024, driven by widespread media coverage, educational campaigns, and high-profile legal cases. Consumers become more vigilant about their digital footprints, using privacy-focused tools and demanding more transparency from companies regarding data practices.' },
      { year: 'Consumer Advocacy Groups', description: 'Advocacy groups play a crucial role in shaping the data privacy landscape in 2024, lobbying for stronger regulations, supporting legal challenges against privacy violations, and educating the public about their rights. These groups collaborate with policymakers, businesses, and technology experts to promote best practices in data privacy and protection.' },
    ]
  },
];

const Timeline = () => {
  return (
    <TimelineContainer>
      <SectionTitle>Data Privacy Timeline</SectionTitle>
      {dataPrivacyTimeline.map((section, index) => (
        <div key={index}>
          <PeriodTitle>{section.period}</PeriodTitle>
          {section.events.map((event, idx) => (
            <EventCard
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
            >
              <EventYear>{event.year}</EventYear>
              <EventDescription>{event.description}</EventDescription>
            </EventCard>
          ))}
        </div>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
