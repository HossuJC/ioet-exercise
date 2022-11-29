<a name="readme-top"></a>

<h3 align="center">IOET EXERCISE - ACME EMPLOYEE COINCIDENCE COUNTER</h3>

  <p align="center">
    Program to count the shift coincidences between every possible pair of employees of ACME.
    <br />
    <br />
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#exercise-instructions">Exercise Instructions</a></li>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#approach-and-methodology">Approach and Methodology</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- EXERCISE INSTRUCTIONS -->
## Exercise Instructions

The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

Example 1:

INPUT

RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00

ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00


OUTPUT:

ASTRID-RENE: 2

ASTRID-ANDRES: 3

RENE-ANDRES: 2


Example 2:

INPUT:

RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00

ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

OUTPUT:

RENE-ASTRID: 3

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- OVERVIEW -->
## Overview

This project is a console application with a possible solution for the given exercise. The application allows to get all the job shift coincidences between every possible pair of employees specified in a text file with a specific format.

To get a correct output the text file must follow the next rules:
* Each line must represent the information of only one employee.
* The line must include the name of the employee in uppercase followed by an equal sign (=).
* The shifts of an employee must be separated by commas (,) and after the equal sign.
* The two first characters of the shift must be the two first letters of the day in uppercase.
* The time range must be after the two letters of the day, with the two hours separated by a hyphen (-) and in 24 hours format.
* Only one shift is allowed per day.
* All the shifts must be ordered by day and start time.

All these rules and assumptions were obtained from the examples in the exercise instructions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## ARCHITECTURE

The project was built with:

* [Node.js](https://nodejs.org/), as run time environment.
* [JavaScript](https://www.javascript.com/), as main programing language.
* [Jest](https://jestjs.io/), as test library.

The project also applies an MVC (kind of) structure, declaring the models as the skeletons of the objects and the controllers where all the functionality regarding a model is placed. No views were required since this is a console project.

This is the folder structure of the project:

```sh
├── node_modules
├── resources
│   ├── ***.txt
├── src
│   ├── controllers
│   │   ├── employee
│   │   │   ├── ***.controller.js
│   │   │   ├── ***.controller.test.js
│   │   ├── schedule
│   │   │   ├── ***.controller.js
│   │   │   ├── ***.controller.test.js
│   ├── models
│   │   ├── ***.js
│   ├── index.js
├── .gitignore
├── README.md
├── jest.config.js
├── package.json
└── package-lock.json
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## APPROACH AND METHODOLOGY

The solution was build using Test Driven Development. For every function in the project the tests were written first, then the code for the function was completed making sure that the function returns the expected output.

The functions in the controllers were made trying to follow the 'divide to conquer' approach, every function resolves a small problem and then all the functions work together to solve the whole problem. For example, to get the list of the Employee's shifts ('schedules' in the project), one function was made to parse the string of the shift, another one parse multiple string using the last function, following a chain of responsibility design pattern.

To optimize the code and improve legibility, refactoring was needed. As Test Driven Development was used, after every refactor operation, the tests were run again to check if the code was still working properly.

Finally, in order to optimize the code, one of the most critical operations, to check the coincidences between two arrays of shifts (schedules), was refactored to apply a recursively algorithm instead of using a iterations loops nested in another which is very heavy operation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Node.js ([Download](https://nodejs.org/en/download/))
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/HossuJC/ioet-exercise/
   ```
2. Navigate to the project folder
3. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

To execute the project, use the command:
```sh
npm run start
```
This will run the code using a default text file included in the project.

To run the code with a custom text file, the path must be passed as a parameter:
```sh
npm run start [filepath]
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- TESTING -->
## Testing

Unit Testing and Coverage Testing were made for the project using [Jest](https://jestjs.io/).

Use this command to run all the tests:
```sh
npm run test
```

The result of all the tests will appear on the console.

Once the tests have run, Jest will create a folder "coverage" in the root of the project. This folder contains an html report of the coverage test. It can be opened using the next command in windows:
```sh
./coverage/lcov-report/index.html
```
or following the path manually and opening the index.html file.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Josue Cabezas - josue.a.cabezas@gmail.com

Project Link: [https://github.com/HossuJC/ioet-exercise/](https://github.com/HossuJC/ioet-exercise/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
