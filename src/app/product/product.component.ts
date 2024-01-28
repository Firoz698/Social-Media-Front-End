import { Component, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { DirectiveOneDirective } from '../directive-one.directive';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @ViewChild(DirectiveOneDirective) DireactiveCa!:DirectiveOneDirective;
  constructor(private rout :Router,private rander:Renderer2){}



  Value:string="I am The Value";
  date=new Date();
  Navigating(){
    this.rout.navigate(['Practice'])
  }

  // @HostListener('click') meMethod(){
  //   alert('I am HostListener')
  //   // this.rander.setStyle(th);
  // }
  ColorChane(Color:string){
    debugger
    this.DireactiveCa.ColorMethod('yellow');
  }




}
