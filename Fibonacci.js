const arr = [0];

for (let i = 0; i<10; i++)
    {
        if(arr[i]==0)
            {
                arr.push(1);
                console.log(arr[i]);
            }
            else
            {
                arr.push(arr[i-1]+arr[i]);
                console.log(arr[i]);
            }
    }