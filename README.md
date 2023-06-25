# lib
Contains a version-aware library, i.e., the library can be asked for its version, for example, to include it in log messages or data records. The library may also contain other logic.

## How To Run It

Make sure that you have NodeJS (>=14) and NPM installed.

#### Clone

Clone this repo to your local machine using
```
git clone https://github.com/remla23-team15/lib.git
```

#### Run
Move to  the application folder and run in your terminal:
```
# Start NodeJS shell
node

> version = require("./index.js")
> version.getVersion()
"version.printed.here"
> .exit
```

## Python Module

The version-aware library also contains a python module that can be used in other python apps.
To import the `lib` python version your python project, you can add the following to your `requirements.txt` file:

``` 
# Add to requirements.txt or other dependencies list in your python project
remla-lib @ git+https://github.com/remla23-team15/lib@main
```

## Contributors

REMLA 2023 - Group 15
