fx_version 'bodacious'
game 'gta5'

author 'mr__Kuko'
description 'custom race events'
version 'v0.9dll beta'
dependencies{
    'es_extended'
}

client_scripts{
    'mkr_client.net.dll'
}
server_scripts{
    '@es_extended/locale.lua',
    'mkr_server.net.dll'
}
ui_page 'html/mkr.html'
files{
    'Newtonsoft.Json.dll',
    'Nexd.ESX.Server.dll',
    'Nexd.ESX.Shared.dll',
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