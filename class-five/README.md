## Splitting Apps into Components ##


### Addings: ###
```sh
    ng g c cockpit
    ng g c server-element
```

### Changes on: ###
```sh
    app.component.html # comented blocks copied to cockpit.component.html and server-elements.component.html
    app.component.ts # commented blocks copied to cockpit.component.ts
    server-element.component.ts # line 9
    server-element.component.html # Whole doc
    cockpit.component.ts # from line 10 
    cockpit.component.html # Whole doc
```


### Attention: at this point the project is broken, adaptations needed ###