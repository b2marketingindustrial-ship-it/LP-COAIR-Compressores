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

| Item                                       | Status     | Observação                                                                                                                                       |
| ------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Fotos das 3 linhas (`src/assets/linhas/`)  | confirmado | XFLOW CA7.5, Heavy Duty HD75 e VSD aberto (enviadas pelo cliente em 10/10/2026); fundo branco, não recortadas                                    |
| Módulo institucional (seção de aplicações) | confirmado | a pedido do cliente: "Por que escolher as soluções da COAIR?", textos e fotos do modelo enviado                                                  |
| Foto "Atendimento especializado"           | pendência  | recortada do print do modelo (baixa resolução); pedir o arquivo original                                                                         |
| Módulo Tecnologia VSD                      | confirmado | texto do slide do cliente, dentro da seção de linhas. "+42%" fora: claim proibido até haver comprovação                                          |
| Título dos diferenciais                    | confirmado | "Compressores de parafuso de alta tecnologia com o melhor custo-benefício do mercado." — pedido do cliente; superlativo sem comprovação, validar |
| Hero                                       | confirmado | subtítulo do cliente; ponto "Projeto próprio" trocado por "3 anos de garantia" (condicionante segue nos diferenciais)                            |
| WhatsApp                                   | confirmado | botões removidos; espaço vazio `data-whatsapp-slot` na cotação para o plugin                                                                     |
| 6 dados do dimensionamento                 | inferido   | confirmar com o comercial                                                                                                                        |
| Faixa de potência do VSD                   | ausente    | card mostra só "Velocidade variável · Eficiência energética · Ajuste à demanda de ar"                                                            |
| Domínio final e política de privacidade    | pendência  |                                                                                                                                                  |
| Banner e logo                              | herdado    | da LP Locação; banner com compressor COAIR serve a esta LP                                                                                       |

## Aprovação

- [ ] Composição e conteúdo aprovados pelo usuário em: —
- [x] Padrão B2 versão: `2.7.1`
