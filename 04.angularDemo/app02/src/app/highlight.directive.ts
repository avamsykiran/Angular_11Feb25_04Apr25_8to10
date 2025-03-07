import { Directive, ElementRef, HostListener, Input } from '@angular/core';

interface ColorSet{
  fgColor:string;
  bgColor:string;
}

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  set1:ColorSet;
  set2:ColorSet;

  @Input()
  appHighlight!:string | ColorSet;

  constructor(private ele:ElementRef) {
    this.set1 = {
      fgColor:ele.nativeElement.style.color,
      bgColor:ele.nativeElement.style.backgroundColor
    };
    this.set2 = {
      fgColor:"#ffffff",
      bgColor:"#000000"
    };
  }

  ngOnChanges(){
    if(this.appHighlight){
      if(typeof this.appHighlight==="string"){
        this.set2.bgColor=this.appHighlight;
      }else{
        this.set2.fgColor=this.appHighlight.fgColor;
        this.set2.bgColor=this.appHighlight.bgColor;
      }      
    }
  }

  @HostListener("mouseleave")
  applyColorSet1(){
    this.ele.nativeElement.style.color=this.set1.fgColor;
    this.ele.nativeElement.style.backgroundColor=this.set1.bgColor;
  }

  @HostListener("mouseover")
  applyColorSet2(){
    this.ele.nativeElement.style.color=this.set2.fgColor;
    this.ele.nativeElement.style.backgroundColor=this.set2.bgColor;
  }
}
