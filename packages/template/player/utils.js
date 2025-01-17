export const onlineTime = (player) => {
    const onlineTimeStart = player.getVariable("onlineTimeStart");
    const onlineTimeEnd   = Date.now();

    const timeDiff = endTime - startTime;

    // Converta o tempo usando Moment.js
    const moment = require('moment'); // Certifique-se de ter instalado o moment
    
    // Crie uma duração usando a diferença
    const duration = moment.duration(timeDiff);

    const showTime = showOnlineTime(duration);

    console.log(showTime);

    return duration;
}

export const showOnlineTime = (totalTime) => {
    const duration = moment.duration(totalTime);

    // Extrai os valores formatados
    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return `Tempo total: ${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}