import { Injectable } from '@angular/core'
import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router'
import { AddProductComponent } from './add-product.component'

@Injectable()
export class AddProductGuardService implements CanDeactivate<AddProductComponent> {
    canDeactivate(component: AddProductComponent): boolean {
        if (component.addEProductForm.dirty && !component.addEProductForm.submitted) {
            console.log("leave or dont?")
            return confirm('Are you sure you want to leave ?');
        }
        
        return true;
    }
}