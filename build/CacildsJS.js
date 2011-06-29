/*
 * CacildsJS
 * http://github.com/silviopaganini/
 * @silviopaganini | s2paganini.com
 */

var CACILDS=CACILDS||{};CACILDS.Display=function(){this.children=[];this.name="";this.dom={}};
CACILDS.Display.prototype={addChild:function(a){var b=a.dom||a.domElement;this.children.push(a);this.dom.appendChild(b)},removeChild:function(a){var b=a.dom||a.domElement,a=this.children.indexOf(a);a!==-1&&(this.children.splice(a,1),this.dom.removeChild(b))},removeAllChildren:function(){for(;this.children.length>0;)this.removeChild(this.children[0]),this.children.splice(this.children.length-1,0)},getChildByName:function(a){var b,c;for(b=0;b<this.children.length;b++)if(c=this.children[b],c.name===
a)return c},html:function(a){if(a)this.dom.innerHTML=a;else return this.dom.innerHTML}};CACILDS.Sprite=function(){CACILDS.Display.call(this);this.dom=document.createElement("div")};CACILDS.Sprite.prototype=new CACILDS.Display;CACILDS.Sprite.prototype.constructor=CACILDS.Sprite;CACILDS.Sprite.prototype.supr=CACILDS.Display.prototype;CACILDS.Stage=function(){CACILDS.Display.call(this);this.dom=document.getElementsByTagName("body")[0]};CACILDS.Stage.prototype=new CACILDS.Display;
CACILDS.Stage.prototype.constructor=CACILDS.Stage;CACILDS.Stage.prototype.supr=CACILDS.Display.prototype;
