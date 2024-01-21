import dotenv from 'dotenv'
import userRouteDoc from '../routes/user.doc.js';
import blogRouteDoc from '../routes/blog.doc.js';
import messageRoutDoc from '../routes/message.doc.js';
dotenv.config();

const documentations ={
    
        openapi: "3.0.0",
        info:{
            title: "Personal portifolio",
            version:"0.1.0",
            description:"Personal portifolio APIs"
        },
        contact:{
            name:"Lucie",
            email:"niyomutonilucie@gmail.com",
        },
        servers:[
            {
                url: `http://localhost:${process.env.PORT}`,
                name:"development server"
            },
            {
                url: '',
                description: 'Production server',
              },
        ],


        components: {
            securitySchemes: {
              auth_token: {
                type: 'apiKey',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name:"auth_token",
                in:"header"
              },
            },
          },
          
        
        
          tags:[
            {
                name:"Blogs",
                description:""
            },
            {
                name:"Messages",
                description:""
            },
            {
                name:"Users",
                description:""
            }
            

        ],
        paths:{
           ...userRouteDoc,
           ...blogRouteDoc,
           ...messageRoutDoc

        }
    }

export default documentations