const moment = require('moment');

export const onlineTimeDiff = (player) => {
    const startTime = player.getVariable("onlineTimeStart");
    const endTime   = Date.now();

    const timeDiff = endTime - startTime;
    
    const duration = moment.duration(timeDiff);

    const showTime = showOnlineTime(duration);

    console.log(showTime);

    return duration;
}

export const showOnlineTime = (totalTime) => {
    const duration = moment.duration(totalTime);

    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return `Tempo total: ${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}