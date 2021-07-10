#!/bin/bash

# The idea is to use Webpack to generate a bundle that
# will be imported by the static file index.html, giving
# life to the project on github.io.
# Setup Github Pages to look to /docs

function release::build_bundle() {
  yarn build:prod &&
    cp -fv ./dist/index.html ./ &&
    return 0
}

function release::inject_bundle() {
  echo #!todo
}

function release::git_commit() {
  git add . &&
    git commit -m "release at $(date +%Y-%d-%m_%H:%M:%S)" &&
    git push origin master &&
    echo -e "✅ Successfully deployed."
}

# release process
release::build_bundle &&
  release::git_commit
