#!/bin/bash

# copiar `index.html` para home (onde o github pages irá pegar para servir)
# trocar versão do pacote ao fazer (ler o package.json e utilizar o sed)
yarn build &&
  cp -fv ./dist/index.html ./ &&
  git add . &&
  git commit -m "release at $(date +%Y-%d-%m_%H:%M:%S)" &&
  git push origin master &&
  echo -e "✅ Successfully deployed."
