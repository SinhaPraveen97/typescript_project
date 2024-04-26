function square(num : number)
{
    console.log(num*num);
}

square(3);
//square("praveen");
//square(true);

const doSomething = (person: string, age : number, isFunny : boolean)=>
{

};

doSomething("chickenFace",78,true);


const add = (x: number, y: number): number =>
    {
        return x+y;
    }

    add(10,5);

    const colors =["Red","Green","Blue"];
    colors.map(color =>{
        return color.toUpperCase();
    })