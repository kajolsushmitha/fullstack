for(a=9;a<=10;a++)
{
    console.log(a);
}
//for in
 b=["sus",12,23,"kaj",true]
for(var c in b)
    console.log(b[c]);

//for of
for(var c of b)
    console.log(b)

//for each
b=["sus",12,23,"kaj",true]
b.forEach((b,index)=>{
    console.log("Element is",b,"and Index is",index);
})

