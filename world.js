window.onload = function() 
{
    document.getElementById("lookup").addEventListener(
        "click", function(){
            
            var check = document.getElementById("check").checked;
            var search = document.getElementById("term").value;
            
            if (check)
            {
            	new Ajax.Request("world.php?all=true&format=xml",
                {
                    method: "get",
                    onSuccess: doSomethingWithTheResult
                });
            }
            
            if (search == "" && !check)
            {
            	doSomethingelseWithTheResult()
            }
            
            if (search != "" && !check)
            {
                new Ajax.Request("world.php?lookup="+search,
                {
                    method: "get",
                    onSuccess: doSomethingWithTheResult
                });
            }
    });
    
    function doSomethingWithTheResult(data) 
    {
        var result = document.getElementById("result");
        result.innerHTML = "";
        alert(data.responseText);
        
    }
    
    function doSomethingelseWithTheResult() 
    {
        //alert(data.responseText);
        var result = document.getElementById("result");
        result.innerHTML = "No valid input was given.";
    }
}