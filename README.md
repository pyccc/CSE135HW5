CSE135HW3
====
Author: Chang Lei, Peng Yucheng
pid: A16185861, 16185910
firebase link:
  Function URL: https://us-central1-cse135-hw3-d14c9.cloudfunctions.net/showdb
                https://us-central1-cse135-hw3-d14c9.cloudfunctions.net/collect
                
note: You can just simply use navigation bar to go to each page. For static data, it is stored in the cloud database and can be called once you click the related button on the test page. Since it will be hard to be messed up, there is no purge function implemented for them. For time information, it will be stored separately for each page. For dynamic data, especially click and mouse movement, I use several examples to show my logic. I did not make it working for all parts of each page since it may be very time consuming. You can test my results using the button in form.html as well as the first three buttons in test page. Besides, you can test my mouse movement function using the flower image file in images.html as well as the image in the test page. For keystrokes, only input area in form.html is implemented. Each of the handler supports a purge function as well as requested. Please feel free to ask me if there is anything confused.


Minify traker.js: The code is modified manually to minimize the size. We store the data temporary instead of storing in localstorage, and sent user actions together before user unloading the page.

Data storage:
  Page info: collect/page_info
  User history: collect/user_history
  keystroke: collect/user_history   (only record information in form page)
  click: collect/click
  mouse on: collect/mouseon (mainly record information in image page)
  idle: collect/idle
  
 /click, /mouseon, /idle only collect the most recent user action in each page, ie. reentering the page will cover previous information
  /user_history records all user action in chronological order using JSON format(time as key, user action as value)
