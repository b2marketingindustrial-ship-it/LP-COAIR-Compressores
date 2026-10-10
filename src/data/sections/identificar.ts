/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas, e qualquer outro número
 * deixa célula órfã.
 *
 * COAIR Compressores: os 6 dados do dimensionamento (pressão, vazão, potência,
 * regime, variação, aplicação), inferidos das descrições dos anúncios — o
 * comercial confirma se são esses os dados pedidos.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Dados para a cotação',
  title: 'Qual compressor a sua operação pede?',
  /** Trecho do título destacado em verde (precisa existir dentro de `title`). */
  highlight: 'operação pede?',
  text: 'Informe os dados da sua operação: a engenharia da COAIR dimensiona pressão, vazão e potência e indica o modelo e a disponibilidade na cotação.',
  microcopy: 'Dimensionamento feito pela engenharia',
  items: [
    { icon: 'gauge', label: 'Pressão', hint: 'de trabalho necessária' },
    { icon: 'wind', label: 'Vazão', hint: 'consumo de ar estimado' },
    { icon: 'bolt', label: 'Potência', hint: 'do equipamento atual' },
    { icon: 'clock', label: 'Regime', hint: 'turnos de operação' },
    { icon: 'trend-up', label: 'Variação', hint: 'do consumo diário' },
    { icon: 'factory', label: 'Aplicação', hint: 'processo da fábrica' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  microcopy: string
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
