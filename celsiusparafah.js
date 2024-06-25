function converterCelsiusParaFahrenheit (celsius) {
    let tempConvertida = celsius * 9
    tempConvertida = tempConvertida / 5
    tempConvertida =  tempConvertida + 32
    console.log('a temperatura',celsius,'ºc convertida para Fahrenheit é:',tempConvertida,'ºf')
    return celsius
}
converterCelsiusParaFahrenheit(30)