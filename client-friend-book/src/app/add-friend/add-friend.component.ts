import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { AddFriendService } from '../add-friend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css'],
})
export class AddFriendComponent implements OnInit {
  friend = new Friend('', '', '', '','', false);

  constructor(private addFriendService: AddFriendService, private router: Router) {}

  ngOnInit(): void {}

  public onSubmit(): void {
    this.addFriendService.addFriend(this.friend).subscribe({
      next: (v) => this.router.navigate(['/all']),
      error: (e) => console.error(e)
    });
  }
}
