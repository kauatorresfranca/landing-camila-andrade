import * as S from './styles';

import client1 from '../../../assets/images/client1.png';
import client2 from '../../../assets/images/client2.png';
import client3 from '../../../assets/images/client3.png';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mariana Costa',
      image: client1,
      text: 'A Dra. Ana foi excepcional no meu caso de divórcio. Sua abordagem profissional e empática tornou o processo muito mais tranquilo.',
      location: 'São Paulo, SP',
    },
    {
      name: 'João Almeida',
      image: client2,
      text: 'A mediação conduzida pela Dra. Ana resolveu nosso conflito de forma rápida e justa. Recomendo fortemente seus serviços.',
      location: 'Campinas, SP',
    },
    {
      name: 'Cláudia Ferreira',
      image: client3,
      text: 'Recebi um atendimento impecável na consultoria jurídica. A Dra. Ana é atenciosa e extremamente competente.',
      location: 'Santos, SP',
    },
  ];

  return (
    <S.Testimonials className="container">
      <h3>Depoimentos dos <span>Clientes</span></h3>
      <S.TestimonialsList>
        {testimonials.map((testimonial, index) => (
          <S.TestimonialItem key={index}>
            <S.ClientInfo>
              <img src={testimonial.image} alt={testimonial.name} />
              <h4>{testimonial.name}</h4>
            </S.ClientInfo>
            <p>{testimonial.text}</p>
            <S.TestimonialLocation>{testimonial.location}</S.TestimonialLocation>
          </S.TestimonialItem>
        ))}
      </S.TestimonialsList>
    </S.Testimonials>
  );
};

export default Testimonials;