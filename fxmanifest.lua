fx_version 'bodacious'
game 'gta5'

author 'mr__Kuko'
description 'custom race events'
version 'v0.8noESX'

client_scripts{
    'mkr_client.net.dll'
}
server_scripts{
    'mkr_server.net.dll',
    'account_manager.lua'
}
ui_page 'html/mkr.html'
files{
    'Newtonsoft.Json.dll',
    'html/mkr.html',
    'html/*.js',
    'html/style.css',
    'html/stuff/*.mp3',
    'html/stuff/noise.gif',
    'html/stuff/background.png',
    'html/locales.json',
    'config.json',
    'score.json'
}