const handleFocus = (inputTime, setInputTime, inputref, submit) => {

    clearTimeout(inputTime.timeblur1);
    clearTimeout(inputTime.timeblur2);

    setInputTime(
        {
            timefocus1: setTimeout(() => {
                inputref.current.classList += " config-submit-change";
            }, 0)
        }
    )


    setInputTime({
        timefocus2: setTimeout(() => {
            submit.current.classList += " config-submit-show";
        }, 200)
    })




}
const handleBlur = (inputTime, setInputTime, inputref, submit) => {
    clearTimeout(inputTime.timefocus1);
    clearTimeout(inputTime.timefocus2);

    setInputTime({
        timeblur1: setTimeout(() => {

            submit.current.classList = "config-submit";
        }, 0)
    })
    setInputTime({
        timeblur2: setTimeout(() => {
            inputref.current.classList = "config-input";
        }, 200)
    })


}
export { handleFocus, handleBlur }