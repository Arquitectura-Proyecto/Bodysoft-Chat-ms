#Test with: http://editor.swagger.io/

swagger: '2.0'
info:
  version: 1.0.0
  title: Microservice for chat
  description: JavaScript + Mongodb
  license:
    name: Bodysoft-chat-ms, 2020-I
# host: host:3000
# basePath: /sa-auth-ms/resources
# schemes:
#   - http
consumes:
  - application/json
produces:
  - application/json
paths:
  /user/{id_user}:
    get:
      summary: Returns an array of chats with the given id
      operationId: getUserChatsById
      parameters:
        - name: id_user
          in: path
          description: The id_user of the list of chats to be returned
          required: true
          type: integer
      responses:
        '200':
          description: Ok
          schema:
            $ref: '#/definitions/User'
        '500':
          description: Internal Server Error
          schema:
            $ref: '#/definitions/ErrorModel'

    put:
      summary: Updates an user with the given id
      operationId: updateUser
      parameters:
        - name: id_user
          in: path
          description: The id of the user to be updated
          required: true
          type: integer
        - name: user
          in: body
          required: true
          description: User Object
          schema:
            $ref: '#/definitions/User'
      responses:
        '204':
          description: No Content
        '404':
          description: Not Found
          schema:
            $ref: '#/definitions/ErrorModel'
        '406':
            description: Not Acceptable (Invalid Params)
            schema:
              $ref: '#/definitions/ErrorModel'
        '500':
          description: unexpected error
          schema:
            $ref: '#/definitions/ErrorModel'



  /user/{id_user}/{id_trainer}:
    get:
      summary: Returns id of chat with the given ids
      operationId: getChatUser
      parameters:
        - name: id_user
          in: path
          description: The id_user of the list of chats to be returned
          required: true
          type: integer
        - name: id_trainer
          in: path
          description: The id_trainer of the list of chats to be returned
          required: true
          type: integer          
      responses:
        '200':
          description: Ok
          schema:
            $ref: '#/definitions/Chat'
        '500':
          description: Internal Server Error
          schema:
            $ref: '#/definitions/ErrorModel'
    post:
      tags:
      - user
      summary: insert a new chat between user and trainer
      operationId: startChatUser
      consumes:
      - application/x-www-form-urlencoded
      produces:
      - application/json
      - application/xml
      parameters:
      - name: id_user
        in: path
        description: id for user
        required: true
        type: integer
        format: int64
      
      - name: id_trainer
        in: path
        description: id for user
        required: true
        type: integer
        format: int64

      responses:
        '201':
          description: Ok
          schema:
            $ref: '#/definitions/Chat'
        '500':
          description: Internal Server Error
          schema:
            $ref: '#/definitions/ErrorModel'

  /user/{id_user}/{id_unknown}/{id}:
    post:
      tags:
      - user
      summary: insert a new message
      operationId: postMessage
      consumes:
      - application/x-www-form-urlencoded
      produces:
      - application/json
      - application/xml
      parameters:
      - name: id_user
        in: path
        description: id for user
        required: true
        type: integer
        format: int64
      
      - name: id_unknown
        in: path
        description: id for trainer
        required: true
        type: integer
        
      - name: id
        in: path
        description: id for trainer
        required: true
        type: integer        
      responses:
        '201':
          description: Ok
          schema:
            $ref: '#/definitions/chats'
        '500':
          description: Internal Server Error
          schema:
            $ref: '#/definitions/ErrorModel'
  /trainer/{id_trainer}:
    get:
      summary: Returns an array of chats with the given id
      operationId: getChatsTrainer
      parameters:
        - name: id_trainer
          in: path
          description: The id_trainer of the list of chats to be returned
          required: true
          type: integer
      responses:
        '200':
          description: Ok
          schema:
            $ref: '#/definitions/chats'
        '500':
          description: Internal Server Error
          schema:
            $ref: '#/definitions/ErrorModel'
    put:
      summary: Updates an user with the given id
      operationId: updateTrainer
      parameters:
        - name: id_trainer
          in: path
          description: The id of the trainer to be updated
          required: true
          type: integer
        - name: user
          in: body
          required: true
          description: Trainer Object
          schema:
            $ref: '#/definitions/Trainer'
      responses:
        '204':
          description: No Content
        '404':
          description: Not Found
          schema:
            $ref: '#/definitions/ErrorModel'
        '406':
            description: Not Acceptable (Invalid Params)
            schema:
              $ref: '#/definitions/ErrorModel'
        '500':
          description: unexpected error
          schema:
            $ref: '#/definitions/ErrorModel'

    post:
      tags:
      - trainer
      summary: insert a new chat between user and trainer
      operationId: startChatTrainer
      consumes:
      - application/x-www-form-urlencoded
      produces:
      - application/json
      - application/xml
      parameters:
      - name: id_trainer
        in: path
        description: id for user
        required: true
        type: integer
        format: int64
      responses:
        '201':
          description: Ok
          schema:
            $ref: '#/definitions/chats'
        '500':
          description: Internal Server Error
          schema:
            $ref: '#/definitions/ErrorModel'
            
  /trainer/{id_trainer}/{id}:
    get:
      summary: Returns an array of chats with the given id
      operationId: getChatTrainerUser
      parameters:
        - name: id_trainer
          in: path
          description: The id_trainer of the list of chats to be returned
          required: true
          type: integer
        - name: id
          in: path
          description: The id of the list of chats to be returned
          required: true
          type: integer
      responses:
        '200':
          description: Ok
          schema:
            $ref: '#/definitions/chats'
        '500':
          description: Internal Server Error
          schema:
            $ref: '#/definitions/ErrorModel'

    post:
      tags:
      - trainer
      summary: insert a new chat between user and trainer
      operationId: startChatTrainerUser
      consumes:
      - application/x-www-form-urlencoded
      produces:
      - application/json
      - application/xml
      parameters:
      - name: id_trainer
        in: path
        description: id for user
        required: true
        type: integer
        format: int64
      - name: id
        in: path
        description: id for user
        required: true
        type: integer
        format: int64

      responses:
        '201':
          description: Ok
          schema:
            $ref: '#/definitions/chats'
        '500':
          description: Internal Server Error
          schema:
            $ref: '#/definitions/ErrorModel'



definitions:
#--------------------------------- CHATS ------------------------------------------

  chats:
    type: array
    items:
      $ref: '#/definitions/Chat'

  Chat:
    type: object
    properties:
      _id:
        type: string
      id_author:
        type: number
      content:
        type: string
      date:
        type: string
    

  User:
    type: object
    properties:
      firstName:
        type: string
      lastName:
        type: string
      username:
        type: string
      password:
        type: string

  Trainer:
    type: object
    properties:
      firstName:
        type: string
      lastName:
        type: string
      username:
        type: string
      password:
        type: string


# Errors
  ErrorModel:
    type: object
    properties:
      message:
        type: string
# Added by API Auto Mocking Plugin
host: virtserver.swaggerhub.com
# basePath: /jestupinanb/proyecto/1.0.0
schemes:
 - https
 - http
# Added by API Auto Mocking Plugin
basePath: /vejars1024/test_swagger/1.0.0