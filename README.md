# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

When you enter an address in the address bar, the browser searches, first locally then globally, to find the IP address of the desired information (the HTML, CSS, and JavaScript) to render the full webpage the client requested.

## From start to finish how does that data reach you to be rendered in the browser?

The browser first searches the local DNS (Domain Name Server) cache for the IP Address of the requested page. If it is not located locally (because it has not been accessed locally recently), the browser searches the operating system's host file. If it is still not there, the search goes to the operating system's DNS, then the Internet Service Provider's cache. If it is still not available, because the browser has not hit any of these caches the IP address will be found by the global internet. The location has now been found and can be sent (and stored along the way) back through the ISP, operating system, and browser. Once this location is found and secured, HTTPS securely requests the actual HTML and supplementary code to be rendered on the client side. The request is sent through a chain of computers (the internet) until a program on the web server (remote client) receives the request to find the information for the Techtonic homepage on the remote hard drive. If it is a document, it can just be returned. If there is a lot of personalization, other servers can be accessed to accumulate that data. The information is then sent back in a similar method, traveling via a chain of computers until the local browser receives the HTML and begins rendering on local client.

## What code is rendered in the browser?

Browser first accesses the HTML that is sent back but this HTML file can reference many other things, such as images or links. Also attaches CSS stylesheets or JavaScript that needed to be found for code to be rendered as intended. But this is all part of the original HTML document.

## What is the server-side code’s main function?

The server-side's main function is to store the data globally at an IP address in the cloud for access by web browsers at desired time. A web server or many can be accessed to get this desired data. The server side is also crucial for user authentication at login and security.

## What is the client-side code’s main function?

The client-side's main function is to interact with the software by browsing for it on the global internet with the local browser and hard drive. The display for the software stored on the server side.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I am not certain what this question is asking but I believe its just the one set of code that is requested that is an instant. The HTML, CSS, and JavaScript are loaded first, then there is a reload with other JavaScript properties and a third one to solidify the complex code. But the instance is just once.

## How many instances of the server-side code are available at any given time?

Similarly, I am not certain what this is asking but I believe it is also once: the code that is located on the web server. Although this can be located on more than one server, it is one master code that is located globally in the cloud. This code can be accessed countless times to be accessed.

## What is runtime?

The runtime is the time during which the program is loading on the client side. From what I understand the HTML, CSS, and JavaScript are delivered and the time it takes for the features to render is runtime.

## How many instances of the databases connected to the server application are created?

It depends on what the server side is doing. If it is needing to access login information and security features, there could be many instances that databases are accessed in a web search. In this example, probably multiple times. If one were looking for an HTML document that was basic, probably less.
