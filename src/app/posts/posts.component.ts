import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';


interface LostItem{

  "data":{id:number,

  attributes:{
    Title:string;
    Location:string;
    Claim:boolean;
    Found:boolean;
    LostOrFound:string;
    Email:string;
    Phonenumber:string;
    Description:string;
    Image:string;
    Date_found:string;
  Claim_name: string,
  }
  }

}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})




export class PostsComponent implements OnInit {

  constructor(private http:CommonService) { }

  json:LostItem[]=[ {"data":{id:1,

    attributes:{
      Title:"title1",
      Location:"Vancvouver",
      Claim:false,
      Found:false,
      LostOrFound:"found",
      Email:"email",
      Phonenumber:"12345",
      Description:"Description",
      Image:"image",
      Date_found:"Date",
    Claim_name: "Claim",
    }
    }
  }
  ]

  posts:any = [];




  ngOnInit(): void {



    this.http.getAllposts().subscribe(posts =>{
       this.posts = posts;
       console.log(this.posts)


    })
  }

}
