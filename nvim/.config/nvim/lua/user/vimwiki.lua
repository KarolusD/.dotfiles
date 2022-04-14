vim.g.vimwiki_list = {
  {
    path='/Users/Karolus/Library/Mobile Documents/iCloud~md~obsidian/Documents/Notes',
    syntax = 'markdown',
    ext  = '.md',
  }
}

vim.g.vimwiki_ext2syntax = {
  ['.md'] = 'markdown',
  ['.markdown'] = 'markdown',
  ['.mdown'] = 'markdown',
}

vim.g.vimwiki_folding = 'expr'

vim.cmd[[
  autocmd VimEnter * let g:vimwiki_syntaxlocal_vars['markdown']['Link1'] = g:vimwiki_syntaxlocal_vars['default']['Link1']
]]
