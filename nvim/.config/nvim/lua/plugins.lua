--- startup and add configure plugins
return require('packer').startup(
  function(use)
    -- Packer can manage itself
    use 'wbthomason/packer.nvim'

    -- basic
    use '907th/vim-auto-save'  
    use 'tpope/vim-repeat'

    -- LSP
    use 'neovim/nvim-lspconfig'           
    use 'williamboman/nvim-lsp-installer'
    use 'onsails/lspkind-nvim'            
    use 'ray-x/lsp_signature.nvim'
    use { 'nvim-treesitter/nvim-treesitter', run = ':TSUpdate' }

    -- theme and icons
    use 'folke/tokyonight.nvim' 
    use 'kyazdani42/nvim-web-devicons'
    use 'norcalli/nvim-colorizer.lua'
    
    -- snippet support
    use 'rafamadriz/friendly-snippets'
    use 'L3MON4D3/LuaSnip'
    use 'saadparwaiz1/cmp_luasnip'
    use 'hrsh7th/cmp-nvim-lsp'
    use 'hrsh7th/nvim-cmp'
    use 'windwp/nvim-autopairs'           
    use {'tzachar/cmp-tabnine', run='./install.sh', requires = 'hrsh7th/nvim-cmp'}   
    
    -- file managing, window switching, popups
    use 'kyazdani42/nvim-tree.lua'
    use 'christoomey/vim-tmux-navigator'
    use {
      'nvim-telescope/telescope.nvim',
      requires = {
        'nvim-lua/plenary.nvim',
      },
    }
    use 'nvim-lua/popup.nvim'
    use 'ggandor/lightspeed.nvim'

    -- tasks & project management
    use 'plasticboy/vim-markdown'
    use 'vimwiki/vimwiki'

    -- git
    use 'lewis6991/gitsigns.nvim'
    use 'tpope/vim-fugitive'

    -- making vim closer to IDE 
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
    use 'peitalin/vim-jsx-typescript'
    use 'HerringtonDarkholme/yats.vim'
    use 'maxmellon/vim-jsx-pretty'
    use 'styled-components/vim-styled-components'
    use 'jparise/vim-graphql'
    use 'tpope/vim-surround'
  end
)


