
//     What Is An API 
//     1. Application Programming Interface
//     2. Contract provided by one piece of software to another
//     3. Structured request and response
//     4. We just worked with an API that takes a request and response with jokes (chuck noris project)

//     REST APIS
//     What is REST?
//     1. Represtational State Transfer
//     2. Architecture style for designing networked applications
//     3. Relies on a Stateless, client-server protocol, almost always HTTP
//     4.Treats server objects as resources that can be created or destroyed
//     5. Can be used by virtually any programming language
//     6. All APIS have their own rules and structure

//     Key: An API is the Messager and REST APIS lets us use HTTP requerst to format that message. 
// /////////////////////////////////////////////////////

//     HTTP Request
//     GET: Retrieve date from a specified resource
//     POST: Sunmit data to be processed to a specified resource 
//     PUT: Update a specified resource
//     DELETE: Delete a specified resource

//     Other types of Request are...

//     HEAD: Same as get but does not return body, only returns the HEADER
//     OPTIONS: Returns the supported HTTP methods of that specific server
//     PATCH: Update partial resources
// ///////////////////////////////////////////////////

//     API Endpoints

//     When you have some kind of API, whether it's your own, or its an external you will have somehting called End points. The API End points are the URLs that you access to do certai things. A common Endpoint to GET ALL users...see more below

//     // some URLs are exactly the same which is fine as they are different methods

//     GET http//someurl.com/api/users    // Get all users
//     GET http//someurl.com/api/users/1  //Get single user

//     not: these next end points you will be sending data along with your request, because it needs to know the post data to add(POST), which post to update(PUT) aswell as the data that you want to update it with. And (DELTE) will delete a user based on the ID passed in the url.

//     POST http//someurl.com/api/users   // Add user
//     PUT  http//someurl.com/api/users/1  // Udate user
//     DELETE http//someurl.com/api/users/1  // Delete user 

// -->
//////////////////////////////////////////////////////////////////////////////
// <!--
//     CALLBACK FUNCTION
// -->




// A CallBack function --- is  a function thats passed in as a paremeter to another function and then its ran inside the function body. So for example when we use a forEach on an array,array.forEach() and then we pass in functions, thats acutally a callback. This callback is not asynchronous, meaning it does stop anything else from happening until its done, but it is in fact a callback. We have synchronous and asynchronous callback functions.  Another example is setTimeout() which takes in a callback function which IS asynchronous, meaning things can happen while setTimeout() is running.

// Mimic actions of creating a blog post on a server, or through an api or data base. We will only use a hard coded array, but pretend that it's from a server, and also getting those blog posts back. In some cases the server may return your post before your new post is added, and your new post wont be included. Even you if you run the createPost() function before getPost() that could happen. So will see this situation below using setTimeout(), so will use this to mimic the server response. See how that can mess things up, and then see how we can use a callback to fix it!

// Lets create a variable called posts, which will mimic our server and data base...
const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

// function createPost(post) { // we mimic server response time with setTimeout().
//     setTimeout(function () { // This is a callback
//         posts.push(post)
//     }, 2000) // 2 seconds, two thousand milliseconds
// }

// function getPosts() { // Use getPosts to get our posts and display them in browser
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>` // we append to output +=
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// // we want to create the post now and then call getPost after that. 

// createPost({ title: 'Post three', body: 'This is post three' });

// getPosts();

// We only get post one and post two, where is post three?

// The server took 2 seconds to create the post, and it took 1 second to get the posts. It got the post before the previous function was created the post. So we did this in a synchronous way. 

// below we do it in a asynchronous way using a callback... 

function createPost(post, callback) { // With create post we can pass in a callback (call it whatever you want..alot of times you see CB aswell)
    setTimeout(function () { // This is a callback
        posts.push(post);
        callback(); // we say callback and it will be a function

    }, 2000) // 2 seconds, two thousand milliseconds
}

function getPosts() { // Use getPosts to get our posts and display them in browser
    setTimeout(function() {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>` // we append to output +=
        });
        document.body.innerHTML = output;
    }, 1000)
}

createPost({ title: 'Post three', body: 'This is post three' }, getPosts); // what will happen is when createPost is called it will call getPosts() aka callback() in createPost function within/befor those 2 seconds actually ends. Post three is now included in the get post. We did this asynchronously with a callback function. 

// Callbacks are essentially a function that can be passed in to another fucntion and then called within that function. 
