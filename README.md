# vehicle-reservation-api

Vehicle Reservation API is a custom built REST API for the [Vehicle Reservation App](https://github.com/wuletawwonte/vehicle-reservation-app.git). It is built using Express, NodeJS and MongoDb. The API uses `POST` and `GET` requests to communicate and HTTP [response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indenticate status and errors. All responses come in standard JSON. 

## Response Codes 
### Response Codes
```
200: Success
400: Bad request
401: Unauthorized
404: Cannot be found
405: Method not allowed
422: Unprocessable Entity 
50X: Server Error
```
### Error Codes Details
```
100: Bad Request
110: Unauthorized
120: User Authenticaion Invalid
130: Parameter Error
140: Item Missing
150: Conflict
160: Server Error
```
### Example Error Message
```json
http code 404
{
	"error": {
		"message": "Endpoint Not found"
	}
}
```

## Author

👤 **Wuletaw Wonte**

- GitHub: [@wuletawwonte](https://github.com/wuletawwonte)
- Twitter: [@wuletaww](https://twitter.com/wuletaww)
- LinkedIn: [LinkedIn](https://linkedin.com/in/wuletaw-wonte)

## 📝 License

This project is **[MIT](./LICENSE.md)** licensed.
