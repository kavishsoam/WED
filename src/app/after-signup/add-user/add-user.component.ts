import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(
    public httpService: HttpService,
    public commonService: CommonService
  ) {}

  userImg: any;
  ngOnInit(): void {}

  onUploadChange(evt: any) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    let data = '';
    data = 'data:application/pdf;base64,' + btoa(e.target.result);
    // console.log(data);
    if (data) {
      this.uploadImage(data);
    }
  }

  uploadImage(data) {
    this.httpService.imageUpload('user/uploadImages', data, 1).subscribe(
      (res) => {
        console.log('uploading_Succ ==>', res);
        if (res['responseCode'] == 200) {
          this.userImg = res['result'];
          this.commonService.showSuccessToast(
            res['responseMessage'],
            true,
            'top-end'
          );
        }
      },
      (err) => {
        console.log('uploading_Err ==>', err);
      }
    );
  }
}
