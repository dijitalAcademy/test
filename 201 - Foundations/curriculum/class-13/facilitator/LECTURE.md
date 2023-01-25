Code review is essential to a good start for the day. As with Class 9, your focus should be on getting all student assignments as close to functional as possible and getting everyone caught up who has slipped behind. Have the students with working assignments lead the way and explain their code. Also, ask students with incomplete projects and particular sticking points if they will share their work with the class to get assistance. By this time in the class, there should adequate trust all around to really do some deep code review.


The one instructional piece today, local storage, is straightforward in terms of how it works. The key is to make sure that all of the big conceptual topics are being covered as well:
* Persistence, whether in the browser or across multiple machines
* Techniques for managing persistence: when to store, when to retrieve
* What to store, exactly?
* JSON and data modeling

## Local Storage
Start by discussing what "data persistence" means. Data persistence is the act of data being saved for later use, even after the browser shuts down or another machine is used to access the application. The use of data persistence is strong within development. We will traditionally use databases to persist data within an app, but we will wait until 301 before getting to that level of persistence. 

In 201, we will work with another form of data persistence, local storage. Local storage is great because it's browser specific and saves information with no expiration date. Meaning that all of the data that is being saved/persisted is specific to the browser you are using and once you close that browser down and open the app back up, your data will still be present. Your friend will be able to open up their own browser and see only the data that they specifically saved and will not at all affect the data you saved. 

The great part about local storage is that it can hold significantly more data than Cookies, which is another way to store local data to a user. Local Storage has a 5MB max size, where as Cookies have a 4KB size limit.

Local storage stores both keys and values as strings. This means that when you save data into local storage, it will save it as a string, meaning you will have to convert it to a different data type upon retrieving the data.

Local storage works off of the key/value pair concept. Every item that you insert into local storage must have both a key and a value associated with it. 

Here is an overview of the local storage methods:
1. `setItem()` - Add key and value to the local storage
1. `getItem()` - Retrieve a value by the key
1. `removeIem` - Remove an item by the key
1. `clear()` - Clear all of the storage

### Demo
Refer to the [Demo file](Demo.md) to walk through the  demo of local storage.

1. Console manipulation of local storage
1. Saving an array into local storage
1. Retrieving the array from local storage and converting it back to JS. 



