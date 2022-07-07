import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
private projectsurl = "https://hammerhead-app-lb3j6.ondigitalocean.app/api/lost-and-founds";



// get

getAllposts(){
  return this.http.get(this.projectsurl);
}

// add posts

// addPost(albumId_fromC:number, title_fromC:string, url_fromC:string){

//   let newphotobody={

//         albumId_fromC: albumId_fromC,
//         title_fromC: title_fromC,
//         url_fromC :  url_fromC,

//         // newpost:newpost (newost comes from the clinet)
//       }

//       // return this.http.post<{newPhoto:[Photo], message:any}>(this.photoUrl, newphotobody);
//       return this.http.post<Photo>(this.photoUrl, newphotobody);
// }


// edit


// editPost(id:string, input:string){
//   let updateCrudBody ={
//     "id":id,
//     "input":input
//   }
//   // console.log(updateCrudBody);


//   return this.http.put<{message:any, update:boolean}>(this.crudUpdateURL, updateCrudBody)


// }









}
