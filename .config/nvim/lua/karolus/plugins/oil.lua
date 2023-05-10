return {{
    'stevearc/oil.nvim',
    keys = {{
        '<Leader>e',
        vim.cmd.Oil,
        desc = "Open files buffer"
    }},
    opts = {
        delete_to_trash = true
    },
    -- Optional dependencies
    dependencies = {"nvim-tree/nvim-web-devicons"}
}}
