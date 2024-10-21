--------------------------------------------------------------------------------
-- Mason: Package manager for LSP servers, DAP servers, linters, formatters
--------------------------------------------------------------------------------

return {
	"williamboman/mason.nvim",
	dependencies = {
		"neovim/nvim-lspconfig",
		"williamboman/mason-lspconfig.nvim",
	},
	lazy = false,
	config = function()
		require("mason").setup({
			ui = {
				height = 0.7,
				border = "rounded",
			},
		})

		require("mason-lspconfig").setup({
			automatic_installation = true,
		})

		---@diagnostic disable-next-line: redundant-parameter
		require("karolus.lspconfig").setup({})
	end,
}
