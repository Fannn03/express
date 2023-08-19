# Documentation

## API endpoints

```
/api/v1
```

## Get data users

- GET `/users`

- Example Successfully Response

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

- Parameter Request :

| Field     | Required  | Description    |
| --------- | :------:  | -------------- |
| username  | **true**  | Username user  |
| firstname | **true**  | Firstname user | 
| lastname  | **false** | Lastname user  |

- Example Successfully Response

```json
{
  "result": "success",
  "messages": "Record successfully created!"
}
```

-  Example Error Response

```json
{
  "result": "error",
  "messages": {
    "username": "Username has been taken"
  }
}
```