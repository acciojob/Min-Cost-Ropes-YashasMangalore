function mincost(arr)
{ 
//write your code here
// return the min cost
	let ans=0;
	while(arr.length>1)
	{
		arr.sort((a,b)=>a-b);
		let f=arr.shift();
		let s=arr.shift();

		let temp=Number(f+s);
		ans+=temp;
		arr.push(temp);
	}
	return ans;
}

module.exports=mincost;
