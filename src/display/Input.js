/*
 *  Input
 *
 *  author @silviopaganini | s2paganini.com
 *
 */

CACILDS.Input = function (type)
{
	CACILDS.Display.call(this);
	this.dom = document.createElement('div');
	this.dom.parent = this;

	this.input = document.createElement('input');
	this.input.type = type || "text";
	this.dom.appendChild(this.input);

}

CACILDS.Input.prototype = new CACILDS.Display();
CACILDS.Input.prototype.constructor = CACILDS.Input;

CACILDS.Input.prototype.value = function(p)
{
	var v = (this.type() == "checkbox" || this.type() == "radio") ? this.input.checked : this.input.value;

	if(!p) return v;
	else 
	{
		if(this.type() == "checkbox" || this.type() == "radio") this.input.checked = p
		else this.input.value = p;
	}

	v = (this.type() == "checkbox" || this.type() == "radio") ? this.input.checked : this.input.value;

	return v;
}

CACILDS.Input.prototype.type = function(p)
{
	if(!p) return this.input.type;
	else this.input.type = p;

	return this.input.type;
}
