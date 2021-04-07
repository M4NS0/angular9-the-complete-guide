## Data Biding ##
## Two way data binding  ##
> Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel  
> directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.
> You then also need to add the import from @angular/forms  in the app.module.ts file:
```ts
import { FormsModule } from '@angular/forms'; 
```
### Changes on: ###
> servers.component.html (26) && servers.component.ts (lines 25 and 26)