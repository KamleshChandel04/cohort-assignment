// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

(function Clock() {
    function formatTimeUnit(unit){
        return unit<10 ? '0' + unit : unit;
    }

    setInterval(() => {
        let Time = new Date();

        let Hour = Time.getHours();
        let Minutes = Time.getMinutes();
        let Seconds = Time.getSeconds();
        let period = Hour >= 12 ? 'PM' : 'AM';
        
        Hour = Hour%12 || 12;

        Hour = formatTimeUnit(Hour);
        Minutes = formatTimeUnit(Minutes);
        Seconds = formatTimeUnit(Seconds);

        let currentTime = `${Hour} : ${Minutes} : ${Seconds} ${period}`;
        console.log(currentTime);

    }, 1000);
})();
