CSE135HW5
====
Author: Chang Lei, Peng Yucheng
pid: A16185861, A16185910

firebase hosting URL : https://cse135-final-68729.firebaseapp.com

# User Action Tracker
This application is a system which allows users to try on several static pages and records their actions into firebase database. And an admin user will be able to view the tracked data using charts and grids.

## Login Page
You can login as two users: 135grader@ucsd.edu or 135fakegrader@ucsd.edu, with the same password: password
The chart page and grid page will be accessable only when you login as 135grader@ucsd.edu. Otherwise they would be hidden and the page will tell you to login as 135grader@ucsd.edu.

## Static Pages
The static pages include index.html, images.html, form.html, tables.html and externals.html. User can try mouseover, click, idle and keystroke events in different page. The user action data in these pages will be tracked into database.

## Chart Page
This page consists of 3 charts containing same data: bar chart, pie chart and line chart. The data is user actions tracked from all other static pages. The library we use is HighCharts.

## Grid Page
This page consists of a data grid with static data. The data grid supports features including sorting, filtering, searching and pagination. The data is user keystroke data recorded from form.html page. The library we used is Zing-Grid.

Note: The delete button at the top of each page is used to clean storage. After you click delete button, all records and login user information will be deleted.
## Firebase Usage

firebase founction link:
  Function URL: https://us-central1-cse135-hw3-d14c9.cloudfunctions.net/showdb
                https://us-central1-cse135-hw3-d14c9.cloudfunctions.net/collect
                
note: You can just simply use navigation bar to go to each page. For tracked data, it is stored in the cloud database and can be called once you click the related stuffs on the test page. For time information, it will be stored separately for each page. 

Data storage:
  Page info: collect/page_info
  User history: collect/user_history
  keystroke: collect/user_history   (only record information in form page)
  click: collect/click
  mouse on: collect/mouseon (mainly record information in image page)
  idle: collect/idle
  
 /click, /mouseon, /idle only collect the most recent user action in each page, ie. reentering the page will cover previous information
  /user_history records all user action in chronological order using JSON format(time as key, user action as value)
