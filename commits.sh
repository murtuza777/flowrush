#!/usr/bin/env bash
set -euo pipefail

# Ensure we are in the repo root (this script is intended to be placed at repo root)
cd "$(dirname "$0")"

files=(
  "flowrush_landing_page/index.html"
  "flowrush_landing_page/package.json"
  "flowrush_landing_page/package-lock.json"
  "flowrush_landing_page/README.md"
  "flowrush_landing_page/vite.config.ts"
  "flowrush_landing_page/tailwind.config.cjs"
  "flowrush_landing_page/postcss.config.cjs"
  "flowrush_landing_page/tsconfig.json"
  "flowrush_landing_page/tsconfig.app.json"
  "flowrush_landing_page/tsconfig.node.json"
  "flowrush_landing_page/eslint.config.js"
  "flowrush_landing_page/FIGMA_MIGRATION_GUIDE.md"
  "flowrush_landing_page/WORDPRESS_INTEGRATION_PLAN.md"
  "flowrush_landing_page/src/main.tsx"
  "flowrush_landing_page/src/index.css"
  "flowrush_landing_page/src/App.css"
  "flowrush_landing_page/src/App.tsx"
  "flowrush_landing_page/src/vite-env.d.ts"
  "flowrush_landing_page/src/assets/index.ts"
  "flowrush_landing_page/src/components/ContactForm.tsx"
  "flowrush_landing_page/src/components/FAQ.tsx"
  "flowrush_landing_page/src/components/Footer.tsx"
  "flowrush_landing_page/src/components/HeaderFigma.tsx"
  "flowrush_landing_page/src/components/HeroFigma.tsx"
  "flowrush_landing_page/src/components/Marquee.tsx"
  "flowrush_landing_page/src/components/Modal.tsx"
  "flowrush_landing_page/src/components/PartnerExcellence.tsx"
  "flowrush_landing_page/src/components/ProcessSteps.tsx"
  "flowrush_landing_page/src/components/StatsSectionFigma.tsx"
  "flowrush_landing_page/src/components/Tools.tsx"
)

for f in "${files[@]}"; do
  if [[ -f "$f" ]]; then
    git add "$f"
    msg="add ${f##*/}"
    git commit -m "$msg"
    echo "Committed: $f"
  else
    echo "Skipping missing file: $f" 1>&2
    exit 1
  fi
done

echo "Done. Created ${#files[@]} commits."


