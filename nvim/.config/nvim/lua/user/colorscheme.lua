vim.g.tokyonight_italic_functions = true
vim.g.tokyonight_transparent	= true
vim.g.tokyonight_transparent_sidebar = true
vim.g.tokyonight_sidebars = { "qf", "vista_kind", "terminal", "packer" }

vim.cmd [[
try
  colorscheme tokyonight
  highlight Normal guibg=none
  highlight NonText guibg=none
catch /^Vim\%((\a\+)\)\=:E185/
  colorscheme default
  set background=dark
endtry
]]
