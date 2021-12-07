vim.g.mapleader = ' ' -- leader as a space

local key_mapper = function(mode, key, result, opt)
  vim.api.nvim_set_keymap(
    mode,
    key,
    result,
    opt or {noremap = true, silent = true}
  )
end

-- greatest remap ever
key_mapper('v', '<Leader>p', '"_dP')

-- even greatest remap
key_mapper('n', '<Leader>d', '"_dd')

-- better escape (insert mode)
key_mapper('i', 'jk', '<ESC>')
key_mapper('i', 'kj', '<ESC>')
key_mapper('i', 'jj', '<ESC>')

-- better window movement (command mode)
key_mapper('n', '<C-h>', '<C-w>h')
key_mapper('n', '<C-j>', '<C-w>j')
key_mapper('n', '<C-k>', '<C-w>k')
key_mapper('n', '<C-l>', '<C-w>l')

-- better indenting
key_mapper('v', '<', '<gv')
key_mapper('v', '>', '>gv')

-- Finding files and buffers
key_mapper("n", "<Leader>ff", [[<Cmd>lua require('telescope.builtin').find_files()<CR>]], opt)
key_mapper(
    "n",
    "<Leader>fp",
    [[<Cmd>lua require('telescope').extensions.media_files.media_files()<CR>]],
    opt
)
key_mapper('n', '<leader>fs', ':Telescope live_grep<CR>')
key_mapper('n', '<leader>fo', ':Telescope file_browser<CR>')
key_mapper('n', '<leader>ff', ':Telescope find_files<CR>')
key_mapper('n', '<leader>fg', ':Telescope git_branches<CR>')
key_mapper('n', '<leader>fb', ':Telescope buffers<CR>')
key_mapper('n', '<leader>fl', ':Telescope lsp_document_symbols<CR>')
key_mapper('n', '<leader>FF', ':Telescope grep_string<CR>')

-- Move selected line / block of text in visual mode
key_mapper('x', 'K', ':move \'<-2<CR>gv-gv')
key_mapper('x', 'J', ':move \'>+1<CR>gv-gv')

-- tabs
key_mapper('n', '<Space>[', ':BufferMovePrevious<CR>')
key_mapper('n', '<Space>]', ':BufferMoveNext<CR>')
key_mapper('n', '<Space>bb', ':BufferOrderByBufferNumber<CR>')
key_mapper('n', '<Space>bd', ':BufferOrderByDirectory<CR>')
key_mapper('n', '<Space>bl', ':BufferOrderByLanguage<CR>')
key_mapper('n', '<S-x>', ':BufferClose<CR>') 
key_mapper('n', 'gt', ':BufferNext<CR>')
key_mapper('n', 'gT', ':BufferPrevious<CR>')
key_mapper('n', '<C-p>', ':BufferPick<CR>')

-- nvim tree shortcuts
key_mapper("n", "<Leader>b", ":NvimTreeToggle<CR>")
key_mapper("n", "<Leader>r", ":NvimTreeRefresh<CR>")
key_mapper("n", "<Leader>n", ":NvimTreeFindFile<CR>")

-- clear selection
key_mapper("n", "<Leader>cs", ":noh<CR>")
