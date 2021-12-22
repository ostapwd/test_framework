module.exports = (on, config) => {
    on('task', {
        log(message) {
            console.log('------------------------------------------------------------------');
            console.log(JSON.stringify(message, null, 2))

            return message
        }
    });

};