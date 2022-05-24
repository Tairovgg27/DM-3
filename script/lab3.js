
let err = ""; 
function proverka(arr_,arr_1,arr_2)
 {
    err = ""; 
    if (arr_=="" || arr_1=="" || arr_2=="") 
    {
        err = "Поля не должны быть пустыми";
    }
    else 
        if (arr_.length >7 || arr_1.length>8) 
        { 
            err = "Множество должно содержать не более 7 элементов";
        }
             else{
        for(let i = 0; i < arr_2.length; i++)
         {
            arr_2[i] = arr_2[i].split(" ");
            if(arr_2[i][0]=="" || arr_2[i][1]=="" || arr_2[i].length!=2)
            {
                err="Отношение введено неверно";
                break;
            }  
        }
    }
    if (err) 
    {
        return false; 
    }
    else 
    {
        return true; 
    }
}

function main() {  
    let output="";
    let arr = document.getElementById('arr1').value.split(" ");
    let arr1 = document.getElementById('arr2').value.split(" ");
    let arr2 = document.getElementById('arr3').value.split(",");
    let arr3=[4];

    for(let i=0;i<arr1.length;i++)
        arr3[i]=[0,0,0,0,0,0,0,0];
    if(proverka(arr,arr1,arr2))
    {
        for(let i = 0; i < arr2.length; i++)
         {
            let x = arr.indexOf(arr2[i][0]);
            let y = arr1.indexOf(arr2[i][1]);
            if(x != -1 && y != -1)
                arr3[x][y] = 1; 
        }
            for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr1.length;j++)
                output+=arr3[i][j]+" ";
        }
        document.getElementById("OutResult").innerText=mnoj1(arr3)+"\n"+mnoj2(arr3);
    }
    else
        alert(err);
}
function mnoj1(arr3){
    for(let i=0; i<arr1.length;i++)
    {
        let count=0;
        for(let j=0; j<arr1.length;j++)
            if(arr3[i][j]==1)
            {
                count++;
            };
        if(count!=1)
            return "Не является функцией первого элемента во второе";
    }
    return "Является функцией первого элемента во второе";
        
    
}
function mnoj2(arr3){
    for(let j=0; j<arr1.length;j++){
        let count=0;
        for(let i=0; i<arr1.length;i++)
            if(arr3[i][j]==1)
            { 
                count++;
            };
            if(count!=1)
            return "Не является функцией второго элемента в первое";
    }
    return "Является функцией второго элемента в первое";
}