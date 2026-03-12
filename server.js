//create HTTP server
//express application internally contains HTTP server
import exp from 'express'
import {userApp} from "./API/userAPI.js"
import {productApp} from "./API/productAPI.js"

const app = exp()   //this function creates and returns express application// it helps to create entire backend

//use body passer middleware(in-built middleware)
app.use(exp.json())  //convert json to js and sends the data to route

//set a port number

const port = 3000   //any number can be given

//assign port number to HTTP server
app.listen(port ,()=>console.log(`server lisiting to port : ${port}`))
//server is ready
//Test Data(in future we replace this datd with db)

  //POSTMAN, rest client behaves like a client side application
  // nodemon to automatically update contents in server withot reatating the server


//create a custom middleware
function middleware1(req,res,next){
  //send response from middleware
  // res.json({message:"this response from middleware 1"})
  console.log("middleware 1 executed")
  next()
}
function middleware2(req,res,next){
  //send response from middleware
  // res.json({message:"this response from middleware 1"})
  console.log("middleware 2 executed")
  next()
}

//use middleware
app.use(middleware1)
app.use(middleware2)

// .use --->middleware
  //farword req to userAPI if path starts with /user-api
  app.use('/user-api',userApp)
  //farword req to userAPI if path starts with /user-api
  app.use('/product-api',productApp)
 

 