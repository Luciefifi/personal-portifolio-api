//register user swagger documentation 
const registerUser = {
    tags:["Users"],
    description: "User signup",
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        firstName:{
                            type:"string",
                            description:" first name of the user",
                            example:"Lucie"
                        },
                        lastName:{
                            type:"string",
                            description:"Last name of the user",
                            example:"Lavender",
                        },
                        email:{
                            type:"email",
                            description:"email of the user",
                            example:"lavender@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:"password of the user",
                            example:"12345678",
                        },
                        confirmPassword:{
                            type:"string",
                            description:"password of the user",
                            example:"12345678",
                        },
                        
                    },
                },
            },
  
        },
    },
  responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
  
                    },
                },
            },
        },
    },
  
  
  };
//logging in a user swagger documentation
  const login = {
    tags:["Users"],
    description: "login user",
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        email:{
                            type:"email",
                            description:"email of the user",
                            example:"lavender@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:"password of the user",
                            example:"12345678",
                        },
                        
                    },
                },
            },
  
        },
    },
  responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
  
                    },
                },
            },
        },
    },
  
  
  };

  //get all users swagger documetnation 
  const listOfAllUsers = {
    
    tags:["Users"],
    description: "list of all users",
    security: [
        {
          auth_token: [],
        },
      ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                      

                    },
                },
            },
        },
    },
};
//loggedin user swagger documentation
const loggedInUser = {
    
    tags:["Users"],
    description: "logged in user",
    security: [
        {
          auth_token: [],
        },
      ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                      

                    },
                },
            },
        },
    },
};

//get single userby id swagger documentation 
const singleUser={
    tags:["Users"],
    summary:"get user by path id",
    description:"get single user by id",
    security: [
        {
          auth_token: [],
        },
      ],
    parameters:[
        {
            name: "id",
            in : "path",
            description: "id of the user" ,
            type: "string",
            example: "hfbjsd2345njndfjhcbe3"
        },
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
  
  
                    },
                },
            },
        },
        404:{
            description:"user not found"
        }
    },
  
  }
  


  const userRouteDoc = {
    "/api/signup": {
        post:registerUser
    },
    "/api/login": {
        post:login
    },
    "/api/users": {
        get:listOfAllUsers
    },
    "/api/user/{id}":{
        get:singleUser
      },
      "/api/loggedInUser": {
        get:loggedInUser
    },



  }


  export default userRouteDoc

