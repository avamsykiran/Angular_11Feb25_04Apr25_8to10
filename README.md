Angular
------------------------------------------------------------------------

    Objectives : 
    1. Core Concepts like standalone APIs, Component-based architecture, Directives, DI, Forms, Pipes, Lifecycle hooks etc.
    2. Also, need to cover on new features that got introduced post Angular 17+ like View Transitions API, Signal based State Management, Deferrable Views, Control flow, SSR,  Zoneless Angular etc.
    3. Advanced Angular Features like Component Communication, Content Projection, State Management
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
                is to bind a field or method on to non-editable attributes of dom.

                Attribute Binding
                    is to bind a field with a attribute of an element.

                    <tagName [attribute]="angularExpression"> content </tagName>

                    <p title="this is a para"> This is a para </p> <!- this is not binding -->
                    
                    <p [title]="paraTitle"> This is a para </p> <!- this is binding the value of 'paratitle' -->

                Event Bidning
                    is to bind a method to an event directives

                    Event-Driectives are built-in Angular defiend attributes to handle events.

                        click
                        dblClick
                        focus
                        change
                        blur
                        ngSubmit
                        mouseover
                        mouseup
                        mousedown
                        ...etc.. (its 'on' word removed from html-event-attributes)

                    <tagName (eventDirective)="method()"> content </tagName>

                    <button type="button" (click)="doSomething()"> clicke me </button>

                Style Binding

                    is to bind a field with a css-property or 'ngStyle' directive.

                    <tagNAme [style.cssProperty]="angularExpression"> content </tagName>

                    <p [style.textAlign]="myTextalignField"> content </p>
                    
                    <tagNAme [ngStyle]="aJsonObject"> content </tagName>

                    @Component({ .. })
                    class MyComponent {
                        myParaStyle:any;

                        construcotr(){
                            this.myParaStyle = {border:"1px solid black",textAlign:"right"};
                        }
                    }
                    
                    <p [ngStyle]="myParaStyle"> content </p>

                Class Binding

                    is to bind a field to eh 'class' attribute of an element.
                    this allows the dev to add or remove css-class dynamically.

                    <tagNAme [class.className]="boolenaAngularExpression"> content </tagName>

                    @Component({ .. })
                    class MyComponent {
                        isImportant:boolean

                        construcotr(){
                            this.isImportant = true;
                        }
                    }

                    <p [class.important]="isImportant"> This is a para </p>

                    <tagNAme [ngClass]="anArrayOfClassesOraJsonObj"> content </tagName>

                    @Component({ .. })
                    class MyComponent {
                        myParaClasses:string[];

                        construcotr(){
                            this.myParaClasses=["importnat","highlight"];
                        }
                    }

                    <p [ngClass]="myParaClasses"> This is a para </p>

                    @Component({ .. })
                    class MyComponent {
                        myParaClasses:any;

                        construcotr(){
                            this.myParaClasses={importnat:true,highlight:false};
                        }
                    }

                    <p [ngClass]="myParaClasses"> This is a para </p>

    Integrating Bootstrap
    -----------------------------------------------------------------------

        bootstrap is a css-js library that offers responsive web design.
        bootstrap-icons is a css library that offers icons.

        npm i bootstrap bootstrap-icons

        these are installed in the node_modules folder.

        the .css files of this library msut be added to the 'styles' section of angular.json file
        the .js files of this library msut be added to the 'scripts' section of angular.json file

    Angular Routing
    -----------------------------------------------------------------------

        Routing is to map a component to a url, and render the mapped component only
        when its url is requested.

        Angular provides RouterModule for this priupose.

        RouterModule

            Route               object      {
                                                path:'urlToBeMapped',
                                                pathMatch:'startsWith|full'
                                                component:Component,
                                                redirectTo:''
                                                children:][],
                                                loadChildren :  lazyLoadingFunction,
                                                canActive: routerGuardArray,
                                                canLoad: routerGuardArray,
                                                canDeactive: routerGuardArray,
                                            }

            Routes              Route[]

            Router              buitl-in service used to navigate progrmatically
                                navigate("url");
                                navigateTo(["segment1","segment2"]);

            ActivatedRoute      built-in service used to read url-paramter, or url related
                                data like path, querystring ..etc.,

            RouterLink          built-in directive to be used on 'a' element instead of its href

            RouterLinkActive    built-in directive to be used on 'a' element to apply a css-class 
                                only when a link is visited

            RouterOutlet        built-in component that reserve place on the layout, to be
                                replaced by the mapped component of the current url.

    Angular Flow Controls
    -----------------------------------------------------------------------

        Legacy Directives from CommonsModule
            NgIf
            NgFor
            NgSwitch    NgSwtichCase    NgDefault

        Modern Flow Controls
            are built-in angular native controls that need to additonal improts to use

            @if(cond) {
                //html dom
            } @else {
                //alternate html dom
            }

            @switch(exp){
                @case (case1) {
                    //html dom if exp===case1
                }
                @case (case2) {
                    //html dom if exp===case2
                }
                @default {
                    //html dom for default senario
                }
            }

            @for(loopingVar of array; track $index){
                //html dom we wnat to repeat one for each value in the array
            }@empty{
                //html dome that shall render incase the array is empty
            }

            variables injectable by for
            $index      the index of the current element
            $even       is the current element index is even
            $odd        is the current element index is odd
            $first      is the current element index is the first
            $last       is the current element index is the last
            $count      the number of elements that are iterated over .
    
    Inter Component Communication via @Input decorator
    ----------------------------------------------------------------------------

        When a parent component has to share some object with a child component, it does it
        through attributes, An attribute of a component is a field of the component class marked with
        @Input decorator.

        navbar.component.ts
        -----------------------------
        @Component({
            selector:"nav-bar",
            ....
        })
        class NavBar {
            @Input()
            title!:string;
        }

        app.component.html
        --------------------------------------------
        <nav-bar title="title can be passed here"></nav-bar>
        <nav-bar [title]="aVariableFromParentComponent"></nav-bar>

    Angular LifeCycle Hooks
    --------------------------------------------------------------------------

        a lifecyle hook is a method that get invoked automatically at a spacific stage of
        a component or directives's lifecycle.

        constructor()
            ↓
            ngOnChanges() from OnChanges       /* is to detect any chagnes that may occur on @input */
                ↓
                ngOnInit() from OnInit          /* is used to excute a task after the component is 
                    |                             loaded  initially */
                    ↓
                    ngOnChanges() from OnChanges   /* invokes everytime when a change occur on @input */
                        ↓
                        ngDoCheck()                /* is sued to detect any chagnews that angular couldn't */
                            ↓
                            ngAfterContentInit()                
                                ↓
                                ngAfterContentChecked()                
                                    ↓
                                    ngAfterViewInit()                
                                        ↓
                                        ngAfterViewChecked()                
                                            |
                                            ...... /*once the component is closed or removred */
                                            ↓
                                            ngOnDestroy()

        @Component({
            selector:"dashboard",.....
        })
        class Dashboard {
            /*....*/            
        }

        dashboard template
            <section>
                <h3>Some heading</h3>
            </section>

        app component template
            <dashboard>
                <nav>
                </nav>
            </dashboard>

        View        is any dom declared in the template of the component

                    the section and the h3 are said to be the view 
                    we can access these in the dashboard component class using
                    @ViewChild decorator

        Content     is any dom passed to the body of a component
        
                    the nav is called the content.        
                    we can access these in the dashboard component class using
                    @ContentChild decorator

    Angular Directives
    --------------------------------------------------------------------

        A directive is any angular defined element or attribute.

        Types Of Directives
            (a) Component Directives    are otherwise called Components - angular defiend elements

            (b) Structural Directives   are used to control the appearence of an element
                                        NgIf, NgFor, NgSwitch

            (c) Attribute Directives    are angular defiend attributes

                builtin attribute directives like NgModel, NgStyle, NgClass ...etc.,

                we can create a custom attribute directive as well

                ng g directive DirectiveName --skip-tests

                @Directive({
                    selector:"[attribute-name]"
                })
                class DirectiveName {

                }
    
    Angular Pipes
    -----------------------------------------------------------

        A pipe is used to tranform a value into another at the time of rendering.

        syntax: {{ value|piprName:inputs }}

        Built-In Pipes

            lowercase
            uppercase
            titlecase
            number
            currency
            date
            json
            async

        custom pipe

            ng g pipe PipeName --skip-tests

            @Pipe({
                name:"pipe-name"
            })
            export class PipeName implements PipeTransform {
                transform(value:any,args:any){
                    //wrtie code to tranform the given value into a different value
                }
            }
    
    Amgular Services
    -------------------------------------------------------

        A Service is a class the provides bussiness logic or rest-api calls
        to be injected into any other resource.

        ng g service ServiceName --skip-tests

    Angular Forms
    --------------------------------------------------------

        Angular supports two types of forms

        Template Driven Forms

            are constructred in html
            and are bound to fields using ngModel directiove
            from FormsModule

            FormsModule
                ngForm
                ngModel

                and a few validation related properties

            These forms can not accomidate complicated object structures
            like arrays or nested objects.

            These forms are not easy to tests as well.

            These forms are recommended to handle a case that has not more
            then two fields.

        Reactive Forms (Model Driven Forms)

            ReactiveFormsModule
                FormControl
                FormGroup
                FormBuilder

            These forms are built for any complicated object structure.
            These forms are built on component class and are bound
            to the html dom.

            Testing these form easy. 99% we use these forms in angular. Validation
            related properties

            FormGroup       valid,invalid
            FormControl     valid,invalid,touched,untouched,pristine,dirty

    Angular Signals
    -------------------------------------------------------------------

        A signal is wrapper around a value, that notifies the consumers
        when the value changes.

        A consumer is any resource that is listening to the signal.

            WritableSignal

                are signals whose value can be modfiied.

                const count : WritableSignal<number> = signal(0);

                console.log(count());

                count.set(10);                      //to reset the value of a signal

                count.update( value => value+1 );   //will modify the value based on the prev.

            ComputedSignal

                are signals that are computed based on another signal.

                const tax: Signal<number> = computed( () => count() * 0.10 );

            Effects

                an effect is to execute a function when any signal is modified.

                effect(() => {
                    //code written here is executed when ever any signal gets modified.
                });

    RxJS Observables
    -------------------------------------------------------------------

        RxJS reactive-JavaScript    is a library designed for reactive programming.

        reactive programming is to react to an event that occurs from an
        asynchronous operation.

        cosnt bgJob = (observer) => {
            //we can code our asynchonous time consuming operation.
            //we can call observer.next(val) to emit a value amid the operation
            //we can call observer.complete() to signal the completion of the operation
            //we can call observer.error(errMsg) to signla an error in the operation
        };
        
        let ob = new Observable(bgJob);

        //on calling subscribe, the bgJOb is invoked.
        ob.subscribe({
            next:   val => { /*we can do somethign on the value*/ },
            complete: () => { /*we can react to the compeltion of the operation*/},
            error: err => { /*we can react to an error in the operation */}
        }); 

    HttpClientModule
    ----------------------------------------------------------------

        this module offer HttpClient that can be used to make api-calls.

        to activate this module, we will have to include its provider 
        'provideHttpClient()' in app.config.ts file.

        Now we can inject HttpClient into any resource of our application.

        HttpClient
            |
            |- get(url) : Observable
            |- delete(url) : Observable
            |- post(url,reqBody) : Observable
            |- put(url,reqBody) : Observable

    JSON-SERVER
    -----------------------------------------------------------------

        is a thrid party library used to create a fake rest-api.

        to create a fake rest-api app
            md rest-api
            cd rest-api
            npm init -y
            npm i json-server@0.17.4

            we will create rest-api/data.json with hypothetical data.

        to execute the rest-api
            json-server --port 9999 --watch ./data.json
    
    Case Study
    -----------------------------------------------------------------

        Create an angular based SPA to perform CRUD operations
        on 'Employee'. It shall consume the rest-api generated using a json-server.

    Angular Environment Variables
    ------------------------------------------

        ng g environments

        We can create different phases in angular.json as below

          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true,
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.development.ts"
                }
              ]
            },
            "staging": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true,
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.staging.ts"
                }
              ]
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "app03:build:production"
            },
            "development": {
              "buildTarget": "app03:build:development"
            },
            "staging": {
              "buildTarget": "app03:build:staging"
            }
          },
          "defaultConfiguration": "development"
        }

        To activate a phase

            ng serve --configuration=staging
            ng serve --configuration=development
            ng serve --configuration=production

            ng build --configuration=staging
            ng build --configuration=development
            ng build --configuration=production

    Angular State Management using NgRx
    -----------------------------------------------------------------
        Store           is a central object that holds all the data related to the application.
                        generally one appliction will have only one store.                      

        Reducer         is the one that manages the data/state in the store. 
                        Any initialization / insertion / deletion / modification 
                        to the state in the store is done by the reducer.

        Selector        is the one that extracts state from the store into a component.

        Action          is an object that represents an operation dispatched by a component 
                        and to be handled by the reducer. Each action should specify
                            type        indicates what is the operation
                            payload     holds data needed to exedcute that operation

                            for example, if type:"DEL_EMP" then empId msut be the payload.

        Effect          is an adapter to execute asynchronous logic liek api-calls and signal the reducer

            Store   -----SELECTOR -------> Component1
                ↑                           |
                |                           |
                |                           |
                |                           |
                |                           ACTION
                |                           ↓
            REDUCER ←-----------------------|
                ↑                           ↓
                EFFECTS ←--------------------
                |
                |
            SERVICE (rest-api calls)

        ng add @ngrx/store
        ng add @ngrx/effects
    
    Angular State Management using NgRx Signal Store
    -----------------------------------------------------------------

        ng add @ngrx/signals

        Ngrx Signals offers NgRx store with native signals support, that
        makes managing state globally more simple and reactive.

        export const StoreName = signalStore(
            {providedIn:'root'},
            withState(/* initialState "/),
            withComputed(/* computed proeprties */),            
            withMethods((store, apiService = inject(APIService)) => ({
                //define methods to execute api calls from apiService
            }))
        );

        withState       is used to provided initial data into the store
                        each field/property of the inital data is going to be a Signal.

        withComputed    is used to provide computed signals as fields to the store                    
                        it accepts a callback having current-state as param and that callBack msut return a json object of computed signals.

        withMethods     is used top add methods (actions) to the store

                interface ArthStoreType {
                    x: number;
                    y: number;
                }     

                const initialData : ArthStoreType = { x:0, y:0 };

                export const ArthStore = signalStore(
                    {providedIn:'root'},
                    withState(initialData),
                    withComputed(({x,y}) => ({
                        sum: computed( () => x() + y() ),
                        dif: computed( () => x() - y() ),
                        prd: computed( () => x() * y() )
                    })),            //similar to selectors
                    withMethods((store) => ({
                        changeX(x){
                            patchState(store,{x})
                        },
                        changeY(y){
                            patchState(store,{y})
                        },
                    }))             //is a combiantion of actions, reducers and effects
                );

                /*                            
                ArthStore.x()   is a signal<number>
                ArthStore.y()   is another signal<number>
                ArthStore.sum() is a computed signal<number>
                ArthStore.dif() is a computed signal<number>
                ArthStore.prd() is a computed signal<number>
                ArthStore.changeX(10);
                ArthStore.changeY(50);  is similar to dispatching an action
                */

    Router Gaurds 
    ----------------------------------------------------------------------------

        Router Guards are used to protect routes. Router Guards are functions/interfaces that
        execute a logic and grant permission for a route to work.

        ng g guard guards/guard-name

        Types
            CanActivate             check if a route can be activated (work) or not
                                    interface CanActivate
                                    CanActivateFn

            CanActivateChild        check if all-child routes of a route can be activated (work) or not
            CanDeactivate           check if the current-route can be left or not            
            CanLoad                 check if a route can be loaded or not (if it is configed for lazy-loading)
            Resolve                 is used to fetech data before a route is activated
            CanMatch                check if a route can be matched or not

    Interceptors
    ----------------------------------------------------------------------------

        An interceptor is a piece of code triggered before a http-client-req leaves
        our application.

        ng g interceptor InterceptorName --skip-tests

        config:
            provideHttpClient({
                withInterceptors([interceptro1,interceptor2...])
            })

        a. Auditing out going requests
        b. adding headers (authenticatioon token) to an out going req
        c. changing the format of data of an incoming resp

        are a few contexts where interceptors are used.

    Angular App Performence Enhancers
    -----------------------------------------------------

        1. Zoneless Change Detection and Change Detection Strategies / Modes

                Zone.js is the library used by Angular NgZone module to perform change detection.

                    The change Detection happens at a scheduled interval of time by NgZone from
                    top to bottom on the component tree in depth-first-search pattern.

                        app.component
                            |
                            ----------------
                            |              |
                            Component1     Component2
                                |
                                Component1ChildComponent

                    Zone.js offers two modes of Change Detection or two strategies of change detection
                        (a) Default                        
                        (b) OnPush

                    In 'Default' stratagy each and every component is checked for changes in the field of the component, and
                    as and when a change is detected the entire hirarchy of components from that detected component will be re-rendred.

                    We can skip a component from being checked for changes continouly, by marking its changeDetection:'OnPsuh'.
                        These components are verified for changes only when it is marked as 'dirty'.
                        A component is marked 'dorty' when
                            (1) any input-bound fields change
                            (2) ChangeDetectionRef.markForCheck() is invoked
                            (3) any state change happend on the ViewChildren
                            (4) Any chagnes happen to the ContentChildren

                Zone.js is a overhead on the application bundle and also keeps the dubuging stack trace filled with
                change detection calls.

                And here ZoneLess Change Detection comes into picture. Angular 18 has introduced an experimental 
                change detection strategy called zone-less-change-detection.

                In this case, the scheduling of continous change detection will not happen. Rather each component has a 
                nativly designed ChangeDetector that signals the Rendering engine every time a change happens to the state
                of the component. We do not need Zone.js anymore.

                To activate zone-less-change-detection, in app.config.ts,
                    replace
                        provideZoneChangeDetection({ eventCoalescing: true })
                    with
                        provideExperimentalZonelessChangeDetection()

        2. Defered Loading

            Allows to load a time-consuming component lately.

            ComponentA  is the parent of ComponentB.

            component-a.template.html

                <app-component-b></app-component-b>

            If ComponentB is a huge component with lots of heavy javascript to execute, it delays the rendering of ComponentA as well.

            ComponentB can be loaded lately to avoid the delay of ComponentA using @defer block
                
            component-a.template.html
                <div> this will be rendered</div>
                @defer {
                    <!-- this will be rendered only when the browser is idle -->
                    <app-component-b></app-component-b>
                }
                <div> this will be rendered</div>

            All the template of ComponentA will be loaded but not ComponentB until 'browser is idle'.

            Placeholder block

                component-a.template.html
                    <div> this will be rendered</div>
                    @defer {
                        <!-- this will be rendered only when the browser is idle -->
                        <app-component-b></app-component-b>
                    } @placeholder {
                        <div> this will be rendered alogn with the rest of the tempalte and disapperas once the defer block loads </div>
                    }
                    <div> this will be rendered</div>
            
            Placeholder block with minimum display time

                component-a.template.html
                    <div> this will be rendered</div>
                    @defer {
                        <!-- this will be rendered only when the browser is idle -->
                        <app-component-b></app-component-b>
                    } @placeholder(minimum 300ms) {
                        <div> this will be rendered along with the rest of the tempalte and disapperas once the defer block loads </div>
                    }
                    <div> this will be rendered</div>

            Loading Block
                component-a.template.html
                    <div> this will be rendered</div>
                    @defer {
                        <!-- this will be rendered only when the browser is idle -->
                        <app-component-b></app-component-b>
                    } @loading {
                        <div> 
                            this will be rendered once the defered block starts 
                            loading and disappears after the defered block
                            completes loading 
                        </div>
                    } @placeholder {
                        <div> this will be rendered alogn with the rest of the tempalte and disapperas once the defer block loads </div>
                    }
                    <div> this will be rendered</div>

            Error Block
                component-a.template.html
                    <div> this will be rendered</div>
                    @defer {
                        <!-- this will be rendered only when the browser is idle -->
                        <app-component-b></app-component-b>
                    } @error {
                        <div> 
                            this will be rendered if ComponentB could not be loaded or encounters an error.
                        </div>
                    } @loading {
                        <div> 
                            this will be rendered once the defered block starts 
                            loading and disappears after the defered block
                            completes loading 
                        </div>
                    } @placeholder {
                        <div> this will be rendered alogn with the rest of the tempalte and disapperas once the defer block loads </div>
                    }
                    <div> this will be rendered</div>

            Defered Block Triggers

                triggers will decide when shall the loading of the defer start.

                @defer(on idle){
                    <!-- the defered block to load only when the browser is idle, adn this is the default-->
                    <huge-component></huge-component>
                }

                @defer(on immediate){
                    <!-- the defered block to load immidiately after the rendering all non-defered content-->
                    <huge-component></huge-component>
                }

                @defer(on viewport){
                    <!-- the defered block to load after the placeholder block is scrolled into-->
                    <huge-component></huge-component>
                }
                
                @defer(on interaction){
                    <!-- the defered block to load after the placeholder block is clicked-->
                    <huge-component></huge-component>
                }
                
                @defer(on hover){
                    <!-- the defered block to load after the placeholder block is hovered-->
                    <huge-component></huge-component>
                }

                @defer(on timer(timeInMilliSecs)){
                    <!-- the defered block to load after the mentioned delay time-->
                    <huge-component></huge-component>
                }

                @defer(when condition){
                    <!-- the defered block to load once the condition is true for the first-->
                    <huge-component></huge-component>
                }

    Dynamic Component Loading
    -------------------------------------------------------
        dynamic component loading is to load a component into its parent's template
        on the fly or at runtime. NgComponentOutlet directive to facilitate dynamic 
        component loading.

        parent.template.html

            <ng-container *ngComponentOutlet="componentRef">
            </ng-container>

            <button (click)="toggle()">Toggle</button>

        parent.component.ts

            @Component({
                /*all the required meta-properties*/
            })
            export class ParentComponent{
                componentRef:Type<any>; //Type from @angular/core is the base type of any component
                index:number=0;
                childComponents:Type>any>[];

                constructor(){
                    this.childComponents = [
                        FirstChildComponent,
                        SecondChildComponent,
                        ThridChildComponent
                    ];
                }

                toggle(){
                    this.componentRef = this.childComponents[this.index];
                    this.index++;
                    if(index===this.childComponents.length){
                        this.index=0;
                    }
                }
            }

    Server Side Rendering and Server Side Generation (SSR and SSG)
    --------------------------------------------------------------------------

        Angular 18 offers hybrid content management.

        Client Side Generation / Client Side Rendering
            The html content can be generated dynamically on the client

        Server Side Generation
            The html content is generated at the build time as static html files
            and are loaded on to the client providing improve start-time and load-time
            of the application. This also enhances SEO.

        Server Side Rendering
            The html content is generated on the server at the run time and is provided
            to the client. This offers support for users having low network band-width and
            also enhances SEO.

        When we work with component that follow SSR / SSG, we have to remember that objects like window/ document ...etc., are not available.

        Similarly, components that render on the client can not have access to file-system or request or response objects unlike components that render on server side.

        Hydration
            is a technique introduced in angualr to ensure duplicate generation of DOM is not happening.

        Scenarios to decide on the mode of generation

            NavBarComponent     assuming is a component that offers navigation links.
                                and these links may change while user logins or logout.
                                This is a component best suited for SSR.

            MessageBoxComponent assuming is a component that has to display messages dynamically.
                                This is a component best suited for client side rendering

            HomeComponent       assuming is a component that has a brand logo and a login form.
                                this is a componetn best suited for SSG.

        While creating a new app, SSR and SSG can be enabled on the project wizrd.

        To enable ssr and ssg on an existing app,
            
            ng add @angular/ssr

        app-root
            |-server.ts                     nodJs based expressjs application server
            |-src
                |-main.server.ts            server bootstraping
                |-app
                    |-app.config.server.ts  server side configs
                    |-app.routes.server.ts  declare server side routes

        to enable hydration in app.config.ts,   provideClientHydration()

        to define the rendering mode of a path, in app.routes.server.ts

            export const serverRoutes: ServerRoute[] = [
                { path: "ssr", renderMode: RenderMode.Server },
                { path: "ssg", renderMode: RenderMode.Prerender },
                { path: "csr", renderMode: RenderMode.Client },
            ];

        and , in app.routes.ts

            export const routes: Route[] = [
                { path: "ssr", component:Component1 },
                { path: "ssg", component:Component2 },
                { path: "csr", component:Component3 },
            ];

        and, in app.config.server.ts    provideServerRoutesConfig(serverRoutes)
        and, in app.config.ts   provideRouter(routes)