// week = [
//     'monday',
//     'tuesday',
//     'wednesday',
//     'thursday',
//     'friday',
//     'saturday',
//     'sunday'
// ]

// for (let i = 0; i < week.length; i++) {
//     if(week[i] =='saturday' || week[i] == 'sunday'){
//     document.write('<b>' + week[i] + ' </b>');
// } else if (week[i] == 'friday') {
//     document.write('<i>' + week[i] + ' </i>');
// }
// else{
//     document.write(week[i] + ' ');
//     }
// }

let arr = [
    '12344',
    '32264',
    '28485',
    '32515',
    '628292',
    '79894921',
    '5254844',
]

for (let i = 0; i < arr.length; i++) {
    
        if (Math.floor(arr[i] / ((10 ** arr[i].length)/10)) == '3' || Math.floor(arr[i] / ((10 ** arr[i].length)/10)) == 7) {
            
            document.write(arr[i] + ' ')
        }
         
   
} 

console.log(32264 % 10);
console.log(79894921 % 10000);