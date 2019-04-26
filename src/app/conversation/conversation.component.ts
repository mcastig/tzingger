import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { ConversationService } from '../services/conversation.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  friendId: any;
  friend: User;
  user: User;
  conversationId: string;
  textMessage: string;
  conversation: any[];
  ownMessage: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private conversationService: ConversationService,
    private authenticationService: AuthenticationService
  ) {
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);

    this.authenticationService.getStatus()
      .subscribe((session) => {
        this.userService.getUserById(session.uid).valueChanges()
          .subscribe((user: User) => {
            this.user = user;
            this.userService.getUserById(this.friendId).valueChanges()
            .subscribe(
              (data: User)=>{
                this.friend = data;
                const ids = [this.user.uid, this.friend.uid].sort();
                this.conversationId = ids.join('|');
                this.getConversation();
              },
              (error) => {
                console.log(error);
              });
          });
      })
  }

  sendMessage() {
    const message = {
      uid: this.conversationId,
      timestamp: Date.now(),
      text: this.textMessage,
      sender: this.user.uid,
      receiver: this.friend.uid,
    }

    this.conversationService.createConversation(message).then(
      () => {
        this.textMessage = '';
      });
  }

  getConversation() {
    this.conversationService.getConversation(this.conversationId).valueChanges()
      .subscribe(
        (data) => {
          this.conversation = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  getUserNickById(id: string) {
    if (id === this.friend.uid) {
      this.ownMessage = true;
      return this.friend.nickname;
    } else {
      this.ownMessage = false;
      return this.user.nickname;
    }
  }
}
