# Briefing da LP — registro da entrevista

> Preenchido pelo agente durante a leitura do briefing, a composição e a entrevista (PROMPT-PADRAO-LP, seções 0 a 0.3). Uma linha por entrada, atualizada assim que a resposta é confirmada.
>
> Status: `pendente` · `confirmado` · `default` · `pendência` · `extraído` / `inferido` / `conflito`

## Origem: documento do cliente

| Campo                          | Valor                                                                                                                                              |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arquivo recebido               | `briefing-coair-compressores.md` (anexado na conversa; saída do organizador v2.7.1, a partir do plano Google Ads COAIR + Relatório Estratégico B2) |
| Tipo                           | A (estruturado)                                                                                                                                    |
| Lido integralmente em          | `09/10/2026`                                                                                                                                       |
| Base do projeto                | cópia da LP COAIR Locação, com o visual COAIR já aplicado (verde da marca, header e footer próprios). Mantido para consistência entre as LPs COAIR |
| Dados não aplicados por padrão | CTAs dos anúncios; percentual de economia do catálogo (proibido); dados de mídia (orçamento, lances, públicos)                                     |

## Campanha

| Campo                      | Valor                                                                                                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foco desta LP              | campanha "Compressores" — grupos Compressor de Parafuso Industrial, XFLOW CAR, Heavy Duty, Compressor VSD                                                              |
| Fora desta execução        | campanhas Serviços e Peças (LPs próprias)                                                                                                                              |
| Palavra-chave principal    | `extraído` — compressor de parafuso (no H1 e no title)                                                                                                                 |
| Área atendida              | Brasil, venda nacional — selo "Venda nacional", texto do hero e da cotação ("Venda nacional de máquinas para empresas"). Manutenção em campo não é prometida na página |
| Negativas de oferta        | `extraído` — mesma lista do briefing, em `campaign.negatives`                                                                                                          |
| Claims proibidos           | `extraído` — autorizado(a), assistência autorizada, representante, revenda/revendedor(a), distribuidor(a), importador(a), até 42%, +42%, 42%, 30% a 50%                |
| Divergência de vocabulário | `inferido` — linha 1 chamada "XFLOW CAR" (termo da campanha), não "XFLOW"; potência em HP                                                                              |

### Comitê de compra

| Papel                   | Argumento                                      | Bloco que responde                                            | Status                                                    |
| ----------------------- | ---------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------- |
| Engenharia              | Solução dimensionada para a operação real      | `identificar` (6 dados), `diferenciais` (Engenharia aplicada) | parcial — falta ficha técnica por modelo                  |
| Manutenção / Utilidades | Menos risco de parada e mais previsibilidade   | frase de autoridade, Garantia de 3 anos, Heavy Duty           | coberto                                                   |
| Compras / Suprimentos   | Compra técnica com clareza e menor risco       | texto da cotação (modelo e disponibilidade)                   | lacuna — prazo, frete, faturamento sem resposta (sem FAQ) |
| Diretoria               | Eficiência, continuidade e melhor uso do CAPEX | Compressor VSD, Eficiência energética                         | parcial — sem número ou case                              |

## Composição

Aplicada em: `09/10/2026` · comando: `npm run compose -- --library ../../LP-STARTER-B2/sections linhas identificar aplicacoes diferenciais`

| Fase       | Seção          | Fundo     | Respiro     | Por que entrou                                                              |
| ---------- | -------------- | --------- | ----------- | --------------------------------------------------------------------------- |
| oferta     | `linhas`       | branco    | pt-20 pb-10 | 3 linhas com faixa, chip e 3 features (sitelinks e descrições dos anúncios) |
| apoio      | `identificar`  | branco    | pt-6 pb-16  | 6 dados do dimensionamento: "demanda, pressão, vazão e perfil de operação"  |
| prova      | `aplicacoes`   | cinza-100 | pt-4 pb-20  | os 4 contextos batem 1 a 1 com as palavras-chave de aplicação               |
| autoridade | `diferenciais` | cinza-100 | pt-6 pb-8   | 5 diferenciais completos + frase de autoridade                              |

Componentes `SupportPanel`, `ApplicationsGallery` e `WhyBrand` mantidos na versão COAIR (o compose os sobrescreve; foram restaurados). `ProductLines` adaptado ao visual COAIR: sem carrossel de marcas (oferta de linha própria), acentos verdes, grid de 3 colunas.

| Seção descartada | Motivo                                                                 | O que faria entrar                                 |
| ---------------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| `especificacoes` | só faixas e 3 nomes de modelo; 17 termos de potência sem ficha técnica | ficha por modelo (HP/kW, vazão, pressão)           |
| `processo`       | etapa 4 e prazos ausentes; `identificar` já é o navy do apoio          | processo real de 4–6 etapas                        |
| `perguntas`      | sem lista real do comercial                                            | 4–8 perguntas (prazo, frete, faturamento, estoque) |
| `segmentos`      | 5 de 7 setores, sem descrição nem fotos                                | 7 setores completos                                |
| `clientes`       | sem logos autorizadas nem números com fonte                            | logos + 3 números confirmados                      |
| `vitrine`        | 3 itens; pede 6–24                                                     | —                                                  |

## Entradas do núcleo

| #   | Entrada           | Status   | Valor                                                                                                     |
| --- | ----------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| 1   | MARCA             | extraído | COAIR Compressores de Ar                                                                                  |
| 2   | MARCA_CURTA       | extraído | COAIR                                                                                                     |
| 3   | PRODUTO_PRINCIPAL | inferido | Compressores de parafuso (contém a palavra-chave)                                                         |
| 4   | CONTEXTO_DE_USO   | inferido | indústrias — H1 "Compressores de parafuso para a sua indústria."                                          |
| 5   | PUBLICO           | extraído | Engenharia, Manutenção/Utilidades, Compras/Suprimentos, Diretoria                                         |
| 6   | HERO              | inferido | Linhas de / 10 a 300 HP (gauge) · Projeto próprio / COAIR (cog) · Dimensionamento / técnico (sliders)     |
| 7   | MARCAS_ATENDIDAS  | inferido | nenhuma — linha própria                                                                                   |
| 8   | SELOS             | inferido | Venda nacional · Equipe técnica interna · Atendimento ágil                                                |
| 9   | ENDERECO          | extraído | Alameda Mercúrio, 164 - American Park Empresarial Nr, Indaiatuba - SP, 13347-662                          |
| 10  | URL_FINAL         | inferido | https://www.coair.com.br/compressores — domínio herdado das outras LPs; confirmar. Privacidade: pendência |
| 11  | SHORTCODES        | default  | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                                |
| 12  | WHATSAPP          | inferido | 5519993544919 — confirmado como WhatsApp na LP de Peças                                                   |
| 13  | STACK             | default  | Astro + Tailwind 4 · main → wp-build                                                                      |
| 14  | CORES + FONTE     | default  | visual COAIR herdado da LP Locação (verde da marca + navy, Manrope)                                       |
| 15  | CAMPANHA          | extraído | compressor de parafuso                                                                                    |

## Pendências para o cliente

| Item                                       | Status     | Observação                                                                                                                                        |
| ------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fotos das 3 linhas (`src/assets/linhas/`)  | confirmado | XFLOW CA7.5, Heavy Duty HD75 e VSD aberto (enviadas pelo cliente em 10/10/2026); fundo branco, não recortadas                                     |
| Módulo institucional (seção de aplicações) | confirmado | a pedido do cliente: "Por que escolher as soluções da COAIR?", textos e fotos do modelo enviado                                                   |
| Foto "Atendimento especializado"           | pendência  | recortada do print do modelo (baixa resolução); pedir o arquivo original                                                                          |
| Módulo Tecnologia VSD                      | confirmado | a partir do slide do cliente, dentro da seção de linhas; texto revisado em 14/10 (ver Ajustes). "+42%" fora: claim proibido até haver comprovação |
| Título dos diferenciais                    | confirmado | "...com excelente relação entre desempenho, eficiência e investimento." — substitui o "melhor custo-benefício do mercado" em 14/10 (ver Ajustes)  |
| Hero                                       | confirmado | subtítulo do cliente; ponto "Projeto próprio" trocado por "3 anos de garantia" (condicionante segue nos diferenciais)                             |
| WhatsApp                                   | confirmado | botões removidos; o espaço vazio da cotação deu lugar aos botões do hero em 13/10 (ver Ajustes)                                                   |
| 6 dados do dimensionamento                 | inferido   | confirmar com o comercial                                                                                                                         |
| Faixa de potência do VSD                   | ausente    | card mostra só "Velocidade variável · Eficiência energética · Ajuste à demanda de ar"                                                             |
| Domínio final e política de privacidade    | pendência  |                                                                                                                                                   |
| Banner e logo                              | herdado    | da LP Locação; banner com compressor COAIR serve a esta LP                                                                                        |

## Ajustes — 13/10/2026

Mesmas padronizações das LPs de Locação e Manutenção (mesma base), decididas ponto a ponto com o usuário. Ficaram de fora o que é só delas: o carrossel de marcas da Manutenção (aqui a oferta é de linha própria) e a vitrine nova da Locação.

| Pedido                            | O que foi feito                                                                                                                                                                                                                           | Desvio do padrão                                                                                                                                          |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Largura em 1350px                 | `--container-page` 1430px (1350 úteis); hero acompanha com `--page-shift`; identificar (1212px) e galeria (1760px) voltam ao contêiner da página                                                                                          | **desvio:** o padrão B2 é 1320px (1240 úteis). Só muda a partir de 1430px                                                                                 |
| Espaçamento entre seções          | respiro único `--section-gap` (`global.css`): 80px a partir de 1024px, 64px abaixo. Entre linhas e identificar, metade em cada um                                                                                                         | **desvio:** os paddings sobrescrevem os ritmos da composição (`!` nas seções); o `check:lp` segue calculando o respiro pelos ritmos do `lp.manifest.json` |
| Fonte provisória                  | a LP não tinha a `Manrope Fallback`; entrou com os valores da Manutenção (peso 750–1000 com `size-adjust` 102,4%, CLS 0 lá)                                                                                                               | nenhum                                                                                                                                                    |
| Quebra de texto                   | `text-wrap: balance` em títulos e cards, `pretty` em parágrafos; `SectionHeader` com `\n` e largura `full`; título dos diferenciais em blocos, sem `<br>`                                                                                 | nenhum                                                                                                                                                    |
| Header da COAIR                   | o mesmo das outras duas: fixo e translúcido sobre o hero, menu (Soluções, Linhas, Institucional, Sobre a COAIR) e pílula verde `sm`; saem a placa da logo, a tagline e o botão laranja                                                    | **desvio:** estrutura fixa do header trocada; assinatura do `check:lp` atualizada                                                                         |
| Botões padronizados               | todo CTA na pílula verde (`Button` `brand`); segunda ação como link sublinhado (`link-light`/`link-dark`); diferenciais deixam o laranja e o identificar deixa o verde-brilho                                                             | `check:lp` aceita o CTA da estrutura fixa vindo do `<Button cta>`                                                                                         |
| Hero                              | véus navy mantidos, como na Locação (a Manutenção tirou os dela)                                                                                                                                                                          | nenhum                                                                                                                                                    |
| Blocos navy retos                 | galeria, diferenciais e footer sem cantos; diferenciais encostados na galeria (`pt-0!`)                                                                                                                                                   | o ritmo `overlap` dos diferenciais perde o respiro de topo                                                                                                |
| Cotação                           | o espaço reservado para o WhatsApp do plugin vira os botões do hero: "Solicite sua cotação" + "Identifique seu compressor"; formulário alinhado à esquerda, como na Manutenção                                                            | nenhum                                                                                                                                                    |
| Nota de LGPD                      | removida da cotação, junto com o link da política de privacidade                                                                                                                                                                          | **desvio:** o padrão traz a nota abaixo do formulário. O consentimento passa a depender do formulário do plugin                                           |
| Footer minimalista                | uma faixa: logo de 40px, frase, e-mail, cidade, botão e ícones (sem número de WhatsApp, o ícone dele vira espaço vazio)                                                                                                                   | nenhum na estrutura fixa                                                                                                                                  |
| Setas dos diferenciais            | nunca funcionaram (faltava a raiz `data-why`); corrigidas, e o trilho com setas vai até 1280px, com grade de 5 daí para cima                                                                                                              | nenhum                                                                                                                                                    |
| Cards da galeria                  | ícone, título e seta numa linha, descrição embaixo (até 38ch); a foto que escurece no rodapé do card continua                                                                                                                             | nenhum                                                                                                                                                    |
| Botão flutuante de WhatsApp       | removido do layout (já não aparecia: o número está vazio)                                                                                                                                                                                 | **desvio:** o padrão mostra o botão quando há WhatsApp                                                                                                    |
| Botão dos diferenciais no celular | os cards cobriam metade do botão (o texto terminava com 32px e os cards sobem 64px); respiro de baixo do texto em 96px também no celular                                                                                                  | nenhum                                                                                                                                                    |
| Diferenciais em 3 linhas          | título quebrado em "Compressores de parafuso / de alta tecnologia com o melhor / custo‑benefício do mercado."; coluna de texto de 48% para 52% da página, para o parágrafo caber em 3 linhas (a partir de 1430px; abaixo disso volta a 4) | nenhum                                                                                                                                                    |

## Ajustes — 14/10/2026

Revisão de texto para tirar promessas sem comprovação e corrigir a explicação do VSD.

| Pedido                        | O que foi feito                                                                                                                                                                                             | Desvio do padrão                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Sem "melhor custo-benefício"  | título dos diferenciais: "Compressores de parafuso / de alta tecnologia, com excelente / relação entre desempenho, / eficiência e investimento." (4 linhas)                                                 | o título passa de 3 para 4 linhas                 |
| Sem "operação sem paradas"    | card do institucional: "Continuidade operacional", com "Locação, rebuild e reposição estratégica que apoiam a redução de riscos de parada." O `id` antigo segue, para o `data-cta` não mudar                | nenhum                                            |
| Texto técnico do VSD          | sai "determinando qual compressor irá operar" (papel do controlador central de um sistema com vários compressores, não do inversor). O texto explica o inversor e ganha uma segunda frase sobre a indicação | módulo ganha o campo `note`, um segundo parágrafo |
| Pontos do VSD                 | "Operação no tempo correto" vira "Menos ciclos de carga e alívio"; "Ajuste à demanda de ar" vira "Produção de ar conforme a demanda"                                                                        | nenhum                                            |
| Indicação depende da operação | painel "Qual compressor a sua operação pede?" abre com: a indicação depende de pressão, vazão, regime de operação e variação de demanda                                                                     | nenhum                                            |

## Aprovação

- [ ] Composição e conteúdo aprovados pelo usuário em: —
- [x] Padrão B2 versão: `2.7.1`
