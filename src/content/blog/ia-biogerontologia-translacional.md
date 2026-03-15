---
title: "Inteligência Artificial na Biogerontologia Translacional: Descoberta Farmacológica e Reprogramação Epigenética"
description: "Revisão sobre AlphaFold, GNNs para triagem senolítica, reprogramação OSK, relógios epigenéticos e multi-ômica preditiva aplicados à extensão do healthspan."
date: 2026-03-04
tags: ["inteligência artificial", "reprogramação epigenética", "AlphaFold", "multi-ômica", "biogerontologia"]
lang: pt
draft: false
---


## RESUMO

Sistemas avançados de Inteligência Artificial (IA) ocupam posição central na biogerontologia computacional contemporânea. O presente artigo de revisão examina as plataformas computacionais aplicadas à modulação do envelhecimento biológico: a arquitetura *Evoformer* empregada na predição estrutural de proteínas (AlphaFold 2 e 3), os modelos de Redes Neurais em Grafos (*Graph Neural Networks* — GNNs) voltados à triagem de centenas de milhares de compostos com atividade senolítica, os grandes modelos de linguagem aplicados à genômica e transcriptômica, a reprogramação celular de fatores OSK e o desenvolvimento de relógios epigenéticos com base em redes neurais profundas. O trabalho propõe que a integração algorítmica de dados multi-ômicos do envelhecimento supera as restrições analíticas dos métodos empíricos tradicionais e potencializa a descoberta de intervenções geroprotetoras. A avaliação baseia-se em três métricas transversais: o avanço na validação pré-clínica translacional dos alvos terapêuticos derivados de IA, a eficácia do reposicionamento farmacológico e a comparação do tempo de escalonamento dessas abordagens em face da triagem empírica convencional. Conclui-se que as ferramentas analíticas avançaram na identificação de alvos computacionais, reposicionando o principal desafio para a validação clínica dessas estratégias de rejuvenescimento celular.

**Palavras-chave:** Inteligência artificial; Reprogramação epigenética; AlphaFold; Redes neurais em grafos; Multi-ômica preditiva.

---

## ABSTRACT

Artificial Intelligence (AI) has become a central infrastructure of translational biogerontology. This review and perspective article analyzes the computational tools enabling interventions against aging: partial epigenetic reprogramming via OSK factors, predictive protein structure models (AlphaFold 2 and 3), Graph Neural Networks (GNNs) for senolytic discovery, genomic language models (ESM-2, ESM3, DNABERT), and epigenetic clocks computed by machine learning. The central proposition holds that the algorithmic integration of multi-omics data — genomic, epigenomic, proteomic, and metabolomic — offers substantial advantages in scale, speed, and resolution over purely empirical approaches for extending human healthspan. This proposition is assessed through three criteria: (i) the demonstrated predictive capacity of AI models in drug discovery; (ii) pre-clinical results of AI-guided geroprotective interventions; and (iii) comparison with the success rate of conventional empirical screening. It concludes that, although AI has significantly accelerated stages of the pharmaceutical pipeline, clinical validation in humans remains incipient and uncertain.

**Keywords:** Artificial intelligence; Epigenetic reprogramming; AlphaFold; Graph neural networks; Predictive multi-omics.

---

## 1 INTRODUÇÃO

Os mecanismos moleculares do envelhecimento — instabilidade genômica, senescência celular, desregulação metabólica e perda de proteostase — são hoje quantificáveis e mapeáveis (LÓPEZ-OTÍN *et al.*, 2023). Entretanto, a capacidade de intervir nesses mecanismos permaneceu restringida pela capacidade analítica humana. O sequenciamento completo de uma única amostra gera terabytes de dados; as interações simultâneas entre milhares de proteínas e modificações epigenéticas excedem a modelagem por métodos tradicionais.

A incorporação da Inteligência Artificial logrou transpor essa barreira metodológica. O AlphaFold 2 avançou decisivamente na predição estrutural estática de proteínas, alcançando precisão em nível atômico (JUMPER *et al.*, 2021). A aplicação de GNNs viabilizou a triagem estrutural de mais de 800.000 compostos em busca de novos agentes senolíticos (WONG *et al.*, 2023). Paralelamente, modelos generativos passaram a esquematizar candidatos farmacológicos *de novo* (ZHAVORONKOV *et al.*, 2019), ao passo que o relógio de Horvath (2013) alcançou erro mediano absoluto de 3,6 anos na estimativa da idade de metilação do DNA. A sinergia entre esses arcabouços algorítmicos e a biologia molecular translacional consolida, portanto, o vetor primordial da atual pesquisa em gerontologia biomédica.

O presente artigo tem por **objetivo geral** investigar como a IA pode acelerar a descoberta farmacológica e a reprogramação epigenética voltadas à extensão do *healthspan* humano. Seus **objetivos específicos** incluem: (i) revisar as arquiteturas de IA aplicáveis à modelagem de proteínas, DNA e descoberta farmacológica; (ii) analisar a reprogramação epigenética parcial como caso de aplicação dessas ferramentas e seus desafios de segurança; (iii) avaliar o estado diagnóstico preditivo por relógios epigenéticos e multi-ômica; e (iv) discutir as limitações, o contexto brasileiro e o horizonte translacional dessas abordagens.

A **proposição central** — formulada como hipótese de trabalho ainda não testada de forma conclusiva — sustenta que a integração algorítmica de dados multi-ômicos do envelhecimento oferece vantagens substanciais em relação a abordagens exclusivamente empíricas para a extensão do *healthspan*. Esta proposição seria **refutada** caso se demonstrasse que: (a) a taxa de sucesso translacional de candidatos identificados por IA não superasse significativamente a da triagem empírica convencional em ensaios clínicos de Fase III, controlando-se para o mesmo período de desenvolvimento; ou (b) os relógios epigenéticos computados falhassem em predizer desfechos clínicos funcionais (mortalidade, incidência de multimorbidade) em coortes longitudinais independentes com seguimento superior a dez anos. Ressalva-se que ambos os critérios não podem ser avaliados no presente momento, de modo que a proposição permanece não testada.

---

## 2 METODOLOGIA

Trata-se de revisão narrativa com componente de perspectiva. A opção pela revisão narrativa — em vez de revisão sistemática com protocolo PRISMA — justifica-se pela heterogeneidade temática do campo coberto, que integra subáreas com vocabulários, delineamentos e métricas de avaliação distintos (inteligência artificial, biologia molecular, epigenética, farmacologia computacional), inviabilizando a definição de critérios de elegibilidade uniformes.

**Estratégia de busca.** Busca bibliográfica nas bases PubMed/MEDLINE, Scopus, Web of Science e Google Scholar. Termos de busca: *AlphaFold*, *graph neural networks*, *drug discovery*, *epigenetic reprogramming*, *Yamanaka factors*, *epigenetic clock*, *multi-omics*, *digital twin*, *artificial intelligence*, *aging*, *longevity*. Os termos foram combinados com operadores booleanos (AND/OR) conforme a base consultada.

**Período.** A busca concentrou-se no período 2013–2026, correspondente ao marco dos relógios epigenéticos de primeira geração (HORVATH, 2013) até as ferramentas de IA mais recentes. Referências anteriores a 2013 (NOTADAMENTE WADDINGTON, 1957; TAKAHASHI; YAMANAKA, 2006) foram incluídas como marcos históricos essenciais à contextualização do campo.

**Critérios de inclusão:** artigos originais, revisões e *preprints* em inglês ou português que reportassem: (a) desenvolvimento ou aplicação de ferramentas de IA para descoberta farmacológica no envelhecimento; (b) reprogramação epigenética parcial ou completa com validação experimental; (c) relógios epigenéticos ou plataformas multi-ômicas preditivas de idade biológica. **Critérios de exclusão:** estudos sem validação experimental ou computacional demonstrada; editoriais e cartas sem dados primários; publicações duplicadas.

**Seleção.** A seleção foi realizada pelo autor em etapa única, sem dupla checagem independente — limitação reconhecida. Foram triados aproximadamente 120 artigos por título e resumo, dos quais 24 compõem o corpo de referências do presente trabalho, selecionados por relevância, impacto (fator de impacto do periódico, número de citações) e pertinência direta aos objetivos da revisão. Fontes corporativas (comunicados e *websites* institucionais) foram incluídas quando constituíam a única fonte para dados translacionais recentes, sendo explicitamente identificadas como tal no corpo do texto.

**Declaração de uso de IA:** Ferramentas de inteligência artificial generativa (Claude, Anthropic; Gemini, Google DeepMind) foram utilizadas como auxiliares na organização estrutural e revisão linguística. Todo o conteúdo científico foi verificado contra as fontes primárias.

---

## 3 INTELIGÊNCIA ARTIFICIAL NA MODELAGEM DE PROTEÍNAS E DNA

### 3.1 AlphaFold 2 e 3

O AlphaFold 2 representou um avanço decisivo no problema da predição do enovelamento proteico por meio da sua arquitetura neural *Evoformer*, baseada em mecanismos de atenção, alcançando elevada precisão equiparável à cristalografia de raios-X e ressonância magnética nuclear (JUMPER *et al.*, 2021). Apesar do avanço em resolver estruturas estáticas, as interações complexas intermoleculares permaneciam limitadas. A introdução do AlphaFold 3, que emprega modelos de difusão (ABRAMSON *et al.*, 2024), expandiu as capacidades preditivas, permitindo a modelagem de interações heterogêneas incluindo complexos RNA-Proteína, interações com ligantes moleculares e glicanos. Essa nova versão ampliou de forma relevante a modelagem da viabilidade farmacológica na descoberta de compostos. Permanece, contudo, o desafio da caracterização das regiões compostas por proteínas intrinsecamente desordenadas (IDPs), que estão intensamente ligadas à progressão das proteinopatias fibrilares no envelhecimento celular (ALBERTI; HYMAN, 2021). A integração incipiente de IA com simulações de dinâmica molecular clássica (AI-MD) tem sido prospectada como uma solução para mapear as transições conformacionais dessas regiões em microescalas temporais.

### 3.2 Modelos de Linguagem para Genômica e Proteômica

O modelo ESM-2 (Meta AI), treinado em 250 milhões de sequências proteicas, gera representações distribuídas que englobam propriedades estruturais e funcionais. O modelo ESM3 possibilita a geração de proteínas *de novo* a partir de funções pré-especificadas (HAYES *et al.*, 2024 — ***preprint***). Na genômica, o DNABERT (JI *et al.*, 2021) aplica o paradigma de *transformers* à sequência de DNA, permitindo a predição de elementos regulatórios e variantes funcionais; o Enformer (AVSEC *et al.*, 2021) avança ao predizer a expressão gênica a partir da sequência genômica com elevada resolução. Modelos de grande linguagem (*Large Language Models*, LLMs) aplicados à biomedicina podem abstrair hipóteses ao interconectar dados dispersos da literatura (THIRUNAVUKARASU *et al.*, 2023). Cabe destacar, entretanto, que esses sistemas apresentam ocorrência de "alucinações" — a geração de informações com sintaxe plausível, mas sem lastro factual — exigindo, portanto, validação cruzada independente por via experimental de bancada.

### 3.3 GNNs na Descoberta de Senolíticos

As metodologias de triagem assistida por GNNs (*Graph Neural Networks*) processam representações químicas matriciais do arranjo atômico e topológico das moléculas. Essa abordagem foi adotada por Wong *et al.* (2023), que realizaram uma triagem virtual em uma biblioteca contendo mais de 800.000 compostos, identificando novos candidatos a senolíticos estruturalmente distintos das classes disponíveis, com vias de sinalização otimizadas em virtude de uma menor toxicidade *off-target*. A triagem guiada por IA aprimora abordagens empíricas semelhantes ao reposicionamento de antibióticos por métodos computacionais profundos descritos por Stokes *et al.* (2020). O uso de inteligência artificial generativa em *loops* de aprendizado ativo (*Active Learning*) permite formular interativamente otimizações estruturais a partir dos dados do espaço latente computacional, integrando métricas de toxicidade pregressa (por exemplo, parâmetros preditivos de dano hepático no modelo murino), viabilizando maior rapidez na descoberta de fármacos frente à triagem de alto rendimento tradicional (*High-Throughput Screening*, HTS).

### 3.4 CRISPR Guiado por IA

Modelos de *deep learning* predizem eficiência e *off-targets* de RNAs-guia (gRNAs) para o sistema CRISPR-Cas9. O DeepCRISPR (CHUAI *et al.*, 2018) foi uma das primeiras ferramentas a aplicar redes neurais profundas para otimizar o desenho de gRNAs, predizendo simultaneamente a eficiência de clivagem on-target e a probabilidade de efeitos off-target. Avanços subsequentes incluem modelos baseados em *transformers* que incorporam contexto epigenômico (acessibilidade da cromatina, estado de metilação) na predição, aprimorando a acurácia em relação a modelos que utilizam apenas a sequência de DNA (KIM *et al.*, 2019). *Base editing* e *prime editing*, assistidos por IA, oferecem menor risco de mutagênese em relação à clivagem de dupla-fita convencional. No campo da biogerontologia, a combinação CRISPR + IA pode, em princípio, permitir a edição genômica de precisão direcionada a mecanismos do envelhecimento — como a modulação de genes associados à senescência (e.g., *CDKN2A/p16*) ou à manutenção telomérica (e.g., *TERT*) — embora aplicações específicas dessa combinação a alvos do envelhecimento ainda não tenham sido demonstradas experimentalmente em publicações revisadas por pares.

### 3.5 Horizonte: Computação Quântica

A simulação precisa de sistemas moleculares escala exponencialmente com o número de átomos em mecânica quântica clássica. Algoritmos quânticos — como o *Variational Quantum Eigensolver* (VQE) — prometem vantagens na simulação de estados eletrônicos de moléculas complexas, potencialmente acelerando a modelagem farmacológica e o estudo de interações proteína-ligante (CAO *et al.*, 2019). Contudo, computadores quânticos universais com correção de erros suficiente para superar simulações clássicas em problemas biologicamente relevantes ainda não estão disponíveis; as implementações atuais limitam-se a híbridos clássico-quânticos aplicados a moléculas de pequeno porte. A aplicação da computação quântica à modelagem farmacológica na biogerontologia permanece, portanto, em estágio prospectivo, sem resultados translacionais publicados.

As ferramentas de IA descritas nesta seção — da predição estrutural à edição genômica guiada — produzem candidatos e hipóteses que demandam aplicação biológica. A seção seguinte examina a reprogramação epigenética parcial como caso central de aplicação dessas ferramentas computacionais.

---

## 4 REPROGRAMAÇÃO EPIGENÉTICA PARCIAL

### 4.1 A Paisagem de Waddington e os Fatores de Yamanaka

A partir de 1942, Conrad Waddington desenvolveu a metáfora da "paisagem epigenética", consolidada em Waddington (1957). Em 2006, Takahashi e Yamanaka demonstraram que um fibroblasto adulto podia ser revertido ao estado de pluripotência pela expressão de Oct4, Sox2, Klf4 e c-Myc (OSKM), gerando iPSCs (TAKAHASHI; YAMANAKA, 2006). Essa descoberta inscreveu-se em um panorama mais amplo de abordagens de reprogramação nuclear, incluindo transferência nuclear e fusão celular (YAMANAKA; BLAU, 2010). Relógios epigenéticos confirmaram que iPSCs possuem idade epigenética próxima de zero (HORVATH, 2013).

### 4.2 Reprogramação Parcial *In Vivo*: o Protocolo OSK

A reprogramação *completa* resulta na perda da identidade celular. A abordagem parcial — ciclos pulsáteis de OSK (2 dias ligados / 5 desligados) — rejuvenesce epigeneticamente sem desdiferenciar. Ocampo *et al.* (2016) demonstraram extensão significativa da sobrevida em camundongos portadores de síndrome progeroide de Hutchinson-Gilford (mutação no gene *LMNA*, que resulta na produção de progerina, uma forma truncada da proteína lamina A — modelo de envelhecimento acelerado), indicando reversão de marcadores de envelhecimento acelerado; ressalva-se, contudo, que os resultados foram obtidos em modelo progeroide, não em envelhecimento fisiológico natural, o que limita a extrapolação direta. Lu *et al.* (2020) restauraram a visão em camundongos com glaucoma experimental utilizando AAV-OSK, regenerando axônios ópticos e restaurando padrões epigenéticos juvenis sem indução tumoral.

### 4.3 Risco Tumoral e a Janela Terapêutica

A expressão prolongada de OSKM (superior a 7 dias) produz teratomas letais em modelos murinos. A exclusão de c-Myc (protocolo OSK) reduz significativamente o risco tumoral. A quantificação da "janela terapêutica" — isto é, a extensão do rejuvenescimento possível sem carcinogênese — constitui problema multidimensional adequado à modelagem computacional. Modelos de *machine learning* podem predizer o ponto crítico de desdiferenciação a partir de dados de milhares de experimentos *in vitro*, embora sua validação prospectiva permaneça pendente.

### 4.4 Reprogramação Química e Vetores de Entrega

Guan *et al.* (2022) demonstraram reprogramação *completa* de fibroblastos humanos a iPSCs por um coquetel de pequenas moléculas químicas, sem fatores de transcrição exógenos. Entretanto, protocolos químicos de reprogramação *parcial* — o objetivo clínico relevante para o rejuvenescimento — ainda não foram publicados. Vetores incluem Vírus Adeno-Associados (AAVs, seguros, porém com capacidade de empacotamento limitada a aproximadamente 4,7 kb), Nanopartículas Lipídicas (LNPs) baseadas na plataforma de mRNA utilizada nas vacinas contra SARS-CoV-2, mRNA sintético (expressão transitória ideal para ciclos pulsáteis) e sistemas Tet-On/Tet-Off para controle temporal da expressão gênica. A empresa Turn Biotechnologies reportou rejuvenescimento epigenético *in vitro* via mRNA-OSK (TURN BIOTECHNOLOGIES, 2023); cabe ressalvar que esses resultados não foram submetidos a revisão por pares e são de natureza auto-reportada pela própria empresa.

As abordagens de reprogramação epigenética dependem criticamente de ferramentas computacionais para otimização — desde a predição da estrutura dos fatores de transcrição (Seção 3.1) até a modelagem de janelas terapêuticas seguras (Seção 4.3). A seção seguinte examina os sistemas de diagnóstico preditivo que permitem medir, com precisão crescente, o efeito dessas intervenções sobre a idade biológica.

---

## 5 DIAGNÓSTICO PREDITIVO: RELÓGIOS EPIGENÉTICOS E MULTI-ÔMICA

### 5.1 Evolução dos Relógios Epigenéticos

O relógio de Horvath (2013) — baseado em 353 sítios CpG, com erro mediano absoluto (*median absolute error*) de 3,6 anos — inaugurou a quantificação da idade de metilação do DNA. Cabe ressalvar que relógios epigenéticos não medem o envelhecimento diretamente, mas correlatos de metilação do DNA que co-variam com o envelhecimento — a relação causal entre alterações em sítios CpG e fenótipos funcionais do envelhecimento permanece em investigação. O DNAm PhenoAge (LEVINE *et al.*, 2018) prediz mortalidade. O GrimAge (LU *et al.*, 2019) incorpora substitutos proteômicos e é o mais preditivo de mortalidade entre os relógios disponíveis. O DunedinPACE (BELSKY *et al.*, 2022) mede a *taxa* de envelhecimento. Relógios de célula única (scBS-seq) identificam subpopulações celulares envelhecidas dentro de tecidos aparentemente saudáveis.

### 5.2 Integração Multi-Ômica

Plataformas integram genômica, proteômica (mais de 7.000 proteínas, como na plataforma SOMAscan — Gold *et al.*, 2010), metabolômica e microbiômica em painéis processados por *deep learning*. Modelos de microbioma predizem idade biológica com precisão comparável à dos relógios epigenéticos (GALKIN *et al.*, 2020). O *federated learning* — paradigma de treinamento distribuído que permite a construção de modelos multi-institucionais sem centralização de dados brutos (RIEKE *et al.*, 2020) — constitui abordagem adequada à preservação da privacidade dos dados genômicos.

### 5.3 Telemetria Contínua e Gêmeos Digitais

Dispositivos vestíveis fornecem dados fisiológicos contínuos processados por computação de borda (*edge computing*). Gêmeos Digitais Humanos — modelos computacionais individualizados que integram dados ômicos, de dispositivos vestíveis e de imagem para simular, *in silico*, o efeito de intervenções antes de sua aplicação clínica (CORRAL-ACERO *et al.*, 2020) — representam uma convergência emergente entre IA e medicina personalizada. Os ensaios PEARL e TAME (BARZILAI *et al.*, 2016) incluem relógios epigenéticos como desfechos secundários; sua validação como desfechos substitutos (*surrogate endpoints*) pela FDA aceleraria a aprovação de geroprotectores.

---

## 6 DISCUSSÃO

### 6.1 Síntese Crítica e Avaliação da Proposição Central

A proposição central formulada neste artigo — de que a integração algorítmica de dados multi-ômicos do envelhecimento oferece vantagens substanciais sobre abordagens empíricas para a extensão do *healthspan* — encontra indícios convergentes nos dados revisados. A Tabela 1 sintetiza a comparação entre as abordagens.

**Tabela 1.** Comparação entre triagem empírica (HTS) e triagem guiada por IA na descoberta de fármacos geroprotectores.

| Critério | Triagem Empírica (HTS) | Triagem por IA | Fonte |
|---|---|---|---|
| Escala de triagem | ~10⁴–10⁶ compostos por campanha | >8 × 10⁵ compostos *in silico* em semanas | Wong *et al.*, 2023 |
| Tempo médio até Fase I | 4–6 anos (média da indústria) | ~18 meses (INS018_055)* | Insilico Medicine, 2023 |
| Taxa de sucesso Fase I → aprovação | ~10–13% (média histórica) | Sem dados conclusivos | Vamathevan *et al.*, 2019 |
| Custo estimado por hit-to-lead | US$ 2–5 milhões | Potencialmente reduzido (dados limitados) | Zhavoronkov *et al.*, 2019 |
| Candidatos em Fase III (geroprotecção) | Metformina (TAME) | Nenhum concluído | Barzilai *et al.*, 2016 |

\*Dado auto-reportado pela empresa, sem auditoria externa independente.

Conforme evidenciado na Tabela 1, a IA demonstra recorrentes vantagens em escala e rapidez de triagem. Contudo, a proposição permanece não confirmada em ambos os critérios definidos na Introdução: (a) nenhum geroprotector computacional completou Fase III, impedindo a comparação controlada com a triagem empírica convencional; e (b) a validação de relógios epigenéticos como preditores de desfechos clínicos funcionais em coortes longitudinais independentes com seguimento superior a dez anos está em andamento, sem resultados conclusivos publicados. A designação de relógios epigenéticos como desfechos substitutos pela FDA — se concretizada — poderá acelerar a validação, mas ainda não há decisão regulatória nesse sentido.

A comparação com revisões prévias reforça a especificidade da presente análise. Vamathevan *et al.* (2019) revisaram o papel da IA na descoberta farmacológica ampla, concluindo que os ganhos concentram-se nas fases pré-clínicas; o presente trabalho estende essa observação ao domínio da biogerontologia, campo onde a latência entre descoberta e validação clínica é particularmente longa dada a natureza crônica e multifatorial do envelhecimento.

### 6.2 Limitações das Ferramentas de IA

As ferramentas de IA descritas apresentam limitações substanciais que devem ser explicitadas:

- **Predição Estrutural.** O ecossistema AlphaFold resolve propostas estruturais de maneira estática; conformações desordenadas (IDPs) — as quais fundamentam o cenário neuropatológico intrínseco aos quadros da Tau e Aβ — demandam processamento adicional para serem capturadas de forma fidedigna.
- **Estocasticidade Generativa.** Algoritmos generativos continuam a propor candidatos de sequenciamento quimérico que podem carecer de viabilidade em ensaios práticos e modelos orgânicos *in vivo*.
- **Validação Translacional.** A métrica fundamental de aprovação dessas abstrações em terapias concretas (*taxa de sucesso translacional*) permanece sem confirmação substantiva. O INS018_055 (primeiro candidato elaborado inteiramente por modelagem preditiva) avançou até a Fase II (INSILICO MEDICINE, 2023 — dado auto-reportado pela empresa, sem auditoria externa independente). No domínio antibiótico, a halicina (STOKES *et al.*, 2020) demonstrou a viabilidade da triagem computacional; entretanto, no campo específico da geroprotecção, o número de candidatos computacionais que avançaram a ensaios clínicos confirmados permanece reduzido.
- **Computação Quântica.** A aplicação da computação quântica à modelagem farmacológica permanece em estágio incipiente, sem resultados translacionais publicados no domínio da biogerontologia (CAO *et al.*, 2019).
- **Viés de Base de Treino.** A preponderância de sequências genômicas coligidas de populações de ascendência europeia atua como limitante sobre modelos preditivos que integram algoritmos como relógios biológicos (MARTIN *et al.*, 2019), comprometendo a generalização para populações miscigenadas como a brasileira.
- **Custos.** O custo da multi-ômica integrada excede dezenas de milhares de dólares por paciente, restringindo o acesso a centros de alta renda.
- **Segurança.** A reprogramação epigenética parcial *in vivo* não foi testada em ensaios clínicos humanos concluídos. A janela entre rejuvenescimento epigenético e tumorigênese permanece estreita e não foi definida para tecidos humanos *in vivo*.

### 6.3 Implicações para o Contexto Brasileiro

O Brasil enfrenta uma transição demográfica acelerada: segundo o IBGE (2022), a proporção de idosos (≥60 anos) atingirá 25,5% da população até 2060, exercendo pressão crescente sobre o Sistema Único de Saúde (SUS). Nesse cenário, as ferramentas de IA discutidas neste artigo possuem relevância particular para o país.

Entretanto, barreiras estruturais limitam a aplicabilidade imediata. O Brasil possui capacidade computacional crescente, mas ainda restrita em comparação com centros líderes em IA biomédica (EUA, China, Reino Unido). A participação brasileira em consórcios genômicos populacionais — como o projeto DNA do Brasil e iniciativas vinculadas à Rede Nacional de Genômica (REAGEN) — é relevante, mas as bases de dados nacionais de variantes genômicas permanecem sub-representadas nos modelos de IA treinados predominantemente com dados de populações de ascendência europeia (MARTIN *et al.*, 2019). Essa limitação é particularmente crítica para um país de composição genética altamente miscigenada, onde relógios epigenéticos calibrados em populações europeias podem apresentar viés preditivo.

No âmbito regulatório, a ANVISA ainda não dispõe de marco normativo específico para terapias gênicas baseadas em reprogramação epigenética, embora a Resolução da Diretoria Colegiada (RDC) nº 505/2021 estabeleça diretrizes gerais para produtos de terapia avançada. A aprovação de geroprotectores como classe farmacológica dependeria da aceitação de desfechos substitutos baseados em biomarcadores de envelhecimento — uma questão que permanece aberta também perante a FDA e a EMA.

---

## 7 CONCLUSÃO

A presente revisão e perspectiva demonstrou que a IA transformou a biogerontologia translacional em múltiplas frentes: o AlphaFold resolveu o desafio computacional do enovelamento proteico; GNNs identificaram senolíticos de segunda geração; relógios epigenéticos quantificam o envelhecimento com precisão de poucos anos; e a reprogramação parcial OSK reverteu biomarcadores de idade em modelos animais.

A proposição central encontra indícios convergentes de plausibilidade, conforme sistematizado na Tabela 1: a triagem computacional de Wong *et al.* (2023) avaliou mais de 800.000 compostos em semanas; o INS018_055 alcançou Fase II em 18 meses *versus* 4-6 anos convencionais (dado auto-reportado); e relógios como GrimAge superam marcadores tradicionais na predição de mortalidade. Entretanto, a proposição permanece não confirmada: nenhum geroprotector computacional completou Fase III, e a validação de relógios epigenéticos como preditores de desfechos clínicos funcionais em coortes longitudinais com seguimento superior a dez anos está em curso.

O horizonte para a próxima década (2026–2035) é de convergência acelerada: genômica de custo decrescente, IA de capacidade crescente e biotecnologia de precisão progressiva. Para o Brasil, a construção de bases genômicas populacionais representativas e a formação de recursos humanos em bioinformática constituem pré-requisitos para que o país transite de consumidor a produtor de inovação gerontológica computacional. A resolução dos desafios translacionais — segurança da reprogramação, validação de desfechos substitutos, equidade de acesso — determinará se a promessa computacional se traduz em extensão real do *healthspan* humano.

---

# REFERÊNCIAS

ABRAMSON, J. *et al.* Accurate structure prediction of biomolecular interactions with AlphaFold 3. **Nature**, v. 630, p. 493-500, 2024. DOI: 10.1038/s41586-024-07487-w.

ALBERTI, S.; Hyman, A. A. Biomolecular condensates at the nexus of cellular stress, protein aggregation disease and ageing. **Nature Reviews Molecular Cell Biology**, v. 22, n. 3, p. 196-213, 2021. DOI: 10.1038/s41580-020-00326-6.

AVSEC, Ž. *et al.* Effective gene expression prediction from sequence by integrating long-range interactions. **Nature Methods**, v. 18, n. 10, p. 1196-1203, 2021. DOI: 10.1038/s41592-021-01252-x.

BARZILAI, N. *et al.* Metformin as a tool to target aging. **Cell Metabolism**, v. 23, n. 6, p. 1060-1065, 2016. DOI: 10.1016/j.cmet.2016.05.011.

BELSKY, D. W. *et al.* DunedinPACE, a DNA methylation biomarker of the pace of aging. **eLife**, v. 11, e73420, 2022. DOI: 10.7554/eLife.73420.

CAO, Y. *et al.* Quantum chemistry in the age of quantum computing. **Chemical Reviews**, v. 119, n. 19, p. 10856-10915, 2019. DOI: 10.1021/acs.chemrev.8b00803.

CHUAI, G. *et al.* DeepCRISPR: optimized CRISPR guide RNA design by deep learning. **Genome Biology**, v. 19, n. 1, p. 80, 2018. DOI: 10.1186/s13059-018-1459-4.

CORRAL-ACERO, J. *et al.* The 'Digital Twin' to enable the vision of precision cardiology. **European Heart Journal**, v. 41, n. 48, p. 4556-4564, 2020. DOI: 10.1093/eurheartj/ehaa159.

GALKIN, F. *et al.* Human gut microbiome aging clock based on taxonomic profiling and deep learning. **iScience**, v. 23, n. 6, 101199, 2020. DOI: 10.1016/j.isci.2020.101199.

GOLD, L. *et al.* Aptamer-based multiplexed proteomic technology for biomarker discovery. **PLoS ONE**, v. 5, n. 12, e15004, 2010. DOI: 10.1371/journal.pone.0015004.

GUAN, J. *et al.* Chemical reprogramming of human somatic cells to pluripotent stem cells. **Nature**, v. 605, n. 7909, p. 325-331, 2022. DOI: 10.1038/s41586-022-04593-5.

HAYES, T. *et al.* Simulating 500 million years of evolution with a language model. **bioRxiv** (preprint), 2024. DOI: 10.1101/2024.07.01.600583.

HORVATH, S. DNA methylation age of human tissues and cell types. **Genome Biology**, v. 14, n. 10, R115, 2013. DOI: 10.1186/gb-2013-14-10-r115.

IBGE — Instituto Brasileiro de Geografia e Estatística. **Projeções da população**: Brasil e Unidades da Federação. 2. ed. Rio de Janeiro: IBGE, 2022. Disponível em: https://www.ibge.gov.br/estatisticas/sociais/populacao/9109-projecao-da-populacao.html. Acesso em: 01 mar. 2026.

INSILICO MEDICINE. **Insilico Medicine announces positive interim Phase II results for INS018_055**. Hong Kong, 2023. Disponível em: https://insilico.com. Acesso em: 15 jan. 2026.

JI, Y. *et al.* DNABERT: pre-trained Bidirectional Encoder Representations from Transformers model for DNA-language in genome. **Bioinformatics**, v. 37, n. 15, p. 2112-2120, 2021. DOI: 10.1093/bioinformatics/btab083.

JUMPER, J. *et al.* Highly accurate protein structure prediction with AlphaFold. **Nature**, v. 596, n. 7873, p. 583-589, 2021. DOI: 10.1038/s41586-021-03819-2.

KIM, H. K. *et al.* SpCas9 activity prediction by DeepSpCas9, a deep learning-based model with high generalization performance. **Science Advances**, v. 5, n. 11, eaax9249, 2019. DOI: 10.1126/sciadv.aax9249.

LEVINE, M. E. *et al.* An epigenetic biomarker of aging for lifespan and healthspan. **Aging**, v. 10, n. 4, p. 573-591, 2018. DOI: 10.18632/aging.101414.

LÓPEZ-OTÍN, C. *et al.* Hallmarks of aging: an expanding universe. **Cell**, v. 186, n. 2, p. 243-278, 2023. DOI: 10.1016/j.cell.2022.11.001.

LU, A. T. *et al.* DNA methylation GrimAge strongly predicts lifespan and healthspan. **Aging**, v. 11, n. 2, p. 303-327, 2019. DOI: 10.18632/aging.101684.

LU, Y. *et al.* Reprogramming to recover youthful epigenetic information and restore vision. **Nature**, v. 588, n. 7836, p. 124-129, 2020. DOI: 10.1038/s41586-020-2975-4.

MARTIN, A. R. *et al.* Clinical use of current polygenic risk scores may exacerbate health disparities. **Nature Genetics**, v. 51, n. 4, p. 584-591, 2019. DOI: 10.1038/s41588-019-0379-x.

OCAMPO, A. *et al.* *In vivo* amelioration of age-associated hallmarks by partial reprogramming. **Cell**, v. 167, n. 7, p. 1719-1733.e12, 2016. DOI: 10.1016/j.cell.2016.11.052.

RIEKE, N. *et al.* The future of digital health with federated learning. **npj Digital Medicine**, v. 3, n. 119, 2020. DOI: 10.1038/s41746-020-00323-1.

STOKES, J. M. *et al.* A deep learning approach to antibiotic discovery. **Cell**, v. 180, n. 4, p. 688-702, 2020. DOI: 10.1016/j.cell.2020.01.021.

TAKAHASHI, K.; Yamanaka, S. Induction of pluripotent stem cells from mouse embryonic and adult fibroblast cultures by defined factors. **Cell**, v. 126, n. 4, p. 663-676, 2006. DOI: 10.1016/j.cell.2006.07.024.

THIRUNAVUKARASU, A. J. *et al.* Large language models in medicine. **Nature Medicine**, v. 29, n. 8, p. 1930-1940, 2023. DOI: 10.1038/s41591-023-02448-8.

TURN BIOTECHNOLOGIES. **ERA platform: epigenetic reprogramming of aging**. Mountain View, 2023. Disponível em: https://web.archive.org/web/2024/https://www.turnbiotechnologies.com. Acesso em: 15 mar. 2026. (Nota: website original fora do ar; acesso via Wayback Machine).

VAMATHEVAN, J. *et al.* Applications of machine learning in drug discovery and development. **Nature Reviews Drug Discovery**, v. 18, n. 6, p. 463-477, 2019. DOI: 10.1038/s41573-019-0024-5.

WADDINGTON, C. H. **The strategy of the genes**. Londres: George Allen & Unwin, 1957. Reimpressão: Londres: Routledge, 2014. ISBN: 978-1-138-99813-1.

WONG, F. *et al.* Discovering small-molecule senolytics with deep neural networks. **Nature Aging**, v. 3, p. 734-750, 2023. DOI: 10.1038/s43587-023-00415-z.

YAMANAKA, S.; Blau, H. M. Nuclear reprogramming to a pluripotent state by three approaches. **Nature**, v. 465, n. 7299, p. 704-712, 2010. DOI: 10.1038/nature09229.

ZHAVORONKOV, A. *et al.* Deep learning enables rapid identification of potent DDR1 kinase inhibitors. **Nature Biotechnology**, v. 37, n. 9, p. 1038-1040, 2019. DOI: 10.1038/s41587-019-0224-x.
