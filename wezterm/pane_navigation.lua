local wezterm = require("wezterm")
local act = wezterm.action

local function isViProcess(pane)
	return pane:get_foreground_process_name():find("n?vim") ~= nil
end

local function conditionalActivatePane(window, pane, pane_direction, vim_direction)
	if isViProcess(pane) then
		window:perform_action(act.SendKey({ key = vim_direction, mods = "ALT" }), pane)
	else
		window:perform_action(act.ActivatePaneDirection(pane_direction), pane)
	end
end

local function init()
	wezterm.on("ActivatePaneDirection-right", function(window, pane)
		conditionalActivatePane(window, pane, "Right", "l")
	end)
	wezterm.on("ActivatePaneDirection-left", function(window, pane)
		conditionalActivatePane(window, pane, "Left", "h")
	end)
	wezterm.on("ActivatePaneDirection-up", function(window, pane)
		conditionalActivatePane(window, pane, "Up", "k")
	end)
	wezterm.on("ActivatePaneDirection-down", function(window, pane)
		conditionalActivatePane(window, pane, "Down", "j")
	end)
end

return {
	init = init,
}
