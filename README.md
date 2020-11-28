# Contact Management API
## Objective
Build a simple REST API to manage contacts.
## Technologies
 + Node.js
 + Mongoose
 + Express
 + MongoDB
## Description
This API provides simple CRUD functionality to manage contacts using MondoDB.
## Endpoints and HTTP Methods
 
### Create contact
 **Action** | **Endpoint** | **Method**
 ---------- | ------------ | ----------
 Create contact | _/api/contacts_ | POST
 
### List contacts
 **Action** | **Endpoint** | **Method**
 ---------- | ------------ | ----------
 List contacts | _/api/contacts_ | GET
 
### List contact by id
  **Action** | **Endpoint** | **Method**
  ---------- | ------------ | ----------
  List contact by id | _/api/contacts/{id}_ | GET
  
### Update contact
**Action** | **Endpoint** | **Method**
---------- | ------------ | ----------
Update contact | _/api/contacts/{id}_ | PUT

### Delete contact
**Action** | **Endpoint** | **Method**
---------- | ------------ | ----------
Delete contact | _/api/contacts/{id}_ | DELETE

## Payload
### Create contact
#### POST - _/api/contacts_
    {
        "name": "John Doe",
        "nickname": "Joe",
        "whatsapp": "654445567894"
    }
#### GET - _/api/contacts_
    [
        {
            "_id": "5fc28de33377ab59bc2de830",
            "name": "John Doe",
            "nickname": "Joe",
            "whatsapp": "654445567894",
            "createdAt": "2020-11-28T17:50:27.070Z",
            "__v": 0
        }
    ]
#### GET - _/api/contacts/{id}
    {
        "result": {
            "_id": "5fc28de33377ab59bc2de830",
            "name": "John Doe",
            "nickname": "Joe",
            "whatsapp": "654445567894",
            "createdAt": "2020-11-28T17:50:27.070Z",
            "__v": 0
        }
    }
#### PUT - _/api/contacts/{id}_
    {
       "result": {
           "_id": "5fc28de33377ab59bc2de830",
           "name": "John Doe",
           "nickname": "Joe",
           "whatsapp": "654445567894",
           "createdAt": "2020-11-28T17:50:27.070Z",
           "__v": 0
       }
    }
#### DELETE - _/api/contacts/{id}_
    {
        "result": {
            "_id": "5fc28de33377ab59bc2de830",
            "name": "John Doe",
            "nickname": "Joe",
            "whatsapp": "654445567894",
            "createdAt": "2020-11-28T17:50:27.070Z",
            "__v": 0
        }
    }
 