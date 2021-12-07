--- startup and add configure plugins
return require('packer').startup(
  function(use)
    -- Packer can manage itself
    use 'wbthomason/packer.nvim'

    -- basic
    use '907th/vim-auto-save'  
    use 'tpope/vim-repeat'

    -- LSP && auto-completion:
    use 'sheerun/vim-polyglot'            
    use 'kabouzeid/nvim-lspinstall'
    use { 'nvim-treesitter/nvim-treesitter', branch = '0.5-compat', run = ':TSUpdate' }
    use 'neovim/nvim-lspconfig'           
    use {
      "ray-x/lsp_signature.nvim",
    }
    use 'nvim-lua/completion-nvim'
    use 'onsails/lspkind-nvim'            
    use 'windwp/nvim-autopairs'           

    -- theme and icons
    use 'folke/tokyonight.nvim' 
    use 'kyazdani42/nvim-web-devicons'
    use 'norcalli/nvim-colorizer.lua'
    
    -- snippet support
    use 'hrsh7th/vim-vsnip'
    use 'rafamadriz/friendly-snippets'
    
    -- file managing, window switching, popups
    use 'kyazdani42/nvim-tree.lua'
    use 'christoomey/vim-tmux-navigator'
    use 'nvim-telescope/telescope.nvim'
    use 'nvim-telescope/telescope-media-files.nvim'
    use 'nvim-lua/popup.nvim'
    use 'ggandor/lightspeed.nvim'

    -- tasks & project management
    use 'plasticboy/vim-markdown'
    use 'vimwiki/vimwiki'

    -- git
    use 'lewis6991/gitsigns.nvim'
    use 'tpope/vim-fugitive'

    -- making vim closer to IDE 
    use 'sbdchd/neoformat'
    use 'alvan/vim-closetag'
    use 'nvim-lua/plenary.nvim'
    use 'tpope/vim-commentary'
    use {'hoob3rt/lualine.nvim', requires = {'kyazdani42/nvim-web-devicons', opt = true}}    
    use 'karb94/neoscroll.nvim'
    use 'mhinz/vim-startify'
    use {
      'romgrk/barbar.nvim',
      requires = {'kyazdani42/nvim-web-devicons'}
    }

    -- JS related plugins
    use 'pangloss/vim-javascript'
    use 'leafgarland/typescript-vim'
    use 'peitalin/vim-jsx-typescript'
    use 'styled-components/vim-styled-components'
    use 'jparise/vim-graphql'
    use 'tpope/vim-surround'
  end
)


