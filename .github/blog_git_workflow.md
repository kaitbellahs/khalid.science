---
description: Git workflow e padrões para PRs do blog científico khalid.science
---

# Git Workflow — khalid.science (Blog Científico)

## Branch Strategy: GitHub Flow Simplificado

```
main ← produção (deploy automático via Cloudflare Pages)
 └── dev ← integração (staging)
      └── devs/ka ← branch de trabalho do Khalid
```

### Regras
- **Nunca** push direto na `main`
- `main` protegida: merge somente via PR aprovado + CI verde
- `dev` é o staging — PRs do `devs/ka` vão para `dev`
- `dev` → `main` via PR de release (gera tag + DOI via Zenodo)

---

## Convenção de Commits: Conventional Commits v1.0

```
<tipo>(<escopo>): <descrição imperativa>

[corpo opcional]

[rodapé(s) opcional(is)]
```

### Tipos permitidos

| Tipo | Quando usar | Exemplo |
|------|-------------|---------|
| `feat` | Novo conteúdo ou funcionalidade | `feat(artigo): adicionar MS-01 mecanismos do envelhecimento` |
| `fix` | Correção de bug ou erro | `fix(refs): corrigir URLs quebradas Finch e Skloot` |
| `docs` | Documentação e README | `docs: atualizar README com badge CI` |
| `style` | Formatação sem mudança de lógica | `style(artigo): adequar citações ABNT NBR 10520` |
| `refactor` | Reestruturação sem mudar comportamento | `refactor(layout): extrair componente Header` |
| `ci` | Mudanças em CI/CD | `ci: adicionar workflow de auto-release` |
| `chore` | Tarefas auxiliares | `chore: atualizar dependências Astro` |
| `content` | Atualização de conteúdo existente | `content(artigo): revisar seção 4 sobre telômeros` |

### Escopos sugeridos

| Escopo | Diretório |
|--------|-----------|
| `artigo` | `src/content/artigos/` |
| `refs` | Referências bibliográficas |
| `layout` | `src/layouts/` |
| `component` | `src/components/` |
| `page` | `src/pages/` |
| `config` | Configurações Astro/site |
| `seo` | Meta tags, Schema.org, OG |

### Regras de commit
- Descrição em **português**, imperativo: "adicionar", "corrigir", "atualizar"
- Máximo 72 caracteres na primeira linha
- **Nunca** usar `Co-authored-by: Antigravity <antigravity@google.com>`
- Commits atômicos: 1 commit = 1 mudança lógica

---

## Fluxo de PR: devs/ka → dev

### 1. Preparar o commit

```bash
# Verificar o que será commitado
git status
git diff --staged

# Commit com conventional commits
git commit -m "feat(artigo): adicionar artigo IA e biogerontologia"

# Push
git push origin devs/ka
```

### 2. Abrir PR via GitHub CLI

```bash
gh pr create \
  --base dev \
  --head devs/ka \
  --title "feat(artigo): adicionar MS-02 IA e biogerontologia" \
  --body "## Resumo
Adiciona o artigo sobre Inteligência Artificial na Biogerontologia Translacional.

## Checklist
- [ ] Build passa localmente (\`npm run build\`)
- [ ] Citações ABNT verificadas (NBR 10520/6023)
- [ ] Frontmatter completo (title, date, description, tags)
- [ ] Links internos válidos
- [ ] Meta tags SEO presentes

## Tipo de mudança
- [x] Novo conteúdo
- [ ] Correção
- [ ] Refatoração" \
  --reviewer kaitbellahs
```

### 3. Aguardar reviews automáticos

Após abrir o PR, 3 validações acontecem automaticamente:

| Validação | Fonte | Tempo |
|-----------|-------|-------|
| **CI Build** | GitHub Actions (`ci.yml`) | ~2 min |
| **AI Code Review** | CodeRabbit (GitHub App) | ~2-3 min |
| **Link Check** | GitHub Actions (somente PRs → main) | ~1 min |

### 4. Resolver apontamentos

```bash
# Ler comentários do PR
gh pr view {PR_ID} --comments

# Ler status dos checks
gh pr checks {PR_ID}

# Corrigir, commitar e push
git add <arquivos-corrigidos>
git commit -m "fix(refs): resolver apontamentos CodeRabbit"
git push origin devs/ka

# Aguardar ~2 min e verificar novamente
gh pr checks {PR_ID}
gh pr view {PR_ID} --comments
```

> **Loop:** repita até todos os checks passarem e não haver novos comentários.

### 5. Merge

```bash
# Squash merge (agrupa commits em 1 só na branch destino)
gh pr merge {PR_ID} --squash --delete-branch=false
```

---

## Fluxo de Release: dev → main

### Quando fazer release
- Ao acumular mudanças significativas em `dev`
- Antes de fazer o PR: bump a versão no `package.json`

### Passos

```bash
# 1. Atualizar versão (semver)
npm version patch  # ou minor/major

# 2. Push da tag
git push origin devs/ka

# 3. PR de release
gh pr create \
  --base main \
  --head dev \
  --title "release: v$(node -p 'require(\"./package.json\").version')" \
  --body "## Release $(node -p 'require(\"./package.json\").version')

### Mudanças incluídas
$(git log dev...main --oneline --no-merges)

### Checklist de release
- [ ] Versão atualizada no package.json
- [ ] Build passa em todos os checks
- [ ] Conteúdo revisado"
```

### Após merge na main
O workflow `release.yml` automaticamente:
1. Cria tag `v{version}`
2. Cria GitHub Release
3. Zenodo detecta e gera DOI permanente
4. Cloudflare Pages faz deploy automático

---

## Template de PR (`.github/PULL_REQUEST_TEMPLATE.md`)

Crie este arquivo no repo para padronizar PRs:

```markdown
## Resumo
<!-- Descreva brevemente o que este PR faz -->

## Tipo de mudança
- [ ] 📝 Novo conteúdo (artigo, página)
- [ ] 🐛 Correção (bug, link quebrado, erro ABNT)
- [ ] 🎨 Design/UI (componente, layout, CSS)
- [ ] ⚙️ Infraestrutura (CI, config, deps)
- [ ] ♻️ Refatoração

## Checklist
- [ ] Build local passa (`npm run build`)
- [ ] Citações ABNT conformes (NBR 6023 + 10520)
- [ ] Frontmatter YAML completo
- [ ] Links internos testados
- [ ] SEO: title, meta description, OG tags
- [ ] Acessibilidade: alt em imagens, aria-labels

## Screenshots (se UI)
<!-- Cole screenshots aqui se houver mudanças visuais -->
```

---

## Labels sugeridas para o repositório

```bash
gh label create "conteúdo" --color "0075ca" --description "Novo artigo ou atualização de conteúdo"
gh label create "ABNT" --color "e4e669" --description "Correções de normas ABNT"
gh label create "SEO" --color "7057ff" --description "Meta tags, Schema.org, OG"
gh label create "infra" --color "d73a4a" --description "CI/CD, config, dependências"
gh label create "design" --color "a2eeef" --description "UI, layout, componentes"
gh label create "release" --color "0e8a16" --description "PR de release para main"
```

---

## Resumo Visual do Fluxo

```
devs/ka ──commit──push──► PR → dev
                            │
                            ├── CI Build ✅
                            ├── CodeRabbit Review ✅
                            └── Merge (squash)
                                  │
                            dev ──► PR → main (release)
                                      │
                                      ├── CI Build ✅
                                      ├── Link Check ✅
                                      └── Merge
                                            │
                                            ├── Auto-Release (tag + GitHub Release)
                                            ├── Zenodo (DOI)
                                            └── Cloudflare Pages (deploy)
```
