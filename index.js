const spawn = require('spawn-as-admin');
const { join } = require('path');

module.export = () => spawn(join(__dirname, 'bin', 'EmptyStandbyList.exe'), ['workingsets', 'standbylist'])
