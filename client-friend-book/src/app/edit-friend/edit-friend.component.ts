import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddFriendService } from '../add-friend.service';
import { Friend } from '../friend';

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.css'],
})
export class EditFriendComponent implements OnInit {
  friend = new Friend('', '', '', '', '', false);
  id: string = '';
  getFriendUrl: string = 'http://localhost:3000/friends/friend/';

  constructor(private route: ActivatedRoute, private addFriendService: AddFriendService, private router:Router) {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') as string;
    });
  }

   ngOnInit(): void {
     this.getFriendData()
  }

  async getFriendData() {
    const data = await fetch(`${this.getFriendUrl}${this.id}`);
    const parsedData = await data.json()
    this.friend = parsedData
  }

  async onSubmit() {
    this.addFriendService.updateFriend(this.friend, this.id).subscribe({
      next: (r) => this.router.navigate(['/']),
      error: (e) => console.log(e)
    })
  }
}
