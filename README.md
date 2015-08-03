# NodeInventory
Inventory system(alpha obviously) built using the MEAN stack. Full featured api,endpoint is 
at api/products, use curl to test it, or something like the Postman chrome app. It supports get,put,delete and post. As of now the features include:
-full featured api
-history system built using localstorage with an action available to upload the history whenever a report is needed to the server, which then writes it to a history.txt file
-logging on the backend(similiar to emp backend logging),not just console.log
-can add products, get a list of products and delete products
-option to opt into notifications
-full, secure authentication provided by Firebase

To run the app you must have mongodb and either nodejs or iojs installed. Once you have these installed simply clone the code, install the dependencies using npm install, and start up the server(server.js). If your using nodejs you must use the harmony flag when starting the server.

