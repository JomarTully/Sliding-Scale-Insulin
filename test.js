const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(__dirname+'/index.html','utf8').split('<script>')[1].split('</script>')[0];new vm.Script(source);
const context={};vm.createContext(context);vm.runInContext(source.slice(0,source.indexOf('const $=')),context);
const boundaries=[1,69,70,150,151,200,201,250,251,300,301,350,351,400,401,600];
for(let [regimen,doses] of Object.entries({low:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6],medium:[0,0,0,0,2,2,4,4,6,6,8,8,10,10,12,12],high:[0,0,0,0,3,3,6,6,9,9,12,12,15,15,18,18]}))boundaries.forEach((bg,n)=>assert.equal(context.correction(String(bg),regimen,'standard').dose,doses[n]));
for(let regimen of ['medium','high'])boundaries.forEach((bg,n)=>assert.equal(context.correction(String(bg),regimen,'bedtime').dose,[0,0,0,0,0,0,0,0,2,2,3,3,4,4,4,4][n]));
for(let regimen of ['low','medium','high']){assert(context.correction('69',regimen,'standard').alert);assert(!context.correction('70',regimen,'standard').alert);assert(!context.correction('400',regimen,'standard').alert);assert(context.correction('401',regimen,'standard').instructions.includes('notify the provider'));}
assert(context.correction('69','low','standard').instructions.includes('call the provider'));assert(context.correction('150','low','standard').instructions.includes('Not Given'));
assert.throws(()=>context.correction('200','low','bedtime'),/not supplied/);
assert.throws(()=>context.correction('200','','standard'),/Choose/);assert.throws(()=>context.correction('200','high',''),/Choose/);
for(let value of ['',0,-1,150.5,'150.5','1e2','HI','LO','NaN','Infinity',null,undefined,{},'9007199254740992'])assert.throws(()=>context.correction(value,'medium','standard'));
console.log('All 80 bracket-boundary cases passed across 5 supplied scales; alerts, missing scale, explicit selection and invalid-input rejection passed.');
