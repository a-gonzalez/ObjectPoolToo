import { Point } from "./point.js";

export default class Robot
{
    constructor(canvas)
    {
        console.log(`Robot .ctor @ ${new Date().toLocaleString()}`);

        this.canvas = canvas;
        this.x = this.canvas.width * 0.5;
        this.y = this.canvas.height * 0.5;
        this.radius = 80;
        this.angle = 0;
        this.point = new Point(0, 0);
        this.width = 370;
        this.height = 393;
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
        //context.drawImage(this.body, 180, 150);
        //context.drawImage(this.body, this.x - this.body.width * 0.5 + 65, this.y - this.body.height * 0.5 - 53);
        context.drawImage(this.animation, this.frame_x * this.width, this.frame_y, this.width, this.height, this.x - this.width * 0.5 + 65, this.y - this.height * 0.5 - 53, this.width, this.height);

        /*context.strokeStyle = "#ffffff";
        context.lineWidth = 3;
        context.beginPath(); // body
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.stroke();*/

        context.drawImage(this.sclera, this.x + Math.cos(this.angle) * this.radius * 0.35 - this.sclera.width * 0.5, this.y + Math.sin(this.angle) * this.radius * 0.35 - this.sclera.height * 0.5);
        /*context.beginPath(); // sclera
        context.arc(this.x + Math.cos(this.angle) * this.radius * 0.35, this.y + Math.sin(this.angle) * this.radius * 0.35, this.radius * 0.6, 0, Math.PI * 2);
        context.stroke();*/

        context.drawImage(this.iris, this.x + Math.cos(this.angle) * this.radius * 0.63 - this.iris.width * 0.5, this.y + Math.sin(this.angle) * this.radius * 0.63 - this.iris.height * 0.5);
        /*context.beginPath(); // iris
        context.arc(this.x + Math.cos(this.angle) * this.radius * 0.3, this.y + Math.sin(this.angle) * this.radius * 0.3, this.radius * 0.3, 0, Math.PI * 2);
        context.stroke();*/
        context.drawImage(this.reflection, this.x - this.reflection.width * 0.5, this.y - this.reflection.height * 0.5);
    }

    update(delta_time)
    {
        /*if (this.frame_x >= this.frame_max)
        {
            this.frame_x = 0;
        }
        else
        {
            this.frame_x++;
        }*/
        // animation
        this.frame_x >= this.frame_max ? this.frame_x = 0 : ++this.frame_x;

        const dx = this.point.x - this.x;
        const dy = this.point.y - this.y;

        this.angle = Math.atan2(dy, dx);
        //const distance = Math.sqrt(Math.hypot(dx, dy));
    }
}