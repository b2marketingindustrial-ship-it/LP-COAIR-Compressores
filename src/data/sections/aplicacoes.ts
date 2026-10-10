/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto, ícone verde e cabeçalho centrado sobre fundo escuro.
 * O card inteiro é o CTA.
 *
 * COAIR Compressores: os 4 contextos são idênticos às palavras-chave de aplicação
 * da campanha (fábrica, usinagem, marmoraria, marcenaria). Frases inferidas, a
 * confirmar com o cliente. Fotos PROVISÓRIAS (compressor e sala de compressores);
 * trocar por 4 fotos 1200×900 de cada contexto.
 */
import type { Photo } from '@data/types'
import type { IconName } from '@data/icons'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  description: string
  icon: IconName
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Ar comprimido para cada processo',
  text: 'Compressores de parafuso para fábricas, usinagem, marmorarias e marcenarias, dimensionados conforme a pressão, a vazão e o regime de cada operação.',
  items: [
    {
      id: 'pequenas-fabricas',
      label: 'Pequenas fábricas',
      description: 'Ar comprimido contínuo para linhas de produção e ferramentas pneumáticas.',
      icon: 'factory',
      photo: { src: app1, alt: 'Compressor de ar de parafuso COAIR em planta industrial' },
    },
    {
      id: 'usinagem',
      label: 'Usinagem',
      description: 'Ar para centros de usinagem, limpeza de peças e acionamentos pneumáticos.',
      icon: 'cog',
      photo: { src: app2, alt: 'Unidade compressora de parafuso em sala de compressores' },
    },
    {
      id: 'marmorarias',
      label: 'Marmorarias',
      description: 'Ar comprimido para ferramentas pneumáticas no corte e acabamento de pedras.',
      icon: 'mountain',
      photo: { src: app3, alt: 'Compressor de ar industrial ao lado de reservatório e tubulações' },
    },
    {
      id: 'marcenarias',
      label: 'Marcenarias',
      description: 'Ar para pistolas de pintura, grampeadores e ferramentas de acabamento.',
      icon: 'wrench',
      photo: { src: app4, alt: 'Sala de compressores com reservatórios azuis e tubulação de ar' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
