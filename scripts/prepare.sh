# setup .githooks
if git rev-parse --git-dir &>/dev/null; then
  git config core.hooksPath .githooks
fi
