--highlight EndOfBuffer ctermfg=black ctermbg=black- helpful commands
-- :h lua-vie-options
-- :h option-name
local vim = vim
local o = vim.o
local bo = vim.bo
local wo = vim.wo

o.cursorline = true
o.termguicolors = true
o.syntax = 'on'
o.errorbells = false
o.smartcase = true
o.mouse = 'a'
o.showmode = false
o.clipboard = "unnamedplus"
o.backup = false
o.undodir = vim.fn.stdpath('config') .. '/undodir'
o.undofile = true
o.incsearch = true
o.hidden = true
o.completeopt = 'noinsert,noselect,menuone'
o.tabstop = 2
o.softtabstop = 2
o.shiftwidth = 2
o.expandtab = true
bo.autoindent = true
bo.smartindent = true
bo.swapfile = false
wo.number = true
wo.relativenumber = true
wo.signcolumn = 'yes'
wo.wrap = false
wo.number = true

-- Load the colorscheme
-- vim.g.ayucolor = "dark"

vim.cmd('set fillchars=eob:\\ ')
vim.cmd(':hi Cursor guifg=black')
-- Example config in Lua
vim.g.tokyonight_style = "night"
-- vim.g.tokyonight_italic_functions = false
-- vim.g.tokyonight_sidebars = { "qf", "vista_kind", "terminal", "packer" }

-- Change the "hint" color to the "orange" color, and make the "error" color bright red
vim.g.tokyonight_colors = { hint = "orange", error = "#ff0000" }

-- Load the colorscheme
vim.cmd[[colorscheme tokyonight]]


vim.g.dashboard_default_executive = "telescope"

