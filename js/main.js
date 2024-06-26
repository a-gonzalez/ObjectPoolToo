import Game from "./game.js";

addEventListener("load", () =>
{
    console.log(`Main @ ${new Date().toLocaleString()}`);

    const screen = document.getElementById("screen");
    screen.width = 600;
    screen.height = 800;

    const context = screen.getContext("2d");
    const game = new Game(screen);
    
    let previous_stamp = 0;

    let animate = (time_stamp) =>
    {
        const delta_time = time_stamp - previous_stamp;
        previous_stamp = time_stamp;

        context.clearRect(0, 0, screen.width, screen.height);

        //console.log(delta_time); // 1000 / 60.6 ~ 16.5

        game.draw(context);
        game.update(delta_time);

        //game.test(context);

        requestAnimationFrame(animate);
    };

    animate(0);
});