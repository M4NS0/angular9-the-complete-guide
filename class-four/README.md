<h4> Debugging in Angular </h4>

<h6><p><i> Debugging Code in the Browser Using Sourcemaps </i></p></h6>

> In chrome debugger:
> - Access Sources/main.bundle.js
> - Find the line you want to debug
> - Click on the number of the line
> - It will redirect you to the related ts code component


<h6><p><i>  Using Augury to Dive into Angular Apps </i></p></h6>

> Download Augury Chrome extension
> Restart Chrome
> Click over the extension while project is running
> Click over Augury tab


<h6><p>To unlock all features for Angular 9, add the line below into tsconfig.app.json </p></h6>
  
```json
  "compilerOptions": {
    "enableIvy": false,   << This line here
    "outDir": "./out-tsc/app",
    "types": []
  },
```