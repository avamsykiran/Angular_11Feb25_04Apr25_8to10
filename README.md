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

        compiling ts into js
            
            npx tsc filename.ts 

    Angular Introduction
    ----------------------------------------------------------------

        is a single-page-app framework.

        It's features are
            (1) HTML extendability - we can create our own html-elements and attributes.
            (2) Modularity 
            (3) Server Side Rendering and Static Site Generation
            (4) InBuilt modules for api-communication, authentication and authorization, routing ..etc.,

        Dynamic Web App

            Server                                  Client
                server-side-program
                (.aspx,.php,.jsp,...etc)
                                <----------REQ-------
                    SSP is executed
                    on the server
                    and it generates
                    html content 
                    dynamically
                                -------RESP (.html)----->

        Single Page App - is a web app that has only one page, and its contnet is dynamically changed.

            Server                                      Client
                spa-bundle
                (index.html + .js)
                                <----------REQ-------       
                                -------RESP (.html)----->   spa-bundle is loaded

                                                            index page along with tis JS is loaded.
                                                            And any event or link or form submition is
                                                            handeld by the JS on the client.

                                                            JS on the client generates requried html dynamically
                                                            and replaces the content of the index page with
                                                            the generated content.

                web-service     <--------(.xml/.json)--------> for data operations
                (Rest-api)

            Database <--------------->  web-service <---------> spa <-------> end-user

    Angular Archetecture
    ----------------------------------------------------------------

        An angular application is built with resources like 

        Component 
        Directive
        Service
        Pipe
        Module

        Each and every artifact is a typescript class
        
        Each of these are marked with a decorator to indicate the role of the artifact
        
        The configuration of each of these artifacts is passed as a json--obj to the 
        decorators and is called meta-data.

        Component
            @Component({
                selector:"",
                templateUrl:"",
                standalone:true
            })
            class DashboardComponent {

            }

        Directive
            @Directive({
                selector:"",             
                standalone:true
            })
            class StockStatusDirective {

            }

        Service
            @Injectable({
             providedIn:'root'
            })
            class StockService {

            }

        Pipe
            @Pipe({
                name:"".
                standalone:true
            })
            class IntoWordsPipe {

            }

        Module
            @NgModule({
                declarations:[],
                imports:[],
                exports:[],
                providers:[]
            })
            class SalesModule {

            }

    Angular CLI
    ---------------------------------------------------------------------

        is a command-line-interface that works like a frontier of commands used to
        manage the life cycle of an angular application.

        tools like angular-cli, testing tools (karma and jasmine), minification and build tools ..etc.,
        are executed on nodejs and after building the app, the app runs on a browser.

        modern angular also offers SSG and SSR to reduce intial loading time, and the SSR is executed
        as well on nodejs.

        ng new app-name             to create a new angular app

        ng add feature-name         to add a new module or a feature

        ng build                    to compile ts into js and builds the app into 'dist' folder

        ng serve                    to compile ts into js and luanch the app on a dev-server at 4200

        ng serve --port 9999        to compile ts into js and luanch the app on a dev-server at 9999

        ng serve --port 9999 -o     to compile ts into js and luanch the app on a dev-server at 9999, opens the browser

        ng test                     to invoke test cases
        
        ng g c ComponentName 
            generate a new stand-alone component
            --skip-tests        will avoid generateing test cases
            --no-standalone     to create a component inside a module
            --module            will carry the module name

        ng g directive DirectiveName
            generate a new stand-alone directive
            --skip-tests        will avoid generateing test cases
            --no-standalone     to create a component inside a module
            --module            will carry the module name
        
        ng g pipe PipeName
            generate a new stand-alone pipe
            --skip-tests        will avoid generateing test cases
            --no-standalone     to create a component inside a module
            --module            will carry the module name

        ng g service ServiceName
            generate a new service
            --skip-tests        will avoid generateing test cases
            
        ng g module ModuleName
            generate a new module
    
    Angular Components
    ---------------------------------------------------------------

        a component in angular is a angular built html-element.
        each component is made up of three parts 
            the component-class     dashboard.component.ts      holds the state and behaviour of the component
            the template            dashboard.component.html    holds the html-dom to be rendered for this component
            the styleSheet          dashboard.component.css     holds the style local to this component

        dashboard.component.ts  
            @Component({
                selector:"app-dashboard",
                templateUrl:"dashboard.component.html",
                styleSheets:["dashboard.component.css"],
                standalone:true
            })
            export class DashboardComponent{
                //state as fields and behaviour as methods
                String userName;
            }

        <app-dashboard></app-dashboard>

        Data Binding

            is to access the fields and methods of a component-class in the component-template.

            Interpolation
                is to render the value of an angular-expression in the content of an html-element.

                <tag-name> {{angular-expression}} </tag-name>

                <p> The current user is {{userName}} </p>

            Two-Way Data Binding
                is to bind the value of a field to an input-element and vice-versa.
                'ngModel' is a built-in directive from 'FormModule' that is used to execute two-way dta binding.

                <input [(ngModel)]="field" />

            One-Way Data Binding