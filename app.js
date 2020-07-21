const SysInfo = require('./SysInfo');
const SystemD = require('./SystemD');

const main = async () => {
    try {
        const isRaspi = await SysInfo.isRaspi();
        if(!isRaspi)
            return;
        await SystemD.SshService(false);
        await delay(5000);
        await SystemD.SshService(true);
    } catch (err) {
        console.log('main err: ', err);
    }
};

const delay = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

main();