/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * COAIR Compressores: frase de autoridade = candidata 2 do briefing (título do
 * anúncio XFLOW CAR); a candidata 1 encosta no território da Chicago Pneumatic.
 * A garantia sempre acompanha a condicionante das manutenções obrigatórias.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.png'
import pessoa from '@assets/diferenciais/pessoa.png'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Ar contínuo', 'para a sua produção.'],
  text: `Compressores de parafuso com projeto próprio ${site.brandShort}, dimensionados pela engenharia conforme a demanda, a pressão e a vazão da operação. Equipe técnica e laboratório internos, e garantia de 3 anos condicionada às manutenções obrigatórias previstas pela ${site.brandShort}.`,
  scene: {
    src: cenario,
    alt: 'Sala de compressores industriais com tanques azuis e tubulações',
  },
  person: {
    src: pessoa,
    alt: `Técnico da ${site.brandShort}`,
  },
  reasons: [
    {
      icon: 'cog',
      title: 'Projeto próprio',
      description: `Compressores com projeto desenvolvido pela própria ${site.brandShort}.`,
    },
    {
      icon: 'sliders',
      title: 'Engenharia aplicada',
      description: 'Dimensionamento pela demanda, pressão e vazão da operação.',
    },
    {
      icon: 'users',
      title: 'Equipe e laboratório internos',
      description: 'Equipe técnica e laboratório internos.',
    },
    {
      icon: 'shield',
      title: 'Garantia de 3 anos',
      description: `Condicionada às manutenções obrigatórias previstas pela ${site.brandShort}.`,
    },
    {
      icon: 'zap',
      title: 'Eficiência energética',
      description: 'Foco em consumo de energia, com opção de tecnologia VSD.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
