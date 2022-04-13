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

## Login
**You send:**  Your  login credentials.
**You get:** An `API-Token` with wich you can make further actions.

**Register a Vehicle:**
```json
POST /login HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy

{
  "year": 2016,
  "horsepower": 252,
  "make": "audi",
  "model": "a6",
  "price": 52100.0,
  "img_url": "http://ts2.mm.bing.net/th?id=OIP.M87f9a7ad73341027ed0eb94569f2425eH0&pid=15.1"
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
Server: My RESTful API
Content-Type: application/json
Content-Length: xy

{
	"message": "Vehicle registered successfully",
	"data": {
		"_id": "6256d935f84da6f726634197",
		"year": "2016",
		"horsepower": "252",
		"make": "audi",
		"model": "a6",
		"price": "52100",
		"img_url": "http://ts2.mm.bing.net/th?id=OIP.M87f9a7ad73341027ed0eb94569f2425eH0&pid=15.1",
		"__v": 0
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
