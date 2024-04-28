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
        context.beginPath(); // body
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.stroke();

        context.beginPath(); // sclera
        context.arc(this.x + Math.cos(this.angle) * this.radius * 0.35, this.y + Math.sin(this.angle) * this.radius * 0.35, this.radius * 0.6, 0, Math.PI * 2);
        context.stroke();

        context.beginPath(); // iris
        context.arc(this.x + Math.cos(this.angle) * this.radius * 0.6, this.y + Math.sin(this.angle) * this.radius * 0.6, this.radius * 0.3, 0, Math.PI * 2);
        context.stroke();
    }

    update(delta_time)
    {
        const dx = this.point.x - this.x;
        const dy = this.point.y - this.y;

        this.angle = Math.atan2(dy, dx);
        //const distance = Math.sqrt(Math.hypot(dx, dy));
    }
}