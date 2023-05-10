return {
  -- add theme
  { "folke/tokyonight.nvim" },

  -- Configure LazyVim to load theme
  {
    "LazyVim/LazyVim",
    opts = {
      "folke/tokyonight.nvim",
      lazy = true,
      opts = { style = "moon" },
    },
  },
}
