function Zombie() {
    this.x = Math.round(Math.random() * canvas.height);
    this.y = 0;
    this.dx = Math.random();
    this.dy = 2;
    this.width = 72;
    this.height = 72;
    this.img = new Image();
    this.img.src = "zombie1.png";
    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y);
    };

    this.move = function () {
        this.x += this.dx;
        this.y += this.dy;
    };
}