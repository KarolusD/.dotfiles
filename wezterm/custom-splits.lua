local wezterm = require("wezterm")

local function setup_custom_splits(pane)
	-- Create the left and right panes
	local right_pane = pane:split({ direction = "Right", size = 0.333 })
	right_pane:split({ direction = "Bottom" })

	-- Run Neovim in the left pane with the current working directory
	pane:send_text("nvim .\n")

	-- Run `npm run dev` in the right top pane
	right_pane:send_text("npm run dev\n")

	-- Optionally, activate the left pane
	pane:activate()
end

return setup_custom_splits
