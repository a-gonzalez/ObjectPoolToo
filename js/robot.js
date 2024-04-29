import { Point } from "./point.js";

export default class Robot
{
    constructor(canvas)
    {
        console.log(`Robot .ctor @ ${new Date().toLocaleString()}`);

        this.canvas = canvas;
        this.x = this.canvas.width * 0.4;
        this.y = this.canvas.height * 0.6;
        this.centerX = this.x;
        this.centerY = this.y;
        this.radius = 80;
        this.angle = 0;
        this.point = new Point(0, 0);
        this.width = 370;
        this.height = 393;
        this.movement_angle = 0;
        this.iris_radius = this.radius * 0.65;
        this.iris_distance = this.iris_radius;
        this.sclera_radius = this.radius * 0.4;
        this.sclera_distance = this.sclera_radius;
        this.frame_x = 0;
        this.frame_y = 0;
        this.frame_max = 75;
        this.frame_timer = 0;
        this.frame_interval = 1000 / 50;

        this.body = new Image();
        this.body.src = "img/body.png";
        this.sclera = new Image();
        this.sclera.src = "img/sclera.png";
        this.iris = new Image();
        this.iris.src = "img/iris.png";
        this.light = new Image();
        this.light.src = "img/light.png";
        this.reflection = new Image();
        this.reflection.src = "img/reflection.png";
        this.animation = new Image();
        this.animation.src = "img/animation.png";

        this.canvas.addEventListener("mousemove", (event) =>
        {
            this.point.x = event.offsetX;
            this.point.y = event.offsetY;

            //console.log(this.angle);
        });
    }

    draw(context)
    {
        context.strokeStyle = "#ffffff";
        context.lineWidth = 3;
        //context.drawImage(this.body, 180, 150);
        //context.drawImage(this.body, this.x - this.body.width * 0.5 + 65, this.y - this.body.height * 0.5 - 53);
        context.drawImage(this.animation, this.frame_x * this.width, this.frame_y, this.width, this.height, this.x - this.width * 0.5 + 65, this.y - this.height * 0.5 - 53, this.width, this.height);

        /*context.beginPath(); // body
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.stroke();*/

        context.drawImage(this.sclera, this.x + Math.cos(this.angle) * this.sclera_radius - this.sclera.width * 0.5, this.y + Math.sin(this.angle) * this.sclera_radius - this.sclera.height * 0.5);
        /*context.beginPath(); // sclera
        context.arc(this.x + Math.cos(this.angle) * this.radius * 0.35, this.y + Math.sin(this.angle) * this.radius * 0.35, this.radius * 0.6, 0, Math.PI * 2);
        context.stroke();*/

        //context.drawImage(this.iris, this.x + Math.cos(this.angle) * this.radius * 0.63 - this.iris.width * 0.5, this.y + Math.sin(this.angle) * this.radius * 0.63 - this.iris.height * 0.5);
        context.drawImage(this.iris, this.x + Math.cos(this.angle) * this.iris_radius - this.iris.width * 0.5, this.y + Math.sin(this.angle) * this.iris_radius - this.iris.height * 0.5);
        /*context.beginPath(); // iris
        context.arc(this.x + Math.cos(this.angle) * this.radius * 0.62, this.y + Math.sin(this.angle) * this.radius * 0.62, this.radius * 0.2, 0, Math.PI * 2);
        context.stroke();*/
        context.drawImage(this.reflection, this.x - this.reflection.width * 0.5, this.y - this.reflection.height * 0.5);
    }

    update(delta_time)
    { // animation
        this.frame_x >= this.frame_max ? this.frame_x = 0 : ++this.frame_x;

        const dx = this.point.x - this.x;
        const dy = this.point.y - this.y;

        const distance = Math.hypot(dx, dy);

        if (distance <= this.sclera_distance * 2)
        {
            this.sclera_radius = distance * 0.4;
            this.iris_radius = distance * 0.65;
        }

        this.angle = Math.atan2(dy, dx);
        this.movement_angle += 0.005;
        /*this.x = this.centerX + Math.cos(this.movement_angle) * 50;
        this.y = this.centerY + Math.sin(this.movement_angle) * 70;*/
        this.x = this.centerX + Math.cos(this.movement_angle * 3) * 30;
        this.y = this.centerY + Math.sin(this.movement_angle * 0.5) * 160;

        if (this.movement_angle > Math.PI * 4)
        {
            this.movement_angle = 0;
        }
    }
}