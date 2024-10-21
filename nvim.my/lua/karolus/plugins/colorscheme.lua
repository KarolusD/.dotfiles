return {
	{
		"folke/tokyonight.nvim",
		lazy = false,
		priority = 1000,
		opts = {},
		config = function()
			require("nvim.lua.plugins.tokyo-night").setup({
				on_highlights = function(hl, c)
					local prompt = "#16161E"
					hl.TelescopeNormal = {
						bg = c.bg_dark,
						fg = c.fg_dark,
					}
					hl.TelescopeBorder = {
						bg = c.bg_dark,
						fg = c.bg_dark,
					}
					hl.TelescopePromptNormal = {
						bg = prompt,
					}
					hl.TelescopePromptBorder = {
						bg = prompt,
						fg = prompt,
					}
					hl.TelescopePromptTitle = {
						bg = prompt,
						fg = prompt,
					}
					hl.TelescopePreviewTitle = {
						bg = c.bg_dark,
						fg = c.bg_dark,
					}
					hl.TelescopeResultsTitle = {
						bg = c.bg_dark,
						fg = c.bg_dark,
					}
				end,
			})
			-- load the colorscheme here
			vim.cmd([[colorscheme rose-pine]])
		end,
	},
}
