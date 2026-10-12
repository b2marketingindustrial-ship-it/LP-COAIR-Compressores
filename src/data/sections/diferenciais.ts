/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * COAIR Compressores: título e foto trocados a pedido do cliente (10/10/2026). A
 * foto já traz a pessoa e os compressores, então não há pessoa recortada (`person: null`).
 * A garantia sempre acompanha a condicionante das manutenções obrigatórias.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cena from '@assets/diferenciais/equipe-compressores.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). */
  titleLines: [
    'Compressores de parafuso de alta tecnologia',
    'com o melhor custo‑benefício do mercado.',
  ],
  text: `Compressores de parafuso com projeto próprio ${site.brandShort}, dimensionados pela engenharia conforme a demanda, a pressão e a vazão da operação. Equipe técnica e laboratório internos, e garantia de 3 anos condicionada às manutenções obrigatórias previstas pela ${site.brandShort}.`,
  scene: {
    src: cena,
    alt: `Técnico da ${site.brandShort} ao lado de compressores de parafuso ${site.brandShort}`,
  },
  /** Pessoa recortada sobre o cenário. `null` quando a foto do cenário já traz a pessoa. */
  person: null,
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
  person: Photo | null
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
