local g = vim.g
vim.o.termguicolors = true

g.nvim_tree_show_icons = {
    git = 1,
    folders = 1,
    files = 1
}

g.nvim_tree_icons = {
    default = " ",
    symlink = " ",
    git = {
        unstaged = "✗",
        staged = "✓",
        unmerged = "",
        renamed = "➜",
        untracked = "★"
    },
    folder = {
        default = "",
        open = "",
        symlink = ""
    }
}

require'nvim-tree'.setup {
    disable_netrw = true,
    hijack_netrw = true,
    open_on_setup = false,
    ignore_ft_on_setup = {'dashboard'},
    auto_close = true,
    open_on_tab = false,
    hijack_cursor = true,
    update_cwd = true,
    update_focused_file = {enable = true, update_cwd = true, ignore_list = {}},
    system_open = {
        -- the command to run this, leaving nil should work in most cases
        cmd = nil,
        -- the command arguments as a list
        args = {}
    },

    view = {width = 25, side = 'left', auto_resize = true, mappings = {custom_only = false, list = {}}}
}


