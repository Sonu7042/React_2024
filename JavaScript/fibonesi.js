function add(n) {
    if (n <= 1) {
        return n

    }
    else{
        return add(n-1)+add(n-2)
    }

}


for (let i = 0; i <= 10; i++) {
    console.log(add(i))
}

