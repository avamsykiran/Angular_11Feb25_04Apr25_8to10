Angular
------------------------------------------------------------------------

    Objectives : 
    1. Core Concepts like standalone APIs, Component-based architecture, Directives, DI, Forms, Pipes, Lifecycle hooks etc.
    2. Also, need to cover on new features that got introduced post Angular 17+ like View Transitions API, Signal based State Management, Deferrable Views, Control flow, SSR, ESBuild, Zoneless Angular etc.
    3. Advanced Angular Features like Component Communication, Content Projection, State Management, Unit testing, end-to-end testing etc.
    4. Performance
    5. Full-stack API Integration

    Pre-Requisites
        HTML 5
        CSS 3
        JavaScript (ES6)
        TypeScript

    Lab Setup
        NodeJS 20 or above
        VSCode as IDE

    
    NodeJS

        NodeJS is a runtiem for javascript.
        It uses npm - node package manager as a build tool
        
        To Create a node application
            md app-folder
            cd app-folder
            npm init -y

            'npm init' will initialize 'package.josn' file which holds the project meta data and list of dependencies and
            list of applicateion life cycle scripts.

        Install a dependency
            npm i thrid-party-package-name
        
        Install a dev-time dependency
            npm i thrid-party-package-name --save-dev

        Uninstall a dependencuy
            npm uninstall thrid-party-package-name

        Installing a dependency globally
            npm i --global thrid-party-package-name
        
        'node_modules' is the folder that holds the downloaded dependencies in our application.

        npm-scripts

            npm start       is a customizable script to launch our application
            npm test        is a customizable script to invoke test cases of our application
            npm build       is a customizable script to invoke build of our appliation
            
            npm run script-name     will allow us to trigger scripts of our own

        ECMAScript modules

            native javascript has no concept of modules.
            ES6 onwards each .js file is a module.
            'export' keyword will allow any variable/ function/ class/ object ..etc., of a module to be accessed in another module
            'import' keyword will import any variable/ function/ class/ object ..etc., of a module into another module

    TypeScript

        is a microsoft product and is a suepr set of javascript with typesafty.

        typescript = javascript + typesafty

        Data Types
            number
            string
            boolean
            bigint
            void
            null
            undefined
            any
            unknown

        User Defined Data Types
            class
            interface
            enum
            type-alias
            unions

        any vs unknown

            function dummy(obj:any):void {
                console.log(obj.fullName); //will not give any compile time error
            }

            function dummy(obj:unknown):void {
                console.log(obj.fullName); //will give a compile time error
            }
            
            function dummy(obj:unknown):void {
                if(typeof obj ==="Contact"){
                    console.log(((Contact)obj).fullName); //will not give a compile time error
                }
            }

         Creating a project:

            md app-folder
            cd app-folder
            npm init -y
            npm i typescript --save-dev

            npx tsc --init                  //creates a tsconfig.json file

            npx tsc filename.ts 

            


    