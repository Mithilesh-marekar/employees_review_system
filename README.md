## Problem statement
Create an application that allows employees to submit feedback toward each other’s performance


## Features

# Admin view
------Add/remove/update/view employees
------Add/update/view performance reviews
------Assign employees to participate in another employee's performance review
# Employee view
List of performance review requiring feedback
------Submit feedback
------Make 1 login for admin and employee
------An employee can register, only admin can make an employee an admin


# Directory Structure

--------------------------------------------to be updated-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

EmployeeReviewSystem
├── src
│   ├── app
│   │   ├── controllers
│   │   │   ├── EmployeeController.java
│   │   │   └── ReviewController.java
│   │   ├── models
│   │   │   ├── Employee.java
│   │   │   └── Review.java
│   │   └── views
│   │       ├── EmployeeView.java
│   │       └── ReviewView.java
│   ├── utils
│   │   ├── DatabaseConnector.java
│   │   └── Logger.java
│   └── Main.java
├── tests
│   ├── integration
│   │   ├── EmployeeControllerTest.java
│   │   └── ReviewControllerTest.java
│   ├── unit
│   │   ├── EmployeeTest.java
│   │   └── ReviewTest.java
│   └── test_data
│       ├── sample_employees.json
│       └── sample_reviews.json
├── config
│   └── settings.properties
├── build
├── lib
├── README.md
