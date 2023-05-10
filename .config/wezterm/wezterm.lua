-- Pull in the wezterm API
local wezterm = require("wezterm")

return {
	automatically_reload_config = true,
	color_scheme = "Tokyo Night",
	window_decorations = "RESIZE",
	window_background_opacity = 1,
	window_padding = {
		left = 32,
		right = 32,
		top = 0,
		bottom = 0,
	},
	font = wezterm.font_with_fallback({
		{ family = "JetBrainsMono Nerd Font" },
	}),
	use_cap_height_to_scale_fallback_fonts = true,
	font_size = 16,
	line_height = 1.4,
	scrollback_lines = 5000,
	use_fancy_tab_bar = false,
	hide_tab_bar_if_only_one_tab = true,
	send_composed_key_when_left_alt_is_pressed = true, -- allows to type polish letter with left opt on macos
	send_composed_key_when_right_alt_is_pressed = true,
}
