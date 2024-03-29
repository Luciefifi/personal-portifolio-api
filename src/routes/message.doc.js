//create a message swagger documentation

const createMessage = {
    tags:["Messages"],
    description: "create contact message",
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
                         telephone:{
                            type:"string",
                            description:"telephone number",
                            example:"0788864959",
                        },
                        message:{
                            type:"string",
                            description:"the message to send",
                            example:"this is amazing",
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

  //get all user messages swagger documentation 
  const listOfAllMessages = {
    
    tags:["Messages"],
    description: "list of all messages",
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


const getSingleMessage={
    tags:["Messages"],
    summary:"get message by path id",
    description:"get single message by id",
    security: [
        {
          auth_token: [],
        },
      ],
    parameters:[
        {
            name: "id",
            in : "path",
            description: "id of the message" ,
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
            description:"message not found"
        }
    },
  
  }



  const messageRoutDoc = {
    "/api/message": {
        post:createMessage
    },
    "/api/messages": {
        get:listOfAllMessages
    },
    "/api/message/{id}":{
        get:getSingleMessage
      },


  }


  export default messageRoutDoc;