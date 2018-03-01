console.log("Example JavaScript");

function fibonacci(num)
{
	var s=0,sp=1,sf=0;
	for (var i = num-1; i >= 0; i--)
	{
		console.log(s);
		sf=s+sp;
		s=sp;
		sp=sf;
	}
}