import { useState } from 'react';
import * as S from './styles';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona a consultoria jurídica?',
      answer: 'A consultoria jurídica envolve uma análise detalhada do seu caso, com orientações personalizadas para suas necessidades legais, garantindo clareza e segurança nas decisões.',
    },
    {
      question: 'O que é mediação de conflitos?',
      answer: 'A mediação é um processo extrajudicial em que um mediador neutro facilita o diálogo entre as partes, buscando um acordo justo e satisfatório para todos.',
    },
    {
      question: 'Quais casos de Direito de Família são atendidos?',
      answer: 'Atendemos casos como divórcio, guarda de filhos, pensão alimentícia, partilha de bens e outros, com foco no bem-estar das partes envolvidas.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <S.FAQ className="container">
      <h3>Perguntas <span>Frequentes</span></h3>
      <S.FAQList>
        {faqs.map((faq, index) => (
          <S.FAQItem key={index} active={index === activeIndex}>
            <S.FAQQuestion onClick={() => toggleFAQ(index)}>
              {faq.question}
              <S.FAQIcon>{index === activeIndex ? '-' : '+'}</S.FAQIcon>
            </S.FAQQuestion>
            {index === activeIndex && <S.FAQAnswer>{faq.answer}</S.FAQAnswer>}
          </S.FAQItem>
        ))}
      </S.FAQList>
    </S.FAQ>
  );
};

export default FAQ;