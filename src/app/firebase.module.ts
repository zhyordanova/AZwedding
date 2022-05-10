import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";

import { environment } from 'src/environments/environment';


@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase)
    ],
    exports: [
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
    ]
})
export class FireBaseModule { }