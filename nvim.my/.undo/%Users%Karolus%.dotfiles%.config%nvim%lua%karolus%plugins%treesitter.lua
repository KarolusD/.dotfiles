Vim�UnDo� *������������c\��	et�G��L��=   "                                  f;u    _�                             ����                                                                                                                                                                                                                                                                                                                                                             f;s     �                   �               5��                    !                      8      5�_�                     "        ����                                                                                                                                                                                                                                                                                                                                                             f;t    �      "   "       $  'nvim-treesitter/nvim-treesitter',     dependencies = {   2    'nvim-treesitter/nvim-treesitter-textobjects',   g    { 'nvim-treesitter/playground', cmd = { 'TSPlaygroundToggle', 'TSHighlightCapturesUnderCursor' } },     },     build = ':TSUpdate',   #  main = 'nvim-treesitter.configs',   
  opts = {       ensure_installed = 'all',        ignore_install = {'phpdoc'},       highlight = {         enable = true,       },       indent = {         enable = true,       },       textobjects = {         select = {           enable = true,           keymaps = {   %          ["if"] = "@function.inner",   %          ["af"] = "@function.outer",   &          ['ia'] = '@parameter.inner',   &          ['aa'] = '@parameter.outer',   
        },           selection_modes = {   $          ['@function.inner'] = 'V',   $          ['@function.outer'] = 'V',   
        },         }       }     }5��                       	       -      �      5��