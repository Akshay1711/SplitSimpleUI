import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GenericServicesService } from '../services/generic-services.service';

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  fileToUpload: any
  constructor(private fb: FormBuilder, private gs: GenericServicesService) {
  }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    this.gs.postFile(this.fileToUpload).toPromise().then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }

  processFile(data: any) {
    this.fileToUpload = data.files[0];
  }

}
