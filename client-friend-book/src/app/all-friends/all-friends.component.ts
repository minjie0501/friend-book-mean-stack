import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AddFriendService } from '../add-friend.service';
import { Router } from '@angular/router';
import { Friend } from '../friend';

interface IFriend{
  _id: string,
  firstName:string,
  lastName:string,
  phone:string,
  email:string,
  bestFriend:boolean
}

@Component({
  selector: 'app-all-friends',
  templateUrl: './all-friends.component.html',
  styleUrls: ['./all-friends.component.css']
})
export class AllFriendsComponent implements OnInit {
  allFriendsUrl: string = 'http://localhost:3000/friends/all';
  // @Output() delete: EventEmitter<any> = new EventEmitter();

  friends: Array<IFriend> = []

  constructor(private addFriendService: AddFriendService, private router:Router) { }

  ngOnInit(): void {
    this.getFriends(this.allFriendsUrl)
  }

  public async getFriends(url:string):Promise<any>{
    const data = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const parsedData = await data.json()
    this.friends = parsedData
    return parsedData
  }

  public onDelete(event:any){
    console.log(event.target.id)
    this.addFriendService.deleteFriend(event.target.id).subscribe({
      next: (r) => console.log('we good'),
      error: (e) => console.log(e)
    })
    this.friends = this.friends.filter((f) => f._id !== event.target.id)
  }

  public onEdit(friend:Friend){
    this.router.navigate([`/edit/${friend._id}`])
  }

}
