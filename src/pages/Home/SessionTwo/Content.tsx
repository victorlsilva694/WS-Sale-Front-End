import imgCardOne from './img/open-24-hours.png';
import imgCardTwo from './img/option.png';
import imgCardThree from './img/cloud.png';

interface ICards {
  key: string,
  img: string,
  description: string
}

export default [

  {
    key: '1',
    img: imgCardOne,
    description: "Suporte aberto 24 horas"
  },
  {
    key: '2',
    img: imgCardTwo,
    description: "Venda seus projetos agora"
  }, 
  {
    key: '3',
    img: imgCardThree,
    description: "Fazemos a hospedagem do seu site"
  }
] as ICards[];