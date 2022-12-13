local fn = vim.fn

-- Automatically install packer
local install_path = fn.stdpath("data") .. "/site/pack/packer/start/packer.nvim"
if fn.empty(fn.glob(install_path)) > 0 then
	PACKER_BOOTSTRAP = fn.system({
		"git",
		"clone",
		"--depth",
		"1",
		"https://github.com/wbthomason/packer.nvim",
		install_path,
	})
	print("Installing packer close and reopen Neovim...")
	vim.cmd([[packadd packer.nvim]])
end

-- Autocommand that reloads neovim whenever you save the plugins.lua file
vim.cmd([[
  augroup packer_user_config
    autocmd!
    autocmd BufWritePost plugins.lua source <afile> | PackerSync
  augroup end
]])

-- Use a protected call so we don't error out on first use
local status_ok, packer = pcall(require, "packer")
if not status_ok then
	return
end

-- Have packer use a popup window
packer.init({
	display = {
		open_fn = function()
			return require("packer.util").float({ border = "rounded" })
		end,
	},
})

-- Install your plugins here
return packer.startup(function(use)
	-- My plugins here
	use({ "wbthomason/packer.nvim"}) -- have packer manage itself
	use({ "nvim-lua/plenary.nvim"}) -- sseful lua functions used by lots of plugins
	use({ "windwp/nvim-autopairs"}) -- tutopairs, integrates with both cmp and treesitter

	-- Better comments support
	use({ "numToStr/Comment.nvim"})
	use({ "JoosepAlviste/nvim-ts-context-commentstring"})

	-- UI & Performance
	use({ "kyazdani42/nvim-web-devicons"}) -- icons
	use({
		"kyazdani42/nvim-tree.lua",
		require = "kyazdani42/nvim-web-devicons",
	}) -- file explorer
	use({ "akinsho/bufferline.nvim"}) -- tabs support
	use({ "moll/vim-bbye"}) -- allows you to do delete buffers (close files) without closing your windows or messing up your layout
	use({ "nvim-lualine/lualine.nvim"}) -- status line on the bottom
	use({ "akinsho/toggleterm.nvim"}) -- built-in terminal support
	use({ "karb94/neoscroll.nvim"}) -- nicer scrolling animations
	use({ "lukas-reineke/indent-blankline.nvim"}) -- indenting blanklines automatically
	use({ "goolord/alpha-nvim"}) -- dashboard for nvim startup
	use({ "folke/which-key.nvim"}) -- popup with possible key bindings
	use({ "ahmedkhalf/project.nvim"}) -- fetching all local project
	use({ "lewis6991/impatient.nvim"}) -- speed up loading Lua modules in Neovim to improve startup time.
	use({ "phaazon/hop.nvim", branch = "v2" }) -- better jumping to letter or word
	use({ "windwp/nvim-ts-autotag" })

	-- Colorschemes
	use({ "folke/tokyonight.nvim"})

	-- Bookmakrs
	use({ "MattesGroeger/vim-bookmarks" })

	-- cmp plugins
	use({ "hrsh7th/nvim-cmp"}) -- The completion plugin
	use({ "hrsh7th/cmp-buffer"}) -- buffer completions
	use({ "hrsh7th/cmp-path"}) -- path completions
	use({ "saadparwaiz1/cmp_luasnip"}) -- snippet completions
	use({ "hrsh7th/cmp-nvim-lsp"})
	use({ "hrsh7th/cmp-nvim-lua"})
	use({ "tzachar/cmp-tabnine", run = "./install.sh", requires = "hrsh7th/nvim-cmp" })

	-- snippets
	use({ "L3MON4D3/LuaSnip"}) --snippet engine
	use({ "rafamadriz/friendly-snippets"}) -- a bunch of snippets to use

	-- LSP
	use({ "neovim/nvim-lspconfig"}) -- enable LSP
	use({ "williamboman/nvim-lsp-installer"}) -- simple to use language server installer
	use({ "jose-elias-alvarez/null-ls.nvim"}) -- for formatters and linters
	use({ "RRethy/vim-illuminate"}) -- highlight same word occurence in the file
	use("williamboman/mason.nvim")
	use("williamboman/mason-lspconfig.nvim")
	use("lvimuser/lsp-inlayhints.nvim")

	-- Telescope
	use({ "nvim-telescope/telescope.nvim"})

	-- Treesitter
	use({
		"nvim-treesitter/nvim-treesitter",
		commit = "518e27589c0463af15463c9d675c65e464efc2fe",
	})
	use({ "nvim-treesitter/nvim-treesitter-context"})

	-- Git
	use({ "lewis6991/gitsigns.nvim"})
	use({ "TimUntersberger/neogit", requires = "nvim-lua/plenary.nvim" })

	-- Automatically set up your configuration after cloning packer.nvim
	-- Put this at the end after all plugins
	if PACKER_BOOTSTRAP then
		require("packer").sync()
	end
end)
