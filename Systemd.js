const exec = require('await-exec');
//* @param bool start
//* Start or Stop 
const VncService = async (start) => {
    try {
        if(start) {
            console.log('Start VNC');
            await exec('sudo systemctl start vncserver-x11-serviced.service ');
        } else {
            console.log('Stop VNC');
            await exec('sudo systemctl stop vncserver-x11-serviced.service ');
        }
    } catch (err) {
        console.log('SystemD@VncService Err: ', err);
    }
} 
//* @param start bool
//* Start or Stop
const SshService = async (start) => {
    try {
        if(start) {
            console.log('Start SSH');
            await exec('sudo systemctl start sshd');
        } else {
            console.log('Stop SSH');
            await exec('sudo systemctl stop sshd');
        }
    } catch (err) {
        console.log('SystemD@SshService');
    }
}

module.exports.VncService = VncService;