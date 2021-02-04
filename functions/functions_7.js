// callback funtion

function sayMyname(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

sayMyname(
    () => {
        console.log('Estou em uma callback')
    }
)