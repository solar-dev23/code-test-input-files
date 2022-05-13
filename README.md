# Input Files Command Line App

## Description

A command line application that input files and sort content by conditions.

## Getting Started

### Prerequisites

- [Node.js v14+](https://nodejs.org)

### Installation

#### Install NPM packages

```bash
npm install
```

### Run APP

```bash
$ node .
```

### Run Test

```bash
$ npm test
```

### Expected output

```bash
Hingis Martina Female 4/2/1979 Green
Kelly Sue Female 7/12/1959 Pink
Kournikova Anna Female 6/3/1975 Red
Seles Monica Female 12/2/1973 Black
Abercrombie Neil Male 2/13/1943 Tan
Bishop Timothy Male 4/23/1967 Yellow
Bonk Radek Male 6/3/1975 Green
Bouillon Francis Male 6/3/1975 Blue
Smith Steve Male 3/3/1985 Red

Abercrombie Neil Male 2/13/1943 Tan
Kelly Sue Female 7/12/1959 Pink
Bishop Timothy Male 4/23/1967 Yellow
Seles Monica Female 12/2/1973 Black
Bonk Radek Male 6/3/1975 Green
Bouillon Francis Male 6/3/1975 Blue
Kournikova Anna Female 6/3/1975 Red
Hingis Martina Female 4/2/1979 Green
Smith Steve Male 3/3/1985 Red

Smith Steve Male 3/3/1985 Red
Seles Monica Female 12/2/1973 Black
Kournikova Anna Female 6/3/1975 Red
Kelly Sue Female 7/12/1959 Pink
Hingis Martina Female 4/2/1979 Green
Bouillon Francis Male 6/3/1975 Blue
Bonk Radek Male 6/3/1975 Green
Bishop Timothy Male 4/23/1967 Yellow
Abercrombie Neil Male 2/13/1943 Tan
```

### Improve Suggestions

- Use Typescript

## Assessment
### Pros
 * really nice readme
 * util functions for transforming data
 * lots of error handling
 * creation of mock data
 * sort functions broken out
 * output is correct
 * tests on sorting
 * responsibilities broken down quite nicely in primary binary file
 * very functional in programming style
 * tests run and all pass

### Areas that could be improved
 * sort tests a bit cumbersome to read through
 * relies on input delimeter type to be tied to the filename
 * perhaps a nitpick, but a slight preference for breaking down the primary binary file, not having all the main work functions in it
 * console output in the tests

### Areas to change
 * allow input files to be arbitrarily named
 * allow input files to be passed into the binary as CLI args
 * triky-pipe

https://prod.liveshare.vsengsaas.visualstudio.com/join?B98FD404B2CB892021D535ED3B46E0B6A591

