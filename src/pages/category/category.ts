import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { CategoryService } from './category.service';
// import { ListPage } from '../list/list';

@Component({
  selector: 'page-cagegory',
  templateUrl: 'category.html',
  providers: [CategoryService]
})
export class CategoryPage {

  categoryList: any = [];
  errorMessage: string;

  constructor(public navCtrl: NavController, public categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    let categoryInfo = [
      {
        id: 1,
        img: "icon-cloth.png",
        name: "女装",
        des: "爱自己多一点"
      },
      {
        id: 9,
        img: "icon-men.png",
        name: "男装",
        des: "找品味"
      },
      {
        id: 10,
        img: "icon-bra.png",
        name: "内衣",
        des: "凹凸有致"
      },
      {
        id: 3,
        img: "icon-mask.png",
        name: "美妆",
        des: "靠脸吃饭"
      },
      {
        id: 6,
        img: "icon-food.png",
        name: "美食",
        des: "最强吃货"
      },
      {
        id: 2,
        img: "icon-cart.png",
        name: "母婴",
        des: "给你最好的"
      },
      {
        id: 4,
        img: "icon-sofa.png",
        name: "家居",
        des: "有爱才有家"
      },
      {
        id: 8,
        img: "icon-machine.png",
        name: "数码家电",
        des: "高科技黑科技"
      },
      {
        id: 5,
        img: "icon-shoes.png",
        name: "鞋帽包",
        des: "鞋包收藏癖"
      },
      {
        id: 7,
        img: "icon-other.png",
        name: "其他",
        des: "更多惊喜"
      }
    ];
    this.categoryService.getCategory()
      .subscribe(
        result => {
          let categoryArr = result;
          categoryArr.forEach(function (index:any) {
            categoryInfo.forEach(function (item:any) {
              if(index.id == item.id){
                index.img = item.img;
                index.des = item.des;
              }
            });
          });
          this.categoryList = categoryArr;
          console.log(this.categoryList);
        },
        error =>  this.errorMessage = <any>error);
  }
  pushList(category){
    this.navCtrl.push('ListPage',{category: category});
  }
}
