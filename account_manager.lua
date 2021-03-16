ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterNetEvent('mkr:registry')
AddEventHandler('mkr:registry', function(amount, char, text)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    local base = 0
    amount = tonumber(amount)
    base = xPlayer.getAccount('bank').money
    if amount == nil or amount <= 0 then
        TriggerClientEvent('chatMessage', _source, _U"error_paid")
    else
        if amount > base then
            amount = base
        end
        xPlayer.removeAccountMoney('bank', amount)
        TriggerClientEvent('mkr:showAdvancedNotification', _source, "Race Entry lua", text..amount..'$', char)
        TriggerClientEvent('mkr:enterrace', _source)
    end
end)

RegisterNetEvent('mkr:giveMoney')
AddEventHandler('mkr:giveMoney', function(amount, char, text)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    xPlayer.addAccountMoney('bank', amount)
    TriggerClientEvent('mkr:showAdvancedNotification', _source, "Race Reward lua", text.."~n~MONEY: ~g~"..amount..'$', char)
end)