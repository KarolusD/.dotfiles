# save this as check_nvim_mode.sh
#!/bin/bash
nvim --headless --noplugin -c "echo mode()" -c "qa!"
