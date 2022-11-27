const alfa1 = new RegExp("[^\\dEe.+-]","")
const alfa2 = new RegExp("[^0-1]","")
const alfa3 = new RegExp("[^abcd]","")
function AFD_1(){
    document.getElementById("label").style.display = 'none'
    document.getElementById("in1").placeholder = ""
    let str = document.getElementById("in1").value
    let arr = str.split("")
    let sel = document.getElementById("sel").value

    if (validar(str, sel)) {
        if (sel == "1") {
            document.getElementById("in1").placeholder = "Ej: 12.34E-5"
            inci_a(arr, 1)
        }else if (sel == "2"){
            document.getElementById("in1").placeholder = "Ej: 0101010"
            inci_b(arr,1)
        }else if (sel == "3"){
            document.getElementById("in1").placeholder = "Ej: caaadab"
            inci_c(arr,1)
        }else if (sel == "4"){
            document.getElementById("in1").placeholder = "Ej: 11000110"
            document.getElementById("label").style.display = 'inline'
            inci_d(arr,1)
        }
    }else{
        err()
    }
}

function validar(str, val){
    if (val == "1" && alfa1.test(str)) {
        err()
        return false
    }else if (val == "2" && alfa2.test(str)){
        err()
        return false
    }else if (val == "3" && alfa3.test(str)){
        err()
        return false
    }else if (val == "4" && alfa2.test(str)) {
        err()
        return false
    }else{
        document.getElementById("in1").style.borderColor = ""
        document.getElementById("invalido").style.display = 'none'
        return true
    }
}      
function inci_a(arr, estado){
    if (arr.length != 0) {
        if (estado == 1) {
            if (tipo(arr[0]) == "dig") {
                arr.shift()
                inci_a(arr, 3)
            }else
            if (tipo(arr[0]) == "sig") {
                arr.shift()
                inci_a(arr, 2)
            }else{
                arr.shift()
                inci_a(arr, 9)
            }
        }else
        if (estado == 2) {
            if (tipo(arr[0]) == "dig") {
                arr.shift()
                inci_a(arr, 3)
            }else{
                arr.shift()
                inci_a(arr, 9)
            }
        }else
        if (estado == 3) {
            if (tipo(arr[0]) == "dig") {
                arr.shift()
                inci_a(arr, 3)
            }else
            if (arr[0] == ".") {
                arr.shift()
                inci_a(arr, 4)
            }else
            if (arr[0] == "e" || arr[0] == "E") {
                arr.shift()
                inci_a(arr, 5)
            }else{
                arr.shift()
                inci_a(arr, 9)
            }
        }else
        if (estado == 4) {
            if (tipo(arr[0]) == "dig") {
                arr.shift()
                inci_a(arr, 7)
            }else{
                arr.shift()
                inci_a(arr, 9)
            }
        }else 
        if (estado == 5) {
            if (tipo(arr[0]) == "dig") {
                arr.shift()
                inci_a(arr, 8)
            }else
            if (tipo(arr[0]) == "sig") {
                arr.shift()
                inci_a(arr, 6)
            }else{
                arr.shift()
                inci_a(arr, 9)
            }
        }else
        if (estado == 6) {
            if (tipo(arr[0]) == "dig") {
                arr.shift()
                inci_a(arr, 8)
            }else{
                arr.shift()
                inci_a(arr, 9)
            }
        }else
        if (estado == 7) {
            if (tipo(arr[0]) == "dig") {
                arr.shift()
                inci_a(arr, 7)
            }else
            if (arr[0] == "e" || arr[0] == "E") {
                arr.shift()
                inci_a(arr, 5)
            }else{
                arr.shift()
                inci_a(arr, 9)
            }
        }else
        if (estado == 8) {
            if (tipo(arr[0]) == "dig") {
                arr.shift()
                inci_a(arr, 8)
            }else{
                arr.shift()
                inci_a(arr, 9)
            }
        }else{
            arr=[]
            inci_a(arr, 9)
        }
    }else{
        if (estado == 3 || estado == 7 || estado == 8) {
            exito()
        }else{
            err2()
        }
    }
}

function inci_b(arr, estado){
    if (arr.length != 0) {
        if (estado == 1) {
            if (arr[0] == "0") {
                arr.shift()
                inci_b(arr, 2)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_b(arr, 3)
            }
        }else
        if (estado == 2) {
            if (arr[0] == "0") {
                arr.shift()
                inci_b(arr, 1)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_b(arr, 5)
            }
        }else
        if (estado == 3) {
            if (arr[0] == "0") {
                arr.shift()
                inci_b(arr, 2)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_b(arr, 4)
            }
        }else
        if (estado == 4) {
            if (arr[0] == "0") {
                arr.shift()
                inci_b(arr, 4)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_b(arr, 4)
            }
        }else 
        if (estado == 5) {
            if (arr[0] == "0") {
                arr.shift()
                inci_b(arr, 1)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_b(arr, 5)
            }
        }else{
            arr = []
            inci_b(arr, 9)
        }
    }else{
        if (estado == 1 || estado == 3) {
            exito()
        }else{
            err2()
        }
    }
}

function inci_c(arr, estado){
    if (arr.length != 0) {
        if (estado == 1) {
            if (arr[0] == "a") {
                arr.shift()
                inci_c(arr, 2)
            }else
            if (arr[0] == "b") {
                arr.shift()
                inci_c(arr, 3)
            }else
            if (arr[0] == "c") {
                arr.shift()
                inci_c(arr, 4)
            }else
            if (arr[0] == "d") {
                arr.shift()
                inci_c(arr, 5)
            }
        }else
        if (estado == 2) {
            if (arr[0] == "a") {
                arr.shift()
                inci_c(arr, 6)
            }else
            if (arr[0] == "b") {
                arr.shift()
                inci_c(arr, 3)
            }else
            if (arr[0] == "c") {
                arr.shift()
                inci_c(arr, 4)
            }else
            if (arr[0] == "d") {
                arr.shift()
                inci_c(arr, 5)
            }
        }else
        if (estado == 3) {
            if (arr[0] == "a") {
                arr.shift()
                inci_c(arr, 2)
            }else
            if (arr[0] == "b") {
                arr.shift()
                inci_c(arr, 6)
            }else
            if (arr[0] == "c") {
                arr.shift()
                inci_c(arr, 4)
            }else
            if (arr[0] == "d") {
                arr.shift()
                inci_c(arr, 5)
            }
        }else
        if (estado == 4) {
            if (arr[0] == "a") {
                arr.shift()
                inci_c(arr, 2)
            }else
            if (arr[0] == "b") {
                arr.shift()
                inci_c(arr, 3)
            }else
            if (arr[0] == "c") {
                arr.shift()
                inci_c(arr, 6)
            }else
            if (arr[0] == "d") {
                arr.shift()
                inci_c(arr, 5)
            }
        }else 
        if (estado == 5) {
            if (arr[0] == "a") {
                arr.shift()
                inci_c(arr, 2)
            }else
            if (arr[0] == "b") {
                arr.shift()
                inci_c(arr, 3)
            }else
            if (arr[0] == "c") {
                arr.shift()
                inci_c(arr, 4)
            }else
            if (arr[0] == "d") {
                arr.shift()
                inci_c(arr, 6)
            }
        }else
        if (estado == 6) {
            if (arr[0] == "a") {
                arr.shift()
                inci_c(arr, 6)
            }else
            if (arr[0] == "b") {
                arr.shift()
                inci_c(arr, 6)
            }else
            if (arr[0] == "c") {
                arr.shift()
                inci_c(arr, 6)
            }else
            if (arr[0] == "d") {
                arr.shift()
                inci_c(arr, 6)
            }
        }else{
            arr = []
            inci_b(arr, 9)
        }
    }else{
        if (estado == 6) {
            exito()
        }else{
            err2()
        }
    }
}

function inci_d(arr, estado){
    if (arr.length != 0) {
        if (estado == 1) {
            if (arr[0] == "0") {
                arr.shift()
                inci_d(arr, 2)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_d(arr, 5)
            }
        }else
        if (estado == 2) {
            if (arr[0] == "0") {
                arr.shift()
                inci_d(arr, 3)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_d(arr, 6)
            }
        }else
        if (estado == 3) {
            if (arr[0] == "0") {
                arr.shift()
                inci_d(arr, 4)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_d(arr, 7)
            }
        }else
        if (estado == 4) {
            if (arr[0] == "0") {
                arr.shift()
                inci_d(arr, 4)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_d(arr, 8)
            }
        }else 
        if (estado == 5) {
            if (arr[0] == "0") {
                arr.shift()
                inci_d(arr, 6)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_d(arr, 1)
            }
        }else 
        if (estado == 6) {
            if (arr[0] == "0") {
                arr.shift()
                inci_d(arr, 7)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_d(arr, 2)
            }
        }else 
        if (estado == 7) {
            if (arr[0] == "0") {
                arr.shift()
                inci_d(arr, 8)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_d(arr, 3)
            }
        }else 
        if (estado == 8) {
            if (arr[0] == "0") {
                arr.shift()
                inci_d(arr, 8)
            }else
            if (arr[0] == "1") {
                arr.shift()
                inci_d(arr, 4)
            }
        }else{
            arr = []
            inci_d(arr, 9)
        }
    }else{
        if (estado == 4) {
            exito()
        }else{
            err2()
        }
    }
}

function tipo(str) {
    let digito = ["1","2","3","4","5","6","7","8","9","0"]
    let signo = ["+","-"]
    if (digito.includes(str)){
        return "dig"
    }else if (signo.includes(str)) {
        return "sig"
    }
}






    

function err(){
    document.getElementById("in1").style.borderColor = "rgb(179, 45, 22)"
    document.getElementById("invalido").style.display = 'inline'
    document.getElementById("valido").style.display = 'none'
    document.getElementById("invalido2").style.display = 'none'
}
function err2(){
    document.getElementById("in1").style.borderColor = "rgb(179, 45, 22)"
    document.getElementById("invalido2").style.display = 'inline'
    document.getElementById("valido").style.display = 'none'
    document.getElementById("invalido").style.display = 'none'
}
function exito(){
    document.getElementById("in1").style.borderColor = "rgb(22, 179, 43)"
    document.getElementById("valido").style.display = 'inline'
    document.getElementById("invalido").style.display = 'none'
    document.getElementById("invalido2").style.display = 'none'
}