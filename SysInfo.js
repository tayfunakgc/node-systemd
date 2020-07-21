const si = require('systeminformation');

const isRaspi = async () => {
    try {
        const osInfo = await si.osInfo();
        if(osInfo.distro == 'Raspbian GNU/Linux') {
            //console.log('it s raspi');
            return true;
        } else {
            //console.log('it s not raspi');
            return false;
        }
    } catch (err) {
        console.log('SysInfo@isRaspi Err: ', err);
    }
}

module.exports.isRaspi = isRaspi;