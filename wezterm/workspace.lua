local wezterm = require("wezterm")
local act = wezterm.action

wezterm.on("update-right-status", function(window, pane)
	window:set_right_status(window:active_workspace())
end)

return {
	-- Workspace-related key bindings
	keys = {

		-- Switch to the default workspace
		{
			key = "y",
			mods = "CTRL|SHIFT",
			action = act.SwitchToWorkspace({
				name = "default",
			}),
		},

		-- Switch to a monitoring workspace, which will have `top` launched into it
		{
			key = "u",
			mods = "CTRL|SHIFT",
			action = act.SwitchToWorkspace({
				name = "monitoring",
				spawn = {
					args = { "top" },
				},
			}),
		},
		-- Create a new workspace with a random name and switch to it
		{ key = "i", mods = "CTRL|SHIFT", action = act.SwitchToWorkspace },

		-- Show the launcher in fuzzy selection mode and have it list all workspaces
		-- and allow activating one.
		{
			key = "9",
			mods = "ALT",
			action = act.ShowLauncherArgs({
				flags = "FUZZY|WORKSPACES",
			}),
		},

		-- Prompt for a name to use for a new workspace and switch to it.
		{
			key = "W",
			mods = "CTRL|SHIFT",
			action = act.PromptInputLine({
				description = wezterm.format({
					{ Attribute = { Intensity = "Bold" } },
					{ Foreground = { AnsiColor = "Fuchsia" } },
					{ Text = "Enter name for new workspace" },
				}),
				action = wezterm.action_callback(function(window, pane, line)
					-- line will be `nil` if they hit escape without entering anything
					-- An empty string if they just hit enter
					-- Or the actual line of text they wrote
					if line then
						window:perform_action(
							act.SwitchToWorkspace({
								name = line,
							}),
							pane
						)
					end
				end),
			}),
		},
	},

	-- You can add more workspace-specific configurations here
}
