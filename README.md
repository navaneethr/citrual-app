# Citrual_App
A Coding Challenge for Cirtual

<h1>! Make Sure your Interent is working for this 
App to work becuase it makes use of the CDNs from the internet and also the Database is hosted on mLab</h1>

<h2>The application is running on port 4001 so make sure there is no service attached to that port</h2>

<h3>This is built using MEAN stack, Node and Express for server side scripting, 
AngularJS 1.6.4 for Front End and MongoDB hosted on mLab for the back end database </h3>

<h3>TO DO's before you start</h3>

<ul>
    <li>Make sure your internet is working</li>
    <li>Install Node onto your system and NPM comes with it</li>
</ul>

<a href="https://nodejs.org/en/"><img src="https://image.ibb.co/kM8Eu5/node_Download.png"></a>

<p>Let's get started....</p>

<ul>
    <li><h4>Clone the repo and open the project folder</h4></li>
    <li><h4>Open your Command Prompt and use it to navigate to the project folder</h4></li>
    <li>
        <h4>First thing to do is run the command "npm install" to install all the dependancies, you do not need to run this command because I downloaded all the dependancies into the node_modules folder, but I'd suggest to do it since it is safer to know everything is installed perfectly.</h4>
    </li>
    <li><h4>Now that you have installed all the dependencies, it is time to run the application, stay in the project folder on your command prompt and type "node server" and that should start your server on port 4001</h4></li>
    <li><h4>It is time to open the browser and go to "127.0.0.1:4001" or "localhost:4001", TADA....</h4></li>
</ul>

<h1>I hosted my database on mLab which provides online services for MongoDB and you can use it by following the steps : </h1>
<ul>
    <li><h4>To access my data, first one needs to install MongoDB onto their computers, once done, set environment variables</h4></li>
    <li>
        <h4>Go to command prompt now and type "mongo ds017726.mlab.com:17726/custdb -u admin -p admin" in your shell to connect to my online DB<h4>
    </li>
    <li><h4>once done, type "db.customers.find().pretty()" on your shell and press enter, you will have access to my data.</h4></li>
</ul>
        <h3>Here is a Sample DB Schema with data</h3>
        <img src="https://image.ibb.co/i7wynQ/sample_Schema.png" alt="sampleSchem">
        <h1>Here is the Final Product</h1>
        <h2>Home<h2>
            <h4>Laptop & Desktop View</h4>
            <img src="https://image.ibb.co/eOZ7gk/homePage.png" alt="homePage">
            <h4>Mobile and Tablet View</h4>
            <h5>You could still scroll left and right to view additional data</h5>
            <img src="https://image.ibb.co/hObngk/homeMob.png" alt="homeMobile" width="30%">
            <h5>A full functional Sidebar for Mobile View</h5>
            <img src="https://image.ibb.co/g3Hzu5/sideBar.png" alt="sideBar" width="30%">
            <h1>Applied Search Filters so one could filter by Name</h1>
            <h5>Search with "C"</h5>
            <img src="https://image.ibb.co/jBpLZ5/search_With_C.png" alt="searchWithC">
            <h5>Search with "Co"</h5>
            <img src="https://image.ibb.co/ggxk1k/search_With_Co.png" alt="searchWithCo">
            <h5>Search with "Cou"</h5>
            <img src="https://image.ibb.co/kiEnE5/search_With_Cou.png" alt="searchWithCou">
            <h1>Navigation to other pages while maintaining the header</h1>
            <h5>Inbox Page</h5>
            <img src="https://image.ibb.co/jzFNgk/inbox_Page.png" alt="inboxPage" width="70%">
            <h5>Calender Page</h5>
            <img src="https://image.ibb.co/gsS2gk/calender_Page.png" alt="calenderPage" width="70%">
            <h5>Profile Page</h5>
            <img src="https://image.ibb.co/dbXPu5/profile_Page.png" alt="profilePage" width="70%">
            <h1>Requirements Accomplished</h1>
            <ul>
                <li>Implemented the exact Wireframe as given in the Cirtual Image</li>
                <li>All buttons on the header link to other pages while maintaining the header across all pages</li>
                <li>The data doesn't come from local website, it comes from DB hosted on mLab</li>
                <li>Search only Filters the data according to the name typed in the search bar</li>
                <li>Maintained session state and data persists even after page refresh</li>
                <li>Made the website responsive with an animated menu bar for small screens</li>
            </ul>
            <h1>Thank you and have fun</h1>
            
            
            
         
