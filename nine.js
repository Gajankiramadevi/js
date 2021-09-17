var outer=()=>{
    console.log("good morning")
    var inner=()=>
    
    {
        console.log("good afternoon")
    }
    inner()
}
outer()