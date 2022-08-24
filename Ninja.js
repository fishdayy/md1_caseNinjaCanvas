function Ninja(){
    this.width = 60;
    this.height = 90;
    this.x = (canvas.width - this.width) / 2;
    this.y = canvas.height - this.height;
    this.img = new Image();
    this.img.src = "down1.png";
    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y);
    };
}

