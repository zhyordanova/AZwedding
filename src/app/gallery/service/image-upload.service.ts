import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { uploadPath } from 'src/app/constants/paths.constant';
import { ImageUpload } from 'src/app/models/image-upload.model';


@Injectable({
    providedIn: 'root'
})
export class ImageUploadService {

    constructor(
        private firebase: AngularFireDatabase,
        private storage: AngularFireStorage
    ) { }

    pushFileToStorage(imageUpload: ImageUpload): Observable<number | undefined> {
        const filePath = `${uploadPath}/${imageUpload.file.name}`;
        const storageRef = this.storage.ref(filePath);
        const uploadTask = this.storage.upload(filePath, imageUpload.file);
        uploadTask.snapshotChanges().pipe(
            finalize(() => {
                storageRef.getDownloadURL().subscribe(downloadURL => {
                    imageUpload.url = downloadURL;
                    imageUpload.name = imageUpload.file.name;
                    this.saveFileData(imageUpload);
                });
            })
        ).subscribe();
        return uploadTask.percentageChanges();
    }

    private saveFileData(imageUpload: ImageUpload) {
        this.firebase.list(uploadPath).push(imageUpload);
    }

    getFiles(): AngularFireList<ImageUpload> {
        return this.firebase.list(uploadPath);
    }

    deleteFile(imageUpload: ImageUpload): void {
        this.deleteFileDatabase(imageUpload.$key)
            .then(() => {
                this.deleteFileStorage(imageUpload.name);
            })
            .catch(error => console.log(error));
    }

    private deleteFileDatabase(key: string): Promise<void> {
        return this.firebase.list(uploadPath).remove(key);
    }
    private deleteFileStorage(name: string): void {
        const storageRef = this.storage.ref(uploadPath);
        storageRef.child(name).delete();
    }
}