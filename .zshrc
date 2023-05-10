# If you come from bash you might have to change your $PATH.
export PATH=$PATH:~/.local/bin
# Oh My Zsh is an open source, community-driven framework for managing your zsh configuration
export ZSH=$HOME/.oh-my-zsh/

export WEZTERM_CONFIG=$HOME/.config/wezterm/wezterm.lua

# Changing default path for starship shell
export STARSHIP_CONFIG=~/.config/starship/starship.toml
#Theme
ZSH_THEME=""
POWERLEVEL9K_DISABLE_CONFIGURATION_WIZARD=true

# Aliases
alias zshconfig="nvim ~/.zshrc"
alias zshsource="source ~/.zshrc"
alias ohmyzsh="nvim ~/.oh-my-zsh"
alias dev="cd ~/Documents/Dev"
alias design="cd ~/Documents/Design"
alias kata="cd ~/Documents/Dev/Codewars"
alias python="python3"
alias casp="cd ~/Documents/Dev/CASP"
alias gspend="~/Documents/Spendings/gspend.py $1 $2"
alias ds="~/Documents/Dev/Scripts/split_panes.sh $1"
alias v="nvim"
alias rc="curl -H "twojastara: glosujenapis" https://www.rc-picodi.com/whitelistmyipplease"

# Plugins
plugins=(
  git
  macos
  zsh-syntax-highlighting
  zsh-autosuggestions
  zsh-vi-mode
  zoxide
)

# Oh my zsh init
source $ZSH/oh-my-zsh.sh


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# pnpm
export PNPM_HOME="/Users/Karolus/Library/pnpm"
export PATH="$PNPM_HOME:$PATH"

# Startship prompt
eval "$(starship init zsh)"

# bun completions
[ -s "/Users/Karolus/.bun/_bun" ] && source "/Users/Karolus/.bun/_bun"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# postgresql@15
export PATH="/opt/homebrew/opt/postgresql@15/bin:$PATH"

# emacs
export PATH="$HOME/.config/emacs/bin:$PATH"

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/Karolus/miniconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/Karolus/miniconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/Karolus/miniconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/Karolus/miniconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
