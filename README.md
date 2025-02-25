# Request Logger Middleware

## API Endpoint
  
📌 **Usage:** Make a GET request to `/api/request-logger` to receive a random image.

### Get a Random Image  
**GET** [`https://request-logger-middleware.onrender.com/api/request-logger`](https://request-logger-middleware.onrender.com/api/request-logger)

⚠ **Note:** This API is hosted on a free-tier service, so response times may vary. Sometimes it may take a few seconds to load the response. Please be patient! ⏳

#### Example Response  
```json
{
    "success": true,
    "message": {
        "RequestMethod": "GET",
        "url": "/api/request-logger",
        "ip": "103.3.204.116",
        "ExecutedIn": "1426ms"
    }
}
```

## Installation

##### Step 1  
```sh
 git clone https://github.com/AakashR11111001111/Random-Image-API
```

##### Step 2  
```sh
cd <your-folder-name>
```

##### Step 3
```sh
npm install
```

##### Step 4  
```sh
npm start
```

## Usage

#### To get a random image, make a GET request to:  
```sh
http://localhost:1000/api/request-logger
```

## Technologies Used
- **Node.js** - JavaScript runtime  
- **Express.js** - Web framework for Node.js  

## Contributing

We appreciate contributions from the community! If you would like to contribute, please follow these steps:

### 🛠 How to Contribute  
1. **Fork the Repository** – Click on the "Fork" button at the top-right corner of this repository.  
2. **Clone Your Fork** – Copy the forked repository to your local machine:  
   ```sh
   git clone https://github.com/your-username/repository-name.git
   
