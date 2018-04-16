

var pr=new Promise((resolve,reject)=>{

      
      
        setTimeout(function(){
        console.log("hi")
      reject("madarchod")

      console.log("DFdfdfdfdf")

       
    },2000)




})
pr.catch((error)=>{
    console.log(error)
})