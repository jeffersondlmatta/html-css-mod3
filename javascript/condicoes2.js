var idade = 16
console.log(`voce Tem ${idade} anos `)
if ( idade < 16 ){
    console.log('nao vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log(' Voto Obrigatorio ')
}