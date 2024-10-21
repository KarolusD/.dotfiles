return {
	"nvim-lualine/lualine.nvim",
	dependencies = { "nvim-tree/nvim-web-devicons" },
	opts = {
		disabled_filetypes = { "packer", "NvimTree" },
	},
	config = function()
		local lualine = require("lualine")
		local lazy_status = require("lazy.status") -- to configure lazy pending updates count

		local colors = {
			blue = "#61afef",
			cyan = "#56b6c2",
			black = "#1a1b26",
			white = "#a9b1d6",
			red = "#e88388",
			violet = "#bb9af7",
			grey = "#2a2e3e",
		}

		local bubbles_theme = {
			normal = {
				a = {
					fg = colors.black,
					bg = colors.violet,
				},
				b = {
					fg = colors.white,
					bg = colors.grey,
				},
				c = {
					fg = colors.white,
				},
			},

			insert = {
				a = {
					fg = colors.black,
					bg = colors.blue,
				},
			},
			visual = {
				a = {
					fg = colors.black,
					bg = colors.cyan,
				},
			},
			replace = {
				a = {
					fg = colors.black,
					bg = colors.red,
				},
			},

			inactive = {
				a = {
					fg = colors.white,
					bg = colors.black,
				},
				b = {
					fg = colors.white,
					bg = colors.black,
				},
				c = {
					fg = colors.white,
				},
			},
		}

		-- configure lualine with modified theme
		lualine.setup({
			options = {
				theme = bubbles_theme,
				component_separators = "",
				section_separators = {
					left = "",
					right = "",
				},
			},
			sections = {
				lualine_a = {
					{
						"mode",
					},
				},
				lualine_b = { "branch", "filename" },
				lualine_c = {
					"diagnostics",
					lazy_status,--[[ add your center compoentnts here in place of this comment ]]
				},
				lualine_x = {},
				lualine_y = { "filetype", "progress" },
				lualine_z = {
					{
						"location",
					},
				},
			},
			inactive_sections = {
				lualine_a = { "filename" },
				lualine_b = {},
				lualine_c = {},
				lualine_x = {},
				lualine_y = {},
				lualine_z = { "location" },
			},
			tabline = {},
			extensions = {},
		})
	end,
}
