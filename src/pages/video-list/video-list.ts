import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { VideoListService } from './video-list.service';
// import { VideoPage } from '../video/video';
/**
 * Generated class for the VideoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-video-list',
  templateUrl: 'video-list.html',
  providers: [VideoListService]
})
export class VideoListPage {
  videoList: any = [];
  errorMessage: string;
  constructor(public navCtrl: NavController, public VideoListService: VideoListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoListPage');

    this.getVideoList();
    // console.log(this.data)
  }

  getVideoList(){
    this.VideoListService.getVideoList().subscribe(
      result => {
        console.log(result);
        this.videoList = result.list;
      },
      error => this.errorMessage = <any>error);
  }

  goVideo(v){
    this.navCtrl.push('VideoPage');
  }

}
