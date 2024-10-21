local wezterm = require("wezterm")

local keys = require("keys")
local workspace = require("workspace")
local pane_navigation = require("pane_navigation")

-- Initialize the pane navigation
pane_navigation.init()

-- Create a local table for configuration
local config = {
	-- Appearance settings
	color_scheme = "Tokyo Night",
	window_decorations = "RESIZE",
	window_background_opacity = 0.95,
	macos_window_background_blur = 10,
	window_padding = {
		right = 0,
		left = 0,
		top = 0,
		bottom = 0,
	},
	font = wezterm.font_with_fallback({
		{ family = "IBM Plex Mono", weight = 480 },
	}),
	use_cap_height_to_scale_fallback_fonts = true,
	font_size = 16,
	line_height = 1.4,
	use_fancy_tab_bar = false,
	hide_tab_bar_if_only_one_tab = true,
	initial_cols = 120,
	initial_rows = 40,

	-- Utils settings
	automatically_reload_config = true,
	scrollback_lines = 5000,
	send_composed_key_when_left_alt_is_pressed = true,
	send_composed_key_when_right_alt_is_pressed = true,

	-- Keys (to be populated)
	keys = {},
}

-- Merge keys
config.keys = keys.keys or {}
if workspace.keys then
	for _, key in ipairs(workspace.keys) do
		table.insert(config.keys, key)
	end
end

-- Add workspace configurations
for k, v in pairs(workspace) do
	if k ~= "keys" then -- We've already handled keys
		config[k] = v
	end
end

return config
