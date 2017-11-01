import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { VideoListService } from './video-list.service';
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
  constructor(public navCtrl: NavController,public navParams:NavParams, public VideoListService: VideoListService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoListPage');
    let params = this.navParams.get('mainNav');
    this.getVideoList(params);
    // console.log(this.data)
  }

  getVideoList(params){
    this.VideoListService.getVideoList(params).subscribe(
      result => {
        console.log(result);
        this.videoList = result.list;
      },
      error => this.errorMessage = <any>error);
  }

  goVideo(video){
    this.navCtrl.push('VideoPage',{video: video});
  }

}
