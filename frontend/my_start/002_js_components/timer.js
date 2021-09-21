const timer = () => {
    const deadline = '2021-06-01';

    const getTime = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000 * 60 * 60)) % 24),
            days = Math.floor((t/(1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    };

    const setClock = (selector, endtime) => {
        const timer = $(selector),
            days = timer.find('#days'),
            hours = timer.find('#hours'),
            minutes = timer.find('#minutes'),
            seconds = timer.find('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTime(endtime);

            days.text(addZero(t.days));
            hours.text(addZero(t.hours));
            minutes.text(addZero(t.minutes));
            seconds.text(addZero(t.seconds));

            if(t.total <= 0) {
                days.text('00');
                hours.text('00');
                minutes.text('00');
                seconds.text('00');

                clearInterval(timeInterval);
            }
        };

        updateClock();
    };

    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    setClock('.countdown', deadline);
};