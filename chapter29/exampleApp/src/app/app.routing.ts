import { Routes, RouterModule} from "@angular/router";
import { SimpleComponent } from "./simple.component";
import { NotFoundComponent } from "./core/notFoundComponent";
 
const routes: Routes = [
    { path: "", component: SimpleComponent },
    { path: "**", component: NotFoundComponent }]
 
export const routing = RouterModule.forRoot(routes, {
    bindToComponentInputs: true
});