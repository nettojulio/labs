validarcpf("12345678901")

//Digite o CPF entre as aspas

function validarcpf(cpf) {

    let sequenciacpf = []
    let multcpf = []
    let n = 10
    let multcpf2 = []
    let m = 11

    for (let lista = 0; lista < cpf.length; lista++) {
        sequenciacpf.push(cpf[lista])
        multcpf.push(sequenciacpf[lista] * (n - lista))
        multcpf2.push(sequenciacpf[lista] * (m - lista))
        //console.log(cpf[lista])
    }

    let dv1 = (multcpf[0] + multcpf[1] + multcpf[2] + multcpf[3] + multcpf[4] + multcpf[5] + multcpf[6] + multcpf[7] + multcpf[8])

    let dv2 = (multcpf2[0] + multcpf2[1] + multcpf2[2] + multcpf2[3] + multcpf2[4] + multcpf2[5] + multcpf2[6] + multcpf2[7] + multcpf2[8] + multcpf2[9])

    let validate_dv1 = (11 - (dv1 % 11))
    let validate_dv2 = (11 - (dv2 % 11))

    if (validate_dv1 > 9) {
        validate_dv1 = 0
    }

    if (validate_dv2 > 9) {
        validate_dv2 = 0
    }

    if (validate_dv1 == sequenciacpf[9] && validate_dv2 == sequenciacpf[10]) {
        console.log(`CPF ${cpf} validado!`)
    } else {
        console.log(`CPF ${cpf} incorreto ou inexistente. Verifique novamente!`)
    }

}