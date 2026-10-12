/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * COAIR Compressores (campanha Compressores): copy do briefing-coair-compressores.md.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu compressor',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Projeto próprio COAIR',
  title: 'Compressores de parafuso para a sua indústria.',
  /** Trecho do título destacado em verde (precisa existir dentro de `title`). */
  highlight: 'sua indústria',
  text: 'Linhas XFLOW CAR, Heavy Duty e VSD, de 10 a 300 HP, com eficiência energética e dimensionamento técnico, pela engenharia da COAIR.',
  /** Rótulos dos botões do hero (o vocabulário `cta` continua valendo no resto da página). */
  ctaPrimary: 'Solicite sua cotação',
  ctaSecondary: 'Identifique seu compressor',
  banner: {
    src: heroBg,
    alt: 'Compressor de ar de parafuso COAIR em ambiente industrial',
  },
  points: [
    { icon: 'gauge', line1: 'Linhas de', line2: '10 a 300 HP' },
    { icon: 'shield', line1: '3 anos de', line2: 'garantia' },
    { icon: 'sliders', line1: 'Dimensionamento', line2: 'técnico' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  ctaPrimary: string
  ctaSecondary: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: `Fale com quem entende de ${site.product.toLowerCase()}.`,
  text: 'Informe pressão, vazão e regime da operação: a engenharia da COAIR dimensiona o compressor e envia a cotação técnica com modelo e disponibilidade. Venda nacional de máquinas para empresas. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  /** O `\n` marca a quebra de linha de cada destaque. */
  trust: [
    { icon: 'truck', label: 'Venda\nnacional' },
    { icon: 'users', label: 'Equipe técnica\ninterna' },
    { icon: 'clock', label: 'Atendimento\nágil' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados são usados apenas para responder à sua solicitação de cotação, conforme a LGPD.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  /** Frase da marca ao lado da logo. */
  tagline:
    'Compressores de parafuso XFLOW CAR, Heavy Duty e VSD, com projeto próprio e venda nacional',
  contactLabel: 'Atendimento',
  quoteLabel: 'Solicite sua cotação',
  quoteButton: 'Solicitar cotação',
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
