/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro. Cada linha tem 3 features de 2–4 palavras.
 *
 * COAIR Compressores: as 3 linhas da campanha (XFLOW CAR, Heavy Duty, VSD). Nome
 * "XFLOW CAR" é o termo que a campanha compra. VSD sem faixa de potência no
 * material — a terceira feature não cita HP até o cliente informar. Fotos
 * PROVISÓRIAS (compressor COAIR genérico); trocar pelas fotos XFLOW CA30, Heavy
 * Duty e HD75 VSD recortadas.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'

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
      photo: { src: linha1, alt: 'Compressor de parafuso COAIR em ambiente industrial' },
      features: ['10 a 40 HP', 'Parafuso rotativo', 'Fornecimento contínuo de ar'],
      dark: false,
    },
    {
      id: 'heavy-duty',
      tag: 'Alta demanda',
      title: 'Heavy Duty',
      description: 'Para operações pesadas e com alta exigência de produção de ar comprimido.',
      photo: { src: linha2, alt: 'Compressor de parafuso COAIR de grande porte em galpão' },
      features: ['50 a 300 HP', 'Aplicação industrial pesada', 'Eficiência e durabilidade'],
      dark: false,
    },
    {
      id: 'vsd',
      tag: 'Demanda variável',
      title: 'Compressor VSD',
      description:
        'Compressores VSD ajustam a velocidade à demanda de ar e ao perfil real da operação.',
      photo: { src: linha3, alt: 'Unidade compressora de parafuso em sala de compressores' },
      features: ['Velocidade variável', 'Eficiência energética', 'Ajuste à demanda de ar'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
