//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5)
        {
            // console.log("5 is best number")
        }
    // console.log(element);
    }
    for(let i = 1;i<=10;i++){
        // console.log(`Table of ${i} : `);
        
            for(let j= 1; j<=10;j++)
                {
        // console.log(`${i} * ${j} = ${i*j}`);

                }
        }
    
let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}

//Break and Continue

for(let i = 1; i<=10;i++)
    {
        if(i==5)
            {
                console.log(`Favourite no ${i} detected`);
                break
            }
        console.log(`value :${i}`);
    }
    console.log("");
console.log("New loop starts here");
    for(let i = 1; i<=10;i++)
        {
            if(i==5)
                {
                    console.log(`Skip favourite number ${i}`);
                continue
                }
            console.log(`value : ${i}`);
        }
