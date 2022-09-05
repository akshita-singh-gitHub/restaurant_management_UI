import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoList } from '../../shared/model';
import { RestoService } from '../../shared/service/resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent implements OnInit {
  //  @Input() ListItem?: RestoList;

  alert: boolean = false;
  constructor(private router: ActivatedRoute, private resto: RestoService) {}
  EditForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    imageUrl: new FormControl(''),
    favourite: new FormControl('true'),
  });

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    this.resto
      .DetailToEdit(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        // console.log(result);
        this.EditForm = new FormGroup({
          id: new FormControl(result['id']),
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
          address: new FormControl(result['address']),
          imageUrl: new FormControl(result['imageUrl']),
          favourite: new FormControl(result['favourite']),
        });
      });
  }
  CollectData() {
    // console.log(this.EditForm.value);
    this.resto
      .UpdateResto(this.router.snapshot.params['id'], this.EditForm.value)
      .subscribe((result: RestoList[]) => {
        console.log(result);
      });
    this.alert = true;
  }
  CloseAlert() {
    this.alert = false;
    this.EditForm.reset({});
  }
  get name() {
    return this.EditForm.get('name');
  }
  get email() {
    return this.EditForm.get('email');
  }
  get address() {
    return this.EditForm.get('address');
  }
}
