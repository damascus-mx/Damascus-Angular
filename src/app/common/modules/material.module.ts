import { NgModule } from '@angular/core';
import * as Material from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports: [
        Material.MatButtonModule,
        Material.MatCardModule,
        Material.MatIconModule,
        Material.MatToolbarModule,
        Material.MatListModule,
        Material.MatDividerModule,
        Material.MatBadgeModule,
        Material.MatSidenavModule,
        Material.MatSnackBarModule,
        Material.MatSelectModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class MaterialModule { }
