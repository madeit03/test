const inputChange = (e, setInptValue) => {

    return new Promise((resolve, reject) => {
        let value = e.target.value;
        resolve(
            value = value.toLowerCase()
        )
    })
        .then((value) => {
            return new Promise((resolve, reject) => {
                let newValue = "";
                for (let i = 0; i < value.length; i++) {
                    switch (value[i]) {
                        case 'ę': {
                            newValue += 'e';
                        }
                            break;
                        case 'ó': {
                            newValue += 'o';
                        }
                            break;
                        case 'ą': {
                            newValue += 'a';
                        }
                            break;
                        case 'ś': {
                            newValue += 's';
                        }
                        case 'ł': {
                            newValue += 'l';
                        }
                            break;
                        case 'ż': {
                            newValue += 'z';
                        }
                            break;
                        case 'ź': {
                            newValue += 'z';
                        }
                            break;
                        case 'ć': {
                            newValue += 'c';
                        }
                            break;
                        case 'ń': {
                            newValue += 'n';
                        }
                            break;
                        default: {
                            newValue += value[i];
                        }
                            break;
                    }

                }
                resolve(newValue);


            })
                .then((value) => {

                    setInptValue(value);

                })

        })




}
export { inputChange };