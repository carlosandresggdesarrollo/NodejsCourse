

// Object

const Tanck = {
    name: 'T-90',
    FromContry: 'Russia',
    Munition: 'M 5 Tb',
    getName(){
         return `${ this.name }  made in  ${ this.FromContry}`
    }
}

//
const namer = Tanck.name;
const FromContryr = Tanck.FromContry;
const Munitionr = Tanck.Munition;

console.log('destructuring Numeber one:'+namer,FromContryr,Munitionr)


// 
const { name, FromContry, Munition } = Tanck;

console.log( 'destructuring Numeber two:'+name, FromContry, Munition )

//  

function PrintTanck(Tanck){
    const { name, FromContry, Munition } = Tanck;
    console.log( 'destructuring Numeber thee:'+name, FromContry, Munition )
}
PrintTanck(Tanck);

const Tancks = ['Armata T14', 'Abram 2B','Leopard 14']

const T1 =  Tancks[0];
const T2 =  Tancks[1];
const T3 =  Tancks[2];

console.log('destructuring Numeber four:'+T1,T2,T3)

const [t1,t2,t3] = Tancks;

console.log('destructuring Numeber Five:'+t1,t2,t3)

