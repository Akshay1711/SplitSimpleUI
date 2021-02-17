import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  fileToUpload: any
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }
  postFile(data: File): Observable<any> {
    const endpoint = 'http://192.168.0.10:5000/upload';
    if(data !== undefined) {
      let formData = new FormData();
      formData.append("image", data)
      return this.httpClient.post<any>(endpoint, formData);
    } else {
      return throwError("No file given");
    }
}

  onSubmit(data: any) {
    this.postFile(this.fileToUpload).toPromise().then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }

  processFile(data: any) {
    this.fileToUpload = data.files[0];
  }

}
