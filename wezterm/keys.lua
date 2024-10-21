local wezterm = require("wezterm")
local act = wezterm.action
local setup_custom_splits = require("custom-splits")

return {
	leader = { key = "a", mods = "CTRL", timeout_milliseconds = 1000 },
	keys = {
		-- Workspace related keys
		{ key = "y", mods = "CTRL|SHIFT", action = act.SwitchToWorkspace({ name = "default" }) },
		{
			key = "u",
			mods = "CTRL|SHIFT",
			action = act.SwitchToWorkspace({ name = "monitoring", spawn = { args = { "top" } } }),
		},
		{ key = "i", mods = "CTRL|SHIFT", action = act.SwitchToWorkspace },
		{ key = "9", mods = "ALT", action = act.ShowLauncherArgs({ flags = "FUZZY|WORKSPACES" }) },

		-- Custom splits
		{
			key = "P",
			mods = "CTRL|SHIFT",
			action = wezterm.action_callback(function(window, pane)
				setup_custom_splits(pane)
			end),
		},

		-- Pane navigation
		{ key = "h", mods = "ALT", action = act.EmitEvent("ActivatePaneDirection-left") },
		{ key = "j", mods = "ALT", action = act.EmitEvent("ActivatePaneDirection-down") },
		{ key = "k", mods = "ALT", action = act.EmitEvent("ActivatePaneDirection-up") },
		{ key = "l", mods = "ALT", action = act.EmitEvent("ActivatePaneDirection-right") },

		-- Pane management
		{ key = "\\", mods = "CMD", action = wezterm.action.SplitHorizontal({ domain = "CurrentPaneDomain" }) },
		{ key = "\\", mods = "SHIFT | CMD", action = wezterm.action.SplitVertical({ domain = "CurrentPaneDomain" }) },
		{ key = "w", mods = "CMD", action = wezterm.action.CloseCurrentPane({ confirm = true }) },

		-- Pane resizing
		{ key = "LeftArrow", mods = "CTRL | CMD", action = act.AdjustPaneSize({ "Left", 5 }) },
		{ key = "DownArrow", mods = "CTRL | CMD", action = act.AdjustPaneSize({ "Down", 5 }) },
		{ key = "UpArrow", mods = "CTRL | CMD", action = act.AdjustPaneSize({ "Up", 5 }) },
		{ key = "RightArrow", mods = "CTRL | CMD", action = act.AdjustPaneSize({ "Right", 5 }) },
	},
}
