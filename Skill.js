function Skill(x, y, speed) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = speed;
    this.img = new Image();
    this.img.src = "red_fireball_len.png";
    this.draw = function () {
        ctx.drawImage(this.img, this.x, this.y);
        this.collisionDetection();
        this.collisionDetectionBoss();
    };

    this.move = function () {
        this.x += this.dx;
        this.y += this.dy;
    };
}