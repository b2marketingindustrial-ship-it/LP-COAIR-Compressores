/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto, ícone verde e cabeçalho centrado sobre fundo escuro.
 * O card inteiro é o CTA.
 *
 * COAIR Compressores: a pedido do cliente (10/10/2026), o módulo virou
 * institucional — "Por que escolher as soluções da COAIR?" —, com textos e fotos
 * do modelo enviado. A foto de "Atendimento especializado" foi recortada do print
 * do modelo (baixa resolução); trocar pelo arquivo original quando chegar.
 * "Operação sem paradas" virou "Continuidade operacional" (14/10/2026): promessa de
 * zero parada não se sustenta. O `id` segue o antigo para não mudar o `data-cta`.
 */
import type { Photo } from '@data/types'
import type { IconName } from '@data/icons'

import solucoes from '@assets/aplicacoes/solucoes-completas.jpg'
import eficiencia from '@assets/aplicacoes/eficiencia-energetica.jpg'
import atendimento from '@assets/aplicacoes/atendimento-especializado.jpg'
import operacao from '@assets/aplicacoes/operacao-sem-paradas.jpg'

export interface Application {
  id: string
  label: string
  description: string
  icon: IconName
  photo: Photo
}

export const applications = {
  eyebrow: 'Institucional',
  title: 'Por que escolher as soluções da COAIR?',
  text: 'Um ecossistema completo de ar comprimido industrial, desenvolvido para entregar eficiência energética, produtividade e escalabilidade para a sua operação.',
  items: [
    {
      id: 'solucoes-completas',
      label: 'Soluções completas',
      description:
        'Compressores, secadores, peças, lubrificantes e serviços para atender toda a operação.',
      icon: 'factory',
      photo: {
        src: solucoes,
        alt: 'Compressores de parafuso COAIR instalados em sala de compressores industrial',
      },
    },
    {
      id: 'eficiencia-energetica',
      label: 'Eficiência energética',
      description:
        'Tecnologia VSD e projetos dimensionados para reduzir consumo e elevar a performance.',
      icon: 'zap',
      photo: { src: eficiencia, alt: 'Compressor de parafuso COAIR em planta industrial' },
    },
    {
      id: 'atendimento-especializado',
      label: 'Atendimento especializado',
      description:
        'Suporte técnico consultivo, manutenção e auditorias para diferentes demandas industriais.',
      icon: 'headset',
      photo: {
        src: atendimento,
        alt: 'Técnico da COAIR trabalhando em um compressor de ar industrial',
      },
    },
    {
      id: 'operacao-sem-paradas',
      label: 'Continuidade operacional',
      description:
        'Locação, rebuild e reposição estratégica que apoiam a redução de riscos de parada.',
      icon: 'wrench',
      photo: {
        src: operacao,
        alt: 'Peças, filtros e lubrificantes para compressores com equipe técnica ao fundo',
      },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
