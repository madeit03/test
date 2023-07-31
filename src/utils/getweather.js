const getWeather = (city, input, inputValue, appError, obsEle, setInptValue, setData, setErrorTime, errortime) => {

    console.log('wysylam req ', city)
    const url_basic = 'https://danepubliczne.imgw.pl/api/data/synop/station/';
    const url_ready = url_basic + city;
    console.log('dane do req:', url_ready);

    fetch(url_ready, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })

        .then((res) => {
            return new Promise((resolve, reject) => {
                console.log(res);
                if (res.status == 200) {
                    if (inputValue.length > 0) {
                        input.current.placeholder = inputValue;
                    }

                    console.log(res)

                    resolve(res.json())
                }
                else {
                    console.log(res);

                    resolve({ xd: 0 })

                }
            })


        })
        .then((res) => {

            if (res.xd != 0) {

                appError.current.classList = "app-error";
                for (let i = 0; i < obsEle.length; i++) {
                    obsEle[i].classList += " obsmove";
                }
                setTimeout(() => {
                    for (let i = 0; i < obsEle.length; i++) {
                        obsEle[i].classList.remove("obsmove");
                    }
                }, 300)


                setInptValue("")
                console.log(res)
                let { temperatura, predkosc_wiatru, wilgotnosc_wzgledna, data_pomiaru } = res;
                temperatura = Number.parseInt(temperatura);
                wilgotnosc_wzgledna = Number.parseInt(wilgotnosc_wzgledna);
                let rain_chance = Number.parseInt((Math.random() * 30) + 10);
                setData({
                    temperatura,
                    predkosc_wiatru,
                    wilgotnosc_wzgledna,
                    rain_chance,
                    data_pomiaru,
                })
            }
            else {
                setErrorTime({
                    time: clearTimeout(errortime.time)
                })
                setInptValue("")
                appError.current.classList += " app-error-active";
                setErrorTime({
                    time: setTimeout(() => {
                        appError.current.classList = "app-error";
                    }, 4000)
                })



            }


        })

}
export { getWeather }