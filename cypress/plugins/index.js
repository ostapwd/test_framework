module.exports = (on, config) => {

    require('cypress-mochawesome-reporter/plugin')(on);

    on('task', {
        log(message) {
            console.log('------------------------------------------------------------------');
            console.log(JSON.stringify(message, null, 2))

            return message
        }
    });

};