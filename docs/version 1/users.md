# Documentation

## API endpoints

```
/api/v1
```

## Get data users

- GET `/users`

- Example Successfully Response `Status: 200 OK`

```json
{
    "result": "success",
    "data": [
        {
            "id": 1,
            "username": "user123",
            "fistname": "John",
            "lastname": "Wick",
            "createdAt": "2023-08-19T14:19:32.000Z",
            "updatedAt": "2023-08-19T14:19:32.000Z"
        }
    ]
}
```

## Insert data users

- POST `/users/create`

- Form Body Request :

| **Field** | **Type**  | **Required** |
| --------- | --------  | :----------: |
| username  | string    | true         |
| firstname | string    | true         | 
| lastname  | string    | false        |

- Example Successfully Response `Status: 200 OK`

```json
{
  "result": "success",
  "messages": "Record successfully created!"
}
```

-  Example Error Response `Status: 400 Bad Request`

```json
{
  "result": "error",
  "messages": {
    "username": "Username has been taken"
  }
}
```

## Get details data user

- GET `/users/{username}`

- Parameter Request :

| **Params**   | **type** | **required** |
| ------------ | :------: | ------------ |
| username     | string   | true         |

- Example Successfully Response `Status: 200 OK`

```json
{
  "result": "success",
  "data": {
    "id": 1,
    "username": "usernam123",
    "firstname": "John",
    "lastname": "Wick",
    "createdAt": "2023-08-19T14:34:34.000Z",
    "updatedAt": "2023-08-19T14:34:34.000Z"
  }
}
```

- Example Error Response `Status: 404 Not Found`

```json
{
  "result": "error",
  "messages": "Username not found"
}
```