/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro. Cada linha tem 3 features de 2–4 palavras.
 *
 * COAIR Compressores: as 3 linhas da campanha (XFLOW CAR, Heavy Duty, VSD). Nome
 * "XFLOW CAR" é o termo que a campanha compra. Fotos enviadas pelo cliente em
 * 10/10/2026 (XFLOW CA7.5, Heavy Duty HD75 VSD e o VSD aberto, com o inversor).
 *
 * `technology` é o módulo pedido pelo cliente logo abaixo dos cards, a partir do
 * slide "Tecnologia Velocidade Variável - VSD". O "+42%" do slide fica de fora:
 * é claim proibido pelo briefing até ter comprovação. Texto revisado em 14/10/2026:
 * o slide dizia que o VSD determina "qual compressor irá operar", o que é papel do
 * controlador central num sistema com vários compressores, não do inversor.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.jpg'
import linha2 from '@assets/linhas/linha-2.jpg'
import linha3 from '@assets/linhas/linha-3.jpg'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Linhas de produto',
  title: 'Compressores de parafuso COAIR',
  text: 'Três linhas de compressor de parafuso com projeto próprio COAIR, de 10 a 300 HP, dimensionadas conforme a demanda de ar da operação.',
  items: [
    {
      id: 'xflow-car',
      tag: 'Pequenas fábricas',
      title: 'XFLOW CAR',
      description:
        'Linha de entrada para sistemas industriais com fornecimento contínuo de ar comprimido.',
      photo: { src: linha1, alt: 'Compressor de parafuso COAIR XFLOW CA7.5' },
      features: ['10 a 40 HP', 'Parafuso rotativo', 'Fornecimento contínuo de ar'],
      dark: false,
    },
    {
      id: 'heavy-duty',
      tag: 'Alta demanda',
      title: 'Heavy Duty',
      description: 'Para operações pesadas e com alta exigência de produção de ar comprimido.',
      photo: { src: linha2, alt: 'Compressor de parafuso COAIR Heavy Duty HD75' },
      features: ['50 a 300 HP', 'Aplicação industrial pesada', 'Eficiência e durabilidade'],
      dark: false,
    },
    {
      id: 'vsd',
      tag: 'Demanda variável',
      title: 'Compressor VSD',
      description:
        'Compressores VSD ajustam a velocidade à demanda de ar e ao perfil real da operação.',
      photo: {
        src: linha3,
        alt: 'Compressor de parafuso COAIR VSD com portas abertas e inversor de frequência',
      },
      features: ['Velocidade variável', 'Eficiência energética', 'Ajuste à demanda de ar'],
      dark: true,
    },
  ],
  technology: {
    eyebrow: 'Tecnologia VSD',
    title: 'Tecnologia de velocidade variável',
    text: 'O inversor de frequência ajusta a frequência e a tensão do motor elétrico e, com isso, controla velocidade e torque: a produção de ar acompanha a variação da demanda, em vez de alternar entre carga e alívio.',
    note: 'A indicação do compressor, com ou sem VSD, depende da pressão, da vazão, do regime de operação e da variação de demanda, avaliados pela engenharia da COAIR no dimensionamento.',
    points: [
      'Controle de velocidade e torque',
      'Produção de ar conforme a demanda',
      'Menos ciclos de carga e alívio',
    ],
    chartLabel: 'Potência e uso do motor',
  },
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
  technology: {
    eyebrow: string
    title: string
    text: string
    note: string
    points: readonly [string, string, string]
    chartLabel: string
  }
}
