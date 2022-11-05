import alert from './index.js';

alert();

alert({type: `success`, msg: `All done!`, name: `DONE`});
alert({type: `warning`, msg: `You didn't define something`});
alert({type: `info`, msg: `Jordon is awesome`});
alert({type: `error`, msg: `Something went wrong`});
