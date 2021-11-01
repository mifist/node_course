//import { DecToHex } from './decToHex';
import { GenerateData } from './generateData';
/* 
function main() {
    console.time('Hello1');
    const input = 10;
    const result = DecToHex(input);
    console.log(result);
    console.time('Hello2');
    console.table([1,2,3,4,5]);
    console.timeEnd('Hello1');
    console.timeEnd('Hello2');
}

main(); */

function productData() {
    console.time("generateData");
    const dataAmount = 1000;
    const result = GenerateData(dataAmount);
    //console.table(result);
    console.timeEnd("generateData");

    console.time("get50");
    console.table(result[50]);
    console.timeEnd("get50");

}

productData();