function add(n1: number, n2: number){
    return n1 + n2;
}
function printResult (num: number): void{
    console.log("reslut: "+ num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
    console.log("cb fn executed!")
}

printResult(add(5,12));

function cb(num: number): number{
    console.log(num);
    return num+20;
}

let combine: (num: number) => void;
combine = cb;

cb(10);

addAndHandle(5,12,(result) => {
    console.log(result);
    return true;
});

console.log(cb(15));
addAndHandle(10,15,cb);

