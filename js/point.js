export class Point
{
    constructor(x, y)
    {
        console.log(`Point .ctor @ ${new Date().toLocaleString()}`);

        this.x = x;
        this.y = y;
    }
}

export class Target
{
    constructor(x, y, radius)
    {
        this.x = x;
        this.y = y;
        this.radius = 0;
    }
}