-- :h option-name
vim.opt.cursorline = true
vim.opt.termguicolors = true
vim.opt.syntax = 'on'
vim.opt.errorbells = false
vim.opt.smartcase = true
vim.opt.mouse = 'a'
vim.opt.showmode = false
vim.opt.clipboard = "unnamedplus"
vim.opt.backup = false
vim.opt.undodir = vim.fn.stdpath('config') .. '/undodir'
vim.opt.undofile = true
vim.opt.incsearch = true
vim.opt.hidden = true
vim.opt.completeopt = 'noinsert,noselect,menuone'
vim.opt.tabstop = 2
vim.opt.softtabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
vim.opt.autoindent = true
vim.opt.smartindent = true
vim.opt.swapfile = false
vim.opt.number = true
vim.opt.relativenumber = true
vim.opt.signcolumn = 'yes'
vim.opt.wrap = false
vim.opt.number = true

-- vim.cmd('set fillchars=eob:\\ ')
-- vim.cmd(':hi Cursor guifg=black')
vim.g.tokyonight_style = "night"
vim.g.tokyonight_italic_functions = true
vim.g.tokyonight_sidebars = { "qf", "vista_kind", "terminal", "packer" }

-- Load the colorscheme

vim.g.dashboard_default_executive = "telescope"
vim.cmd[[colorscheme tokyonight]]

