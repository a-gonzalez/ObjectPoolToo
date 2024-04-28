import Robot from "./robot.js";

export default class Game
{
    constructor(canvas)
    {
        console.log(`Game .ctor @ ${new Date().toLocaleString()}`);

        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.robot = new Robot(this.canvas)
    }

    draw(context)
    {
        this.robot.draw(context);
    }

    update(delta_time)
    {
        this.robot.update(delta_time);
    }

    test(context)
    {
        this.draw(context);
    }
}