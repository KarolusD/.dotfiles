export TERM="xterm-kitty"

### STARSHIP - Shell ###
eval "$(starship init zsh)"
export STARSHIP_CONFIG=~/.config/starship/starship.toml

### VIM mode in shell ###
set -o vi

### EXA - better ls ###
if [ "$(command -v exa)" ]; then
    unalias -m 'll'
    unalias -m 'l'
    unalias -m 'la'
    unalias -m 'ls'
    alias ls='exa -G  --color auto --icons -a -s type'
    alias ll='exa -l --color always --icons -a -s type'
fi

### ZOXIDE - better cd ###
eval "$(zoxide init zsh)"

### FZF - autocompletion fuzzy finding ###
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

### ZSH-AUTOSUGESTION ###
### brew install zsh-autosugestion
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

### NVM - node version manager ###
export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

alias luamake=/Users/karolus/.config/nvim/ls/lua-language-server/3rd/luamake/luamake
alias listwifi='/System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Resources/airport scan'
alias connwifi='networksetup -setairportnetwork en0 $1 $2'
alias nvimconf='nvim ~/.config/nvim'
